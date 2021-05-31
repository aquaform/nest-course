import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({example: 'aquaform@yandex.ru', description: 'Электронная почта'})
  readonly email: string;
  @ApiProperty({example: 'SexGod123', description: 'Пароль'})
  readonly password: string;
}