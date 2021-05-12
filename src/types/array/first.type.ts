export type First<T> = T extends [first: infer F, ...rest: unknown[]]
  ? F
  : never
