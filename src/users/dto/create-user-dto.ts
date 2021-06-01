import { ApiProperty } from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {
  @ApiProperty({example: 'aquaform@yandex.ru', description: 'Электронная почта'})
  @IsString({message: 'Должно быть строкой'})
  @IsEmail({}, {message: 'Некорректный емайл'})
  readonly email: string;
  @ApiProperty({example: 'SexGod123', description: 'Пароль'})
  @IsString({message: 'Должно быть строкой'})
  @Length(4, 16, {message: 'Не меньше 4 и не больше 16'})
  readonly password: string;
}