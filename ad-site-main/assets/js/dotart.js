/**
 * Dot Art Page Logic
 * - Image upload and preview
 * - Style, precision, width, and invert options
 * - Canvas-based image to dot art conversion
 * - Result copy and reset functionality
 */

$(document).ready(function() {
  // ========================================
  // CHARACTER SETS FOR DIFFERENT STYLES
  // ========================================
  const dotArtStyles = {
    basic: '⠀⠄⠆⠇⠋⠛⣿',
    outline: '⠀⢀⢂⢇⢎⣶⣿',
    simple: '⠀⠂⠆⠖⠶⣿',
    solid: '⠀⣿'
  };

  // ========================================
  // UI STATE
  // ========================================
  let uiState = {
    uploadedImage: null,
    selectedStyle: 'basic',
    precision: 50,
    width: 50,
    invertBg: false,
    resultText: '',
  };

  // ========================================
  // INITIALIZATION
  // ========================================
  function init() {
    bindUploadEvents();
    bindOptionEvents();
    bindConvertButton();
    bindCopyResetButtons();
  }

  // ========================================
  // UPLOAD EVENTS
  // ========================================
  function bindUploadEvents() {
    const uploadBox = $('#dotart-upload-box');
    const fileInput = $('#dotart-image-input');
    const uploadBtn = $('#dotart-upload-btn');

    uploadBtn.on('click', function(e) {
      e.preventDefault();
      fileInput.click();
    });

    fileInput.on('change', function(e) {
      handleImageUpload(e);
    });

    uploadBox.on('dragover', function(e) {
      e.preventDefault();
      uploadBox.css('border-color', '#667eea');
    });

    uploadBox.on('dragleave', function(e) {
      uploadBox.css('border-color', '#ddd');
    });

    uploadBox.on('drop', function(e) {
      e.preventDefault();
      uploadBox.css('border-color', '#ddd');
      
      const files = e.originalEvent.dataTransfer.files;
      if (files.length > 0) {
        fileInput[0].files = files;
        handleImageUpload({ target: { files: files } });
      }
    });
  }

  function handleImageUpload(e) {
    const files = e.target.files;
    if (files.length === 0) return;

    const file = files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
      const img = new Image();
      img.onload = function() {
        uiState.uploadedImage = img;
        renderImagePreview(img);
        showToast('이미지가 업로드되었습니다', 'success');
      };
      img.src = event.target.result;
    };

    reader.readAsDataURL(file);
  }

  function renderImagePreview(img) {
    const preview = $('#dotart-preview');
    const previewImg = $('#dotart-preview-img');
    
    previewImg.attr('src', img.src);
    preview.show();
  }

  // ========================================
  // OPTION EVENTS
  // ========================================
  function bindOptionEvents() {
    // Style buttons
    $('.dotart-style-btn').on('click', function() {
      $('.dotart-style-btn').removeClass('dotart-style-btn--active');
      $(this).addClass('dotart-style-btn--active');
      uiState.selectedStyle = $(this).data('style');
    });

    // Precision slider
    $('#dotart-precision').on('input', function() {
      const value = $(this).val();
      uiState.precision = parseInt(value);
      $('#precision-value').text(value);
    });

    // Width slider
    $('#dotart-width').on('input', function() {
      const value = $(this).val();
      uiState.width = parseInt(value);
      $('#width-value').text(value);
    });

    // Invert checkbox
    $('#dotart-invert').on('change', function() {
      uiState.invertBg = $(this).is(':checked');
    });
  }

  // ========================================
  // CONVERT BUTTON
  // ========================================
  function bindConvertButton() {
    $('#dotart-convert-btn').on('click', function() {
      if (!uiState.uploadedImage) {
        showToast('이미지를 먼저 업로드해주세요', 'warning');
        return;
      }

      generateDotArt();
    });
  }

  // ========================================
  // GENERATE DOT ART
  // ========================================
  function generateDotArt() {
    const img = uiState.uploadedImage;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Calculate dimensions
    const targetWidth = Math.max(20, Math.min(150, uiState.width));
    const aspect = img.height / img.width;
    const targetHeight = Math.ceil(targetWidth * aspect * 0.5);

    canvas.width = targetWidth;
    canvas.height = targetHeight;

    // Draw image on canvas
    ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

    // Get image data
    const imageData = ctx.getImageData(0, 0, targetWidth, targetHeight);
    const data = imageData.data;

    // Sample and convert
    const result = buildAsciiOutput(data, targetWidth, targetHeight);
    uiState.resultText = result;
    displayResult(result);
    updateButtonStates();
  }

  function buildAsciiOutput(data, width, height) {
    const chars = dotArtStyles[uiState.selectedStyle] || dotArtStyles.basic;
    let result = '';

    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        const pixelIndex = (i * width + j) * 4;
        const r = data[pixelIndex];
        const g = data[pixelIndex + 1];
        const b = data[pixelIndex + 2];

        // Calculate brightness
        let brightness = (r * 299 + g * 587 + b * 114) / 1000;

        if (uiState.invertBg) {
          brightness = 255 - brightness;
        }

        // Map brightness to character
        const charIndex = Math.floor((brightness / 255) * (chars.length - 1));
        result += chars[charIndex];
      }
      result += '\n';
    }

    return result;
  }

  function displayResult(text) {
    const resultBox = $('#dotart-result-box');
    resultBox.text(text);
  }

  function updateButtonStates() {
    const hasResult = uiState.resultText.length > 0;
    $('#dotart-copy-btn').prop('disabled', !hasResult);
    $('#dotart-reset-btn').prop('disabled', !hasResult);
  }

  // ========================================
  // COPY AND RESET BUTTONS
  // ========================================
  function bindCopyResetButtons() {
    $('#dotart-copy-btn').on('click', function() {
      if (!uiState.resultText) {
        showToast('복사할 결과가 없습니다', 'warning');
        return;
      }

      copyToClipboard(uiState.resultText);
      showToast('도트 아트가 복사되었습니다!', 'success');
    });

    $('#dotart-reset-btn').on('click', function() {
      resetDotArt();
    });
  }

  function resetDotArt() {
    // Clear image
    uiState.uploadedImage = null;
    $('#dotart-image-input').val('');
    $('#dotart-preview').hide();

    // Reset options
    $('.dotart-style-btn').removeClass('dotart-style-btn--active');
    $('.dotart-style-btn').first().addClass('dotart-style-btn--active');
    uiState.selectedStyle = 'basic';

    $('#dotart-precision').val(50);
    $('#precision-value').text('50');
    uiState.precision = 50;

    $('#dotart-width').val(50);
    $('#width-value').text('50');
    uiState.width = 50;

    $('#dotart-invert').prop('checked', false);
    uiState.invertBg = false;

    // Clear result
    uiState.resultText = '';
    displayResult('준비가 완료되었습니다.\n이미지를 업로드하고 옵션을 설정한 후\n"도트 아트 생성" 버튼을 클릭하세요.');
    updateButtonStates();

    showToast('초기화되었습니다', 'info');
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
