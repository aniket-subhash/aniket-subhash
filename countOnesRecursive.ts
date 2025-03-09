function numberOnesRecursive(arr, left = 0, right = arr.length - 1) {
    // Basisfall: Wenn der Suchbereich leer ist
    if (left > right) return 0
    
    let mid = Math.floor((left + right) / 2)
    
    // Falls das erste Element eine 1 ist, sind alle restlichen Elemente ebenfalls 1
    if (arr[mid] === 1 && (mid === 0 || arr[mid - 1] === 0)) {
        return arr.length - mid
    }
    
    // Falls arr[mid] noch 0 ist, suche weiter rechts
    if (arr[mid] === 0) {
        return numberOnesRecursive(arr, mid + 1, right)
    } else { // Sonst suche weiter links
        return numberOnesRecursive(arr, left, mid - 1)
    }
}

console.log(numberOnesRecursive([0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1]))