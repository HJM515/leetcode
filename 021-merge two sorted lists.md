## 21.Merge Two Sorted Lists

Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

### Example

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
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

### Approach 1: Recursive

Boundary condition is l1 === null or l2 === null. The head of one list wil be remove in every recursion.

```js
var mergeTwoLists = function(l1, l2) {
    if(l1 === null) {
        return l2;
    }else if(l2 === null) {
        return l1;
    }else if(l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }else{
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};
```

```py
class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        if l1 is None:
            return l2
        elif l2 is None:
            return l1
        elif l1.val < l2.val:
            l1.next = self.mergeTwoLists(l1.next, l2)
            return l1
        else:
            l2.next = self.mergeTwoLists(l1, l2.next)
            return l2
```

### Approach 2: Iterative

Create a sentry node, p begin at sentry and move step by step to series l1 and l2. while l1 or l2 is null, p point to the other list.

```js
var mergeTwoLists = function(l1, l2) {
    var sentry = {val: 0, next: null};
    var p = sentry;
    while(l1 && l2) {
        if(l1.val < l2.val) {
            p.next = l1;
            l1 = l1.next;
        }else{
            p.next = l2;
            l2 = l2.next;
        }
        p = p.next
    }
    p.next = l1 ? l1 : l2
    return sentry.next
};
```

```py
class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        sentry = ListNode(0)
        p = sentry
        while l1 and l2:
            if l1.val < l2.val:
                p.next = l1
                l1 = l1.next
            else:
                p.next = l2
                l2 = l2.next
            p = p.next
        if l1:
            p.next = l1
        else:
            p.next = l2
        return sentry.next
```