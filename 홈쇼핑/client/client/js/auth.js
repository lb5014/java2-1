// 회원가입
document.getElementById('signupForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    });
    if (response.ok) {
        alert("회원가입 성공!");
        window.location.href = '/login.html';
    } else {
        alert("회원가입 실패!");
    }
});

// 로그인
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
    });
    if (response.ok) {
        alert("로그인 성공!");
        window.location.href = '/index.html';
    } else {
        alert("로그인 실패!");
    }
});