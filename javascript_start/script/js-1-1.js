//선언
const answer_btn = document.querySelector('#answer_btn')
const answer_input = document.querySelector('#result')

let day1 = 10
let day2 = 5
let day3 = 8
let total =day1 + day2 + day3

//콘솔출력
console.log(total, answer_btn, answer_input)
//대입

//입력받기
/* answer_input.value = `${total}장 입니다.` */
console.log(answer_input)

//요소.addEventListener(이벤트종류, 함수실행 및 호출);
answer_btn.addEventListener(`click`, function(){
    answer_input.value = `정답은 ${total} 장 입니다.`})