const user = document.querySelectorAll('.box input')
console.log(user)
//input에 마우스 커서를 올렸을때 == focus
//id노란색,pw노란색

//이벤트 내에 function은 this 대상을 dom이벤트 객체로 인식하고
//화살표 함수는 this를 js전역객체대상으로 인식하기 때문에 정확하게 대상을 구분해야한다.
user[0].addEventListener('focus', function(){
    bg(this)
})
user[1].addEventListener('focus', function(){
    bg(this)
})
user[2].addEventListener('focus', function(){
    bg(this)
})
function bgfff(n){
    /* return n.style.background ='none' */
    user[0].style.background = 'none'
    user[1].style.background = 'none'
    user[2].style.background = 'none'
}
function bg(target){
/*     bgfff(user[2])
    bgfff(user[1])
    bgfff(user[0]) */
    bgfff()
    return target.style.backgroundColor = '#ff0'
}

const like = document.querySelector('.like img')
const ko = document.querySelector('.ko img')
//--------------------------------------------------------------------------
console.log(like)
console.log(ko)
//--------------------------------------------------------------------------
like.addEventListener('mouseover', ()=>{
    like_on(like, 'heart')
})
like.addEventListener('mouseout', ()=>{
    like_off(like,'heart')
})
ko.addEventListener('mouseover', ()=>{
    like_on(ko,'turtle')
})
ko.addEventListener('mouseout', ()=>{
    like_off(ko,'turtle')
})
//--------------------------------------------------------------------------

function like_on(target,name){
    return target.src = `./img/${name}_on.png`
}
function like_off(target,name){
    target.src = `./img/${name}_off.png`
}


