import type { AnyFn, Args, Return } from '@/types/function'
import type { First, Last } from '@/types/array'
import type { Compose, ComposeFunctions } from '@/types/compose'
import { reduceRight } from '@/helpers/array'
import { composeReduceResult } from '@/helpers/compose'

export const compose =
  <T extends AnyFn[]>(...fns: ComposeFunctions<T>): Compose<T> =>
  async (...args: Args<Last<T>>): Promise<Return<First<T>>> =>
    await reduceRight(composeReduceResult(args), fns)
