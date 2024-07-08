import {
  useContinentsQuery,
  useCreateCountryMutation,
} from "@/graphql/generated/schema";
import { useRouter } from "next/router";
import { FormEvent } from "react";

export default function CreateCountryForm() {
  const [createCountry] = useCreateCountryMutation();
  const { data } = useContinentsQuery();

  const continents = data?.continents || [];

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const formJSON: any = Object.fromEntries(formData.entries());

    createCountry({
      variables: {
        data: {
          ...formJSON,
          continent: { id: parseInt(formJSON.continent) },
        },
      },
    }).then((res) => {
      router.push(`/country/${res.data?.addCountry.code}`);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="p-4 space-y-4 md:w-1/2 mx-auto">
        <label className="input input-bordered flex items-center gap-2">
          <input
            name="name"
            type="text"
            className="grow"
            placeholder="Name"
            required
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input
            name="code"
            type="text"
            className="grow"
            placeholder="Code"
            required
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input
            name="emoji"
            type="text"
            className="grow"
            placeholder="Emoji"
            required
          />
        </label>
        <select name="continent" className="select select-bordered w-full">
          <option disabled selected>
            Select a continent
          </option>
          {continents.map((continent) => (
            <option key={continent.id} value={continent.id}>
              {continent.name}
            </option>
          ))}
        </select>
        <button className="btn btn-primary btn-block">Create</button>
      </form>
    </div>
  );
}
