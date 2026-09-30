import type { IsAny } from "@/public/is-any";

/**
Returns a boolean for whether the given key is an optional key of type.

This is useful when writing utility types or schema validators that need to differentiate `optional` keys.

@example
```
import type { IsOptionalKeyOf } from "@little-nebulae/utility-types";

type User = {
	name: string;
	surname: string;

	luckyNumber?: number;
};

type Admin = {
	name: string;
	surname?: string;
};

type T1 = IsOptionalKeyOf<User, "luckyNumber">;
//=> true

type T2 = IsOptionalKeyOf<User, "name">;
//=> false

type T3 = IsOptionalKeyOf<User, "name" | "luckyNumber">;
//=> boolean

type T4 = IsOptionalKeyOf<User | Admin, "name">;
//=> false

type T5 = IsOptionalKeyOf<User | Admin, "surname">;
//=> boolean
```
*/
export type IsOptionalKeyOf<T extends object, K extends keyof T> =
  IsAny<T | K> extends true
    ? never
    : K extends keyof T
      ? T extends Record<K, T[K]>
        ? false
        : true
      : false;
