/**
 * copy-tool.js
 * 복사 도구 페이지 기능 구현
 */

(() => {
  "use strict";

  $(document).ready(function () {
    // ============================================
    // 1) 이모지 카테고리 데이터
    // ============================================
    const emojiCategories = {
      emotion: {
        title: "😊 감정·표현",
        desc: "다양한 감정과 표현을 나타내는 이모지들입니다.",
        emojis: ["😊", "😍", "🥰", "😘", "😗", "😚", "😙", "🥲", "😁", "😆", "😅", "🤣", "😂", "🙂", "🙃", "😉", "😌", "😔", "😍", "🥰"]
      },
      food: {
        title: "🍔 음식·음료",
        desc: "맛있는 음식과 음료를 나타내는 이모지들입니다.",
        emojis: ["🍕", "🍔", "🍟", "🌭", "🍿", "🥓", "🍗", "🍖", "🌮", "🌯", "🥙", "🥗", "🍜", "🍝", "🍛", "🍲", "🍥", "🥠", "🥮", "🍱"]
      },
      mbti: {
        title: "💅 MBTI별",
        desc: "각 MBTI 유형을 나타내는 재미있는 이모지들입니다.",
        emojis: ["🧠", "❤️", "💪", "⚡", "🎯", "🎨", "📊", "🎭", "🔥", "💎", "🌟", "🎪", "🎸", "📚", "🏆", "🎯", "🚀", "💰", "🎁", "🎉"]
      },
      job: {
        title: "💼 직업·일무",
        desc: "다양한 직업과 일을 나타내는 이모지들입니다.",
        emojis: ["👨‍💼", "👩‍💼", "👨‍⚕️", "👩‍⚕️", "👨‍🏫", "👩‍🏫", "👨‍🔧", "👩‍🔧", "👨‍💻", "👩‍💻", "👨‍🎨", "👩‍🎨", "👨‍🍳", "👩‍🍳", "👨‍🌾", "👩‍🌾", "👨‍✈️", "👩‍✈️", "👨‍🚀", "👩‍🚀"]
      },
      travel: {
        title: "✈️ 여행·종기",
        desc: "여행과 모험을 나타내는 이모지들입니다.",
        emojis: ["✈️", "🚗", "🚕", "🚙", "🚌", "🚎", "🏎️", "🚓", "🚑", "🚒", "🚐", "🛻", "🚚", "🚛", "🚜", "🏍️", "🏊", "🚴", "🚵", "⛰️"]
      },
      celebration: {
        title: "🎉 축하·기념일",
        desc: "특별한 날과 축하를 나타내는 이모지들입니다.",
        emojis: ["🎉", "🎊", "🎈", "🎀", "🎁", "🎂", "🍰", "🧁", "🍾", "🍷", "🍸", "🍹", "🎃", "🎄", "🎆", "🎇", "✨", "🎅", "🤶", "🎄"]
      }
    };

    // ============================================
    // 2) 상태 변수
    // ============================================
    let currentCategory = "emotion";
    let customEmojis = [];

    // ============================================
    // 3) 카테고리 버튼 초기화
    // ============================================
    function initCategoryButtons() {
      const categoryBtns = $(".category-btn");

      categoryBtns.on("click", function () {
        const $btn = $(this);
        const category = $btn.data("category");

        // 활성 클래스 전환
        categoryBtns.removeClass("category-btn--active");
        $btn.addClass("category-btn--active");

        // 카테고리 변경
        currentCategory = category;
        displayEmojiGrid(category);
      });
    }

    // ============================================
    // 4) 이모지 그리드 표시
    // ============================================
    function displayEmojiGrid(category) {
      const data = emojiCategories[category];
      if (!data) return;

      // 제목/설명 업데이트
      $("#category-title").text(data.title);
      $("#category-desc").text(data.desc);

      // 이모지 그리드 생성
      const $grid = $("#emoji-grid");
      $grid.html("");

      data.emojis.forEach((emoji) => {
        const $btn = $("<button>")
          .addClass("emoji-item-btn")
          .text(emoji)
          .on("click", function () {
            addToCustom(emoji);
          });

        $grid.append($btn);
      });

      // 애니메이션
      $grid.fadeIn(300);
    }

    // ============================================
    // 5) 커스텀 입력에 이모지 추가
    // ============================================
    function addToCustom(emoji) {
      customEmojis.push(emoji);
      updateCustomInput();

      // 시각적 피드백
      const $input = $("#custom-input");
      $input.css({ animation: "pulse 0.3s ease-out" });
      setTimeout(() => {
        $input.css({ animation: "" });
      }, 300);
    }

    // ============================================
    // 6) 커스텀 입력 업데이트
    // ============================================
    function updateCustomInput() {
      const text = customEmojis.join("");
      $("#custom-input").val(text);
    }

    // ============================================
    // 7) 커스텀 입력 초기화
    // ============================================
    function initCustomInput() {
      const $input = $("#custom-input");

      // 직접 입력 지원
      $input.on("input", function () {
        customEmojis = $(this).val().split("");
      });
    }

    // ============================================
    // 8) 커스텀 초기화 버튼
    // ============================================
    function initClearButton() {
      const $btn = $("#custom-clear-btn");

      $btn.on("click", function () {
        customEmojis = [];
        updateCustomInput();
      });
    }

    // ============================================
    // 9) 커스텀 복사 버튼
    // ============================================
    function initCustomCopyButton() {
      const $btn = $("#custom-copy-btn");

      $btn.on("click", function () {
        if (customEmojis.length === 0) {
          showToast("먼저 이모지를 선택하거나 입력해주세요.", "warning");
          return;
        }

        const text = customEmojis.join("");
        copyToClipboard(text, () => {
          showToast(`"${text}" 복사되었습니다! 📋`, "success");

          // 버튼 피드백
          const originalText = $btn.text();
          $btn.text("✅ 복사됨!");
          setTimeout(() => {
            $btn.text(originalText);
          }, 1500);
        });
      });
    }

    // ============================================
    // 10) 저장하기 버튼
    // ============================================
    function initSaveButton() {
      const $btn = $("#custom-save-btn");

      $btn.on("click", function () {
        if (customEmojis.length === 0) {
          showToast("먼저 이모지를 선택하거나 입력해주세요.", "warning");
          return;
        }

        // localStorage에 저장
        const saved = JSON.parse(localStorage.getItem("savedEmojis") || "[]");
        const text = customEmojis.join("");

        if (!saved.includes(text)) {
          saved.push(text);
          localStorage.setItem("savedEmojis", JSON.stringify(saved));
          showToast("저장되었습니다! 💾", "success");
        } else {
          showToast("이미 저장된 조합입니다.", "info");
        }

        // 버튼 피드백
        const originalText = $btn.text();
        $btn.text("✅ 저장됨!");
        setTimeout(() => {
          $btn.text(originalText);
        }, 1500);
      });
    }

    // ============================================
    // 11) 빠른 이모지 버튼 초기화
    // ============================================
    function initQuickEmojis() {
      const quickEmojis = ["❤️", "😊", "🔥", "✨", "😂", "👍", "🎉", "💯", "😍", "🤔", "😡", "😴"];

      const $container = $("#quick-emoji-list");
      $container.html("");

      quickEmojis.forEach((emoji) => {
        const $btn = $("<button>")
          .addClass("quick-emoji-btn")
          .text(emoji)
          .on("click", function (e) {
            e.preventDefault();
            addToCustom(emoji);
          });

        $container.append($btn);
      });
    }

    // ============================================
    // 12) 클립보드 복사 유틸리티
    // ============================================
    function copyToClipboard(text, onSuccess) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard
          .writeText(text)
          .then(() => {
            if (typeof onSuccess === "function") {
              onSuccess();
            }
          })
          .catch((err) => {
            console.error("복사 실패:", err);
            showToast("복사에 실패했습니다.", "error");
          });
      } else {
        // Fallback
        const $textarea = $("<textarea>")
          .val(text)
          .css({ position: "fixed", left: "-9999px" });
        $("body").append($textarea);
        $textarea[0].select();
        try {
          document.execCommand("copy");
          if (typeof onSuccess === "function") {
            onSuccess();
          }
        } catch (err) {
          console.error("복사 실패:", err);
          showToast("복사에 실패했습니다.", "error");
        }
        $textarea.remove();
      }
    }

    // ============================================
    // 13) Toast 메시지
    // ============================================
    function showToast(message, type = "info") {
      if (typeof window.showToast === "function") {
        window.showToast(message, type);
      } else {
        console.log(`[${type}] ${message}`);
      }
    }

    // ============================================
    // 14) 초기화
    // ============================================
    function initAll() {
      initCategoryButtons();
      initCustomInput();
      initClearButton();
      initCustomCopyButton();
      initSaveButton();
      initQuickEmojis();

      // 첫 카테고리 표시
      displayEmojiGrid("emotion");
    }

    // 페이지 로드 완료 후 초기화
    initAll();
  });
})();
