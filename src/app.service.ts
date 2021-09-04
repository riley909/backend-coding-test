import { Injectable, NotFoundException } from '@nestjs/common';
import * as data from '../stores.json';
import { Store } from './models/stores.model';
import axios, { AxiosResponse } from 'axios';
import { Location } from './models/locations.model';
import { GetSurroundingListDto } from './dto/get-surrounding-list.dto';

@Injectable()
export class AppService {
  getList(): Store[] {
    return data;
  }

  getListByName(name: string): Store {
    const item = data.find((el) => el.name === name);
    if (!item) {
      throw new NotFoundException(`찾을 수 없는 지역 입니다`);
    }
    return item;
  }

  async getLocation(postcode: string): Promise<Location> {
    const res: AxiosResponse = await axios.get(
      `https://api.postcodes.io/postcodes/${postcode}`,
    );
    const { longitude, latitude } = res.data.result;
    return { longitude, latitude };
  }

  async getSurroundingList(
    surroundingListDto: GetSurroundingListDto,
  ): Promise<Store[]> {
    const { postcode, radius } = surroundingListDto;

    try {
      // 목록에서 검색 대상인 지역을 제외하기
      const targetList = data.filter((el) => {
        return (
          el.postcode.replace(/\s/g, '').toLowerCase() !==
          postcode.toLowerCase()
        );
      });

      // 대상의 postcode로 경도와 위도 가져오기
      const targetLocation = await this.getLocation(postcode);
      const { longitude, latitude } = targetLocation;

      // 받아온 경도, 위도 + 파라미터 radius로 대상의 범위에 위치한 지역 찾기
      const res = await axios.post(`https://api.postcodes.io/postcodes`, {
        geolocations: [
          {
            longitude,
            latitude,
            radius,
          },
        ],
      });

      // 북->남 으로 정렬하기 위해 경도, 위도 가져오기
      const arrRes = res.data.result[0].result.map((el) => {
        return {
          postcode: el.postcode,
          longitude: el.longitude,
          latitude: el.latitude,
        };
      });

      arrRes.sort((a, b) => {
        if (a.latitude > b.latitude) -1;
        else 1;
      });

      const surroundingList = targetList.filter((store: Store) => {
        return arrRes.find((el) => {
          if (store.postcode === el.postcode) {
            return el;
          }
        });
      });

      return surroundingList;
    } catch (e) {
      throw new NotFoundException(`찾을 수 없는 우편번호 입니다`);
    }
  }
}
