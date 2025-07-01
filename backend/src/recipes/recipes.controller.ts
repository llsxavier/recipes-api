import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { RecipesService, Recipe } from './recipes.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('recipes')
@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Post()
  @ApiOperation({ summary: 'Cria uma nova receita' })
  @ApiResponse({ status: 201, description: 'Receita criada com sucesso.' })
  create(@Body() createRecipeDto: CreateRecipeDto): Recipe {
    return this.recipesService.create(createRecipeDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lista todas as receitas' })
  findAll(): Recipe[] {
    return this.recipesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Busca uma receita por id' })
  findOne(@Param('id') id: string): Recipe | undefined {
    return this.recipesService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualiza uma receita' })
  update(
    @Param('id') id: string,
    @Body() updateRecipeDto: UpdateRecipeDto,
  ): Recipe | undefined {
    return this.recipesService.update(+id, updateRecipeDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove uma receita' })
  remove(@Param('id') id: string): boolean {
    return this.recipesService.remove(+id);
  }
}
