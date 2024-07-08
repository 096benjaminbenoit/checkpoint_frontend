import CreateCountryForm from "@/components/CreateCountryForm";
import DefaultLayout from "@/layouts/defaultLayout";
import React from "react";

export default function NewCountryPage() {
  return (
    <DefaultLayout title="New country">
      <h1 className="font-semibold text-4xl text-center py-10">Create a new country</h1>
      <CreateCountryForm />
    </DefaultLayout>
  );
}
