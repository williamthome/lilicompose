export type Rest<T> = T extends [first: unknown, ...rest: infer R] ? R : never
