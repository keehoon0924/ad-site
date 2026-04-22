/**
 * fortune.js
 * - 이모지 운세 페이지 인터랙션
 * - 감정 선택 → 운세 생성 → 결과 표시 흐름 구현
 */

(() => {
  "use strict";

  $(document).ready(function () {
    // ========================================
    // 1. 운세 데이터 정의
    // ========================================
    const fortuneData = {
      happy: {
        emoji: "😊",
        label: "기분 좋아요",
        message: "오늘은 주변의 작은 기회가 크게 느껴질 수 있는 날이에요. 긍정적인 기운이 모든 일에 좋은 영향을 미칠 것 같습니다.",
        advice: "좋은 흐름이 들어올 때는 망설이지 말고 먼저 반응해보세요. 주변 사람들과의 대화 속에서 의외의 기회가 숨어있을 수 있어요.",
      },
      tired: {
        emoji: "😴",
        label: "피곤해요",
        message: "오늘은 몸과 마음이 쉼을 원하는 날입니다. 충전의 시간이 반드시 필요한 순간이네요.",
        advice: "서두르지 말고 천천히 정리할수록 유리한 날입니다. 자신의 페이스를 유지하면서 진행하는 것이 최고의 전략이 될 거예요.",
      },
      anxious: {
        emoji: "😰",
        label: "불안해요",
        message: "현재의 불안감은 당신이 무언가를 소중하게 생각하고 있다는 증거입니다. 이런 감정도 긍정적으로 활용할 수 있어요.",
        advice: "깊은 숨을 쉬고 한 발씩 나아가세요. 더 많은 준비보다는 작은 행동 하나가 당신의 불안을 덜어줄 거예요.",
      },
      excited: {
        emoji: "😍",
        label: "설레요",
        message: "오늘의 설렘은 당신을 더 좋은 곳으로 이끌 수 있는 강력한 에너지입니다. 그 감정을 따라가보세요.",
        advice: "감정 표현이 좋은 결과를 만드는 날입니다. 당신의 진심 어린 마음을 표현하면 생각보다 훨씬 좋은 반응을 얻을 수 있을 거예요.",
      },
      angry: {
        emoji: "😡",
        label: "짜증나요",
        message: "당신의 짜증은 무언가 변해야 한다는 신호일 수 있습니다. 오늘이 그 변화를 시작하기에 좋은 날이 될 수 있어요.",
        advice: "그 에너지를 건설적인 방향으로 돌려보세요. 불만보다는 개선방안에 집중하면 상황이 긍정적으로 바뀔 수 있을 거예요.",
      },
      thoughtful: {
        emoji: "🤔",
        label: "고민돼요",
        message: "고민의 시간은 성장의 시작입니다. 깊은 생각 속에서 당신이 원하는 답이 조금씩 보일 거예요.",
        advice: "지금은 신속한 결정보다 신중한 검토가 필요한 때입니다. 몇 가지 선택지를 종합적으로 살펴본 후 가장 자신 있는 길을 선택하세요.",
      },
      moved: {
        emoji: "🥹",
        label: "울컥해요",
        message: "감정적인 순간들이 우리의 삶을 풍요롭게 만듭니다. 오늘의 이런 감정을 소중히 안고 가세요.",
        advice: "당신의 감정을 인정하고 표현하는 것이 가장 큰 치유가 될 거예요. 그 감정을 나누는 것도 좋은 방법이 될 수 있습니다.",
      },
      confident: {
        emoji: "😎",
        label: "자신 있어요",
        message: "당신의 자신감은 현실이 될 가능성이 높은 날입니다. 그 에너지를 마음껏 발휘해보세요.",
        advice: "주저하지 말고 도전해보세요. 당신이 가진 자신감이 주변 사람들에게도 긍정적인 영향을 미칠 것 같습니다.",
      },
    };

    // ========================================
    // 2. 상태 관리
    // ========================================
    let state = {
      selectedMood: null,
      currentFortune: null,
    };

    // ========================================
    // 3. 유틸리티 함수
    // ========================================

    function showToast(message, type = "info") {
      if (window.showToast && typeof window.showToast === "function") {
        window.showToast(message, type);
      } else {
        alert(message);
      }
    }

    function copyToClipboard(text) {
      if (navigator.clipboard) {
        navigator.clipboard
          .writeText(text)
          .then(() => {
            showToast("복사되었습니다!", "success");
          })
          .catch(() => {
            showToast("복사 실패. 다시 시도해주세요.", "error");
          });
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        try {
          document.execCommand("copy");
          showToast("복사되었습니다!", "success");
        } catch (err) {
          showToast("복사 실패. 다시 시도해주세요.", "error");
        }
        document.body.removeChild(textarea);
      }
    }

    function scrollToSection(selector, offset = 100) {
      const element = $(selector);
      if (element.length) {
        $("html, body").animate(
          {
            scrollTop: element.offset().top - offset,
          },
          500,
          "easeInOutQuad"
        );
      }
    }

    // ========================================
    // 4. 이벤트 핸들러
    // ========================================

    /**
     * 감정 버튼 초기화 및 클릭 이벤트
     */
    function initMoodButtons() {
      const grid = $("#fortune-mood-grid");

      Object.entries(fortuneData).forEach(([key, data]) => {
        const btn = `
          <button class="fortune-mood-btn" data-mood="${key}" title="${data.label}">
            <span class="fortune-mood-btn__emoji">${data.emoji}</span>
            <span class="fortune-mood-btn__label">${data.label}</span>
          </button>
        `;
        grid.append(btn);
      });

      $(document).on("click", ".fortune-mood-btn", function () {
        $(".fortune-mood-btn").removeClass("active");
        $(this).addClass("active");

        state.selectedMood = $(this).data("mood");
        updateSelectedMoodDisplay();
      });
    }

    /**
     * 선택된 감정 표시 업데이트
     */
    function updateSelectedMoodDisplay() {
      if (state.selectedMood) {
        const mood = fortuneData[state.selectedMood];
        $("#selected-mood-emoji").text(mood.emoji);
        $("#selected-mood-label").text(mood.label);
        $("#fortune-selected-mood").show();
      } else {
        $("#fortune-selected-mood").hide();
      }
    }

    /**
     * 운세 보기 버튼 클릭
     */
    function initGetFortuneBtn() {
      $("#get-fortune-btn").on("click", function () {
        if (!state.selectedMood) {
          showToast("감정을 선택해주세요!", "warning");
          return;
        }

        showLoadingState();
        setTimeout(() => {
          renderFortuneResult();
          hideLoadingState();
          showResultSections();
          scrollToSection("#fortune-loading");
        }, 1500);
      });
    }

    /**
     * 로딩 상태 표시
     */
    function showLoadingState() {
      $("#fortune-mood-section").hide();
      $("#fortune-loading").show();
    }

    /**
     * 로딩 상태 숨김
     */
    function hideLoadingState() {
      $("#fortune-loading").hide();
    }

    /**
     * 결과 섹션들 표시
     */
    function showResultSections() {
      $("#fortune-result").show();
      $("#fortune-share").show();
      $("#fortune-try-again").show();
    }

    /**
     * 결과 섹션들 숨김
     */
    function hideResultSections() {
      $("#fortune-result").hide();
      $("#fortune-share").hide();
      $("#fortune-try-again").hide();
    }

    /**
     * 운세 결과 렌더링
     */
    function renderFortuneResult() {
      const mood = fortuneData[state.selectedMood];
      state.currentFortune = `${mood.emoji} ${mood.label}\n\n오늘의 한마디:\n${mood.message}\n\n오늘의 조언:\n${mood.advice}`;

      $("#fortune-message").text(mood.message);
      $("#fortune-advice").text(mood.advice);
    }

    /**
     * 운세 복사
     */
    function initCopyFortuneBtn() {
      $(document).on("click", "#copy-fortune-btn", function () {
        if (state.currentFortune) {
          copyToClipboard(state.currentFortune);
        }
      });
    }

    /**
     * 공유 텍스트 복사
     */
    function initShareCopyBtn() {
      $(document).on("click", "#share-copy-btn", function () {
        const shareText =
          `오늘의 이모지 운세 🔮\n\n${state.currentFortune}\n\n` +
          "나의 이모지 운세도 확인해보세요!\n" +
          "🐸 EmojiRibbit 이모지 운세 페이지에서!";

        copyToClipboard(shareText);
      });
    }

    /**
     * 다시 선택 버튼
     */
    function initResetBtn() {
      $(document).on("click", "#reset-fortune-btn, #try-again-btn", function () {
        state.selectedMood = null;
        state.currentFortune = null;

        $(".fortune-mood-btn").removeClass("active");
        $("#fortune-selected-mood").hide();

        hideResultSections();
        $("#fortune-mood-section").show();

        scrollToSection("#fortune-mood-section", 100);
      });
    }

    // ========================================
    // 5. 초기화
    // ========================================

    function initAll() {
      initMoodButtons();
      initGetFortuneBtn();
      initCopyFortuneBtn();
      initShareCopyBtn();
      initResetBtn();
    }

    initAll();
  });
})();
