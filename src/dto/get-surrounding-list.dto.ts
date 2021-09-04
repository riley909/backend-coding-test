import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class GetSurroundingListDto {
  @IsNotEmpty()
  @IsString()
  postcode: string;

  @IsNotEmpty()
  @IsNumber()
  radius: number;
}
