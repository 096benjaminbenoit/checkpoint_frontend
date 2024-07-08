import { Continent } from "@/types/continent";
import Link from "next/link";
import React from "react";

export default function CountryCard({
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
    <Link
      href={`/country/${code}`}
      className="card bg-base-100 w-72 md:w-96 shadow-xl"
    >
      <figure className="px-10 pt-10 text-7xl">{emoji}</figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{code}</div>
          <div className="badge badge-outline">{continent.name}</div>
        </div>{" "}
      </div>
    </Link>
  );
}
