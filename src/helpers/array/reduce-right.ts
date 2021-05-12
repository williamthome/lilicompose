import type { Reducer, First } from '@/types/array'

export const reduceRight = async <T>(
  reducer: Reducer<T>,
  array: T[],
): Promise<First<T>> => {
  const firstIndex = array.length - 1

  let value = array[firstIndex]

  for (let i = firstIndex - 1, loops = 0; i > -1; i--, loops++) {
    const currentValue = array[i]
    value = await reducer(value, currentValue, i, array, loops)
  }

  return value as First<T>
}
