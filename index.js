// 미디어 쿼리 적용 시, 3줄 클릭하면 메뉴 오픈
document
  .getElementById("hamburger-menu")
  .addEventListener("click", function () {
    this.classList.toggle("active");
    document.querySelector(".menu").classList.toggle("show");
  });

function handleSearch(event) {
  event.preventDefault(); // 기본 제출 동작 방지

  // 클래스 이름으로 요소를 가져올 때는 배열 형태로 반환됨
  const inputValue = document.querySelector(".searchInput").value.trim();

  if (!inputValue) {
    alert("검색어를 입력해주세요.");
    return;
  }

  const searchUrl = `search_result.html?query=${encodeURIComponent(
    inputValue
  )}`;
  window.location.href = searchUrl;
}

function initialiseSearch() {
  const searchForm = document.querySelector(".search");
  const searchInput = document.querySelector(".searchInput");

  if (searchForm) {
    searchForm.addEventListener("submit", handleSearch);
  }

  if (searchInput) {
    searchInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        searchForm.submit();
      }
    });
  }
}

// 페이지 로드 시 검색 초기화 함수 실행
window.onload = initialiseSearch;
