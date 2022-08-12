<div align="center">
  
<img src="./void.png" width="25%" /><br>

<h1><b>TS-VOID</b><sup><small>&#632;</small></sup></h1>

<em>“The eternal void is filled with infinite possibilities”</em> ~ Laozi

[![Typescript](https://img.shields.io/badge/typescript-000?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Void](https://img.shields.io/badge/void-000?style=for-the-badge&logo=ghost&logoColor=white)](/)
[![npm](https://img.shields.io/npm/v/ts-void?style=for-the-badge&color=000&labelColor=000)](http://npm.im/ts-void)

</div>

## Void 🔮

How do you check if a variable contains a value? You may use `undefined` or `null` as placeholders, but what if the generic itself is `undefined` or `null`?

```ts
function setValue<T>(value?: T);
```

You may use `Void` as a new primitive value.

```ts
import { Void } from "ts-void";
```

Then you can check if the variable is `Void`.

```ts
function setValue(value: T | Void = Void) {
  if (value !== Void) {
    // Now the value is only of type "Value".
  }
}
```

And that's it! You may be wondering what to do if also the generic is of type `Void`. Well, for these case you can use [`ts-void2`](https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley)!
