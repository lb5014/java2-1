const addressElement = document.querySelectorAll(".user")[1]; // 주소 요소 선택

// 배경색 추가
addressElement.addEventListener("mouseover", () => {
  addressElement.style.backgroundColor = "yellow";
});

// 배경색 제거
addressElement.addEventListener("mouseout", () => {
  addressElement.style.backgroundColor = "transparent"; // 또는 "transparent"
});