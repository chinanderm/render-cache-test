import type { Route } from "./+types/max-age";

export function headers() {
  return {
    "Cache-Control": "max-age=60",
  }
}

export function loader() {
  return {
    date: new Date().toISOString(),
  }
}

export default function MaxAgeCacheRoute({ loaderData }: Route.ComponentProps) {
  return <div>Max Age Cache Route - {loaderData.date}</div>;
}