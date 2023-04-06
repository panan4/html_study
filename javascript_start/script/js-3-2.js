let wether = ['맑음','흐림','비옴','눈옴','더움']

const wt = document.querySelectorAll('.result')
const answer_btn = document.querySelector('#answer_btn')
console.log(wt, answer_btn)
console.log(wt[0], wt[1])

answer_btn.addEventListener('click', function(){
    wt[0].innerHTML = `월요일 - ${wether[0]}`
    wt[1].innerHTML = `화요일 - ${wether[0]}`
    wt[2].innerHTML = `수요일 - ${wether[2]}`
    wt[3].innerHTML = `목요일 - ${wether[2]}`
    wt[4].innerHTML = `금요일 - ${wether[0]}`
    wt[5].innerHTML = `토요일 - ${wether[1]}`
    wt[6].innerHTML = `일요일 - ${wether[3]}`
})