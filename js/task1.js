const candidateDOM = document.querySelector(".candidate");
const msgSection = document.querySelector(".msg");
const okArr = ["1","2","3","4"];
let arr = [];

var candidate = Sortable.create(candidateDOM, {
    group: "poker",
    animation: 500,
    onEnd: (event) => {
        arr = candidate.toArray();
        if (!(JSON.stringify(arr) === JSON.stringify(okArr))){
            msgSection.style.display = 'block'; //顯示錯誤訊息
        }
    }
});

const submit = document.querySelector(".submit");
submit.addEventListener("click", function(e){
    if (!(JSON.stringify(arr) === JSON.stringify(okArr))){
        msgSection.style.display = 'block'; //顯示錯誤訊息
    }else{
        location.href = 'chat2.html';
    }
})
// 關閉錯誤訊息
msgSection.addEventListener("click", function(e) {
    msgSection.style.display = 'none';
})