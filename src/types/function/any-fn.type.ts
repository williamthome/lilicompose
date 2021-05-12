// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyFn<T = any> = (...args: any[]) => T | Promise<T>
