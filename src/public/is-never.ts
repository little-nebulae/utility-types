/**
Returns a boolean for whether the given type is `never`.

Useful in type utilities, such as checking if something does not occur.

@example
```
import type { IsNever } from "@little-nebulae/utility-types";

type A = IsNever<never>;
//=> true

type B = IsNever<any>;
//=> false

type C = IsNever<unknown>;
//=> false

type D = IsNever<never[]>;
//=> false

type E = IsNever<object>;
//=> false

type F = IsNever<string>;
//=> false
```

@example
```
import type { IsNever } from "@little-nebulae/utility-types";

type IsTrue<T> = T extends true ? true : false;

// When a distributive conditional is instantiated with `never`, the entire conditional results in `never`.
type A = IsTrue<never>;
//=> never

// If you don't want that behaviour, you can explicitly add an `IsNever` check before the distributive conditional.
type IsTrueFixed<T> =
	IsNever<T> extends true ? false : T extends true ? true : false;

type B = IsTrueFixed<never>;
//=> false
```
*/
export type IsNever<T> = [T] extends [never] ? true : false;
