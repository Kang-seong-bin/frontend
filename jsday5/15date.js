console.log('1. 현재날짜와 시간(로컬)')
console.log(new Date())
console.log('2.날짜를 직접 지정')
console.log(new Date(2022,7,12))        //월을 number로 표기할 때는 0~11이기 때문에 7을 넣어주면 8월이 나온당.
console.log(new Date('2022-07-22'))
console.log('3.날짜와 시간')
console.log(new Date(2022,6,23,16,9,30))
console.log('4.세계표준시간- UTC')
console.log(new Date().toUTCString())
console.log('5.세계표준시간- ISO')
console.log(new Date().toISOString())   //ms까지 표시
console.log('6.로컬 형식 (운영체제설정 국가)')
console.log(new Date().toLocaleString())
console.log('*날짜는 자바에서는 long 타입값으로 1970-1-1 0시 기준 ms 값(타임스탬프)을 구한다.')
console.log(new Date().getTime())
console.log('7. 날짜/시간 메소드')
let today = new Date()
console.log('7-1) 년도 : ' + today.getFullYear())
console.log('7-2) 월 : ' + (today.getMonth()+1))    //월을 number로 표기할 때는 0~11
console.log('7-3) 일 : ' + today.getDate())
console.log('7-4) 시 : ' + today.getHours())
console.log('7-5) 분 : ' + today.getMinutes())
console.log('7-6) 초 : ' + today.getSeconds())
console.log('8.날짜변경 메소드')
today.setFullYear(today.getFullYear()+3)      //날짜 변경
console.log('1) 3년후 날짜 : ' + today)
today = new Date()
today.setFullYear(today.getFullYear()-3)
console.log('2) 3년전 날짜 : ' + today)


//여러분의 탄생일 기준
let mybirth = new Date('2002-07-10')
console.log('3)나의 탄생일 : ' + mybirth.toLocaleString()) 
mybirth.setDate(mybirth.getDate()+10000)
console.log('4)나의 탄생 10000일 기념일은 : ' + mybirth.toLocaleString())

//나는 태어난지 몇일?
mybirth = new Date('2002-07-10')
let diff = new Date() - mybirth
console.log('5) new Date() - mybirth')
console.log(diff + "ms")        //ms를 일로 변경하기 1일은 몇 ms? /1일은 24시간 * 60분 * 60초 * 1000ms
const $1day = 24*60*60*1000
console.log('6) 내가 태어난지 Day ' + Math.floor(diff/$1day) + "일")      //자바스크립트 반올림:Math.round();/올림:Math.ceil();/내림:Math,floor(); 메소드

today = new Date(2022,7,1)      //8월1일

console.log(today)  //Thu Jul 28 2022 14:39:24 GMT+0900 (대한민국 표준시)
                    //20220728
console.log("년도 : " + today.getFullYear())                    
console.log("월 : " + (today.getMonth()+1))    //월 0~11                
console.log("일 : " + today.getDate()) 
//월,일 은 무조건 2자리 숫자로 , 만약에 1~9 이면 앞에 0 추가                  
const month = (today.getMonth()+1).toString().padStart(2,0)
const date = today.getDate().toString().padStart(2,0)
let result = [today.getFullYear(),month,date].join('-')      
             //배열요소를 특정기호로 연결하기
console.log('9.날짜형식 yyyy-mm-dd')
console.log(result)
console.log('10.날짜형식 yyyy-mm-dd')
result = [today.getFullYear(),month,date].join('-')
console.log(result)

