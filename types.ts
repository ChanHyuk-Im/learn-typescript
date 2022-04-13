let str1: string = 'Hello, World!';

let num1: number = 10;

let bool1: boolean = true;

let arr1: number[] = [1, 2, 3];
let arr2: Array<string> = ['1', '2', '3'];

let tup1: [string, number] = ['Hello', 10];
// error!
// tup1.concat('!');
// tup1[5] = 'Hello';

enum Fruits { Apple, Banana, Cherry }
let apple: Fruits = Fruits.Apple;
let banana: Fruits = Fruits.Banana;

let str2: any = 'Hello, World!';
let num2: any = 10;
let bool2: any = true;
let arr3: any = [1, 2, 3];

let temp1: void = undefined;    // void는 undefined, null만 할당
function temp2(): void {      // 함수 return이 없다는 의미
  // ...
}

function temp3(): never {   // 함수가 끝나지 않는다는 의미
  while(true) {}
}