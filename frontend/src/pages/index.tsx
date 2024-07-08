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
      <div className="flex flex-wrap gap-6 justify-center">
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
    </DefaultLayout>
  );
}
