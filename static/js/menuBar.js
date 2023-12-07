/* 헤더 토글 버튼을 누르면 호출되는 함수 */
function toggleFloatingBar() {
    var floatingBar = document.getElementById("floatingBar");
    floatingBar.style.width = floatingBar.style.width === "250px" ? "0" : "250px";
}

/* 초기화 및 헤더 토글 버튼에 이벤트 리스너 추가 */
function initialize() {
    var headerToggleButton = document.getElementById("headerToggleButton");
    headerToggleButton.addEventListener("click", toggleFloatingBar);
}

/* 페이지 로드 시 초기화 함수 실행 */
window.onload = initialize;
