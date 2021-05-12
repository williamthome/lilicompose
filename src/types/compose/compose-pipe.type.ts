import type { AnyFn, Args, Return } from '@/types/function'
import type { First, Last } from '@/types/array'

export type ComposePipe<T extends AnyFn[]> = (
  ...args: Args<First<T>>
) => Promise<Return<Last<T>>>
