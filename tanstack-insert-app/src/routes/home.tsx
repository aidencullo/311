import { Link } from "@tanstack/react-router";

export function HomePage() {
  return (
    <section className="card">
      <h2>Welcome</h2>
      <p>
        A minimal insert application built with{" "}
        <strong>TanStack Router</strong> and <strong>TanStack Query</strong>.
      </p>
      <p>
        Use the <Link to="/insert">Insert</Link> page to add a new item, then
        view them on the <Link to="/items">Items</Link> page.
      </p>
    </section>
  );
}
