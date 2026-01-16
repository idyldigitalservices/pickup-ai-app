import { useRouter } from "next/router";

export default function Results() {
  const router = useRouter();
  const { hours } = router.query;

  return (
    <main style={{ padding: 30, maxWidth: 600, margin: "auto" }}>
      <h2>Advisory Result</h2>

      <p>
        Based on your input ({hours} hours/week), hybrid trucks may
        reduce daily driving stress.
      </p>

      <p style={{ marginTop: 20, fontSize: 12, color: "gray" }}>
        This is an advisory insight only. It does not guarantee outcomes
        or diagnose mechanical conditions.
      </p>
    </main>
  );
}
