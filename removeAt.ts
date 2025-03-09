function removeAt(arr: number[], index: number): number[] {
    if (index < 0 || index >= arr.length) {
        return arr // Falls der Index ungültig ist, geben wir das ursprüngliche Array zurück
    }

    let newArr: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (i !== index) { 
            newArr.push(arr[i]) // Nur die Elemente hinzufügen, die nicht entfernt werden sollen
        }
    }
    
    return newArr
}


const numbers = [10, 20, 30, 40, 50, 60, 70]
console.log(removeAt(numbers, 4)) // [10, 20, 40, 50]
