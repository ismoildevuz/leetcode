function isValid(s: string): boolean {
    const brackets: Record<string, string> = {
        '[': ']',
        '{': '}',
        '(': ')',
    }

    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '[' || s[i] == '{' || s[i] == '(') {
            stack.push(s[i])
        } else if (s[i] == brackets[stack[stack.length - 1]]) {
            stack.pop()
        } else {
            return false
        }
    }

    return stack.length == 0
}

console.log(isValid('()')) // "true"
console.log(isValid('()[]{}')) // "true"
console.log(isValid('(]')) // "false"
console.log(isValid('([])')) // "true"
