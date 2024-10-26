export * from "./models.ts";

export type PropKind =
  | "string"
  | "int";

export type PropMods =
  | "null"
  | "list";

export type PropSet = Record<string, PropDef | PropKind>;

export class Service {
  types: Type[] = [];
  constructor(public name: string) {}

  /**
   * Add a new type to the service
   * @param name the name of the type
   * @param props an optional list of initial props
   */
  type(name: string, props: Record<string, PropDef> = {}): Type {
    let t = new Type(name, props);
    this.types.push(t);

    return t;
  }
}

export class Type {
  constructor(public name: string, public props: Record<string, PropDef>) {}

  prop(
    name: string,
    kind: PropKind,
    ...mods: PropMods[]
  ): Type {
    this.props[name] = {
      kind,
      mods,
    };

    return this;
  }

  /**
   * Alias to prop
   */
  p = this.prop;

  /**
   * Append a list of props to the type
   */
  propSet(props: PropSet): Type {
    for (let key in props) {
      let val = props[key];

      if (typeof val === "string") {
        this.props[key] = {
          kind: val,
        };
      } else {
        this.props[key] = val;
      }
    }

    return this;
  }

  /**
   * Alias to propList
   */
  ps = this.propSet;
}

export interface PropDef {
  kind: PropKind;
  mods?: PropMods[];
}
