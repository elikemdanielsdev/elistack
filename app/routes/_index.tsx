import type { MetaFunction } from "@remix-run/node";
import directus from "~/lib/directus";
import { readSingleton } from "@directus/sdk";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  const global = await directus.request(readSingleton("general_settings"));
  console.log(global);
  return global
};

export default function Index() {
  const global = useLoaderData<typeof loader>();
  return <div>{global.name}</div>;
}
