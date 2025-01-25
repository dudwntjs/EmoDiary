# EmoDiary📗
"Emotion"과 "Diary"의 결합으로, 감정을 기록하는 일기라는 의미를 담고 있습니다.

EmoDiary는 **감정을 공감해주는 일기장**으로, 사용자가 자신의 감정을 기록하고, 챗지피티가 자동으로 공감 메시지를 생성하는 기능을 제공하는 웹 애플리케이션입니다. 사용자는 일기를 작성하면서 감정을 기록하고, 챗지피티는 그 감정에 대한 공감을 전달합니다. 또한, 사용자는 월별 통계를 통해 자신이 가장 많이 느낀 감정을 확인할 수 있습니다.

---

## 주요 기능

- **감정 기록 및 공감 메시지**
  - 사용자는 자신의 감정을 기록할 수 있으며, 챗지피티가 자동으로 공감 메시지를 제공합니다.

- **월별 감정 통계**
  - 감정 변화를 시각적으로 분석할 수 있는 통계 기능을 제공합니다.

- **정서적 지원**
  - 사용자 경험을 바탕으로 심리적 안정을 돕는 기능을 제공합니다.

---

## 벤치마킹 사례

최근 **감정 기록**의 중요성이 크게 대두되고 있습니다. **애플**과 **유플러스**와 같은 대기업들도 **감정 일기장** 서비스를 선보이고 있으며, 이는 사용자가 **자기 감정을 이해하고 인식하는 데 도움을 주기 위해** 개발되었습니다. 감정을 기록하고 이를 공감받는 경험은 **심리적 안정과 자기 인식을 돕는 중요한 요소**로 작용하고 있습니다.

1. **Apple Health**
    
    Apple Health는 **감정 추적 기능**을 통해 사용자가 매일 자신의 감정을 기록하고, 그 감정에 대한 변화를 시각적으로 분석할 수 있도록 돕고 있습니다. 이는 건강 관리와 감정 인식을 함께 지원하여 사용자의 **정신 건강**을 향상시키는 데 큰 도움이 됩니다.
    
    <div style="display: flex; gap: 10px; align-items: center;">
    <img src="https://github.com/dudwntjs/EmoDiary/blob/main/assests/images/Apple%20Health1.png?raw=true" alt="Apple Health 1" width="30%" />
    <img src="https://github.com/dudwntjs/EmoDiary/blob/main/assests/images/Apple%20Health2.png?raw=true" alt="Apple Health 2" width="30%" />
</div>

2. **U+ 감정 일기**
    
    **U+ 감정 일기**는 사용자가 하루 동안의 감정을 이모지로 표현하고, 그 감정에 대해 **피드백과 공감**을 제공합니다. 이를 통해 사용자는 감정에 대해 인식하고, 공감을 얻는 과정을 경험하면서 **정서적 안정을 추구**할 수 있습니다.

    <div style="display: flex; gap: 10px; align-items: center;">
    <img src="https://github.com/dudwntjs/EmoDiary/blob/main/assests/images/U+%20%EA%B0%90%EC%A0%95%20%EC%9D%BC%EA%B8%B0.png?raw=true" alt="U+ 감정 일기" width="45%" />
</div>

---

## 실제 구현 기능

1. **JSON 파일 관리**
   - 기본 웹스토리지에 총 3개의 JSON 파일 저장.

2. **일기 저장 및 알림**
   - 일기를 저장할 때 알림 표시.
   - 모든 정보를 입력하지 않으면 유효성 검사로 경고 메시지 표시.

3. **공감 기능**
   - 공감 버튼 클릭 시 챗지피티 API 연동.
   - 5~6회 공감 가능하도록 OpenAI 결제 완료.

4. **수정 및 삭제 기능**
   - 저장된 일기를 수정 및 삭제 가능하며, 웹스토리지에서 제거됨.

5. **달력과 이모지 통계**
   - Bootstrap Date picker를 사용한 달력에 감정 기록 표시.
   - 월별 감정 이모지 통계 제공.

6. **행운 카드 (Fortune Cards)**
   - 랜덤 카드 뽑기를 통해 긍정적인 메시지와 함께 유튜브 링크 제공.

7. **배경색 변화**
   - 사용자가 페이지에 머무르는 시간에 따라 배경색이 부드럽게 변화.

---

## 기술 스택

| **기술 스택** | **설명**                         |
|----------------|---------------------------------|
| **Frontend**   | HTML, CSS, JavaScript, Bootstrap |
| **API Integration** | OpenAI GPT API                 |
| **Storage**    | Web Storage(JSON 파일 관리)     |

---

## 실행 방법

1. 저장소 클론
   ```bash
   git clone https://github.com/dudwntjs/EmoDiary.git
   cd EmoDiary
   ```

2. 로컬 서버 실행
   - 브라우저에서 `mainpage.html` 파일 열기

---

## 기타

- 이모지와 감정 분석에 대한 데이터는 로컬 JSON 파일로 관리됩니다.
- 공감 메시지 생성은 OpenAI GPT API와의 연동을 통해 이루어집니다.

---

EmoDiary를 사용해 자신의 감정을 기록하고 공감을 경험해보세요! 😊
