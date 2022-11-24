const backlogDOM = document.querySelector(".task3-backlog");
const sprintDOM = document.querySelector(".sprint");
let myArr = [];


var backlogSortableObj = Sortable.create(backlogDOM, {
    group: "dnd",
    animation: 500,
    onChange: (event) => {
        myArr = sprintSortableObj.toArray();
    }
});
var sprintSortableObj = Sortable.create(sprintDOM, {
    group: "dnd",
    animation: 500,
    onChange: (event) => {
        myArr = sprintSortableObj.toArray();
    }
});

// ------- 點選btn -------//
const msgSection = document.querySelector(".msg");
const btn = document.querySelector('.submit');

btn.addEventListener("click", function(e) {
    const msgText = document.querySelector('.msg-text');
    if (myArr.length == 0) {   
        msgText.textContent = "尚未置入任何項目，請置入項目";
        msgSection.style.display = 'block'; //顯示錯誤訊息
        return
    }
    if (myArr.length > 0){
        if (JSON.stringify(myArr) === JSON.stringify(["1","2"])){
            location.href = 'feedback.html';
        }else{
            msgText.textContent = "置入錯誤，請重新置入";
            msgSection.style.display = 'block'; //顯示錯誤訊息
            return    
        }
    }
})

// 關閉錯誤訊息
msgSection.addEventListener("click", function(e) {
    msgSection.style.display = 'none';
})