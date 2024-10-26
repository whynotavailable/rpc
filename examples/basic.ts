import { type Prop, Service } from "../rpc.ts";

let s = new Service("movies");

let basicProps: Prop[] = [
  { name: "id", kind: "string" },
];

s.type("movie")
  .propList(basicProps)
  .prop("name", "string");
