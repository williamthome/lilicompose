import type { ArrayOfTwoOrMore } from '../array'
import type { AnyFn } from '../function'
import type { ValidateComposeFunction } from './validate-compose-function.type'

export type ComposePipeFunctions<Fns extends AnyFn[]> =
  Fns extends ArrayOfTwoOrMore<AnyFn>
    ? Fns[1] extends AnyFn
      ? ValidateComposeFunction<Fns, 0, 1> extends never
        ? never
        : Fns[2] extends AnyFn
        ? ValidateComposeFunction<Fns, 1, 2> extends never
          ? never
          : Fns[3] extends AnyFn
          ? ValidateComposeFunction<Fns, 2, 3> extends never
            ? never
            : Fns[4] extends AnyFn
            ? ValidateComposeFunction<Fns, 3, 4> extends never
              ? never
              : Fns[5] extends AnyFn
              ? ValidateComposeFunction<Fns, 4, 5> extends never
                ? never
                : Fns[6] extends AnyFn
                ? ValidateComposeFunction<Fns, 5, 6> extends never
                  ? never
                  : Fns[7] extends AnyFn
                  ? ValidateComposeFunction<Fns, 6, 7> extends never
                    ? never
                    : Fns[8] extends AnyFn
                    ? ValidateComposeFunction<Fns, 7, 8> extends never
                      ? never
                      : Fns
                    : Fns
                  : Fns
                : Fns
              : Fns
            : Fns
          : Fns
        : Fns
      : Fns
    : never // error if array length is less of 2
