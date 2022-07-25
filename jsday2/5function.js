//      함수의 목적 : 코드의 재사용.
//      자바스크립트에서 함수는 객체 타입입니다.
//      자바의 메소드처럼 필요에 따라 인자(아래 코드의 x), 리턴 값(아래 코드의 리턴 값)이 있습니다.

//1. 함수의 기본형식 : 함수 리터럴(아래 코드의 등호 오른쪽)로 선언하기
const myfunc1 = function(x) {       //myfunc1 은 함수 리터럴 참조하는 식별자.
    console.log('myfunc1 함수 입니다.');
    return x*11 + 12;     //리턴이 있습니다.
}      

//const val = 123; //123은 number형식 리터럴

//함수 호출.- 위의 함수 식별자(변수)로 호출합니다.
let result = myfunc1(10);   //함수 실행후 리턴값은 result 변수에 저장합니다.
console.log('result : ' + result);

result = myfunc1();       //인자 값이 없으면 -> 리턴 값을 계산 못하고 -> 리턴 NaN(Not a Number)
console.log('result : ' + result);

//2. 함수의 기본형식 : 리터럴 없이 선언하기, 함수이름을 사용
//                 식별자선언이 생략된 형태이고 자동으로 함수이름을 식별자로 합니다.
function myfunc2(y) {
    console.log('myfunc2입니다.');
    console.log('myfunc1에서 지정하지 않은 함수이름이 있습니다.')
    return y*11 -12;
}

result = myfunc2(10);       //myfunc2가 함수이름이면서 생략된 식별자(변수)
console.log('result : ' + result)

//3. 함수리터럴을 화살표 함수의 사용. 인자를 받아서 리턴값 전달할때 사용.
const myfunc3 = (x) => x*11+12;     //myfunc1과 리턴하는 수식이 동일.

console.log('myfunc3 result : ' + myfunc3(10))      //리턴값이 있을 때 변수저장을 사용하지 않고 출력

const myfunc4 = (x) => {
console.log('myfunc4 : myfunc2와 동일하게 동작합니다.')
return x*11-12;
};  //화살표 함수에서 실행명령이 여러 개이면 { } 사용.

console.log('result : ' + myfunc4(10))

const myfunc5 = (x) => console.log('myfunc5 x:' + x);

myfunc5(999);           //리턴 값 없습니다. -> 무용지물임     리턴 값이 있으면 그 값을 출력하기 위해 있기 때문에 저장을 해줘야 한다.
console.log(myfunc5(999));     //myfunc5 실행 그 후 리턴값이 없으므로 undefined 출력

//자바에서는 리턴 값이 없는 메소드를 리턴 값을 받아서 저장/출력하려고 하면 오류가 발생한다.
//자바스크립트에서는 오류없이 undefined 입니다. myfunc5 실행 그 후 리턴값이 없으므로 undefined 출력



