let userId = 'admin'
let userPw = '5678'

//옳바른 ID : admin / PW : 1234
/* if(userId == 'admin'){
    if(userPw != '1234'){
        console.log("비밀번호 오류")
    }
    else{
        console.log("로그인 성공")
    }
}
else{
    console.log("아이디오류")
} ver.1 */
/* if(userId == 'admin' && userPw == '1234'){
    console.log('로그인 성공')
}
else{
    if(userId == 'admin') {
        console.log('비밀번호틀림')
    }
    else {
        console.log('아이디틀림')
    }
}ver2 */





let value = "야호"

if(value == "오른쪽" || value == "가운데" || value == "왼쪽"){
console.log(`${value} 버튼을 눌르셨군요.`)
}
else{
    console.log('확인할 수 없습니다.')
}