function longestCommonPrefix(strs: string[]): string {
    let prefix = ''
    const str = strs[0]
    for (let i = 0; i < str.length; i++) {
        let check = true
        for (let j = 1; j < strs.length; j++) {
            check = str[i] == strs[j][i]
            if (!check) break
        }
        if (!check) break
        prefix += str[i]
    }
    return prefix
}

// function longestCommonPrefix(strs: string[]): string {
//     let sorted = strs.sort((a, b) => a < b ? -1 : 1)
//     let prefix = ''
//     const first = sorted[0]
//     const last = sorted[sorted.length - 1]
//     for (let i = 0; i < first.length; i++) {
//         if (first[i] !== last[i]) break
//         prefix += first[i]
//     }
//     return prefix
// }

console.log(longestCommonPrefix(["flower", "flow", "flight"])) // "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])) // ""
