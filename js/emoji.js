$(document).ready(function () {
    const emojis = ["😊", "😢", "😡", "😍", "😴", "😵‍💫"];
    
    const emojiContainer = $("#emoji");
    emojis.forEach(emoji => {
        // 각 이모지 버튼 생성
        const button = $(`<button class="emoji-button">${emoji}</button>`);
        
        // 클릭 이벤트 추가
        button.on("click", function () {
            // 모든 버튼을 흑백 처리
            $(".emoji-button").removeClass("active");

            // 클릭된 버튼만 활성화 상태로 변경
            $(this).addClass("active");

            // 선택된 이모지를 텍스트로 표시
            $("#emoji").attr("data-selected-emoji", emoji); // 선택된 이모지를 저장
        });

        // 버튼 추가
        emojiContainer.append(button);
    });
});