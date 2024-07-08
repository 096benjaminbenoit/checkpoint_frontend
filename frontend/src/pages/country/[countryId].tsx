import DefaultLayout from "@/layouts/defaultLayout";
import { useRouter } from "next/router";

export default function CountryDetailsPage() {
  const router = useRouter();
  const { countryId } = router.query;

  return (
    <DefaultLayout title="Country details">
      <div>Country {countryId}</div>
    </DefaultLayout>
  );
}
