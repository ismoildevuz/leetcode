type Roman = 'I' | 'V' | 'X' | 'L' | 'C' | 'D' | 'M'

function change(current: Roman, next?: Roman): [number, number] {
    let step = 1
    switch (current) {
        case 'I':
            if (next === 'X') return [++step, 9]
            if (next === 'V') return [++step, 4]
            return [step, 1]

        case 'V':
            return [step, 5]

        case 'X':
            if (next === 'C') return [++step, 90]
            if (next === 'L') return [++step, 40]
            return [step, 10]

        case 'L':
            return [step, 50]

        case 'C':
            if (next === 'M') return [++step, 900]
            if (next === 'D') return [++step, 400]
            return [step, 100]

        case 'D':
            return [step, 500]

        case 'M':
            return [step, 1000]
    }
}

function romanToInt(roman: string): number {
    let int: number = 0;

    for (let i = 0; i < roman.length;) {
        const [step, to] = change(roman[i] as Roman, roman[i + 1] as Roman)
        int += to
        i += step
    }

    return int
}

console.log(romanToInt("III")) // 3
console.log(romanToInt("LVIII")) // 58
console.log(romanToInt("MCMXCIV")) // 1994
