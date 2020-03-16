## Reverse Linked List

Reverse a singly linked list.

### Example

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL

### Follow up

A linked list can be reversed either iteratively or recursively. Could you implement both?

```js
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
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

### Approach 1: Iteratively

There are two points prev and cur. On the beginning, prev is null, and cur is head. 
In iterative process, we need save cur.next in template var, and cur change to point prev, and two points move forward. 

```js
var reverseList = function(head) {
    let prev = null;
    let cur = head;
    while(cur) {
        let tmp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = tmp;
    }
    return prev;
};
```

```py
class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        prev, cur = None, head
        while cur is not None:
            tmp, cur.next, prev = cur.next, prev, cur
            cur = tmp
        return prev
```

### Approach 3: Recursively

(1) Termination condition: head === null || head.next === null.
(2) Recursive formula:  get new_head as p from reverseList(head.next). Then new_head points to old_prev_node, old_prev_node points to null.
If you can not understand work flow, you can console head and try again.

```js
var reverseList = function(head) {
    if(!head || !head.next) {
        return head;
    }
    // console.log('head0', head)
    let p = reverseList(head.next);
    // console.log('p    ', p )
    // console.log('head1', head)
    head.next.next = head;
    head.next = null;
    // console.log('head2', head)
    return p;
};
```

```py
class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        if head is None or head.next is None:
            return head
        p = self.reverseList(head.next)
        head.next.next = head
        head.next = None
        return p
```


