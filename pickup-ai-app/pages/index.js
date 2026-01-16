import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 30, maxWidth: 600, margin: "auto" }}>
      <h1>Pickup Truck Decision Assistant</h1>
      <p>
        Answer a few questions to get an advisory recommendation.
      </p>

      <Link href="/quiz">
        <button style={{ marginTop: 20 }}>
          Start Quiz
        </button>
      </Link>
    </main>
  );
}

