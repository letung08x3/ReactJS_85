function sum (a_param, b_param) {
    return a_param + b_param
}

console.log(`Tổng 2 số: ${sum(10,20)} `);


// arrow function
let v_sum = (a, b) => {
    return a + b
}

// let v_sum = (a, b) => a + b; // cách viết rút gọn khi chỉ return 1 dòng


console.log(`Tổng 2 số: ${v_sum(5,10)}`);
