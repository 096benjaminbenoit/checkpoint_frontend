import CountryCard from "@/components/CountryCard";
import { useCountriesQuery } from "@/graphql/generated/schema";
import DefaultLayout from "@/layouts/defaultLayout";

export default function Home() {
  const { data, loading } = useCountriesQuery();

  if (loading) return "Chargement...";

  const countries = data?.countries || [];

  console.log(countries);

  return (
    <DefaultLayout title="Home">
      <h1 className="font-semibold text-4xl text-center py-10">
        All countries
      </h1>
      {!data ? (
        <h2 className="font-semibold text-center text-2xl text-red-500">
          Oups! No countries found
        </h2>
      ) : (
        <div className="flex flex-wrap gap-6 justify-center pb-10">
          {countries.map((country) => (
            <CountryCard
              countryId={country.id}
              emoji={country.emoji}
              // @ts-ignore
              continent={country.continent}
              code={country.code}
              name={country.name}
              key={country.id}
            />
          ))}
        </div>
      )}
    </DefaultLayout>
  );
}
