// !-- onchange는 select 선택값이 변경될 때 처리할 이벤트핸들러를 설정. 
//             daySelect()는 확인 또는 테스트로 활용
//         -->
// <!-- 퇴실날짜 = 입실날짜 + 숙박일수 계산해서 표시하기
//         핵심이 되는 함수는 endOutput() 
//         -->
//전역변수 선언할 위치
//자바스크립트 데이터 타입은 바뀔 수 있습니다.
let days = document.forms[0].days   //요소      //첫번째 FORM태그의 DAYS라는 이름을 가진 요소를 불러온다. 
console.log(typeof days)            //object    //
console.log(typeof days.value)      //string    //DAYS의 데이터타입 불러오기
days = parseInt(days.value)         //days의 데이터타입을 string에서 int로 변환
console.log(typeof days)            //number , 숙박일수 더할 값
//여기까지는 동적타입 확인하기 위한 코드입니다.

days= document.forms[0].days        //object 
let start = document.forms[0].start
// 선택할 수 있는 입실날짜의 범위 설정 min 속성 값 ~ max 속성 값
let today = new Date()
start.min = dateFormat(today)
today.setDate(today.getDate()+25)       //임의로 오늘로부터 25일까지로 지정해줌
start.max = dateFormat(today)


function daySelect(){
    // var rest_date = document.getElementById('days');
    // alert( "숙박일 : " + rest_date.options[rest_date.selectedIndex].text)

    alert('숙박일수 ' + days.value + "일 입니다.")
    console.log('숙박일수 ' + days.value + '일 입니다.')
    if(start.value != '')   //만약 숙박일수를 입력해주지 않고 입실날짜를
        endOutput()         //선택해줬을 때 이후에 숙박일수를 넣어주면 ->이 때 퇴실날짜 변경해준다.
}
function endOutput(){
    //parseInt() : select에서 선택한 값은 typeof 가 string
    let end = new Date(start.value)       //선택한 입실날짜로 Date 객체 생성
    console.log('입실날짜 : ' + end)
    end.setDate(end.getDate() + parseInt(days.value))
    console.log('퇴실날짜 : ' + end)
    console.log('퇴실날짜 dateFormat : ' + dateFormat(end))
    document.forms[0].end.value = dateFormat(end)
}
function dateFormat(someday){       //날짜 타입 new Date() 인자 -> yyyy-MM-dd 형식 문자열리턴
    const month = (someday.getMonth()+1).toString().padStart(2,0)
    const date = someday.getDate().toString().padStart(2,0)
    let result = [someday.getFullYear(),month,date].join('-')
                     //배열요소를 특정기호로 연결하기
    console.log("dateFormat : " + result)
    return result 
}                      
