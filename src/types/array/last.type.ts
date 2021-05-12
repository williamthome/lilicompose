import type { Rest } from './rest.type'

export type Last<T> = T extends unknown[] ? T[Rest<T>['length']] : never
