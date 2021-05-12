import type { AnyFn } from '@/types/function'
import type { Reducer } from '@/types/array'

export const composeReduceResult =
  (args: unknown[]): Reducer<AnyFn> =>
  async (
    previousFn: AnyFn,
    fn: AnyFn,
    _index: number,
    _array: AnyFn[],
    loops: number,
  ): Promise<AnyFn> => {
    const previousArgs =
      loops === 0 &&
      (previousFn instanceof Promise || typeof previousFn === 'function')
        ? await previousFn(...args)
        : previousFn
    return await fn(previousArgs)
  }
