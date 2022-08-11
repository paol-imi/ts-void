<div align="center">
  
<img src="./void.png" width="25%" /><br>

<h1><b>TS-VOID</b><sup><small>&#632;</small></sup></h1>

<em>“The eternal void is filled with infinite possibilities”</em> ~ Laozi

[![Typescript](https://img.shields.io/badge/typescript-000?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Void](https://img.shields.io/badge/void-000?style=for-the-badge&logo=ghost&logoColor=white)](/)
[![npm](https://img.shields.io/npm/v/ts-void?style=for-the-badge&color=000&labelColor=000)](http://npm.im/ts-void)

</div>

## Void 🔮

How do you check if this variable contains a value?

```ts
let value: Value;
```

You may initialize it with `undefined` or `null`, but what if `Value` is a generic you don't control, and it can be one of these values?

```ts
import { Void } from "ts-void";
```

You may use `Void` as a new primitive value.

```ts
let value: Value | Void;
```

then you can check if the variable is `Void`.

```ts
if (value !== Void) {
  // Now the value is only of type "Value".
}
```

You may also use the utility type.

```ts
import { type NonVoid } from "ts-void";
```

And extract the original type from the union.

```ts
type Extracted = NonVoid<T | Void>; // equals to T.
```
