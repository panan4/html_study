//const----------------------------------------------------------------------
const pointBtn = document.querySelector('#point_all_btn')
const reset = document.querySelector('#point_reset')
const userPoint = document.querySelector('#user_point')
const usePoint = document.querySelector('#use_point')
//상수------------------------------------------------------------------------
Point = 10000
let use_value = 0
console.log(userPoint)
reset.style.display = 'none'
//Event----------------------------------------------------------------------
pointBtn.addEventListener('click', ()=>{
    usePoint.value = userPoint.value
    /* usePoint.innerHTML = userPoint */
    userPoint.value = 0
    /* reset.style.display = 'inline-block' */
    resetdisplay()
})
reset.addEventListener('click', function(){
    userPoint.value = usePoint.value
    usePoint.value = 0
    use_value = point
    resetdisplay()
    /* reset.style.display = 'none' */
})
//함수-----------------------------------------------------------------------
function resetdisplay(){
    if(use_value >= 1){
        reset.style.display = 'inline-block'
    }
    else{reset.style.display = 'none'}
}
//console.log----------------------------------------------------------------
console.log(pointBtn,reset,userPoint,usePoint)
