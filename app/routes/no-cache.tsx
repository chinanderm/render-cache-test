import type { Route } from "./+types/no-cache";

export function headers() {
  return {
    "Cache-Control": "no-cache",
  }
}

export function loader() {
  return {
    date: new Date().toISOString(),
  }
}

export default function NoCacheRoute({ loaderData }: Route.ComponentProps) {
  return <div>No Cache Route - {loaderData.date}</div>;
}