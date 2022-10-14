import { writable } from "svelte/store";

export const store = writable({
  title: "Title",
  chapter: "Subtitle",
  url: "https://avatars.githubusercontent.com/u/91799425?s=200&v=4",
  category: "skills",
});
