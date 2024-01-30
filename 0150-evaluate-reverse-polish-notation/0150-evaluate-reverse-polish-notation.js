/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    
    for (let token of tokens) {
        if (!isNaN(token)) { // If token is a number
            stack.push(parseInt(token));
        } else { // If token is an operator
            let operand2 = stack.pop();
            let operand1 = stack.pop();
            
            switch (token) {
                case '+':
                    stack.push(operand1 + operand2);
                    break;
                case '-':
                    stack.push(operand1 - operand2);
                    break;
                case '*':
                    stack.push(operand1 * operand2);
                    break;
                case '/':
                    stack.push(parseInt(operand1 / operand2)); 
                    // Division truncates towards zero
                    break;
            }
        }
    }
    
    return stack.pop();
};