import type { Route } from "./+types/s-max-age";

export function headers() {
  return {
    "Cache-Control": "s-max-age=60",
  }
}

export function loader() {
  return {
    date: new Date().toISOString(),
  }
}

export default function SMaxAgeCacheRoute({ loaderData }: Route.ComponentProps) {
  return <div>Server Max Age Cache Route - {loaderData.date}</div>;
}