/**
 * dictionary.js
 * - 이모지 사전 페이지 인터랙션 (동적 자동 로딩)
 * - 외부 API에서 이모지 데이터 자동 수집
 * - 카테고리별 자동 분류 및 렌더링 (수정: people/object/symbol 버그 해결)
 */

(() => {
  "use strict";

  $(document).ready(function () {
    // ========================================
    // 1. 이모지 스토어 (상태 관리)
    // ========================================
    const emojiStore = {
      data: {},
      initialized: false,
      loading: false,

      async init() {
        if (this.initialized || this.loading) return;
        this.loading = true;

        try {
          const rawEmojis = await this.fetchEmojisFromAPI();
          this.data = this.categorizeEmojis(rawEmojis);
          console.log("✅ 이모지 데이터 로드 성공:", Object.keys(this.data));
        } catch (error) {
          console.warn("⚠️ 외부 API 로드 실패, fallback 사용:", error);
          this.data = this.getFallbackData();
        }

        this.initialized = true;
        this.loading = false;
      },

      /**
       * 외부 API에서 이모지 데이터 가져오기
       */
      async fetchEmojisFromAPI() {
        const urls = [
          "https://cdn.jsdelivr.net/npm/emoji.json/data/emoji.json",
          "https://raw.githubusercontent.com/muan/emoji/master/db.json",
        ];

        for (const url of urls) {
          try {
            const response = await fetch(url, { timeout: 5000 });
            if (!response.ok) throw new Error(`HTTP ${response.status}`);

            let data = await response.json();

            if (!Array.isArray(data) && data.data) {
              data = data.data;
            }

            if (!Array.isArray(data)) {
              throw new Error("데이터가 배열이 아닙니다");
            }

            console.log(`✅ 사용한 API: ${url}`);
            return data;
          } catch (err) {
            console.warn(`❌ ${url} 실패:`, err.message);
            continue;
          }
        }

        throw new Error("모든 API 로드 실패");
      },

      /**
       * 이모지를 카테고리별로 분류
       */
      categorizeEmojis(rawEmojis) {
        const categories = {
          all: [],
          emotion: [],
          love: [],
          nature: [],
          food: [],
          activity: [],
          travel: [],
          people: [],      // 👤 추가됨
          object: [],
          symbol: [],
          generation: [],
        };

        const seen = new Set();

        rawEmojis.forEach((item) => {
          const emoji = item.emoji || item.char;
          if (!emoji || seen.has(emoji)) return;

          seen.add(emoji);

          const entry = {
            emoji,
            name: item.name || item.slug || "이모지",
            keywords: Array.isArray(item.keywords) ? item.keywords : [item.name || ""],
            category: this.mapCategory(item),
          };

          categories.all.push(entry);
          if (entry.category !== "all") {
            categories[entry.category].push(entry);
          }
        });

        // 세대별 카테고리 추가
        categories.generation = this.getGenerationEmojis();

        console.log(
          "📊 카테고리별 이모지 수:",
          Object.entries(categories).map(([k, v]) => `${k}: ${v.length}`)
        );

        return categories;
      },

      /**
       * 원본 이모지 객체를 우리 카테고리에 매핑
       * ⚠️ 주요 수정: people, object, symbol 분류 로직 추가
       */
      mapCategory(item) {
        const group = (item.group || "").toLowerCase();
        const subgroup = (item.subgroup || "").toLowerCase();
        const name = (item.name || "").toLowerCase();

        // 감정 (Smileys & Emotion, Facial Expression)
        if (
          group.includes("smile") ||
          group.includes("emotion") ||
          subgroup.includes("face-smile") ||
          subgroup.includes("face-affection") ||
          subgroup.includes("face-tongue") ||
          subgroup.includes("face-hand") ||
          subgroup.includes("face-neutral") ||
          subgroup.includes("face-sleepy") ||
          subgroup.includes("face-concern") ||
          subgroup.includes("face-negative")
        ) {
          return "emotion";
        }

        // 사랑 (Heart, Kiss, Love, Couple)
        if (
          name.includes("heart") ||
          name.includes("kiss") ||
          name.includes("love") ||
          name.includes("couple") ||
          name.includes("cupid") ||
          subgroup.includes("heart") ||
          subgroup.includes("kiss")
        ) {
          return "love";
        }

        // 자연 (Animals, Nature, Weather)
        if (
          group.includes("animal") ||
          group.includes("nature") ||
          subgroup.includes("animal") ||
          subgroup.includes("plant") ||
          subgroup.includes("weather") ||
          subgroup.includes("sky & weather")
        ) {
          return "nature";
        }

        // 음식 (Food & Drink)
        if (
          group.includes("food") ||
          group.includes("drink") ||
          subgroup.includes("food") ||
          subgroup.includes("drink")
        ) {
          return "food";
        }

        // 활동 (Activities, Sports, Games, Music)
        if (
          group.includes("activity") ||
          group.includes("sport") ||
          group.includes("game") ||
          subgroup.includes("sport") ||
          subgroup.includes("game") ||
          subgroup.includes("music")
        ) {
          return "activity";
        }

        // 여행 (Travel & Places, Buildings)
        if (
          group.includes("travel") ||
          group.includes("place") ||
          group.includes("vehicle") ||
          subgroup.includes("travel & places") ||
          subgroup.includes("place") ||
          subgroup.includes("vehicle") ||
          subgroup.includes("transport")
        ) {
          return "travel";
        }

        // 👤 사람 (새로 추가됨!)
        // People, body parts, roles, occupations, family
        if (
          group.includes("person") ||
          group.includes("people") ||
          subgroup.includes("person") ||
          subgroup.includes("person-role") ||
          subgroup.includes("person-fantasy") ||
          subgroup.includes("person-activity") ||
          subgroup.includes("person-sport") ||
          subgroup.includes("person-resting") ||
          subgroup.includes("body-parts") ||
          subgroup.includes("family") ||
          name.includes("person") ||
          name.includes("woman") ||
          name.includes("man") ||
          name.includes("doctor") ||
          name.includes("nurse") ||
          name.includes("farmer") ||
          name.includes("cook") ||
          name.includes("teacher") ||
          name.includes("artist") ||
          name.includes("student") ||
          name.includes("judge") ||
          name.includes("police") ||
          name.includes("detective") ||
          name.includes("guard") ||
          name.includes("couple") ||
          name.includes("family") ||
          name.includes("baby") ||
          name.includes("child") ||
          name.includes("person") ||
          name.includes("hand") ||
          name.includes("finger") ||
          name.includes("head") ||
          name.includes("body")
        ) {
          return "people";
        }

        // 심볼 (Symbols, Signs)
        if (
          group.includes("symbol") ||
          subgroup.includes("symbol") ||
          subgroup.includes("alphanum") ||
          subgroup.includes("geometric") ||
          subgroup.includes("heart") ||
          subgroup.includes("zodiac") ||
          subgroup.includes("av-symbol") ||
          subgroup.includes("warning")
        ) {
          return "symbol";
        }

        // 사물 (Objects, Tools, Devices - catch-all)
        if (
          group.includes("object") ||
          subgroup.includes("object") ||
          subgroup.includes("tool") ||
          subgroup.includes("office") ||
          subgroup.includes("household") ||
          subgroup.includes("light & video") ||
          subgroup.includes("music") ||
          subgroup.includes("book-paper") ||
          name.includes("bulb") ||
          name.includes("light") ||
          name.includes("lamp") ||
          name.includes("phone") ||
          name.includes("computer") ||
          name.includes("book") ||
          name.includes("gift") ||
          name.includes("package") ||
          name.includes("camera") ||
          name.includes("telescope") ||
          name.includes("microscope") ||
          name.includes("watch") ||
          name.includes("clock") ||
          name.includes("lock") ||
          name.includes("key") ||
          name.includes("tool") ||
          name.includes("hammer") ||
          name.includes("wrench") ||
          name.includes("saw") ||
          name.includes("axe") ||
          name.includes("gun") ||
          name.includes("sword") ||
          name.includes("shield") ||
          name.includes("bath") ||
          name.includes("soap") ||
          name.includes("rocket") ||
          name.includes("airplane") ||
          name.includes("helicopter") ||
          name.includes("train") ||
          name.includes("bus") ||
          name.includes("car") ||
          name.includes("flower") ||
          name.includes("tree") ||
          name.includes("plant") ||
          name.includes("gem") ||
          name.includes("diamond") ||
          name.includes("ring") ||
          name.includes("coin") ||
          name.includes("money") ||
          name.includes("bell") ||
          name.includes("microphone") ||
          name.includes("trumpet") ||
          name.includes("saxophone") ||
          name.includes("guitar") ||
          name.includes("violin") ||
          name.includes("clapper") ||
          name.includes("video") ||
          name.includes("candle") ||
          name.includes("doll") ||
          name.includes("puzzle") ||
          name.includes("teddy") ||
          name.includes("frame") ||
          name.includes("mirror") ||
          name.includes("bed") ||
          name.includes("table") ||
          name.includes("chair") ||
          name.includes("lamp") ||
          name.includes("toilet") ||
          name.includes("shower") ||
          name.includes("bathtub")
        ) {
          return "object";
        }

        // 기본값: 사물로 분류
        return "object";
      },

      /**
       * Fallback 로컬 데이터 (외부 로드 실패 시 사용)
       */
      getFallbackData() {
        return {
          all: [],
          emotion: [
            { emoji: "😊", name: "웃는 얼굴", keywords: ["웃음", "행복"], category: "emotion" },
            { emoji: "😍", name: "하트 눈", keywords: ["사랑", "호감"], category: "emotion" },
            { emoji: "😢", name: "우는 얼굴", keywords: ["슬픔", "눈물"], category: "emotion" },
            { emoji: "😠", name: "화난 얼굴", keywords: ["화남", "짜증"], category: "emotion" },
            { emoji: "😎", name: "선글라스", keywords: ["자신감", "멋"], category: "emotion" },
            { emoji: "😴", name: "자는 얼굴", keywords: ["피곤", "졸음"], category: "emotion" },
            { emoji: "🥹", name: "눈물", keywords: ["감동", "감정"], category: "emotion" },
            { emoji: "😱", name: "깜짝", keywords: ["놀람", "충격"], category: "emotion" },
            { emoji: "🤔", name: "생각", keywords: ["고민", "사고"], category: "emotion" },
            { emoji: "😂", name: "웃음", keywords: ["웃음", "재미"], category: "emotion" },
          ],
          love: [
            { emoji: "❤️", name: "빨간 하트", keywords: ["사랑", "진심"], category: "love" },
            { emoji: "💔", name: "깨진 하트", keywords: ["슬픔", "상심"], category: "love" },
            { emoji: "💕", name: "두 하트", keywords: ["사랑", "애정"], category: "love" },
            { emoji: "💖", name: "반짝 하트", keywords: ["사랑", "설렘"], category: "love" },
            { emoji: "💗", name: "뛰는 하트", keywords: ["설렘", "두근거림"], category: "love" },
            { emoji: "💘", name: "큐피드 화살", keywords: ["사랑", "운명"], category: "love" },
            { emoji: "💝", name: "리본 상자", keywords: ["선물", "사랑"], category: "love" },
          ],
          nature: [
            { emoji: "🌿", name: "풀", keywords: ["식물", "자연"], category: "nature" },
            { emoji: "🌸", name: "벚꽃", keywords: ["봄", "꽃"], category: "nature" },
            { emoji: "🌺", name: "하이비스커스", keywords: ["꽃", "여름"], category: "nature" },
            { emoji: "🌻", name: "해바라기", keywords: ["꽃", "밝음"], category: "nature" },
            { emoji: "🌷", name: "튤립", keywords: ["꽃", "봄"], category: "nature" },
            { emoji: "🌲", name: "나무", keywords: ["숲", "자연"], category: "nature" },
            { emoji: "🌳", name: "낙엽수", keywords: ["나무", "자연"], category: "nature" },
            { emoji: "🌊", name: "파도", keywords: ["바다", "물"], category: "nature" },
            { emoji: "⛰️", name: "산", keywords: ["산", "등산"], category: "nature" },
            { emoji: "🌙", name: "달", keywords: ["밤", "휴식"], category: "nature" },
            { emoji: "⭐", name: "별", keywords: ["별", "우수"], category: "nature" },
            { emoji: "🐶", name: "개", keywords: ["동물", "반려동물"], category: "nature" },
            { emoji: "🐱", name: "고양이", keywords: ["동물", "반려동물"], category: "nature" },
            { emoji: "🦁", name: "사자", keywords: ["동물", "맹수"], category: "nature" },
            { emoji: "🐯", name: "호랑이", keywords: ["동물", "맹수"], category: "nature" },
          ],
          food: [
            { emoji: "🍕", name: "피자", keywords: ["음식", "이탈리안"], category: "food" },
            { emoji: "🍔", name: "햄버거", keywords: ["음식", "버거"], category: "food" },
            { emoji: "🍜", name: "라면", keywords: ["음식", "국수"], category: "food" },
            { emoji: "🍱", name: "도시락", keywords: ["음식", "밥"], category: "food" },
            { emoji: "🍰", name: "케이크", keywords: ["디저트", "달콤함"], category: "food" },
            { emoji: "🍎", name: "사과", keywords: ["과일", "건강"], category: "food" },
            { emoji: "🍌", name: "바나나", keywords: ["과일", "노랑"], category: "food" },
            { emoji: "🍊", name: "오렌지", keywords: ["과일", "귤"], category: "food" },
            { emoji: "🍓", name: "딸기", keywords: ["과일", "빨강"], category: "food" },
            { emoji: "☕", name: "커피", keywords: ["음료", "카페"], category: "food" },
            { emoji: "🍵", name: "차", keywords: ["음료", "따뜻함"], category: "food" },
            { emoji: "🍷", name: "와인", keywords: ["음료", "술"], category: "food" },
          ],
          activity: [
            { emoji: "⚽", name: "축구공", keywords: ["운동", "스포츠"], category: "activity" },
            { emoji: "🏀", name: "농구", keywords: ["운동", "스포츠"], category: "activity" },
            { emoji: "🎾", name: "테니스", keywords: ["운동", "스포츠"], category: "activity" },
            { emoji: "🎮", name: "게임", keywords: ["게임", "조이스틱"], category: "activity" },
            { emoji: "🎵", name: "음표", keywords: ["음악", "노래"], category: "activity" },
            { emoji: "🎶", name: "음악", keywords: ["음악", "멜로디"], category: "activity" },
            { emoji: "🎤", name: "마이크", keywords: ["노래", "공연"], category: "activity" },
            { emoji: "🎸", name: "기타", keywords: ["음악", "악기"], category: "activity" },
            { emoji: "🎹", name: "피아노", keywords: ["음악", "악기"], category: "activity" },
            { emoji: "🏃", name: "달리기", keywords: ["운동", "활동"], category: "activity" },
          ],
          travel: [
            { emoji: "✈️", name: "비행기", keywords: ["여행", "하늘"], category: "travel" },
            { emoji: "🚗", name: "자동차", keywords: ["교통", "이동"], category: "travel" },
            { emoji: "🚕", name: "택시", keywords: ["교통", "이동"], category: "travel" },
            { emoji: "🚆", name: "기차", keywords: ["교통", "철도"], category: "travel" },
            { emoji: "🏖️", name: "해변", keywords: ["여행", "휴가"], category: "travel" },
            { emoji: "🗼", name: "타워", keywords: ["랜드마크", "건축"], category: "travel" },
            { emoji: "🏨", name: "호텔", keywords: ["숙박", "여행"], category: "travel" },
            { emoji: "🗺️", name: "지도", keywords: ["길찾기", "여행"], category: "travel" },
            { emoji: "🎡", name: "관람차", keywords: ["놀이공원", "여행"], category: "travel" },
          ],
          people: [
            { emoji: "👋", name: "손 흔드는 제스처", keywords: ["인사", "손", "작별"], category: "people" },
            { emoji: "👍", name: "엄지손가락 위", keywords: ["좋음", "동의", "엄지"], category: "people" },
            { emoji: "🙏", name: "합장", keywords: ["감사", "기도", "감사함"], category: "people" },
            { emoji: "💪", name: "근육", keywords: ["힘", "근력", "강함"], category: "people" },
            { emoji: "👏", name: "박수", keywords: ["박수", "축하", "응원"], category: "people" },
            { emoji: "🤔", name: "생각하는 얼굴", keywords: ["고민", "생각", "생각함"], category: "people" },
            { emoji: "👨", name: "남자", keywords: ["남자", "사람", "인물"], category: "people" },
            { emoji: "👩", name: "여자", keywords: ["여자", "사람", "인물"], category: "people" },
            { emoji: "👶", name: "아기", keywords: ["아기", "신생아", "아이"], category: "people" },
            { emoji: "👴", name: "할아버지", keywords: ["노인", "남자", "가족"], category: "people" },
          ],
          object: [
            { emoji: "💡", name: "전구", keywords: ["아이디어", "밝음", "사물"], category: "object" },
            { emoji: "📱", name: "휴대폰", keywords: ["기술", "통신", "기기"], category: "object" },
            { emoji: "💻", name: "노트북", keywords: ["컴퓨터", "업무", "기기"], category: "object" },
            { emoji: "⌚", name: "시계", keywords: ["시간", "시각", "시간"], category: "object" },
            { emoji: "📷", name: "카메라", keywords: ["사진", "촬영", "카메라"], category: "object" },
            { emoji: "📺", name: "TV", keywords: ["방송", "엔터", "기기"], category: "object" },
            { emoji: "🎁", name: "선물", keywords: ["선물", "축하", "상자"], category: "object" },
            { emoji: "🎈", name: "풍선", keywords: ["파티", "축제", "풍선"], category: "object" },
            { emoji: "📚", name: "책", keywords: ["공부", "지식", "책"], category: "object" },
            { emoji: "🔑", name: "열쇠", keywords: ["열쇠", "문", "개방"], category: "object" },
          ],
          symbol: [
            { emoji: "❤️", name: "하트", keywords: ["사랑", "심볼", "마음"], category: "symbol" },
            { emoji: "🔥", name: "불", keywords: ["핫", "인기", "불"], category: "symbol" },
            { emoji: "💯", name: "100점", keywords: ["완벽", "만점", "100"], category: "symbol" },
            { emoji: "✨", name: "반짝임", keywords: ["반짝", "마법", "빛"], category: "symbol" },
            { emoji: "⭐", name: "별", keywords: ["우수", "별", "밤"], category: "symbol" },
            { emoji: "🌟", name: "밝은별", keywords: ["우수", "별", "빛"], category: "symbol" },
            { emoji: "⚡", name: "번개", keywords: ["빠름", "힘", "번개"], category: "symbol" },
            { emoji: "🎯", name: "과녁", keywords: ["목표", "정확", "과녁"], category: "symbol" },
            { emoji: "✅", name: "체크", keywords: ["완료", "성공", "체크"], category: "symbol" },
            { emoji: "❌", name: "엑스", keywords: ["실패", "거절", "엑스"], category: "symbol" },
          ],
          generation: this.getGenerationEmojis(),
        };
      },

      /**
       * 세대별 curated 이모지 세트
       */
      getGenerationEmojis() {
        return [
          { emoji: "🚀", name: "로켓", keywords: ["Z세대", "성장"], generation: "Z세대", category: "generation" },
          { emoji: "💯", name: "100점", keywords: ["Z세대", "완벽"], generation: "Z세대", category: "generation" },
          { emoji: "🔥", name: "불", keywords: ["Z세대", "핫"], generation: "Z세대", category: "generation" },
          { emoji: "👀", name: "눈", keywords: ["Z세대", "주목"], generation: "Z세대", category: "generation" },
          { emoji: "💀", name: "해골", keywords: ["Z세대", "웃음"], generation: "Z세대", category: "generation" },
          { emoji: "😂", name: "웃음", keywords: ["Z세대", "웃음"], generation: "Z세대", category: "generation" },
          { emoji: "🙃", name: "뒤집은얼굴", keywords: ["MZ세대", "묘한"], generation: "MZ세대", category: "generation" },
          { emoji: "🤔", name: "생각", keywords: ["MZ세대", "고민"], generation: "MZ세대", category: "generation" },
          { emoji: "💔", name: "깨진하트", keywords: ["MZ세대", "슬픔"], generation: "MZ세대", category: "generation" },
          { emoji: "😎", name: "선글라스", keywords: ["MZ세대", "멋"], generation: "MZ세대", category: "generation" },
          { emoji: "🎭", name: "공연", keywords: ["MZ세대", "표현"], generation: "MZ세대", category: "generation" },
          { emoji: "😍", name: "하트눈", keywords: ["밀레니얼", "사랑"], generation: "밀레니얼", category: "generation" },
          { emoji: "✨", name: "반짝임", keywords: ["밀레니얼", "마법"], generation: "밀레니얼", category: "generation" },
          { emoji: "🙌", name: "만세", keywords: ["밀레니얼", "축하"], generation: "밀레니얼", category: "generation" },
          { emoji: "🎉", name: "축제", keywords: ["밀레니얼", "파티"], generation: "밀레니얼", category: "generation" },
          { emoji: "👍", name: "좋음", keywords: ["X세대", "동의"], generation: "X세대", category: "generation" },
          { emoji: "💪", name: "근육", keywords: ["X세대", "힘"], generation: "X세대", category: "generation" },
          { emoji: "🎸", name: "기타", keywords: ["X세대", "음악"], generation: "X세대", category: "generation" },
          { emoji: "📺", name: "TV", keywords: ["X세대", "영상"], generation: "X세대", category: "generation" },
        ];
      },
    };

    // ========================================
    // 2. UI 상태 관리
    // ========================================
    let uiState = {
      currentFilter: "all",
      currentSearchQuery: "",
      displayedCount: 15,
      filteredData: [],
    };

    // ========================================
    // 3. 유틸리티 함수
    // ========================================

    function normalizeText(text) {
      return text.toLowerCase().trim();
    }

    /**
     * ✅ 수정된 필터 함수
     * - all 예외 처리
     * - 검색과 카테고리 함께 적용
     */
    function getFilteredData() {
      // Step 1: 카테고리 필터
      let result = [];

      if (uiState.currentFilter === "all") {
        // "모두"는 전체 데이터 사용
        result = emojiStore.data.all || [];
      } else {
        // 해당 카테고리만 사용
        result = emojiStore.data[uiState.currentFilter] || [];
      }

      // Step 2: 검색 필터 (있으면 적용)
      if (uiState.currentSearchQuery) {
        const query = normalizeText(uiState.currentSearchQuery);
        result = result.filter((item) => {
          const name = normalizeText(item.name);
          const keywords = (item.keywords || []).map((k) => normalizeText(k)).join(" ");
          const emoji = item.emoji;

          return name.includes(query) || keywords.includes(query) || emoji.includes(query);
        });
      }

      return result;
    }

    function createEmojiCard(item) {
      return `
        <div class="emoji-dictionary-card" data-emoji="${item.emoji}" data-name="${item.name}">
          <div class="emoji-dict-emoji">${item.emoji}</div>
          <h3 class="emoji-dict-name">${item.name}</h3>
          <p class="emoji-dict-desc">${item.keywords.slice(0, 2).join(", ")}</p>
          ${
            item.generation
              ? `<div class="emoji-dict-generation">${item.generation}</div>`
              : ""
          }
        </div>
      `;
    }

    /**
     * ✅ 수정된 렌더 함수
     * - empty state 정확하게 처리
     */
    function renderEmojiGrid() {
      uiState.filteredData = getFilteredData();

      // Step 1: 필터링 결과가 비어있는지 확인
      if (uiState.filteredData.length === 0) {
        $("#emoji-dictionary-grid").empty();
        updateEmptyState(true); // empty state 표시
        $("#load-more-btn").hide();
        return;
      }

      // Step 2: empty state 숨기기
      updateEmptyState(false);

      // Step 3: 카드 렌더링
      const itemsToShow = uiState.filteredData.slice(0, uiState.displayedCount);
      const html = itemsToShow.map((item) => createEmojiCard(item)).join("");

      $("#emoji-dictionary-grid").html(html);

      // Step 4: 더 보기 버튼 업데이트
      updateLoadMoreButton();

      // Step 5: 카드 클릭 이벤트 재바인딩
      initCardClickEvents();
    }

    /**
     * ✅ 수정된 empty state 처리
     */
    function updateEmptyState(show) {
      if (show) {
        $("#no-results-message").show();
      } else {
        $("#no-results-message").hide();
      }
    }

    function updateLoadMoreButton() {
      if (uiState.displayedCount >= uiState.filteredData.length) {
        $("#load-more-btn").hide();
      } else {
        $("#load-more-btn").show();
      }
    }

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
            showToast(`${text} 이모지가 복사되었습니다.`, "success");
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
          showToast(`${text} 이모지가 복사되었습니다.`, "success");
        } catch (err) {
          showToast("복사 실패. 다시 시도해주세요.", "error");
        }
        document.body.removeChild(textarea);
      }
    }

    // ========================================
    // 4. 이벤트 핸들러
    // ========================================

    function initCategoryTabs() {
      $(".category-tab").on("click", function () {
        $(".category-tab").removeClass("category-tab--active");
        $(this).addClass("category-tab--active");

        // ✅ 버튼의 data-filter를 정확히 읽음
        uiState.currentFilter = $(this).data("filter");
        uiState.displayedCount = 15;
        uiState.currentSearchQuery = "";
        $("#dict-search-input").val("");

        console.log(`🔍 필터 변경: ${uiState.currentFilter}`);
        console.log(`📊 현재 데이터 개수:`, emojiStore.data[uiState.currentFilter]?.length || 0);

        renderEmojiGrid();
      });
    }

    function initSearch() {
      const searchInput = $("#dict-search-input");
      const searchBtn = $("#dict-search-btn");

      function handleSearch() {
        uiState.currentSearchQuery = searchInput.val();
        uiState.displayedCount = 15;
        renderEmojiGrid();

        if (uiState.filteredData.length === 0 && uiState.currentSearchQuery) {
          showToast("검색 결과가 없습니다.", "warning");
        }
      }

      searchBtn.on("click", handleSearch);
      searchInput.on("keypress", function (e) {
        if (e.which === 13) {
          handleSearch();
          e.preventDefault();
        }
      });
    }

    function initCardClickEvents() {
      $(".emoji-dictionary-card").on("click", function () {
        const emoji = $(this).data("emoji");
        copyToClipboard(emoji);

        $(this).addClass("copied");
        setTimeout(() => {
          $(this).removeClass("copied");
        }, 300);
      });
    }

    function initLoadMoreButton() {
      $("#load-more-btn").on("click", function () {
        uiState.displayedCount += 15;
        renderEmojiGrid();
      });
    }

    // ========================================
    // 5. 초기화 및 시작
    // ========================================

    async function initAll() {
      const grid = $("#emoji-dictionary-grid");
      grid.html('<div style="text-align: center; padding: 40px; color: #999;">🔄 이모지 데이터 로딩 중...</div>');

      await emojiStore.init();

      console.log("✅ emojiStore 초기화 완료");
      console.log("📊 all 카테고리 개수:", emojiStore.data.all?.length || 0);
      console.log("📊 people 카테고리 개수:", emojiStore.data.people?.length || 0);
      console.log("📊 object 카테고리 개수:", emojiStore.data.object?.length || 0);
      console.log("📊 symbol 카테고리 개수:", emojiStore.data.symbol?.length || 0);

      initCategoryTabs();
      initSearch();
      initLoadMoreButton();

      renderEmojiGrid();
    }

    initAll();
  });
})();
