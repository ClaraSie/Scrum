// ------- sortable拖拉 -------//
const backlogDOM = document.querySelector(
    ".backlog-section .droppable-container"
);
const sprintDOM = document.querySelector(
    ".sprint-section .droppable-container"
);
const backlogArr = [
    { content: "會員系統（登入、註冊、權限管理）", score: 8 },
    { content: "後台職缺管理功能（資訊上架、下架、顯示應徵者資料）", score: 8 },
    { content: "應徵者的線上履歷編輯器", score: 13 },
    { content: "前台職缺列表（職缺詳細內容、點選可發送應徵意願）", score: 5 }
];

// 先初始化點數加總
let totalScore = 0;
let totalScoreDOM = document.querySelector(".total-score");
totalScoreDOM.textContent = totalScore;

// 以 map 方式創造 DOM node, 並塞入 backlog 的 container
backlogArr.map((ele) => {
    let draggableCard = document.createElement("div");

    // 在 dataset 新增數字, 以利套件取出
    draggableCard.setAttribute("data-score", ele.score);
    draggableCard.setAttribute("draggable", "true");
    draggableCard.classList.add("pokerCard");
    draggableCard.textContent = ele.content;

    // 鋪克牌黑桃
    let peachImg = document.createElement("img");
    let peachImg1 = document.createElement("img");
    peachImg.setAttribute('src', 'image/peach.png');
    peachImg1.setAttribute('src', 'image/peach.png');


    // 鋪克牌分數(上)
    let timeAvatar = document.createElement("div");
    let timeAvatar_text = document.createElement("p");
    timeAvatar.classList.add("pokerCard-num-top", "pokerCard-num");
    timeAvatar_text.textContent = ele.score;
    timeAvatar.appendChild(timeAvatar_text);
    timeAvatar.appendChild(peachImg);

    // 鋪克牌分數(下)
    let timeAvatar1 = document.createElement("div");
    let timeAvatar_text1 = document.createElement("p");
    timeAvatar1.classList.add("pokerCard-num-bottom", "pokerCard-num");
    timeAvatar1.textContent = ele.score;
    timeAvatar1.appendChild(timeAvatar_text1);
    timeAvatar1.appendChild(peachImg1);

    
    draggableCard.appendChild(timeAvatar);
    draggableCard.appendChild(timeAvatar1);
    backlogDOM.appendChild(draggableCard);
});

var backlogSortableObj = Sortable.create(backlogDOM, {
    group: "poker",
    animation: 500,
    dataIdAttr: "data-score",
    onEnd: (event) => {
        // 更新totalSccore
        totalScore = sprintSortableObj
            .toArray()
            .map((ele) => parseInt(ele, 10))
            .reduce((a, b) => a + b, 0);
        totalScoreDOM.textContent = totalScore;

        totalScoreDOM.classList.remove("warning-text");
        if (totalScore > 20){
            totalScoreDOM.classList.add("warning-text");
        }
    }
});

var sprintSortableObj = Sortable.create(sprintDOM, {
    group: "poker",
    animation: 500,
    dataIdAttr: "data-score",
    onEnd: (event) => {
        // 更新totalSccore
        totalScore = sprintSortableObj
            .toArray()
            .map((ele) => parseInt(ele, 10))
            .reduce((a, b) => a + b, 0);
        totalScoreDOM.textContent = totalScore;

        totalScoreDOM.classList.remove("warning-text");
        if (totalScore > 20){
            totalScoreDOM.classList.add("warning-text");
        }
    }
});

// ------- 點選btn -------//
const btn = document.querySelector('.submit');
const msgSection = document.querySelector(".msg");

btn.addEventListener("click", function(e){
    const msgText = document.querySelector('.msg-text');
    if (totalScore == 0){
        msgText.textContent = "尚未置入任何項目，請置入項目";
        msgSection.style.display = 'block'; //顯示錯誤訊息
    } else if (0 < totalScore && totalScore <= 20){
        location.href = 'chat3.html';
    } else if (totalScore > 20){
        msgText.textContent = "超過20點，請再調整清單";
        msgSection.style.display = 'block'; //顯示錯誤訊息
    }
})

// 關閉錯誤訊息
msgSection.addEventListener("click", function(e) {
    msgSection.style.display = 'none';
})