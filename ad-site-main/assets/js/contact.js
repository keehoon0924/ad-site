/**
 * 문의하기 — Netlify Forms (AJAX 제출) + 완료 모달
 * 참고: https://docs.netlify.com/forms/setup/
 */
(() => {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    if (!form) return;

    const msgErr = document.getElementById("contact-msg-err");
    const modal = document.getElementById("contact-success-modal");
    const modalCloseBtns = modal
      ? modal.querySelectorAll("[data-close-modal]")
      : [];

    const showErr = (text) => {
      if (!msgErr) return;
      msgErr.textContent = text || "";
      msgErr.classList.toggle("is-visible", Boolean(text));
    };

    const openModal = () => {
      if (!modal) return;
      modal.hidden = false;
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("contact-modal-open");
      const focusEl = modal.querySelector("[data-modal-initial-focus]");
      if (focusEl) focusEl.focus();
    };

    const closeModal = () => {
      if (!modal) return;
      modal.hidden = true;
      modal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("contact-modal-open");
    };

    modalCloseBtns.forEach((el) => {
      el.addEventListener("click", closeModal);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal && !modal.hidden) closeModal();
    });

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const hp = form.querySelector('[name="bot-field"]');
      if (hp && hp.value.trim() !== "") {
        return;
      }

      const name = String(form.querySelector('[name="name"]')?.value || "").trim();
      const email = String(form.querySelector('[name="email"]')?.value || "").trim();
      const category = String(form.querySelector('[name="category"]')?.value || "");
      const subjectLine = String(form.querySelector('[name="subject"]')?.value || "").trim();
      const message = String(form.querySelector('[name="message"]')?.value || "").trim();
      const consent = form.querySelector('[name="privacy_consent"]')?.checked;

      let err = "";
      if (!name) err = "이름을 입력해 주세요.";
      else if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
        err = "올바른 이메일 주소를 입력해 주세요.";
      else if (!category) err = "문의 유형을 선택해 주세요.";
      else if (!subjectLine) err = "문의 제목을 입력해 주세요.";
      else if (message.length < 10) err = "문의 내용은 10자 이상 입력해 주세요.";
      else if (!consent) err = "개인정보 수집·이용에 동의해 주세요.";

      if (err) {
        showErr(err);
        return;
      }

      showErr("");

      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.disabled = true;

      /**
       * Netlify Forms AJAX는 공식 예시처럼 사이트 루트(/)로 POST 하는 것이 안정적입니다.
       * contact.html 등 개별 파일 경로로 POST 하면 404/405가 나와 실패할 수 있습니다.
       */
      const params = new URLSearchParams(new FormData(form));
      const rootPostUrl = new URL("/", window.location.origin).href;

      try {
        let res = await fetch(rootPostUrl, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: params.toString(),
          credentials: "same-origin",
        });

        if (!res.ok && (res.status === 404 || res.status === 405)) {
          const contactPageUrl = new URL("contact.html", window.location.href).href;
          res = await fetch(contactPageUrl, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: params.toString(),
            credentials: "same-origin",
          });
        }

        if (res.ok) {
          form.reset();
          openModal();
        } else {
          showErr(
            "전송에 실패했습니다. 잠시 후 다시 시도하거나 contact@emojiribbit.com 으로 메일을 보내 주세요."
          );
        }
      } catch {
        showErr(
          "네트워크 오류가 발생했습니다. 연결을 확인하거나 이메일로 직접 문의해 주세요."
        );
      } finally {
        if (submitBtn) submitBtn.disabled = false;
      }
    });
  });
})();
