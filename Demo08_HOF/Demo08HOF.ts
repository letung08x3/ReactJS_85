let sum = (a: number, b:number) => a+b;
let minus = (a: number, b:number) => a-b;
let multyfly = (a: number, b:number) => a*b;

let calculate = (a:number, b:number, f) =>  {
    let result = f(a,b);
    console.log(`Kết quả của phép tính là: , ${result}`);
    
}

calculate(20,30,sum)
calculate(20,30,minus)


