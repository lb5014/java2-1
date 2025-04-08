const title = document.querySelector("#title");
const pfImage = document.querySelector("#profile img");
const address = document.querySelectorAll(".user")[1]; // 주소 요소 선택
const contact = document.querySelectorAll(".user")[2]; // 연락처 요소 선택

title.onclick = () => title.innerText = "프로필";
pfImage.onclick = () => pfImage.src = "images/pf2.png";

address.onclick = () => address.innerText = "주소 : 대림대학교"; // 주소 클릭 시 변경
contact.onclick = () => contact.innerText = "연락처 : 031-450-1114"; // 연락처 클릭 시 변경