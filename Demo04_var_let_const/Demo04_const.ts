
// const: khai báo hằng số 

const pi = 3.14


// khi khai báo object bằng const thì có thể thay đổi các thuộc tính trong obj
const student1 = {
id: 1,
name: "lê tùng",
age: 34,
address: "HN"
}

student1.id = 2;
student1.name = "min"

console.log(student1.id);
console.log(student1.name);
console.log(student1.age);
console.log(student1.address);

const Railway85 = ["Tùng", "Hiển", "My"]
Railway85[1] = "Min"
Railway85[0] = "Mon"

console.log(Railway85);




