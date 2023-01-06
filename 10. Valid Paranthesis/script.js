// Time complexity: O(N) // running just one for loop.
// Space compleixty: O(N) // entire string may be completely full of left brackets and hence the entire string may be filled in the stack.

const parens = {
    '(':')',
    '[':']',
    '{':'}'
}

const isValidParanthesis = function(s) {
    if (s.length === 0) {
        return true;
    }
    
    const stack = [];

    for(let i = 0; i < s.length; i++) {
        if(parens[s[i]]) { // if this is true, then it is matched and is a left bracket.
            stack.push(s[i]);
        } else {
            const leftBracket = stack.pop();
            const correctBracket = parens[leftBracket];

            if(s[i] !== correctBracket) return false;
        }
    }

    return stack.length === 0;  // making sure no unclosed left brackets.
}