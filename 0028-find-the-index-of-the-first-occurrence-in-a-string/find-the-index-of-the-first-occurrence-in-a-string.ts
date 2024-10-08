function strStr(haystack: string, needle: string): number {
    for (let i = 0, j = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[j]) {
            j++
            if (needle.length == j) {
                return i - j + 1
            }
        } else {
            i -= j
            j = 0
        }
    }

    return -1
}

console.log(strStr('sadbutsad', 'sad')) // "0"
console.log(strStr('leetcode', 'leeto')) // "-1"
