/**
 * Decofont Page Logic
 * - Text input and decoration style selection
 * - Combining character application
 * - Result copy and reset functionality
 */

$(document).ready(function() {
  // ========================================
  // DECORATION PRESETS - COMBINING CHARACTERS
  // ========================================
  const decoPresets = [
    { id: 'dot-double', label: 'ä', combining: '\u0308' },
    { id: 'dot-ring', label: 'å', combining: '\u030A' },
    { id: 'dot-above', label: 'ȧ', combining: '\u0307' },
    { id: 'line-below', label: 'a̲', combining: '\u0332' },
    { id: 'line-strike', label: 'a̶', combining: '\u0336' },
    { id: 'tilde', label: 'ã', combining: '\u0303' },
    { id: 'grave', label: 'à', combining: '\u0300' },
    { id: 'acute', label: 'á', combining: '\u0301' },
    { id: 'circumflex', label: 'â', combining: '\u0302' },
    { id: 'macron', label: 'ā', combining: '\u0304' },
    { id: 'breve', label: 'ă', combining: '\u0306' },
    { id: 'dot-middle', label: 'a̤', combining: '\u0324' },
    { id: 'diaeresis', label: 'ä', combining: '\u0308' },
    { id: 'caron', label: 'ǎ', combining: '\u030C' },
    { id: 'double-acute', label: 'a̋', combining: '\u030B' },
    { id: 'cedilla', label: 'ạ', combining: '\u0323' },
    { id: 'ogonek', label: 'ą', combining: '\u0328' },
    { id: 'line-above', label: 'a̅', combining: '\u0305' },
    { id: 'combining-long-solidus', label: 'a̶', combining: '\u0336' },
    { id: 'combining-short-stroke', label: 'a̵', combining: '\u0335' },
    { id: 'combining-x-above', label: 'a̶', combining: '\u0336' },
    { id: 'combining-vertical-line-above', label: 'a̚', combining: '\u031A' },
    { id: 'combining-turned-comma-above', label: 'a̓', combining: '\u0313' },
    { id: 'combining-comma-above', label: 'a̕', combining: '\u0315' },
    { id: 'combining-grave-tone-mark', label: 'a̋', combining: '\u030B' },
    { id: 'combining-acute-tone-mark', label: 'á̋', combining: '\u0301\u030B' },
    { id: 'combining-double-vertical-line-above', label: 'a̚', combining: '\u031B' },
    { id: 'combining-double-grave', label: 'ȁ', combining: '\u030F' },
    { id: 'combining-candrabindu', label: 'a̐', combining: '\u0310' },
    { id: 'combining-laryngealization', label: 'a̒', combining: '\u0312' },
    { id: 'combining-bristle-hairs', label: 'a̒', combining: '\u0312' },
    { id: 'combining-right-half-ring', label: 'ḁ', combining: '\u0325' },
    { id: 'combining-left-half-ring', label: 'a̜', combining: '\u031C' },
    { id: 'combining-up-tack', label: 'a̰', combining: '\u0330' },
    { id: 'combining-down-tack', label: 'a̬', combining: '\u032C' },
    { id: 'combining-plus-sign-above', label: 'a̟', combining: '\u031F' },
    { id: 'combining-minus-sign-below', label: 'a̠', combining: '\u0320' },
    { id: 'combining-hook-above', label: 'ả', combining: '\u0309' },
    { id: 'combining-horn', label: 'ơ', combining: '\u031B' },
    { id: 'combining-seagull-below', label: 'a̘', combining: '\u0318' },
    { id: 'combining-tilde-below', label: 'a̴', combining: '\u0334' },
    { id: 'combining-dot-below', label: 'ạ', combining: '\u0323' },
    { id: 'combining-diaeresis-below', label: 'a̤', combining: '\u0324' },
    { id: 'combining-ring-below', label: 'ḁ', combining: '\u0325' },
    { id: 'combining-comma-below', label: 'a̦', combining: '\u0326' },
    { id: 'combining-cedilla', label: 'ą', combining: '\u0327' },
    { id: 'combining-ogonek', label: 'ą', combining: '\u0328' },
    { id: 'combining-vertical-line-below', label: 'a̩', combining: '\u0329' },
    { id: 'combining-bridge-below', label: 'a̪', combining: '\u032A' },
    { id: 'combining-inverted-bridge-below', label: 'a̫', combining: '\u032B' },
  ];

  // ========================================
  // UI STATE
  // ========================================
  let uiState = {
    inputText: '',
    selectedStyle: null,
    resultText: '',
  };

  // ========================================
  // INITIALIZATION
  // ========================================
  function init() {
    renderStyleGrid();
    bindStyleSelection();
    bindConvertButton();
    bindCopyResetButtons();
    bindInputField();
  }

  // ========================================
  // RENDER STYLES GRID
  // ========================================
  function renderStyleGrid() {
    const grid = $('#decofont-styles-grid');
    grid.empty();

    decoPresets.forEach((preset) => {
      const button = $(`
        <button class="decofont-style-btn" data-style-id="${preset.id}" data-combining="${encodeURIComponent(preset.combining)}" title="${preset.label}">
          ${preset.label}
        </button>
      `);

      grid.append(button);
    });
  }

  // ========================================
  // STYLE SELECTION BINDING
  // ========================================
  function bindStyleSelection() {
    $(document).on('click', '.decofont-style-btn', function() {
      const styleId = $(this).data('style-id');
      const combining = decodeURIComponent($(this).data('combining'));

      // Remove active from all buttons
      $('.decofont-style-btn').removeClass('decofont-style-btn--active');

      // Add active to clicked button
      $(this).addClass('decofont-style-btn--active');

      // Update state
      uiState.selectedStyle = {
        id: styleId,
        combining: combining,
      };
    });
  }

  // ========================================
  // INPUT FIELD BINDING
  // ========================================
  function bindInputField() {
    $('#decofont-input').on('input', function() {
      uiState.inputText = $(this).val();
    });
  }

  // ========================================
  // CONVERT BUTTON BINDING
  // ========================================
  function bindConvertButton() {
    $('#decofont-convert-btn').on('click', function() {
      applyDecoFont();
    });
  }

  // ========================================
  // APPLY DECORATION FONT
  // ========================================
  function applyDecoFont() {
    // Validation
    if (!uiState.inputText.trim()) {
      showToast('텍스트를 입력해주세요.', 'warning');
      return;
    }

    if (!uiState.selectedStyle) {
      showToast('장식 스타일을 선택해주세요.', 'warning');
      return;
    }

    // Apply combining character to each character
    const result = uiState.inputText
      .split('')
      .map((char) => {
        // Skip spaces (do not add combining character)
        if (char === ' ') {
          return char;
        }
        // Add combining character after each character
        return char + uiState.selectedStyle.combining;
      })
      .join('');

    uiState.resultText = result;
    displayResult(result);
    updateButtonStates();
  }

  // ========================================
  // DISPLAY RESULT
  // ========================================
  function displayResult(text) {
    const resultBox = $('#decofont-result-box');
    resultBox.html(`<div>${escapeHtml(text)}</div>`);
  }

  // ========================================
  // UPDATE BUTTON STATES
  // ========================================
  function updateButtonStates() {
    const hasResult = uiState.resultText.length > 0;

    $('#decofont-copy-btn').prop('disabled', !hasResult);
    $('#decofont-reset-btn').prop('disabled', !hasResult);
  }

  // ========================================
  // COPY RESULT BINDING
  // ========================================
  function bindCopyResetButtons() {
    $('#decofont-copy-btn').on('click', function() {
      if (!uiState.resultText) {
        showToast('복사할 결과가 없습니다.', 'warning');
        return;
      }

      copyToClipboard(uiState.resultText);
      showToast('결과가 복사되었습니다!', 'success');
    });

    $('#decofont-reset-btn').on('click', function() {
      resetDecoFont();
    });
  }

  // ========================================
  // RESET FUNCTION
  // ========================================
  function resetDecoFont() {
    // Clear input
    $('#decofont-input').val('');
    uiState.inputText = '';

    // Clear selected style
    $('.decofont-style-btn').removeClass('decofont-style-btn--active');
    uiState.selectedStyle = null;

    // Clear result
    const resultBox = $('#decofont-result-box');
    resultBox.html(
      '<p class="decofont-result-empty">아직 결과가 없습니다. 텍스트를 입력하고 변환해보세요.</p>'
    );
    uiState.resultText = '';

    // Update button states
    updateButtonStates();

    showToast('초기화되었습니다.', 'info');
  }

  // ========================================
  // UTILITY FUNCTIONS
  // ========================================
  function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).catch(() => {
        fallbackCopy(text);
      });
    } else {
      fallbackCopy(text);
    }
  }

  function fallbackCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }

  function escapeHtml(text) {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;',
    };
    return text.replace(/[&<>"']/g, (m) => map[m]);
  }

  function showToast(message, type = 'info') {
    const toast = $(`<div class="toast toast--${type}">${message}</div>`);
    $('body').append(toast);

    setTimeout(() => {
      toast.fadeOut(300, function() {
        $(this).remove();
      });
    }, 2500);
  }

  // ========================================
  // INITIALIZATION CALL
  // ========================================
  init();
});
