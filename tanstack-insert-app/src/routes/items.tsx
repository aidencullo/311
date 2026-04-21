import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";

import { listItems } from "../itemsStore";

export function ItemsPage() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["items"],
    queryFn: listItems,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p className="error">Failed to load items.</p>;

  return (
    <section className="card">
      <div className="items-header">
        <h2>Items</h2>
        <Link to="/insert" className="button">
          + Insert
        </Link>
      </div>
      {data && data.length === 0 ? (
        <p>No items yet. Add one from the Insert page.</p>
      ) : (
        <ul className="item-list">
          {data?.map((item) => (
            <li key={item.id} className="item">
              <div className="item-name">{item.name}</div>
              {item.description && (
                <div className="item-description">{item.description}</div>
              )}
              <div className="item-meta">
                {new Date(item.createdAt).toLocaleString()}
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
