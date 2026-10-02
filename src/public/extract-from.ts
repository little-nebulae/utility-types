import type { IsLiteral, Primitive } from "type-fest";

export type ExtractFrom<
  T extends (Primitive & IsLiteral<T> extends true ? unknown : never),
  U extends T,
> = Extract<T, U>;
