type RomanType = 'I' | 'V' | 'X' | 'L' | 'C' | 'D' | 'M'

const romanToIntegerMap: Record<RomanType, number> = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

function change(current: RomanType, next?: RomanType): [number, number] {
    let step = 1
    switch (current) {
        case 'I':
            if (next === 'X') return [++step, 9]
            if (next === 'V') return [++step, 4]
            return [step, romanToIntegerMap[current]]

        case 'X':
            if (next === 'C') return [++step, 90]
            if (next === 'L') return [++step, 40]
            return [step, romanToIntegerMap[current]]

        case 'C':
            if (next === 'M') return [++step, 900]
            if (next === 'D') return [++step, 400]
            return [step, romanToIntegerMap[current]]

        default:
            return [step, romanToIntegerMap[current]]
    }
}

function romanToInt(roman: string): number {
    let int: number = 0;

    for (let i = 0; i < roman.length;) {
        const [step, to] = change(roman[i] as RomanType, roman[i + 1] as RomanType)
        int += to
        i += step
    }

    return int
}

console.log(romanToInt("III")) // 3
console.log(romanToInt("LVIII")) // 58
console.log(romanToInt("MCMXCIV")) // 1994
