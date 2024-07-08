import CreateCountryForm from "@/components/CreateCountryForm";
import { useCountriesQuery } from "@/graphql/generated/schema";
import DefaultLayout from "@/layouts/defaultLayout";
import React from "react";

export default function NewCountryPage() {
  const { data } = useCountriesQuery();
  const countries = data?.countries;

  console.log(countries);

  return (
    <DefaultLayout title="New country">
      <h1 className="font-semibold text-4xl text-center py-10">
        Create a new country
      </h1>
      <CreateCountryForm />
      <ul className="flex justify-center gap-4 flex-wrap">
        {countries?.map((country) => (
          <li key={country.code}>
            {country.emoji} {country.name}
          </li>
        ))}
      </ul>
    </DefaultLayout>
  );
}
