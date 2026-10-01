import type { Primitive } from "@/public/primitive";

/**
A version of {@link Exclude} for unions of primitives that only accepts members that exist in `T`, and suggests them in the editor.

Because `U` is constrained to `T`, you get:
- Autocomplete for the members of `T` when filling in `U`.
- A compile error if `U` contains something that is not in `T` (a typo, or a member that was removed from `T` later).

`T` is limited to primitives (including literal types) on purpose. For objects and arrays, `U extends T` also accepts subtypes that exclude nothing, so the safety net would be misleading. Use `ExcludeStrict` from `type-fest` for those.

Note that `U` must be assignable to `T`, so you cannot exclude a supertype of a member (for example, `string` from `'a' | 'b' | 1`). Use `Exclude` or `ExcludeStrict` for that.

@example
```
import type {ExcludeFrom} from './exclude-from.js';

type Status = 'idle' | 'loading' | 'success' | 'error';

type Settled = ExcludeFrom<Status, 'idle' | 'loading'>;
//=> 'success' | 'error'

// @ts-expect-error
type Typo = ExcludeFrom<Status, 'loadng'>;
//                              ~~~~~~~~
// Error: Type '"loadng"' does not satisfy the constraint 'Status'.
```
*/
export type ExcludeFrom<T extends Primitive, U extends T> = Exclude<T, U>;
