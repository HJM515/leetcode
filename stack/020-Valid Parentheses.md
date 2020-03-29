## 20. Valid Parentheses

Given a string containing just the characters '(' , ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

### Example

Input: "()"
Output: true

Input: "()[]{}"
Output: true

Input: "(]"
Output: false

## Solution

### Approach 1

```js
var isValid = function(s) {
    let map = { '(': ')', '{': '}', '[': ']' }, arr = [];
    for(let w of s) {
        if(w in map) {
            arr.push(w);
        }else if(w !== map[arr.pop()]) {
            return false;
        }
    }
    return !arr.length;
};
```

```py
class Solution:
    def isValid(self, s: str) -> bool:
        dic = { '(': ')', '{': '}', '[': ']' }
        stack = []
        for w in s:
            if w in dic: stack.append(w)
            elif w != dic[stack.pop()]: return False
        return len(stack) == 0
```