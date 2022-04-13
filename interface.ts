{
  interface Inter1 {
    a: number;
    c?: boolean;    // optional
    readonly d: number;   // 객체 생성 이후에는 변경 불가
    // [propName: string]: any;     // 정의되지 않은 속성을 추가로 사용하고 싶을 때
  }
  
  function func5(obj: Inter1) {
    console.log(obj.a);
  
    // error!
    // obj.d = 1;
  }
  
  let obj1 = { a: 1, b: '1', d: 2 };
  func5(obj1);
  
  // error!
  // func5({ a: 2, b: '2', c: false, d: 1 });
}

{
  interface Inter2 {      // 함수 타입을 정의하는 인터페이스
    (a: number, b: number): boolean;
  }
  
  let func6: Inter2;
  func6 = function(param1: number, param2: number): boolean {
    return param1 === param2;
  }
}

{
  interface Inter3 {      // 클래스 타입을 정의하는 인터페이스
    a: string;
    b(param: string): void;
  }
  
  class Cla1 implements Inter3 {
    a: string = 'Hello, World!';
    b(param: string): void {
      this.a = 'Bye, World!';
    }
    constructor() {}
  }
}

{
  interface Inter1 {
    a: string;
  }

  interface Inter2 extends Inter1 {     // 인터페이스 확장
    b: string;
  }

  let c = {} as Inter2;
  c.a = 'Hello';
  c.b = 'World';
}