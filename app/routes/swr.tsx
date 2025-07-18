import type { Route } from "./+types/s-max-age";

export function headers() {
  return {
    "Cache-Control": "stale-while-revalidate=60, stale-if-error=3600, public, max-age=15",
  }
}

export function loader() {
  return {
    date: new Date().toISOString(),
  }
}

export default function SWRCacheRoute({ loaderData }: Route.ComponentProps) {
  return <div>Stale-While-Revalidate Cache Route - {loaderData.date}</div>;
}