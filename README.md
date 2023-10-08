<div align=center>
        <img src='https://github.com/oelin/valary/blob/main/images/valary.svg' width=40%>
</div>

# Valkyrie

Valkyrie (.js) implements validated typing for JavaScript. A validated type is an *immutable* type for which every instance satisfies a particular predicate.

## Installation

```bash
npm i valkyrie.js
```

## Usage

```js
class User {
  constructor(username, password) {
    this.username = username
    this.password = password
  }
}
```

```js
import { Validated, assert } from "valkyrie.js"

function validateUser(user) {

  assert(typeof(user.username) === "string")
  assert(typeof(user.password) === "string")
  assert(user.username.length < 256)

  return user
}

const ValidatedUser = Validated(User, validateUser)
```
