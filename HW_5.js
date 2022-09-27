// 1
const var1 = () => {
    return 'Привіт, світ!'
}

console.log(var1())

// 2
setTimeout(() => {
    console.log('Привіт, світ!')
},
5000
)

// 3
const obj1 = {
    name: 'Jane',
    surname: 'Louis',
    favoriteNumber: 7
}

const var3 = (obj) => {
    obj.age = 30
    console.log(`My name is ${obj.name} ${obj.surname}, I'm ${obj.age} years old and my favorite number is ${obj.favoriteNumber}`)
}

var3(obj1)

// 4
const arr1 = [3, true, 'Hello']

const var4 = (arr) => {
    for(let i = 0; i < arr.length; i ++) {
        if(typeof arr[i] === 'number') {
            arr[i] = 'Hi'
        }
    }

    console.log(arr)
}

var4(arr1)

// 5
function myFn() {
    console.log('hello from myFn')
}

setTimeout(myFn, 2000)

// 6
const cars = [
    {
        carBrand: 'Tesla',
        price: 100000,
        isAvailableForSale: true
    },
    {
        carBrand: 'Porsche',
        price: 150000,
        isAvailableForSale: true 
    },
    {
        carBrand: 'Dodge',
        price: 70000,
        isAvailableForSale: false 
    }
]

const var5 = (arr) => {
    let obj = arr[0]
    obj.carBrand = 'Peugeot'
    obj.price = 50000
    obj.isAvailableForSale = true
    arr.push(obj)
    console.log(arr)
}

var5(cars)

// 7
const myObject = {
    key1: true,
    key5: 10,
    key3: 'abc',
    key4: null,
    key10: NaN,
 }

const var6 = (obj) => {
    for (key in obj) {
        if (key === 'key3' || key === 'key10') {
            console.log(obj[key])
        }
    }
}

var6(myObject)

// 8
const products = [
    { productId: 1355, name: 'phone' },
    { productId: 5131, name: 'laptop' },
    { productId: 6134, name: 'tablet' },
]

const findProductById = (id, arr) => {
    let product = undefined;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].productId === id) {
            product = arr[i]
            break
        }
    }
    if (product !== undefined) {
        console.log(`productId: ${id}, productName: ${product.name}`)
    }
    return product
}

console.log(findProductById(6134, products))
console.log(findProductById(4511, products))

// 9
const a = [5, 'abc', 10, 1]
const b = [4, 10, 14, 25, 25, 50]
const c = [150, 132, 80, 40]
const d = [15, 26, 10, 23, 85]

const arraySortInfo = (inputArray) => {
    let accending = true
    let descending = true
    let allNumbers = true
    inputArray.every((element, index) => {
        if (typeof element !== 'number') {
            allNumbers = false

            return false
        }

        if (index > 0) {
            if (element > inputArray[index - 1]) {
                descending = false
            }

            if (element < inputArray[index - 1]) {
                accending = false
            }
        }
        return true
    })

    if (!allNumbers) {
        return "Деякі елементи не є числами"
    }
    if (accending) {
        return "Масив відсортований за зростанням"
    }
    if (descending) {
        return "Масив відсортований за спаданням"
    }
    return "Масив не відсортований"
}

console.log(arraySortInfo(a))
console.log(arraySortInfo(b))
console.log(arraySortInfo(c))
console.log(arraySortInfo(d))