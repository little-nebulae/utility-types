import type { Primitive } from "@/public/primitive";

/**
A version of {@link Extract} for unions of primitives that only accepts members that exist in `T`, and suggests them in the editor.

Because `U` is constrained to `T`, you get:
- Autocomplete for the members of `T` when filling in `U`.
- A compile error if `U` contains something that is not in `T` (a typo, or a member that was removed from `T` later).

`T` is limited to primitives (including literal types) on purpose. For objects and arrays, `U extends T` also accepts subtypes that extract nothing, so the safety net would be misleading.

Note that `U` must be assignable to `T`, so you cannot extract using a supertype of a member (for example, `string` from `'a' | 'b' | 1`). Use `Extract` for that.

This is the counterpart of `ExcludeFrom`: `ExtractFrom<T, U>` keeps what `ExcludeFrom<T, U>` removes.

@example
```
import type {ExtractFrom} from './extract-from.js';

type Status = 'idle' | 'loading' | 'success' | 'error';

type Settled = ExtractFrom<Status, 'success' | 'error'>;
//=> 'success' | 'error'

// @ts-expect-error
type Typo = ExtractFrom<Status, 'succes'>;
//                              ~~~~~~~
// Error: Type '"succes"' does not satisfy the constraint 'Status'.
```
*/
export type ExtractFrom<T extends Primitive, U extends T> = Extract<T, U>;
