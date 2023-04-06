let userId = ['a','b','c','d','e']
let userPw = ['1','2','3','4','5']

const id_pw_result = document.querySelectorAll('.result')
const answer_btn = document.querySelector('#answer_btn')
console.log(id_pw_result, answer_btn)
console.log(id_pw_result[0], id_pw_result[1])

answer_btn.addEventListener('click', function(){
    id_pw_result[0].innerHTML = userId[1]
    id_pw_result[1].innerHTML = userPw[1]
})