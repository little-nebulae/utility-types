/**
Returns a boolean for whether the given type is `any`.

Useful in type utilities, such as disallowing `any`s to be passed to a function.

@example
```
import type { IsAny } from "@little-nebulae/utility-types";

const typedObject = { a: 1, b: 2 } as const;
const anyObject: any = { a: 1, b: 2 };

function get<O extends (IsAny<O> extends true ? {} : Record<string, number>), K extends keyof O = keyof O>(object: O, key: K) {
	return object[key];
}

const typedA = get(typedObject, "a");
//=> 1

const anyA = get(anyObject, "a");
//=> any
```
*/
export type IsAny<T> = 0 extends 1 & NoInfer<T> ? true : false;
