// 기본 포멧
function func1(a: number, b: number): number {
  return a + b;
}
// func1(2, 3);

// optional parameter
function func2(a: number, b?: number): number {
  return a + b;
}
// func2(2, 3);
// func2(2);

// default parameter value
function func3(a: number, b = 10): number {
  return a + b;
}
// func3(2, 3);
// func3(2);

// rest parameter
function func4(a: number, ...nums: number[]): number {
  let total = a;

  for(let key in nums) {
    total += nums[key];
  }

  return total;
}
// func4(2, 3, 4, 5);