$(document).ready(function () {
    const $menuButtons = $(".menu-button");
    const $activeBar = $(".active-bar");

    $menuButtons.on("click", function () {
        // 클릭된 버튼의 위치와 너비 가져오기
        const $this = $(this);
        const buttonWidth = $this.outerWidth();
        const buttonOffsetLeft = $this.position().left;

        // active 클래스 업데이트 (색상 변경)
        $menuButtons.removeClass("active");
        $this.addClass("active");

        // active-bar 이동 및 크기 조정
        $activeBar.css({
            width: buttonWidth  + 8 + "px",
            left: buttonOffsetLeft + "px",
        });
    });

    // 페이지 로드 시 초기 위치 설정 (첫 번째 버튼 기준)
    const $initialButton = $menuButtons.first();
    $activeBar.css({
        width: $initialButton.outerWidth() + 8 + "px",
        left: $initialButton.position().left + "px",
    });
});