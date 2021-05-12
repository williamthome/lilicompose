import type { AnyFn, Args, Return } from '@/types/function'
import type { First, Last } from '@/types/array'
import type { ComposePipe, ComposePipeFunctions } from '@/types/compose'
import { reduce } from '@/helpers/array'
import { composeReduceResult } from '@/helpers/compose'

export const composePipe =
  <T extends AnyFn[]>(...fns: ComposePipeFunctions<T>): ComposePipe<T> =>
  async (...args: Args<First<T>>): Promise<Return<Last<T>>> =>
    await reduce(composeReduceResult(args), fns)
