<div align="center">
  
<img src="./void.png" width="25%" /><br>

<h1><b>TS-VOID</b><sup><small>&#632;</small></sup></h1>

<em>“The eternal void is filled with infinite possibilities”</em> ~ Laozi

[![Typescript](https://img.shields.io/badge/typescript-000?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Void](https://img.shields.io/badge/void-000?style=for-the-badge&logo=ghost&logoColor=white)](/)
[![npm](https://img.shields.io/npm/v/ts-void?style=for-the-badge&color=000&labelColor=000)](http://npm.im/ts-void)

</div>

## Void 🔮

If you're a React library maintainer, you may have come across a case where you need a ref to stores a user-provided value.

```ts
const ref = useRef<Value | null>(null);
```

How do you check if the ref contains a value? You could check if `ref.current` is `null`, but the generic is provided by the user and null could be a valid value. One possible way is doing something like this.

```ts
const ref = useRef({
  // Keep track of value assignments.
  hasValue: false,
  maybeValue: null as Value | null,
});

function setValue(value) {
  // Set the value as present.
  ref.hasValue = true;
  ref.maybeValue = value;
}

function doSomething() {
  if (ref.hasValue) {
    // We need the nullish assertion.
    const value = ref.maybeValue!;
    // Do something...
  }
}
```

This works, but is a bit verbose and since `maybeValue` can't really be typed, you'll need the non-null assertion (and disable the eslint warning!).

Alternatively, you may use `Void` as a new primitive value. Unlike `null`, users won't be able to see or use this type, so you're sure there will be no conflicts.

```ts
import { Void } from "ts-void";
```

Thanks to some typescript wizardry, `Void` acts a a real primitive. It is both a value and a type, and it works with equality [narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#equality-narrowing).

```ts
const ref = useRef<Value | Void>(Void);

function doSomething() {
  if (ref.current !== Void) {
    // Now ref.current is only of type "Value".
  }
}
```

You may be wondering what to do if also the user use this library and provide `Void` as a value. Well, for these cases you can use [`ts-void-2`](https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley)!

Jokes apart, the whole point is to make this type `private` and never expose it to the user, otherwise its just a new nullish value, and Javascript have enough of those!

The way to ensure this is to bundle `ts-void` inside your library, and not use it as a dependency. Even if the user use ts-void, your private `Void` type will be unique!
