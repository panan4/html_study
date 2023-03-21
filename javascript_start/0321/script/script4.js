const more = document.getElementsByClassName('more')
const img = document.getElementsByTagName('img')
const plus = document.getElementsByClassName('plus')
const join_btn = document.getElementById('join_btn')
const li = document.getElementsByTagName('li')


console.log(more[0])
console.log(img[0])
console.log(plus[0], plus[1])
console.log(join_btn)
console.log(li[0], li[1], li[2], li[3], li[4])

join_btn.innerHTML = "가입"
plus[0].innerHTML = "야"
plus[1].innerHTML = "호"

//-------------style속성
//객체.속성
//style==css 속성이란 font-size, background 등등...
//객체.style.속성명 = '값'
more[0].style.color = 'red'
li[0].style.backgroundColor = '#ff10'
li[1].style.backgroundColor = '#ff11'
li[2].style.backgroundColor = '#ff12'
li[3].style.backgroundColor = '#ff13'
li[4].style.backgroundColor = '#ff04'