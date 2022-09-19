// 1
function mcdonalds(hamburger, fries) {
    if(hamburger >= 3 && fries >=1) {
        console.log('Ми поїли')
    } else {
        console.log('Ми йдемо в інше кафе')
    }
}

mcdonalds(3, 3)

// 2
function checkPrice_1(value) {
    if(value >= 1000 && value <= 1900) {
        console.log('Значення ціни знаходиться між 1000 та 1900 включно')
    } else {
        console.log('Значення ціни не знаходиться між 1000 та 1900 включно')
    }
}

checkPrice_1(1500)

// 3
// first variant
function checkPrice_2(value) {
    if(value < 1000 || value > 1900) {
        console.log('Значення ціни не знаходиться між 1000 та 1900 включно')
    } else {
        console.log('Значення ціни знаходиться між 1000 та 1900 включно')
    }
}

checkPrice_2(2000)

// second variant
function checkPrice_3(value) {
    if(!(value >= 1000 && value <= 1900)) {
        console.log('Значення ціни не знаходиться між 1000 та 1900 включно')
    } else {
        console.log('Значення ціни знаходиться між 1000 та 1900 включно')
    }
}

checkPrice_3(1000)

// 4
function seasons(number) {
    if(number == 1) {
        console.log('Зима')
    } else if(number == 2) {
        console.log('Весна')
    } else if(number == 3) {
        console.log('Літо')
    } else if (number == 4) {
        console.log('Осінь')
    } else {
        console.log('Incorrect season number')
    }
}

seasons(4)

// 5
function average(num1, num2, num3) {
    if(num1 < num2) {
        if(num2 < num3) {
            console.log(`Середнє за значенням число ${num2}`)       
        } else if (num3 < num1) {
            console.log(`Середнє за значенням число ${num1}`)  
        } else {
            console.log(`Середнє за значенням число ${num3}`) 
        }
    } else {
        if(num2 > num3) {
            console.log(`Середнє за значенням число ${num2}`) 
        } else if (num3 < num1) {
            console.log(`Середнє за значенням число ${num3}`) 
        } else {
            console.log(`Середнє за значенням число ${num1}`) 
        }
    } 
}

average(4, 5, 2)

// 6
function dayOfWeeek(number) {
    switch(number) {
        case 1:
            console.log('Понеділок')
            break;
        case 2:
            console.log('Вівторок')
            break;  
        case 3:
            console.log('Середа')
            break;  
        case 4:
            console.log('Четвер')
            break;  
        case 5:
            console.log('П\'ятниця')
            break;  
        case 6:
            console.log('Субота')
            break;
        case 7:
            console.log('Неділя')
            break;
    }  
}

dayOfWeeek(3)

// 7
function calculation(a, b, sign) {
    switch(sign) {
        case "+":
            console.log(a + b)
            break;
        case "-":
            console.log(a - b)
            break;
        case "*":
            console.log(a * b)
            break;
        case "/":
            console.log(a / b)
            break;
    }
}

calculation(15, 3, "+")

// 8
function withoutVowels(string) {
    console.log(string.replace(/[aeiouy]/gi, '')) 
}

withoutVowels("Hello world!")

// 9
function metersToKilometers(value) {
    let res = value / 1000;
    let resInt = Number.parseInt(res);
    if((resInt % 10 === 1) && (resInt % 100 !== 11)) {
        console.log(`${value} метрів це ${res} кілометр`)
    } else if((resInt % 10 === 2 || resInt % 10 === 3 || resInt % 10 === 4) && resInt % 100 !== 12 && resInt % 100 !== 13 && resInt % 100 !== 14) {
        console.log(`${value} метрів це ${res} кілометри`)
    } else if(res < 1) {
        console.log(`${value} метрів це ${res} кілометра`)
    } else {
        console.log(`${value} метрів це ${res} кілометрів`)
    }   
}

metersToKilometers(3002)