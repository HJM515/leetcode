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

console.log(isValid("()[]"))

for(var val of '124') {
    console.log(val, 'val')
}