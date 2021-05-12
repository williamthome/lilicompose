import type { AnyFn, Args, Return } from '../function'

type ComposeReturn<T extends AnyFn> = Return<T> extends Promise<infer U>
  ? U extends AnyFn
    ? ComposeReturn<U>
    : U
  : Return<T>

export type ValidateComposeFunction<
  Fns extends AnyFn[],
  PreviousIndex extends number,
  CurrentIndex extends number,
> = [ComposeReturn<Fns[PreviousIndex]>] extends Args<Fns[CurrentIndex]>
  ? Fns
  : never // Incompatible args and return type
