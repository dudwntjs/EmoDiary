# EmoDiary
"Emotion"과 "Diary"의 결합으로, 감정을 기록하는 일기라는 의미를 담고 있습니다.

EmoDiary는 **감정을 공감해주는 일기장**으로, 사용자가 자신의 감정을 기록하고, 챗지피티가 자동으로 공감 메시지를 생성하는 기능을 제공하는 웹 애플리케이션입니다. 사용자는 일기를 작성하면서 감정을 기록하고, 챗지피티는 그 감정에 대한 공감을 전달합니다. 또한, 사용자는 월별 통계를 통해 자신이 가장 많이 느낀 감정을 확인할 수 있습니다.

---

## EmoDiary 주요 기능 간단 소개

![메인 페이지](https://github.com/dudwntjs/EmoDiary/blob/main/assests/images/mainpage.png?raw=true)

- **감정 기록 및 공감 메시지**
  - 사용자는 자신의 감정을 기록할 수 있으며, 챗지피티가 자동으로 공감 메시지를 제공합니다.

- **월별 감정 통계**
  - 감정 변화를 시각적으로 분석할 수 있는 통계 기능을 제공합니다.

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

1. **헤더 (Header)**
    - 화면 상단에는 애플리케이션의 이름인 ‘나의 감정을 공감해주는 일기장’과 메뉴탭인 ‘데일리’와 ‘먼슬리’가 위치합니다. 
    - ‘데일리’ 탭은 사용자가 **오늘의 일기**를 기록하는 곳이며, ‘먼슬리’ 탭은 **이번 달의 감정 통계**를 확인하는 곳입니다.
    - **ActiveBar**를 사용하여 현재 활성화된 페이지를 시각적으로 구분합니다.

2. **날짜 입력**
    - 날짜 입력란은 사용자가 오늘 날짜를 입력하는 부분입니다. 
    - 날짜는 **달력 형태**로 제공되어 사용자가 쉽게 선택할 수 있습니다.

3. **감정 선택**
    - 사용자는 **이모지 버튼**을 통해 감정을 선택합니다. 
    - 다양한 이모지로 감정을 표현하며, 선택된 감정은 저장되고 공감 메시지에 반영됩니다.

4. **일기 작성**
    - 사용자는 **간단한 텍스트 박스**에 오늘의 감정을 나타내는 소감을 작성할 수 있습니다.
    - 입력란은 사용자가 자신의 감정을 자유롭게 표현할 수 있는 공간입니다.

5. **일기 저장 및 수정, 삭제**
    - 사용자가 감정을 입력하고 일기를 작성한 후, **‘저장하기’ 버튼**을 클릭하여 작성한 일기를 저장합니다.
    - 저장된 일기는 목록에 자동으로 추가됩니다.
    - 이미 저장된 날짜에 일기를 저장하면 기존 내용을 수정할 수 있으며, 삭제도 가능합니다.

6. **저장된 일기 목록 및 공감**
    - 화면 하단에는 사용자가 저장한 **일기 목록**이 표시됩니다. 
    - 각 일기 항목은 날짜와 감정 이모지, 간단한 텍스트가 포함되어 있으며, **‘공감’ 버튼**을 통해 공감 메시지를 받을 수 있습니다.
    - 저장된 일기에서 **‘공감’ 버튼**을 클릭하면, 챗지피티가 자동으로 **공감 메시지**를 생성하여 사용자에게 전달합니다.
    - 공감 메시지 생성은 OpenAI GPT API와의 연동을 통해 이루어집니다.

7. **달력과 이모지 통계**
    - **달력**에서는 사용자가 이번 달의 감정을 기록한 날짜와 선택된 감정 이모지를 확인할 수 있습니다.
    - 달력 위에 표시된 날짜를 클릭하면, 해당 날짜에 선택된 이모지가 보여지며 세부 내용을 확인할 수 있습니다.
    - 달력에 표시된 감정들은 오른쪽에 위치한 **이모지 총 개수**로 계산되어, 사용자가 한 달 동안 어떤 감정을 주로 느꼈는지 한눈에 볼 수 있습니다.

8. **행운 카드**
    - 사용자는 랜덤으로 행운 카드를 뽑아 긍정적인 메시지와 함께 하루를 시작할 수 있습니다.
    - 각 카드는 호버 시 뒤집히면서 카드 내용이 표시됩니다.
    - 각 카드에는 **행운의 메시지**와 **유튜브 링크**가 포함되어 있어, 관련된 분위기의 노래를 추천합니다.
    - 이를 통해 사용자는 카드를 뽑는 재미와 함께 음악을 통해 감정을 더욱 깊이 느낄 수 있습니다.

9. **시간의 흐름에 따른 배경색 변화**
    - 페이지에 오래 머무는 사용자를 위해 배경색이 부드럽게 변화하여 시간의 흐름을 인식할 수 있도록 돕습니다.

10. **추가 기능**
    - **유효성 검사**: 모든 정보를 입력하지 않으면 저장 전에 경고 메시지가 표시됩니다. 또한, 일기를 저장, 수정, 삭제할 때 각각 알림을 통해 사용자에게 작업 완료를 알려줍니다.
    - **JSON 파일 기본 웹스토리지에 저장**: 총 3개의 JSON 파일을 기본으로 웹스토리지에 저장해 두었습니다.

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

EmoDiary를 사용해 자신의 감정을 기록하고 공감을 경험해보세요! 😊
