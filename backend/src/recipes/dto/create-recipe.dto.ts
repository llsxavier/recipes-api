import { IsString, IsOptional, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRecipeDto {
  @ApiProperty({ example: 'Bolo de Cenoura' })
  @IsString()
  title: string;

  @ApiProperty({ example: 'Bata tudo no liquidificador...' })
  @IsString()
  description: string;

  @ApiProperty({ example: ['cenoura', 'farinha', 'açúcar'], required: false })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  ingredients?: string[];
}
