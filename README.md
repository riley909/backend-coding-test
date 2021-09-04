# API

## 전체 리스트 조회하기

- 지역명과 우편 번호의 전체 리스트를 받아 옵니다.

> request

**URL**

```
GET http://localhost:3000/
```

> response

```
200 OK

{
  "name":"St_Albans",
  "postcode":"AL1 2RJ"
},
{
  "name": "Hatfield",
  "postcode": "AL9 5JP"
},
```

## 지역명으로 조회하기

- 지역명으로 우편 번호를 조회합니다.

> request

**URL**

```
GET http://localhost:3000/:name
```

**Parameter**

| Name | Type   | Description | Required |
| ---- | ------ | ----------- | :------: |
| name | String | 지역명      |    O     |

> response

```
200 OK

{
  "name": "Gravesend",
  "postcode": "DA11 0DQ"
}
```

## 우편번호로 위치 조회하기

- 우편 번호로 해당 지역의 위도와 경도를 받아 옵니다.

> request

**URL**

```
GET http://localhost:3000/location/:postcode
```

**Parameter**

| Name     | Type   | Description              | Required |
| -------- | ------ | ------------------------ | :------: |
| postcode | String | 우편 번호(띄어쓰기 없음) |    O     |

> response

```
200 OK

{
    "longitude": 0.36056,
    "latitude": 51.444195
}
```

## 우편번호와 거리 범위로 지역 목록 조회하기

- 주어진 우편번호의 거리 범위 내에 존재하는 주변 지역의 위치를 조회합니다.
- 응답의 정렬 기준은 지역의 위치가 가장 북쪽에 있는 곳을 우선하고, 가장 남쪽에 가까운 곳을 마지막으로 합니다.

> request

**URL**

```
POST http://localhost:3000/surrounding
```

**Parameter**

| Name     | Type    | Description              | Required |
| -------- | ------- | ------------------------ | :------: |
| postcode | String  | 우편 번호(띄어쓰기 없음) |    O     |
| radius   | Integer | 거리 범위(m)             |    O     |

> response

```
200 OK

{
  "name": "Gravesend",
  "postcode": "DA11 0DQ"
}
```
