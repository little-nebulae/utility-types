/**
Tries to find the type of a global with the given name.

Limitations: Due to peculiarities with the behavior of `globalThis`, "globally defined" only includes `var` declarations in `declare global` blocks, not `let` or `const` declarations.

@example
```
import type { FindGlobalType } from "@little-nebulae/utility-types";

declare global {
	const foo: number; // let and const don't work
	var bar: string; // var works
}

type FooType = FindGlobalType<"foo">; //=> never (let/const don't work)
type BarType = FindGlobalType<"bar">; //=> string
type OtherType = FindGlobalType<"other">; //=> never (no global named "other")
```
*/
export type FindGlobalType<Name extends string> =
  typeof globalThis extends Record<Name, infer T> ? T : never;
