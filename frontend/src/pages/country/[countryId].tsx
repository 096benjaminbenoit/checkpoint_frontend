// @ts-nocheck
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

  const country = data?.country || [];

  return (
    <DefaultLayout title="Country details">
      {!data ? (
        <h2 className="font-semibold text-center text-2xl py-10 text-red-500">
          Oups! No country found for this code
        </h2>
      ) : (
        <div className="flex justify-center pt-20">
          <CountryDetailsCard
            code={countryId as string}
            continent={country.continent}
            emoji={country.emoji}
            name={country.name}
          />
        </div>
      )}
    </DefaultLayout>
  );
}
