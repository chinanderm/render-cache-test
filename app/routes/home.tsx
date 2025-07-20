import type { Route } from "./+types/home";

export function loader() {
  return {
    date: new Date().toISOString(),
  }
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <div>No Cache-Control Header - {loaderData.date}</div>;
}