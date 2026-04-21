export type Item = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
};

const STORAGE_KEY = "tanstack-insert-items";

function read(): Item[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Item[]) : [];
  } catch {
    return [];
  }
}

function write(items: Item[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export async function listItems(): Promise<Item[]> {
  await new Promise((r) => setTimeout(r, 150));
  return read();
}

export async function insertItem(input: {
  name: string;
  description: string;
}): Promise<Item> {
  await new Promise((r) => setTimeout(r, 200));
  const item: Item = {
    id: crypto.randomUUID(),
    name: input.name,
    description: input.description,
    createdAt: new Date().toISOString(),
  };
  const items = read();
  items.unshift(item);
  write(items);
  return item;
}
