const candidateDOM = document.querySelector(".candidate");
const msgSection = document.querySelector(".msg");
const okArr = ["1","2","3","4"];

var candidate = Sortable.create(candidateDOM, {
    group: "poker",
    animation: 500,
    onEnd: (event) => {
        var arr = candidate.toArray();
        // console.log( JSON.stringify(arr));
        if (!(JSON.stringify(arr) === JSON.stringify(okArr))){
            msgSection.style.display = 'block'; //顯示錯誤訊息
        }
    }
});

// 關閉錯誤訊息
msgSection.addEventListener("click", function(e) {
    msgSection.style.display = 'none';
})