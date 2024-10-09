function sum(a_param, b_param) {
    return a_param + b_param;
}
console.log("T\u1ED5ng 2 s\u1ED1: ".concat(sum(10, 20), " "));
// arrow function
var v_sum = function (a, b) {
    return a + b;
};
// let v_sum = (a, b) => a + b; // cách viết rút gọn khi chỉ return 1 dòng
console.log("T\u1ED5ng 2 s\u1ED1: ".concat(v_sum(5, 10)));
