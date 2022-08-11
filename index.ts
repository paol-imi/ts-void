export type Void = typeof Void;
export const Void: unique symbol =
  typeof Symbol === "function"
    ? Symbol("Void")
    : Object.create({
        toString() {
          return "Symbol(Void)";
        },
        valueOf() {
          return undefined;
        },
      });

export type NonVoid<T> = Exclude<T, Void>;

export default Void;
