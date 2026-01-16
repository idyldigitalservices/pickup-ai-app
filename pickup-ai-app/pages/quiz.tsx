import { useState } from "react";
import { useRouter } from "next/router";

export default function Quiz() {
  const router = useRouter();
  const [hours, setHours] = useState("");

  const submit = () => {
    router.push(`/results?hours=${hours}`);
  };

  return (
    <main style={{ padding: 30, maxWidth: 600, margin: "auto" }}>
      <h2>Weekly Driving Hours</h2>

      <input
        placeholder="e.g. 10"
        value={hours}
        onChange={(e) => setHours(e.target.value)}
        style={{ padding: 10, width: "100%", marginTop: 10 }}
      />

      <button
        onClick={submit}
        style={{ marginTop: 20 }}
      >
        See Results
      </button>
    </main>
  );
}
