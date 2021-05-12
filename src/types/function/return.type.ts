import type { AnyFn } from './any-fn.type'

export type Return<T> = T extends AnyFn ? ReturnType<T> : never
