const submit = document.querySelector('.submit');
const msgSection = document.querySelector(".msg");

submit.addEventListener("click", function(e){
    const msgText = document.querySelector('.msg-text');
    let radio1 = $("[name='labelCard']:checked").val();
    let radio2 = $("[name='labelCard1']:checked").val();

    if (radio1 == undefined || radio2 == undefined){
        msgText.textContent = "尚未選擇，請選擇適合的答案";
        msgSection.style.display = 'block'; //顯示錯誤訊息
    }else if (radio1 == "false" || radio2 == "false"){
        msgText.textContent = "選擇錯誤，請再思考一下";
        msgSection.style.display = 'block'; //顯示錯誤訊息
    }else if (radio1 == "true" && radio2 == "true"){
        location.href = 'finish.html';
    }
});

// 關閉錯誤訊息
msgSection.addEventListener("click", function(e) {
    msgSection.style.display = 'none';
});