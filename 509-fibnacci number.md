## 19. Remove Nth Node From End of List

The **Fibonacci numbers**, commonly denoted `F(n)` form a sequence, called the **Fibonacci sequence**, such that each number is the sum of the two preceding ones, starting from `0` and `1`. That is,

```
F(0) = 0,   F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
```

Given n, calculate `F(n)`.

### Example

```
Input: 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
```

### Note

0 ≤ n ≤ 30. (if 0 ≤ n ≤ 100，the result need % 1000000007).

### Follow Up

Could you do this in one pass?

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
```

```py
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
```

## Solution

### Approach 1:  Recursive

```js
var fib = function(n) {
    if(n <= 1) {
        return n;
    }
    return fib(n-1) + fib(n-2);
};
```

```py
class Solution:
    def fib(self, N: int) -> int:
```

### Approach 2:  Tail Recusive

```js
var fib = function(n, f1=1, f2=0) {
    if(n === 0) {
        return f2;
    }
    return fib(n-1, f2, f1+f2);
}
```

```py
class Solution:
   

```

### Approach3: Iterative

```js
var fib = function(n) {
    let a = 0, b = 1;
    for(let i = 0; i < n; i++) {
        [a, b] = [b, (a+b) % 1000000007];
    }
    return a;
}
```

