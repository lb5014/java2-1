const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');

const colorBg = () =>{
    document.body.style.backgroundColor=color.value;

    if(color.value === '#ffffff'){
        text.textContent =`컬러 코드 :${color.value}(white)`;
    }
    else if(color.value === '#000000'){
        text.textContent=`컬러 코드 : ${color.value}(black)`;
    }
    else {
        text.textContent=`컬러 코드 : ${color.value}`;
    }
}
color.addEventListener('input',colorBg);