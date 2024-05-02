"use client";

import React, { useContext } from "react";
import { Badge } from "./badge";
import { RecipeContext } from "@/context/recipe-context";

export default function BadgeFilter() {
  const { dispatch } = useContext(RecipeContext);
  const cuisines: Array<string> = [
    "All",
    "Asian",
    "American",
    "Greek",
    "Italian",
    "Indian",
    "Japanese",
    "Mediterranean",
    "Mexican",
    "Pakistani",
  ];

  const handleOnClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    cuisine: string
  ) => {
    e.preventDefault();
    dispatch({
      type: "SELECTED_CUISINE",
      payload: {
        selectedCuisine: cuisine,
      },
    });
  };
  return (
    <div className="flex justify-center flex-wrap">
      {cuisines.map((cuisine, idx) => (
        <Badge
          key={`${cuisine}-${idx}`}
          variant={"outline"}
          className="text-slate-100 shadow-lg text-lg mx-2 my-1 px-4 hover:cursor-pointer bg-slate-600 hover:scale-110 ease-in-out duration-400"
          onClick={(e) => handleOnClick(e, cuisine)}
        >
          {cuisine}
        </Badge>
      ))}
    </div>
  );
}
