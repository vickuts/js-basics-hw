// 1
const hamburger = 3;
const fries = 3;
if(hamburger >= 3 && fries >=1) {
    console.log('Ми поїли')
} else {
    console.log('Ми йдемо в інше кафе')
}

// 2
const price1 = 1500;
if(price1 >= 1000 && price1 <= 1900) {
    console.log('Значення ціни знаходиться між 1000 та 1900 включно')
} else {
    console.log('Значення ціни не знаходиться між 1000 та 1900 включно')
}

// 3
// first variant
const price2 = 2000;
if(price2 < 1000 || price2 > 1900) {
    console.log('Значення ціни не знаходиться між 1000 та 1900 включно')
} else {
    console.log('Значення ціни знаходиться між 1000 та 1900 включно')
}
// second variant
const price3 = 1900;
if(!(price3 >= 1000 && price3 <= 1900)) {
    console.log('Значення ціни не знаходиться між 1000 та 1900 включно')
} else {
    console.log('Значення ціни знаходиться між 1000 та 1900 включно')
}

// 4
const season = 4;
if(season == 1) {
    console.log('Зима')
} else if(season == 2) {
    console.log('Весна')
} else if(season == 3) {
    console.log('Літо')
} else if (season == 4) {
    console.log('Осінь')
} else {
    console.log('Incorrect season number')
}

// 5
const num1 = 4;
const num2 = 5;
const num3 = 2;

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

// 6
const day = 3;
switch(day) {
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

// 7
const a = 15;
const b = 3;
const sign = "+";
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

// 8
const str = 'Hello world!';
console.log(str.replace(/[aeiouy]/gi, ''))

// 9
let val = 3002;
let res = val / 1000;
let resInt = Number.parseInt(res);
if((resInt % 10 === 1) && (resInt % 100 !== 11)) {
    console.log(`${val} метрів це ${res} кілометр`)
} else if((resInt % 10 === 2 || resInt % 10 === 3 || resInt % 10 === 4) && resInt % 100 !== 12 && resInt % 100 !== 13 && resInt % 100 !== 14) {
    console.log(`${val} метрів це ${res} кілометри`)
} else if(res < 1) {
    console.log(`${val} метрів це ${res} кілометра`)
} else {
    console.log(`${val} метрів це ${res} кілометрів`)
}
