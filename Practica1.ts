console.log("----------")
let nums = [2, 6, 5, 3, 8, 7, 1, 0]
let resultado = quicksort(nums)
console.log(resultado)
function quicksort(nums: number[]): number[] {
    if (nums.length <= 1) {
        return nums
    }

    const pivot = nums[0]
    const menores: number[] = []
    const mayores: number[] = []

    nums.forEach(numero => {
        if (numero > pivot) {
            mayores.push(numero)
        } else if (numero < pivot) {
            menores.push(numero)
        }
    })

    return quicksort(menores).concat(pivot).concat(quicksort(mayores))

}




