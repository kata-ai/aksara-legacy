/** Omit type (aka. "WHY ISN'T THIS IN THE STDLIB YET??!") */
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
