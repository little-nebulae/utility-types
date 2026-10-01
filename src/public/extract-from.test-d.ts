import { expectTypeOf, test } from "vitest";

import type { ExtractFrom } from "@/public/extract-from";

type Status = "idle" | "loading" | "success" | "error";

test("ExtractFrom keeps only the given members", () => {
  expectTypeOf<ExtractFrom<Status, "success" | "error">>().toEqualTypeOf<
    "success" | "error"
  >();
  expectTypeOf<ExtractFrom<Status, "idle">>().toEqualTypeOf<"idle">();
});

test("ExtractFrom works with mixed primitive unions", () => {
  expectTypeOf<ExtractFrom<"a" | "b" | 1 | 2, "a" | 1>>().toEqualTypeOf<
    "a" | 1
  >();
});

test("ExtractFrom rejects members that are not in T", () => {
  // @ts-expect-error - "succes" is not a member of Status
  expectTypeOf<ExtractFrom<Status, "succes">>();

  // @ts-expect-error - a supertype of a member is not assignable to T
  expectTypeOf<ExtractFrom<"a" | "b" | 1, string>>();

  // @ts-expect-error - T is limited to primitives
  expectTypeOf<ExtractFrom<{ a: 1 } | { b: 2 }, { a: 1 }>>();
});
