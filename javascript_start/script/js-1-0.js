
//선언
/* const h1 = document.getElementsByTagName('h1')
const sub_title = document.getElementsByClassName('sub_title')
const h3 = document.getElementsByTagName('h3')
const p = document.getElementsByTagName('p')
const main = document.getElementById('main')
const btn = document.getElementById('btn')
const link = document.getElementById('link') */
//ES6 DOM ver ex)querySelector
const h1_tag = document.querySelector('h1')
const h2_cls = document.querySelectorAll('.sub_title')
const h3_tag = document.querySelector('h3')
const p = document.querySelectorAll('p')
const main = document.querySelector('#main')
const btn = document.querySelector('#btn')
const link = document.querySelector('#link')
const h1_after = document.querySelector('h1::after')
const box_h4 = document.querySelector('.box > h4')

//콘솔출력
//console.log(h1_after)
console.log(h1_tag, box_h4)//변수값 확인
console.log(h2_cls[1], h2_cls[0])
console.log(h3_tag)
console.log(p[0])
console.log(main)
console.log(btn)
console.log(link)
/* console.log(h1[0])
console.log(sub_title[0])
console.log(sub_title[1])
console.log(h3[0])
console.log(p[0])
console.log(main)
console.log(btn)
console.log(link) */

//CSS/ 객체.style.content = '속성값'
h1_tag.style.backgroundColor = '#ff0'

//대입

//연산

