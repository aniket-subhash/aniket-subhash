function isSymmetricIterative(arr: number[]): boolean {
    const n = arr.length;
    for (let i = 0; i < Math.floor(n / 2); i++) {
        if (arr[i] !== arr[n - 1 - i]) {
            return false
        }
    }
    return true
}

function isSymmetricRecursive(arr: number[], left: number = 0, right: number = arr.length - 1): boolean {
    if (left >= right) {
        return true
    }
    if (arr[left] !== arr[right]) {
        return false
    }
    return isSymmetricRecursive(arr, left + 1, right - 1)
}

// Beispiele:
console.log(isSymmetricIterative([1, 2, 3, 2, 1])) // true
console.log(isSymmetricIterative([1, 2, 3, 4, 5])) // false
console.log(isSymmetricRecursive([1, 2, 3, 2, 1])) // true
console.log(isSymmetricRecursive([1, 2, 3, 4, 5])) // false
