import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 – Page not found | Nina for Revit",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main style={{ textAlign: "center", padding: "4rem 1rem" }}>
      <h1>404 – Page not found</h1>
      <p>
        <a href="/">Go back home</a>
      </p>
    </main>
  );
}
