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
// function setBodyHeight() {
//     document.body.style.height = `${window.screen.height}px`;
//     document.body.style.overflow = "hidden";
// }
// 페이지 로드 및 창 크기 변경 시 적용
// document.addEventListener("DOMContentLoaded", setBodyHeight);
// window.addEventListener("resize", setBodyHeight);


// 화면 고정 및 스크롤 방지 (1920x1080에서만 적용)
function setBodyHeight() {
    const container = document.querySelector(".container");
    
    if (window.innerWidth === 1920 && window.innerHeight === 1080) {
        document.body.style.height = `${window.screen.height}px`;
        document.body.style.overflow = "hidden"; 

        if (container) {
            container.style.overflow = "hidden";
        }
    } else {
        document.body.style.height = "auto";
        document.body.style.overflowX = "hidden"; 
        document.body.style.overflowY = "auto";

        if (container) {
            container.style.overflowX = "hidden";
            container.style.overflowY = "scroll"; 
            container.style.maxHeight = "100vh";
            
            // 스크롤바 숨기는 스타일 추가
            container.style.scrollbarWidth = "none"; // Firefox
            container.style.msOverflowStyle = "none"; // IE & Edge
        }
    }
}

// 스크롤바 숨기기 (Webkit 기반 브라우저 - Chrome, Safari)
const style = document.createElement("style");
style.innerHTML = `
    .container::-webkit-scrollbar {
        display: none; /* Chrome, Safari */
    }
`;
document.head.appendChild(style);

// 페이지 로드 및 창 크기 변경 시 적용
document.addEventListener("DOMContentLoaded", setBodyHeight);
window.addEventListener("resize", setBodyHeight);



// 알림 버튼 클릭 시 컨테이너 활성화/비활성화
function handleAlertToggle() {
    const alertButton = document.querySelector(".alert-btn");
    const alertContainer = document.querySelector(".alert-container");

    if (alertButton && alertContainer) {
        alertButton.addEventListener("click", () => alertContainer.classList.toggle("active"));
    }
}

//250306 버튼 클릭시 알림창 닫기
document.addEventListener("click", function (event) {
    if (event.target.closest(".close-btn")) {
        const alertBox = event.target.closest(".alert-box");
        if (alertBox) {
            alertBox.style.display = "none"; 
        }
    }
});

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

// 숫자 카운트 애니메이션
const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.textContent = "0";

  const targetNum = +counter.getAttribute("data-target");

  const updateCounter = () => {
    const count = +counter.textContent;

    const increment = targetNum / 500;
    const nextCount = Math.ceil(count + increment);

    counter.textContent = nextCount > targetNum ? targetNum : nextCount;

    if (count < targetNum) {
      requestAnimationFrame(updateCounter);
    }
  };

  updateCounter();
});

// 오늘 날짜 가져오기
function setTodayDate() {
    let today = new Date();
    let formattedDate = today.toISOString().split('T')[0]; // YYYY-MM-DD 형식

    document.getElementById("startDate").value = formattedDate;
    document.getElementById("endDate").value = formattedDate;
}

// 페이지 로드 시 실행
window.onload = setTodayDate;


// subpage sub-02 기능동작
document.querySelector(".list-img-off").addEventListener("click", function() {
    // `.info-wrap`에 `active` 클래스 추가
    document.querySelector(".info-wrap").classList.add("active");

    // 이미지 경로 변경
    if (this.src.includes("user-list-off.svg")) {
        this.src = this.src.replace("user-list-off.svg", "user-list-on.svg");
    }
});


document.querySelector(".sub-02 .btn-card").addEventListener("click", function() {
    document.querySelector(".sub-02 .input-modal").classList.add("on");
});

document.querySelector(".sub-02 .input-modal .submit").addEventListener("click", function() {
    window.location.href = "sub-0201.html"; // 페이지 이동
});
