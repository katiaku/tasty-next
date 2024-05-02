"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RecipeContext } from "@/context/recipe-context";
import { RecipeType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

export default function RecipeList({
  recipes,
}: {
  recipes: Array<RecipeType>;
}) {
  const [filterRecipes, setFilterRecipes] = useState<RecipeType[]>([]);
  const allRecipes = filterRecipes.length > 0 ? filterRecipes : recipes;

  const { state: { selectedCuisine } } = useContext(RecipeContext);
  useEffect(() => {
    const getFilteredRecipes = async () => {
      const filteredRecipesByCuisine = recipes.filter(
        (recipe: RecipeType) => recipe.cuisine === selectedCuisine
      );
      setFilterRecipes(filteredRecipesByCuisine);
    };

    if (selectedCuisine) {
      getFilteredRecipes();
    }
  }, [recipes, selectedCuisine]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-x-10 gap-y-20 xl:gap-y-32 xl:pt-32 pt-12 pb-40">
      {allRecipes.map((recipe: RecipeType, idx: number) => (
        <Link href={`/recipes/${recipe.id}`} key={`${recipe.name}-${idx}`}>
          <Card className="flex flex-col bg-slate-100 hover:scale-105 ease-in duration-300 xl:min-h-[600px] drop-shadow justify-between p-5">
            <CardHeader className="relative size-[200px] mx-auto">
              <Image
                src={recipe.image}
                alt={recipe.name}
                fill={true}
                className="rounded-md shadow-xl "
              />
            </CardHeader>
            <CardContent>
              <CardTitle className="lg:text-2xl mt-8 relative line-clamp-2 text-center text-slate-700">
                {recipe.name}
              </CardTitle>
            </CardContent>
            <CardFooter className="flex items-start gap-3 flex-col">
              <div className="flex flex-col">
                <p className="text-lg text-slate-500">Serves: {recipe.servings}</p>
              </div>
              <div className="flex flex-col">
                <p className="text-lg text-slate-500">Prep Time: {recipe.prepTimeMinutes} min</p>
              </div>
              <div className="flex flex-col">
                <p className="text-lg text-slate-500">Cook Time: {recipe.cookTimeMinutes} min</p>
              </div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}
