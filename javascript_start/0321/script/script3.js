const btn1 = document.getElementById('btn1')
const btn = document.getElementsByClassName('btn')
console.log(btn1)
console.log(btn1.innerHTML)
//내용을 변경한다 = 내용 대입한다.
btn1.innerHTML = '확인완료'
btn[0].innerHTML = 'HOME'
btn[1].innerHTML = 'MAIL'
btn[2].innerHTML = 'CAFE'
btn[3].innerHTML = 'BLOG'