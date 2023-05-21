export type Action<TType, TData = undefined> = [
  TData,
] extends [undefined]
  ? () => { type: TType }
  : (data: TData) => { type: TType; data: TData };
