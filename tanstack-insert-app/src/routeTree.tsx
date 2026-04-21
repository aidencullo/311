import {
  createRootRouteWithContext,
  createRoute,
  Outlet,
  Link,
} from "@tanstack/react-router";
import type { QueryClient } from "@tanstack/react-query";

import { HomePage } from "./routes/home";
import { InsertPage } from "./routes/insert";
import { ItemsPage } from "./routes/items";

const rootRoute = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: () => (
    <div className="app">
      <header className="app-header">
        <h1>TanStack Insert App</h1>
        <nav>
          <Link to="/" className="nav-link" activeProps={{ className: "nav-link active" }}>
            Home
          </Link>
          <Link to="/insert" className="nav-link" activeProps={{ className: "nav-link active" }}>
            Insert
          </Link>
          <Link to="/items" className="nav-link" activeProps={{ className: "nav-link active" }}>
            Items
          </Link>
        </nav>
      </header>
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const insertRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/insert",
  component: InsertPage,
});

const itemsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/items",
  component: ItemsPage,
});

export const routeTree = rootRoute.addChildren([
  indexRoute,
  insertRoute,
  itemsRoute,
]);
