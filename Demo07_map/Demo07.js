var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var number = [1, 2, 3, 4, 5, 6];
// tạo ra 1 mảng mới mà phần tử trong mảng mới bằng các phần tử trong mảng cũ + 5
var newNumber = [];
// number.forEach((num) => {
//   let num_new = num + 5;
//   newNumber.push(num_new);
// });
// map
newNumber = number.map(function (num) {
    return num + 5;
});
console.log("newNumber: ".concat(newNumber));
var Name = ["tùng", "lê", "ngọc", "min"];
var newName = Name.map(function (name) {
    return name.toUpperCase();
});
console.log(newName);
// Cho một mảng các đối tượng đại diện cho học sinh. Hãy sử dụng map() để tạo một mảng mới chỉ chứa tên của học sinh.
var students = [
    { name: 'Minh', age: 12 },
    { name: 'Linh', age: 14 },
    { name: 'An', age: 13 }
];
var nameStudent = students.map(function (stu) {
    return stu.name;
});
console.log(nameStudent);
// Viết một hàm nhận vào một mảng và trả về một mảng mới với mỗi phần tử là tích của giá trị ban đầu với chỉ số của nó.
var numberArr = [2, 5, 69, 4, 3, 9];
var newNumberArr = numberArr.map(function (num, index) {
    return (num * index);
});
console.log(newNumberArr);
// Cho một mảng các đối tượng chứa thông tin của sinh viên, mỗi đối tượng có các thuộc tính name, score (điểm số). 
// Viết một hàm sử dụng map() để chuẩn hóa dữ liệu, thêm một thuộc tính grade (xếp loại) cho mỗi sinh viên dựa trên điểm số của họ:
// score >= 90: "A"
// score >= 80: "B"
// score >= 70: "C"
// score >= 60: "D"
// score < 60: "F"
var students_2 = [
    { name: 'Minh', score: 95 },
    { name: 'Linh', score: 85 },
    { name: 'Hoang', score: 72 },
    { name: 'An', score: 55 }
];
var newStudent2 = students_2.map(function (std) {
    var grade = '';
    if (std.score >= 90) {
        grade = "A";
    }
    else if (std.score >= 80) {
        grade = "B";
    }
    else if (std.score >= 70) {
        grade = "C";
    }
    else if (std.score >= 60) {
        grade = "D";
    }
    else {
        grade = "F";
    }
    return __assign(__assign({}, std), { grade: grade }); // thêm thuộc tính vào 1 đối tượng std
});
console.log(newStudent2);
// Cho một mảng các đối tượng đại diện cho các giao dịch trong một cửa hàng.
//  Mỗi giao dịch có thuộc tính product (tên sản phẩm) và price (giá). 
// Viết một hàm sử dụng map() để tạo một mảng mới chứa các chuỗi định dạng của từng giao dịch theo mẫu:
// text
// "Sản phẩm [tên sản phẩm]: $[giá tiền]"
var transactions = [
    { product: 'Laptop', price: 1200 },
    { product: 'Phone', price: 800 },
    { product: 'Tablet', price: 500 }
];
var textArr = transactions.map(function (tran, index) {
    return ("".concat(index + 1, ". S\u1EA3n ph\u1EA9m ").concat(tran.product, ": ").concat(tran.price));
});
console.log(textArr);
// Cho một mảng các đối tượng đại diện cho các đơn hàng, 
// mỗi đối tượng có thuộc tính quantity (số lượng) và price (giá mỗi đơn vị). 
// Viết một hàm sử dụng map() để tính tổng giá trị của từng đơn hàng và trả về một mảng mới chỉ chứa giá trị tổng cộng của từng đơn hàng.
var orders = [
    { quantity: 2, price: 100 },
    { quantity: 5, price: 50 },
    { quantity: 1, price: 200 }
];
var bill = orders.map(function (order) {
    return order.price * order.quantity;
});
console.log(bill);
// Question 2: khai báo 1 function multiply() có tham số không giới hạn
// Kết quả:
// multiply(5)  5
// multiply(5,3)  15
// multiply(5,3,2)  30
var multiply = function () {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var total = 1;
    num.forEach(function (num) {
        total *= num;
    });
    return {
        total: total
    };
};
console.log(multiply(5, 3));
console.log(multiply(20, 4, 6));
// Question 3: khai báo 1 function printInformation() có 2 tham số name, email.
// Và có email là optional parameter
// Kết quả:
// printInformation("Nam","Namvv20@gmail.com")
//  tôi là Nam. Email của tối là Namvv20@gmail.com
// printInformation("Nam")
//  tôi là Nam. Tôi chưa có Email
var printInformation = function (name, email) {
    if (email === void 0) { email = "Tôi chưa có email"; }
    if (email === "Tôi chưa có email") {
        return console.log("T\u00F4i l\u00E0 ".concat(name, ". ").concat(email));
    }
    else {
        return console.log("T\u00F4i l\u00E0 ".concat(name, ". Email c\u1EE7a t\u00F4i l\u00E0 ").concat(email));
    }
};
printInformation("Nam", "Namvv20@gmail.com");
printInformation("Nam");
function greeting(name) {
    console.log("Xin chào, " + name);
}
function processUserInput(greeting) {
    var name = "Nam";
    greeting(name); // Gọi hàm callback và truyền giá trị cho nó
}
processUserInput(greeting); // Output: "Xin chào, Nam"
