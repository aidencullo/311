import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

import { insertItem } from "../itemsStore";

export function InsertPage() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const mutation = useMutation({
    mutationFn: insertItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["items"] });
      navigate({ to: "/items" });
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name.trim()) return;
    mutation.mutate({ name: name.trim(), description: description.trim() });
  };

  return (
    <section className="card">
      <h2>Insert Item</h2>
      <form onSubmit={handleSubmit} className="form">
        <label className="field">
          <span>Name</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Widget"
          />
        </label>
        <label className="field">
          <span>Description</span>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            placeholder="A short description"
          />
        </label>
        <button type="submit" disabled={mutation.isPending}>
          {mutation.isPending ? "Saving..." : "Insert"}
        </button>
        {mutation.isError && (
          <p className="error">Something went wrong. Please try again.</p>
        )}
      </form>
    </section>
  );
}
