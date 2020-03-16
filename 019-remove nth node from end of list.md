## 19. Remove Nth Node From End of List

Given a linked list, remove the n-th node from the end of list and return its head.

### Example

Given linked list: 1->2->3->4->5, and n = 2.
After removing the second node from the end, the linked list becomes 1->2->3->5.

### Note

Given n will always be valid.

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

### Approach 1: Two Pass

First pass, find length of the linked list. second pass, remove the (length - n) node.

```js
var removeNthFromEnd = function(head, n) {
  var sentry = { val: 0, next: head };
  var len = 0;
  var p = head;
  while (p) {
    len++;
    p = p.next;
  }
  len -= n;
  p = sentry;
  while (len > 0) {
    len--;
    p = p.next;
  }
  p.next = p.next.next;
  return sentry.next;
};
```

```py
class Solution:
    def removeNthFromEnd(self, head: ListNode, n: int) -> ListNode:
        sentry = ListNode(0)
        sentry.next = head
        len = 0
        p = head
        while p is not None:
            len += 1
            p = p.next
        len -= n
        p = sentry
        while len > 0:
            len -= 1
            p = p.next
        p.next = p.next.next
        return sentry.next
```

### Approach 2: One Pass

Use two pointers, the first pointer advances by (n + 1) steps from beginning, while the second pointer stay in the beginning, the two pointers are separated by n nodes. Then the two pointers advance together, when the first pointer move to null, the second pointer will be pointing at the nth node from end of list, remove the node.

```js
var removeNthFromEnd = function(head, n) {
  var sentry = { val: 0, next: head };
  var p1 = sentry;
  var p2 = sentry;
  for (var i = 0; i < n + 1; i++) {
    p1 = p1.next;
  }
  while (p1) {
    p1 = p1.next;
    p2 = p2.next;
  }
  p2.next = p2.next.next;
  return sentry.next;
};
```

```py
class Solution:
    def removeNthFromEnd(self, head: ListNode, n: int) -> ListNode:
        sentry = ListNode(0)
        sentry.next = head
        p1 = p2 = sentry
        while n >= 0
            n -= 1
            p1 = p1.next
        while p1 is not None:
            p1 = p1.next
            p2 = p2.next
        p2.next = p2.next.next
        return sentry.next

```
