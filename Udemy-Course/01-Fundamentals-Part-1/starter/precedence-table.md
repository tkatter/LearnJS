| Precedence            | Associativity | Individual operators                |
| :-------------------- | :-----------: | :---------------------------------- |
| 18: grouping          |      n/a      | Grouping `(x)`                      |
| 17: access and call   | left-to-right | Member access `x.y`                 |
| 17: access and call   | left-to-right | Optional chaining `x?.y`            |
| 17: access and call   |      n/a      | Computed member access `x[y]`       |
| 17: access and call   |      n/a      | `new` with argument list `new x(y)` |
| 17: access and call   |      n/a      | Function call `x(y)`                |
| 17: access and call   |      n/a      | `import(x)`                         |
| 16: new               |      n/a      | `new` without argument list `new x` |
| 15: postfix operators |      n/a      | Postfix increment `x++`             |
| 15: postfix operators |      n/a      | Postfix decrement `x--`             |
| 15: prefix operators  |      n/a      | Prefix increment `++x`              |
| 15: prefix operators  |      n/a      | Prefix decrement `--x`              |
| 15: prefix operators  |      n/a      | Logical NOT `!x`                    |
| 15: prefix operators  |      n/a      | Bitwise NOT `~x`                    |
| 15: prefix operators  |      n/a      | Unary plus `+x`                     |
