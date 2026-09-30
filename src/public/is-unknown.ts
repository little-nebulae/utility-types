import type { IsNull } from "@/public/is-null";

/**
Returns a boolean for whether the given type is `unknown`.

Useful in type utilities, such as when dealing with unknown data from API calls.

@example
```
import type {IsUnknown} from 'type-fest';

type A = IsUnknown<unknown>;
//=> true

type B = IsUnknown<any>;
//=> false

type C = IsUnknown<never>;
//=> false

type D = IsUnknown<unknown[]>;
//=> false

type E = IsUnknown<object>;
//=> false

type F = IsUnknown<string>;
//=> false
```
*/
export type IsUnknown<T> = unknown extends T // `T` can be `unknown` or `any`
  ? IsNull<T> extends false // `any` can be `null`, but `unknown` can't be
    ? true
    : false
  : false;
