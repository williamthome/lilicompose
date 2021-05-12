import type { AnyFn } from './any-fn.type'

export type Args<T> = T extends AnyFn ? Parameters<T> : never
