//인증번호 확인을 누르면 프롬포트창이 나오고 인증글자가  인증문자확인칸에
//그래도 출력이 되어야하고 인증데이터타입확인의 결과가 출력되어야한다.

const answer_btn = document.querySelector('#answer_btn')
const answer_input1 = document.querySelector('#result1')
const answer_input2 = document.querySelector('#result2')

answer_btn.addEventListener('click', function(){
    let q = window.prompt('인증번호를 입력하세요.')
    console.log(q)
    answer_input2.value = q
    answer_input1.value = typeof q
})
