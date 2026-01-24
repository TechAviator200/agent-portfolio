import Link from "next/link";
import { getAgent } from "@/lib/agents";

export default function Page() {
  const agent = getAgent("edge-health");
  if (!agent) return <main className="p-8">Agent not found</main>;

  const isLive = agent.demoUrl && agent.demoUrl !== "#";

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold">{agent.title}</h1>
      <p className="mt-2 opacity-80">{agent.description}</p>

      <h2 className="mt-8 text-lg font-semibold">What it does</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5">
        {agent.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>

      <h2 className="mt-8 text-lg font-semibold">Architecture</h2>
      <p className="mt-3 opacity-80">{agent.architecture}</p>

      <div className="mt-8 flex gap-3">
        {isLive ? (
          <a
            href={agent.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-black px-4 py-2 text-sm text-white"
          >
            Launch Demo
          </a>
        ) : (
          <span className="inline-flex items-center justify-center rounded-lg border px-4 py-2 text-sm opacity-60">
            Demo deploying
          </span>
        )}
        <Link
          href={`/${agent.category}`}
          className="inline-flex items-center justify-center rounded-lg border px-4 py-2 text-sm"
        >
          Details
        </Link>
      </div>
    </main>
  );
}
