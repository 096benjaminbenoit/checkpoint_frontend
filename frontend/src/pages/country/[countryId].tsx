import { useRouter } from "next/router";

export default function CountryDetailsPage() {
  const router = useRouter();
  const { countryId } = router.query;

  return <div>Country {countryId}</div>;
}
