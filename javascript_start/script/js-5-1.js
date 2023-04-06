//1. 아이디를 안적고 로그인 누를시 ' 아이디를 입력하세요'라고 나오게하기 #error_result
const userId = document.querySelector('#user_id')
const userPw = document.querySelector('#user_pw')
const txt = document.querySelector('#error_result')
const btn = document.querySelector('#login_btn')
console.log(userPw,userId,txt,btn)
btn.addEventListener('click', ()=>{
    if(userId == false){
        window.alert("로그인성공")
    }
    else{txt.innerHTML = "아이디를 입력하세요."}
})