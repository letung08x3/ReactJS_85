var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Exercise 1: Destructuring
// Question 1:
// Khai báo date có dạng như sau:
// var date: number[] = [2020,12,08];
// Hãy lấy ra year, month, day của date và in ra
var date = [2020, 12, 8];
var year = date[0], month = date[1], day = date[2];
console.log("---------------Question 1-------------");
console.log("Year: ".concat(year));
console.log("Month: ".concat(month));
console.log("Day: ".concat(day));
console.log("---------------Question 2-------------");
// Question 2:
// Khai báo fullname có dạng như sau
var person = {
    firstName: "nguyen",
    lastName: "a",
    age: 20
};
// Hãy lấy ra firstName, lastName, age của persn và in ra
var v_firtName = person.firstName, v_lastName = person.lastName, v_age = person.age;
console.log("firtName: ".concat(v_firtName));
console.log("lastName: ".concat(v_lastName));
console.log("age: ".concat(v_age));
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
var fullName = "Lê Tùng";
var age = 34;
var abc = "T\u00F4i t\u00EAn l\u00E0 ".concat(fullName, ", n\u0103m nay ").concat(age, " tu\u1ED5i, \u0111ang start up!");
console.log(abc);
console.log("---------------Ex2: Question 2-------------");
var a = 5;
var b = 20;
console.log(" T\u1ED5ng 2 s\u1ED1 a v\u00E0 b l\u00E0: ".concat(a + b, " "));
console.log("---------------Ex2: Question 3-------------");
var menu = [
    {
        stt: 1,
        label: "chả giò nón lá"
    },
    {
        stt: 2,
        label: "Bò lúc lắc hạt điều"
    },
    {
        stt: 3,
        label: "Lẩu hải sản"
    }
];
for (var index = 0; index < menu.length; index++) {
    var element = menu[index];
    console.log("".concat(element.stt, ". ").concat(element.label, " "));
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
var arr1 = [2, 4, 6, 8, 10];
var arr2 = __spreadArray(__spreadArray([], arr1, true), [5, 7, 9], false);
var arr3 = __spreadArray([], arr2, true);
var cold = ['autum', 'winter'];
var warm = ['spring', 'summer'];
var seasons = __spreadArray(__spreadArray([], cold, true), warm, true);
console.log("---------------Ex4:-------------");
console.log("--------Q1---------");
var sum = function (b1) { return a + 100; };
console.log(sum(50));
console.log("--------Q2-a---------");
var sumAB = function (c1, b1) { return c1 + b1 + 100; };
console.log(sumAB(10, 20));
console.log("--------Q2-b---------");
var sum2 = function (c1, b1) {
    var chuck = 42;
    return b1 + c1 + chuck;
};
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
