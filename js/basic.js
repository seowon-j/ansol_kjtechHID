function includeHtml() {
    const includeTarget = document.querySelectorAll('.includeJs');
    includeTarget.forEach((el) => {
        const targetFile = el.dataset.includeHtml;
        if (targetFile) {
            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState === XMLHttpRequest.DONE) {
                    el.innerHTML = this.status === 200 ? this.responseText : 'include not found.';
                }
            };
            xhttp.open('GET', targetFile, true);
            xhttp.send();
        }
    });
}
includeHtml();
document.addEventListener("DOMContentLoaded", function () {
    setBodyHeight();
    handleAlertToggle();
    setupDoorStatusToggle();

    window.addEventListener("resize", setBodyHeight);
});

// 화면 고정 및 스크롤 방지
function setBodyHeight() {
    document.body.style.height = `${window.screen.height}px`;
    document.body.style.overflow = "hidden";
}

// 알림 버튼 클릭 시 컨테이너 활성화/비활성화
function handleAlertToggle() {
    const alertButton = document.querySelector(".alert-btn");
    const alertContainer = document.querySelector(".alert-container");

    if (alertButton && alertContainer) {
        alertButton.addEventListener("click", () => alertContainer.classList.toggle("active"));
    }
}

// 출입문 상태 업데이트 (잠김 / 열림)
function setupDoorStatusToggle() {
    document.querySelectorAll(".main-board .form-check-input").forEach(checkbox => {
        const itemContainer = checkbox.closest(".item");
        if (!itemContainer) return;

        const statusText = itemContainer.querySelector(".text-status");
        if (!statusText) return;

        function updateStatus() {
            statusText.textContent = checkbox.checked ? "The door is unlocked." : "The door is locked.";
        }

        checkbox.addEventListener("change", updateStatus);
        updateStatus();
    });
}

