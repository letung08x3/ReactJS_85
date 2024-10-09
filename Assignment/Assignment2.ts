// Exercise 1: Destructuring
// Question 1:
// Khai báo date có dạng như sau:
// var date: number[] = [2020,12,08];
// Hãy lấy ra year, month, day của date và in ra
let date: number[] = [2020, 12, 8];

let [year, month, day] = date

console.log("---------------Question 1-------------");

console.log(`Year: ${year}`);
console.log(`Month: ${month}`);
console.log(`Day: ${day}`);

console.log("---------------Question 2-------------");

// Question 2:
// Khai báo fullname có dạng như sau
const person = {
    firstName: "nguyen",
    lastName: "a",
    age: 20
};
// Hãy lấy ra firstName, lastName, age của persn và in ra

let { firstName: v_firtName, lastName: v_lastName, age: v_age } = person
console.log(`firtName: ${v_firtName}`);
console.log(`lastName: ${v_lastName}`);
console.log(`age: ${v_age}`);


// Exercise 2: Template String
// Question 1:
// Tạo String có nội dung như sau:
// "Tôi tên là ???, năm nay ??? tuổi, đang ế!"
// Với 2 variable là fullName và age. Hãy tạo template String và điền vào
// tên của bạn
// Question 2:
// Khai báo 2 số a = 5, b = 20. In ra câu sau:
// "Tổng của {a} và {b} là {a+b}"

// Question 3:
// Sử dụng template string để in

console.log("---------------Ex2: Question 1-------------");

let fullName = "Lê Tùng"
let age = 34
let abc = `Tôi tên là ${fullName}, năm nay ${age} tuổi, đang start up!`

console.log(abc);

console.log("---------------Ex2: Question 2-------------");
let a = 5
let b = 20

console.log(` Tổng 2 số a và b là: ${a + b} `);

console.log("---------------Ex2: Question 3-------------");

const menu = [
    {
        stt: 1,
        label: "chả giò nón lá"
    },
    {
        stt: 2,

        label: "Bò lúc lắc hạt điều"
    }
    ,
    {
        stt: 3,

        label: "Lẩu hải sản"
    }
]

for (let index = 0; index < menu.length; index++) {
    const element = menu[index];

    console.log(`${element.stt}. ${element.label} `);
}

// Exercise 3: ... operator
// Question 1:
// Khai báo array thứ 1 gồm các số chẵn từ 2 tới 10
// Sau đó khai báo array thứ 2 bao gồm các số của array thứ 1 và thêm
// các số lẻ từ 5 tới 9
// Question 2:
// Copy array thứ 2 ở Question 1 ra 1 array mới
// Question 3:
// Khai báo array có tên cold, bao gồm các value 'autumn', 'winter'
// Khai báo array có tên warm, bao gồm các value ['spring', 'summer']
// Gộp 2 array này thành 1 array mới có tên là seasons

const arr1 = [2, 4, 6, 8, 10]
const arr2 = [...arr1, 5, 7, 9]

const arr3 = [...arr2]

const cold = ['autum', 'winter']
const warm = ['spring', 'summer']

const seasons = [...cold, ...warm]

console.log("---------------Ex4:-------------");
console.log("--------Q1---------");
const sum = (b1) => a + 100
console.log(sum(50));

console.log("--------Q2-a---------");

const sumAB = (c1, b1) => c1 + b1 + 100
console.log(sumAB(10, 20));


console.log("--------Q2-b---------");
const sum2 = (c1, b1) => {
    let chuck = 42
    return b1 + c1 + chuck
}
console.log(sum2(12, 24));




// Exercise 5: Parameter
// Question 1: khai báo 1 function multiply() có 2 tham số a,b. Và có b có
// default value
// Kết quả:
// multiply(5,3)  15
// multiply(5)  5
// Question 2: khai báo 1 function multiply() có tham số không giới hạn
// Kết quả:

// 3

// multiply(5)  5
// multiply(5,3)  15
// multiply(5,3,2)  30
// Question 3: khai báo 1 function printInformation() có 2 tham số name, email.
// Và có email là optional parameter
// Kết quả:
// printInformation("Nam","Namvv20@gmail.com")
//  tôi là Nam. Email của tối là Namvv20@gmail.com
// printInformation("Nam")
//  tôi là Nam. Tôi chưa có Email



























