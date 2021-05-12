export type Reducer<T> = (
  initialValue: T,
  current: T,
  index: number,
  array: T[],
  loops: number,
) => Promise<T>
