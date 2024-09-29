# throws

A Typescript assertion that throws only throws on null and undefined. Typically
when writing code we only want to throw on those conditions. Traditional
`assert` or `invariant` functions throw on all falsy values, and can easily trip
you up when you accidentally pass in a valid number that is 0.

## Installation

```bash
pnpm add throws
```

... or the equivalent for your package manager.

## Usage

```typescript
import { throws } from "throws";

const valueOrUndefined: number | undefined = 0;

throws(valueOrUndefined, "This is a required value");

/**
 * At this point Typescript will know that valueOrUndefined is not undefined and
 * will allow you to continue writing safe code.
 */
```

## No Unchecked Indexed Access

If you are using the recommended strict `noUncheckedIndexedAccess` setting, you
might want to check out [get-or-throw](https://github.com/0x80/get-or-throw).
