import { Service } from "./rpc.ts";

if (import.meta.main) {
  let s = new Service("movies");

  s.type("movie", [
    { name: "id", kind: "string" },
  ])
    .prop("name", "string");
}
