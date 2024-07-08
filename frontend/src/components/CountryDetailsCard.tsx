import { Continent } from "@/types/continent";
import React from "react";

export default function CountryDetailsCard({
  emoji,
  name,
  code,
  continent,
}: {
  emoji: string;
  name: string;
  code: string;
  continent: Continent;
}) {
  return (
    <div className="card glass w-72 md:w-96">
      <figure className="px-10 pt-10 text-7xl">{emoji}</figure>
      <div className="card-body">
        <h2 className="font-semibold text-4xl text-center">{name}</h2>
        <p className="text-center italic">
          Country in {continent.name} with '{code}' code.
        </p>
      </div>
    </div>
  );
}
