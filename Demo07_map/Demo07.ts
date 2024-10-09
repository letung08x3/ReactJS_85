let number = [1, 2, 3, 4, 5, 6];
// tạo ra 1 mảng mới mà phần tử trong mảng mới bằng các phần tử trong mảng cũ + 5
let newNumber: Number[] = [];
// number.forEach((num) => {
//   let num_new = num + 5;
//   newNumber.push(num_new);
// });



// map

newNumber = number.map((num) => {
  return num + 5
})
console.log(`newNumber: ${newNumber}`);

const Name = ["tùng", "lê", "ngọc", "min"]
const newName = Name.map((name) => {
  return name.toUpperCase()
})

console.log(newName);

// Cho một mảng các đối tượng đại diện cho học sinh. Hãy sử dụng map() để tạo một mảng mới chỉ chứa tên của học sinh.

const students = [
  { name: 'Minh', age: 12 },
  { name: 'Linh', age: 14 },
  { name: 'An', age: 13 }
];

const nameStudent = students.map((stu) => {
  return stu.name
})

console.log(nameStudent);

// Viết một hàm nhận vào một mảng và trả về một mảng mới với mỗi phần tử là tích của giá trị ban đầu với chỉ số của nó.

const numberArr = [2, 5, 69, 4, 3, 9]
const newNumberArr = numberArr.map((num, index) => {
  return (num * index)
})

console.log(newNumberArr);


// Cho một mảng các đối tượng chứa thông tin của sinh viên, mỗi đối tượng có các thuộc tính name, score (điểm số). 
// Viết một hàm sử dụng map() để chuẩn hóa dữ liệu, thêm một thuộc tính grade (xếp loại) cho mỗi sinh viên dựa trên điểm số của họ:
// score >= 90: "A"
// score >= 80: "B"
// score >= 70: "C"
// score >= 60: "D"
// score < 60: "F"

const students_2 = [
  { name: 'Minh', score: 95 },
  { name: 'Linh', score: 85 },
  { name: 'Hoang', score: 72 },
  { name: 'An', score: 55 }
];

const newStudent2 = students_2.map((std) => {
  let grade = '';
  if (std.score >= 90) {
    grade = "A";
  }
  else if (std.score >= 80) {
    grade = "B"
  }
  else if (std.score >= 70) {
    grade = "C"
  }
  else if (std.score >= 60) {
    grade = "D"
  }
  else { grade = "F" }
  return { ...std, grade: grade } // thêm thuộc tính vào 1 đối tượng std

})

console.log(newStudent2);

// Cho một mảng các đối tượng đại diện cho các giao dịch trong một cửa hàng.
//  Mỗi giao dịch có thuộc tính product (tên sản phẩm) và price (giá). 
// Viết một hàm sử dụng map() để tạo một mảng mới chứa các chuỗi định dạng của từng giao dịch theo mẫu:

// text
// "Sản phẩm [tên sản phẩm]: $[giá tiền]"

const transactions = [
  { product: 'Laptop', price: 1200 },
  { product: 'Phone', price: 800 },
  { product: 'Tablet', price: 500 }
];


const textArr = transactions.map((tran, index) => {
  return (
    `${index + 1}. Sản phẩm ${tran.product}: ${tran.price}`
  )
})

console.log(textArr);

// Cho một mảng các đối tượng đại diện cho các đơn hàng, 
// mỗi đối tượng có thuộc tính quantity (số lượng) và price (giá mỗi đơn vị). 
// Viết một hàm sử dụng map() để tính tổng giá trị của từng đơn hàng và trả về một mảng mới chỉ chứa giá trị tổng cộng của từng đơn hàng.


const orders = [
  { quantity: 2, price: 100 },
  { quantity: 5, price: 50 },
  { quantity: 1, price: 200 }
];

const bill = orders.map((order) => {
  return order.price * order.quantity
})

console.log(bill);

// Question 2: khai báo 1 function multiply() có tham số không giới hạn
// Kết quả:
// multiply(5)  5
// multiply(5,3)  15
// multiply(5,3,2)  30

const multiply = (...num) => {
  let total = 1;
  num.forEach(num => {
    total *= num
  });
  return {
    total
  }
}

console.log(multiply(5, 3));
console.log(multiply(20, 4, 6));

// Question 3: khai báo 1 function printInformation() có 2 tham số name, email.
// Và có email là optional parameter
// Kết quả:
// printInformation("Nam","Namvv20@gmail.com")
//  tôi là Nam. Email của tối là Namvv20@gmail.com
// printInformation("Nam")
//  tôi là Nam. Tôi chưa có Email

const printInformation = (name, email = "Tôi chưa có email") => {
  if (email === "Tôi chưa có email") {
    return console.log(`Tôi là ${name}. ${email}`);
  }
  else {
    return console.log(`Tôi là ${name}. Email của tôi là ${email}`);
  }
}
printInformation("Nam", "Namvv20@gmail.com")
printInformation("Nam")


function greeting(name) {
  console.log("Xin chào, " + name);
}

function processUserInput(greeting) {
  const name = "Nam";
  greeting(name); // Gọi hàm callback và truyền giá trị cho nó
}

processUserInput(greeting); // Output: "Xin chào, Nam"








