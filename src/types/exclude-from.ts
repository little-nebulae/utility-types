import type { IsLiteral, Primitive } from "type-fest";

export type ExcludeFrom<
  T extends (Primitive & IsLiteral<T> extends true ? unknown : never),
  U extends T,
> = Exclude<T, U>;
