import {
  useContinentsQuery,
  useCreateCountryMutation,
  CountriesDocument,
  CountriesQuery,
} from "@/graphql/generated/schema";
import { FormEvent, useRef } from "react";

export default function CreateCountryForm() {
  const [createCountry] = useCreateCountryMutation();
  const { data } = useContinentsQuery();
  const formRef = useRef<HTMLFormElement>(null);

  const continents = data?.continents || [];

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
      update: (cache, { data }) => {
        if (!data || !data.addCountry) return;

        const existingCountries = cache.readQuery<CountriesQuery>({
          query: CountriesDocument,
        });

        if (existingCountries && existingCountries.countries) {
          cache.writeQuery({
            query: CountriesDocument,
            data: {
              countries: [...existingCountries.countries, data.addCountry],
            },
          });
        }

        if (formRef.current) {
          formRef.current.reset();
        }
      },
    });
  };

  return (
    <div>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="p-4 space-y-4 md:w-1/2 mx-auto"
      >
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
