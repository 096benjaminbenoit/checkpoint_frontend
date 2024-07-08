import CountryDetailsCard from "@/components/CountryDetailsCard";
import { useCountryByCodeQuery } from "@/graphql/generated/schema";
import DefaultLayout from "@/layouts/defaultLayout";
import { useRouter } from "next/router";

export default function CountryDetailsPage() {
  const router = useRouter();
  const { countryId } = router.query;

  const { data, loading } = useCountryByCodeQuery({
    variables: { code: countryId as string },
  });

  if (loading) return "Chargement...";

  if (!data) return "Aucun pays n'a pu être trouvé";

  const country = data.country;

  return (
    <DefaultLayout title="Country details">
      <div className="flex justify-center pt-20">
        <CountryDetailsCard
          code={countryId as string}
          // @ts-ignore
          continent={country.continent}
          emoji={country.emoji}
          name={country.name}
        />
      </div>
    </DefaultLayout>
  );
}
