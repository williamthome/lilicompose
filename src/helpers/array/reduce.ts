import type { Reducer, Last } from '@/types/array'

export const reduce = async <T>(
  reducer: Reducer<T>,
  array: T[],
): Promise<Last<T>> => {
  const firstIndex = 0

  let previousValue = array[firstIndex]

  for (let i = firstIndex + 1, loops = 0; i < array.length; i++, loops++) {
    const currentValue = array[i]
    previousValue = await reducer(previousValue, currentValue, i, array, loops)
  }

  return previousValue as Last<T>
}
