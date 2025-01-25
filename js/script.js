$(document).ready(function () {
    const emojis = ["😊", "😢", "😡", "😍", "😴", "😵‍💫"];

    /** -------------------------
     * JSON 로드 및 LocalStorage 초기화
     * ------------------------- */
    function loadDiaryEntries() {
        if (!localStorage.getItem("diaryEntries")) {
            $.getJSON("dairy.json", function (data) {
                localStorage.setItem("diaryEntries", JSON.stringify(data));
                console.log("JSON 데이터를 웹스토리지에 저장했습니다:", data);
                displayDiaryEntries();
            }).fail(function () {
                console.error("JSON 파일을 로드할 수 없습니다.");
            });
        } else {
            displayDiaryEntries(); // 기존 데이터 표시
        }
    }

    /** -------------------------
     * LocalStorage에서 데이터 가져오기
     * ------------------------- */
    function getDiaryEntries() {
        return JSON.parse(localStorage.getItem("diaryEntries")) || [];
    }

    /** -------------------------
     * 이모지 버튼 렌더링
     * ------------------------- */
    function renderEmojis() {
        const emojiContainer = $("#emoji");
        emojiContainer.empty();
    
        emojis.forEach(emoji => {
            const button = $(`<button class="emoji-button" data-emoji="${emoji}">${emoji}</button>`);
            button.on("click", function () {
                // 모든 버튼의 active 클래스 제거
                $(".emoji-button").removeClass("active");
                // 클릭된 버튼에 active 클래스 추가
                $(this).addClass("active");
    
                // 선택된 이모지를 저장
                emojiContainer.data("selected-emoji", emoji);
                console.log("선택된 이모지:", emojiContainer.data("selected-emoji"));
            });
    
            emojiContainer.append(button);
        });
    
        // 기본 선택값 설정 (첫 번째 이모지 선택)
        if (!emojiContainer.data("selected-emoji")) {
            emojiContainer.data("selected-emoji", emojis[0]);
            $(".emoji-button").first().addClass("active");
        }
    }

    /** -------------------------
     * 일기 항목 화면에 표시
     * ------------------------- */
    function displayDiaryEntries() {
        const diaryEntries = getDiaryEntries();
        const resultContainer = $("#result");
        resultContainer.empty();

        if (diaryEntries.length === 0) {
            resultContainer.append("<p>저장된 일기가 없습니다.</p>");
            return;
        }

        diaryEntries.forEach((entry, index) => {
            const listItem = `
                <div class="list-group-item">
                    <strong>${entry.date}</strong> - ${entry.mood}<br>
                    ${entry.text}
                    <button class="btn btn-danger btn-sm delete-entry" data-index="${index}">삭제</button>
                    <button class="btn btn-warning btn-sm empathy-button" data-index="${index}">공감</button>
                </div>
            `;
            resultContainer.append(listItem);
        });

        // 이벤트 리스너 추가
        $(".delete-entry").on("click", function () {
            if (confirm("정말 삭제하시겠습니까?")) {
                deleteDiaryEntry($(this).data("index"));
            }
        });

        $(".empathy-button").on("click", function () {
            const index = $(this).data("index");
            const diaryEntry = getDiaryEntries()[index];
            getEmpathyResponse(diaryEntry.text, diaryEntry.mood);
        });
    }

    /** -------------------------
     * 일기 삭제
     * ------------------------- */
    function deleteDiaryEntry(index) {
        const diaryEntries = getDiaryEntries();
        diaryEntries.splice(index, 1); // 선택된 항목 삭제
        localStorage.setItem("diaryEntries", JSON.stringify(diaryEntries));
        displayDiaryEntries();
    }

    /** -------------------------
     * 이모지 개수 계산 및 표시
     * ------------------------- */
    function calculateAndDisplayEmojiCounts() {
        const diaryEntries = getDiaryEntries();
        const emojiCounts = {};
    
        // 이모지 개수 계산
        diaryEntries.forEach(entry => {
            emojiCounts[entry.mood] = (emojiCounts[entry.mood] || 0) + 1;
        });
    
        // 이모지 개수를 리스트로 표시
        const countListHTML = Object.entries(emojiCounts)
            .map(([emoji, count]) => `<li>${emoji}: ${count}개</li>`)
            .join('');
        $("#emoji-summary").html(`<h3>이모지 총 개수</h3><ul>${countListHTML}</ul>`);
    
        // 최빈 이모지 계산 및 표시
        const maxCount = Math.max(...Object.values(emojiCounts), 0);
        const mostFrequentEmojis = Object.entries(emojiCounts)
            .filter(([_, count]) => count === maxCount)
            .map(([emoji]) => emoji)
            .join(", ");
        $("#emoji-summary").append(`
            <div style="margin-top: 10px; font-weight: bold;">
                이번 달 가장 많이 선택된 감정은 <span style="font-size: 24px;">${mostFrequentEmojis}</span> 입니다!
            </div>
        `);
    
        // 이모지 개수 데이터 반환
        return emojiCounts;
    }

    /** -------------------------
     * 가장 많이 선택된 이모지 표시
     * ------------------------- */
    function displayMostFrequentEmoji() {
        const diaryEntries = getDiaryEntries();

        if (diaryEntries.length === 0) {
            $("#most-frequent-emoji").html("아직 저장된 감정 데이터가 없습니다.");
            return;
        }

        // 이모지 개수 계산
        const emojiCounts = {};
        diaryEntries.forEach(entry => {
            emojiCounts[entry.mood] = (emojiCounts[entry.mood] || 0) + 1;
        });

        // 가장 많이 사용된 이모지 찾기
        const mostFrequentEmoji = Object.keys(emojiCounts).reduce((a, b) => emojiCounts[a] > emojiCounts[b] ? a : b);

        // 화면에 표시
        $("#most-frequent-emoji").html(`이번 주 가장 많이 선택된 감정은 <span style="font-size: 24px;">${mostFrequentEmoji}</span> 입니다!`);
    }

    /** -------------------------
     * 달력 초기화
     * ------------------------- */
    function initializeCalendar() {
        const diaryEntries = JSON.parse(localStorage.getItem("diaryEntries")) || [];
    
        // datepicker 초기화
        $("#emoji-calendar").datepicker("destroy").datepicker({
            format: "yyyy-mm-dd",
            todayHighlight: true,
            autoclose: true,
            beforeShowDay: function (date) {
                // 날짜를 YYYY-MM-DD 형식으로 변환
                const formattedDate = date.toISOString().split("T")[0];
                const entry = diaryEntries.find(e => e.date === formattedDate);
    
                if (entry) {
                    // 저장된 날짜에 이모지 표시
                    return {
                        content: `
                            <div style="text-align:center; font-size:18px;">
                                ${date.getDate()}<br>${entry.mood}
                            </div>`,
                        classes: "highlight" // 강조 스타일 적용
                    };
                }
                return { content: `${date.getDate()}` };
            }
        });
    
        calculateAndDisplayEmojiCounts(); // 이모지 요약 개수 업데이트
    }

    /** -------------------------
     * 공감 메시지 생성 (ChatGPT API 호출)
     * ------------------------- */
    async function getEmpathyResponse(text, mood) {
        const moodText = { "😊": "기쁨", "😢": "슬픔", "😡": "분노", "😍": "행복", "😴": "피곤", "😵‍💫": "혼란" }[mood];
        const prompt = `
        다음 일기에 공감하고 위로하는 메시지를 작성해주세요.
        - 일기 내용: "${text}"
        - 감정 상태: "${moodText}"
        공감의 느낌을 전달하는 부드러운 문장으로 작성해주세요.
        `;
    
        try {
            const response = await fetch("https://api.openai.com/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": ''
                },
                body: JSON.stringify({
                    model: "gpt-3.5-turbo",
                    messages: [{ role: "user", content: prompt }],
                    max_tokens: 100
                })
            });
    
            const data = await response.json();
            console.log(data); // 응답 확인

            if (data && data.choices && data.choices.length > 0) {
                const empathyMessage = data.choices[0].message.content;
                displayEmpathyMessage(text, empathyMessage);
            } else {
                console.error("API 응답에 'choices' 배열이 없거나 비어 있습니다.");
                alert("공감 메시지를 생성하는 데 실패했습니다.");
            }
        } catch (error) {
            console.error("공감 메시지 오류:", error);
            alert("공감 메시지를 가져오는 데 실패했습니다.");
        }
    }
    
    // 공감 메시지를 화면에 표시하는 함수
    function displayEmpathyMessage(entryText, empathyMessage) {
        // 선택된 일기 항목을 찾음
        const listItem = Array.from(document.querySelectorAll(".list-group-item"))
            .find(item => item.innerHTML.includes(entryText));
    
        if (listItem) {
            // 이미 공감 메시지가 있으면 삭제
            const existingMessage = listItem.querySelector(".empathy-message");
            if (existingMessage) existingMessage.remove();
    
            // 공감 메시지 추가
            const messageElement = document.createElement("div");
            messageElement.classList.add("empathy-message");
            messageElement.style.cssText = "margin-top: 10px; padding: 10px; background-color: #fffde7; border: 1px solid #ffd54f; border-radius: 5px; font-size: 14px; color: #333;";
            messageElement.textContent = `💬 ${empathyMessage}`;
            listItem.appendChild(messageElement);
        }
    }

    /** -------------------------
     * 저장 버튼 클릭 이벤트
     * ------------------------- */
    $("#save").on("click", function () {
        const date = $("#date").val();
        const mood = $("#emoji").data("selected-emoji");
        const text = $("#text").val();
    
        if (!date || !mood || !text) {
            alert("모든 정보를 입력해주세요!");
            return;
        }
    
        let diaryEntries = getDiaryEntries();
        const existingIndex = diaryEntries.findIndex(entry => entry.date === date);
    
        if (existingIndex !== -1) {
            // 이미 저장된 날짜가 있는 경우: 수정 기능
            if (confirm("이 날짜에 이미 저장된 기록이 있습니다. 수정하시겠습니까?")) {
                diaryEntries[existingIndex] = { date, mood, text }; // 데이터 수정
                localStorage.setItem("diaryEntries", JSON.stringify(diaryEntries));
                alert("일기가 수정되었습니다!");
            }
        } else {
            // 새로운 일기 저장
            diaryEntries.push({ date, mood, text });
            localStorage.setItem("diaryEntries", JSON.stringify(diaryEntries));
            alert("일기가 저장되었습니다!");
        }
    
        // 화면 업데이트
        displayDiaryEntries();
    });

    const fortuneButtons = document.querySelectorAll('.card-button');

    fortuneButtons.forEach(button => {
        button.addEventListener('click', () => {
        });
    });
    /** -------------------------
     * 탭 전환 이벤트
     * ------------------------- */
    $(".menu-button").on("click", function () {
        const targetTab = $(this).data("tab");
        $(".tab-content").hide();
        $(`#${targetTab}`).show();

        if (targetTab === "calendar-tab") initializeCalendar();
    });

    // 페이지 초기화
    loadDiaryEntries();
    renderEmojis();
    $(".menu-button[data-tab='daily-tab']").trigger("click");
});