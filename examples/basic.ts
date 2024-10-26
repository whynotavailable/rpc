import { Service } from "../rpc.ts";

let s = new Service("movies");

s.type("movie")
  .propSet({
    "id": "string",
    "year": { kind: "int" },
  });
