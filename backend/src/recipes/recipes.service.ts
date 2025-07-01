import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';

export interface Recipe {
  id: number;
  title: string;
  description: string;
  ingredients?: string[];
}

@Injectable()
export class RecipesService {
  private recipes: Recipe[] = [];
  private nextId = 1;

  create(createRecipeDto: CreateRecipeDto): Recipe {
    const recipe: Recipe = {
      id: this.nextId++,
      ...createRecipeDto,
    };
    this.recipes.push(recipe);
    return recipe;
  }

  findAll(): Recipe[] {
    return this.recipes;
  }

  findOne(id: number): Recipe | undefined {
    return this.recipes.find((r) => r.id === id);
  }

  update(id: number, updateRecipeDto: UpdateRecipeDto): Recipe | undefined {
    const recipe = this.findOne(id);
    if (!recipe) return undefined;
    Object.assign(recipe, updateRecipeDto);
    return recipe;
  }

  remove(id: number): boolean {
    const index = this.recipes.findIndex((r) => r.id === id);
    if (index === -1) return false;
    this.recipes.splice(index, 1);
    return true;
  }
}
