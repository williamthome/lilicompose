import type { AnyFn, Args, Return } from '@/types/function'
import type { First, Last } from '@/types/array'

export type Compose<T extends AnyFn[]> = (
  ...args: Args<Last<T>>
) => Promise<Return<First<T>>>
