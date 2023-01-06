// Time complexity: O(4*N) = O(N).
// Space compleity: O(2*N) // for res and stack = O(N).

const minRemoveToMakeValid = function(str) {
    const res = str.split(''); // convert string to array.

    const stack = [];

    for(let i = 0; i < res.length; i++) {
        if(res[i] === '(') {
            stack.push(i); // push the index.
        } else if (res[i] == ')' && stack.length) {
            stack.pop(); // remove the last element from the stack.
        } else if (res[i] === ')') { // if the stack length is zero.
            res[i] = "";
        }
    }

    while(stack.length) {
        const currIdx = stack.pop();
        res[currIdx] = "";
    }

    return res.join("");
}

const ansString = minRemoveToMakeValid("(ab()d")
console.log(ansString)