import type { IsOptionalKeyOf } from "@/public/is-optional-key-of";

/**
Extract all optional keys from the given type.

This is useful when you want to create a new type that contains different type values for the optional keys only.

@example
```
import type { OptionalKeysOf, Except } from "@little-nebulae/utility-types";

type User = {
	name: string;
	surname: string;

	luckyNumber?: number;
};

const REMOVE_FIELD = Symbol("remove field symbol");
type UpdateOperation<Entity extends object> = Except<Partial<Entity>, OptionalKeysOf<Entity>> & {
	[Key in OptionalKeysOf<Entity>]?: Entity[Key] | typeof REMOVE_FIELD;
};

const update1: UpdateOperation<User> = {
	name: "Alice",
};

const update2: UpdateOperation<User> = {
	name: "Bob",
	luckyNumber: REMOVE_FIELD,
};
```
*/
export type OptionalKeysOf<T extends object> = T extends unknown // For distributing `T`
  ? keyof {
      [K in keyof T as IsOptionalKeyOf<T, K> extends false ? never : K]: never;
    } &
      keyof T // Intersect with `keyof T` to ensure result of `OptionalKeysOf<T>` is always assignable to `keyof T`
  : never; // Should never happen
