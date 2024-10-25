export type PropKind =
  | "string"
  | "int";

export class Service {
  types: Type[] = [];
  constructor(public name: string) {}

  /**
   * Add a new type to the service
   * @param name the name of the type
   * @param props an optional list of initial props
   * @return The created type
   */
  type(name: string, props: Prop[] = []): Type {
    let t = new Type(name, props);
    this.types.push(t);

    return t;
  }
}

export class Type {
  constructor(public name: string, public props: Prop[]) {}

  prop(
    name: string,
    kind: PropKind,
    options: Omit<Prop, "name" | "kind"> = {},
  ): Type {
    let p: Prop = {
      name,
      kind,
      ...options,
    };
    this.props.push(p);

    return this;
  }

  propList(props: Prop[]): Type {
    this.props = [...this.props, ...props];
    return this;
  }
}

export interface Prop {
  name: string;
  kind: PropKind;
  isNull?: boolean;
  isList?: boolean;
}
