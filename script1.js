  let editingIndex = -1;

  function submitEntry() {
    const name = document.getElementById('name').value;
    const content = document.getElementById('content').value;
    const image = document.getElementById('image').value;
    const tbody = document.getElementById('entryTableBody');

    if (!name || !content || !image) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    if (editingIndex === -1) {
      // 등록
      const row = tbody.insertRow();
      row.innerHTML = `
        <td><img src="${image}" alt="사진"></td>
        <td>${name}</td>
        <td>${content}</td>
        <td>
          <button onclick="editEntry(this)">수정</button>
          <button onclick="deleteEntry(this)">삭제</button>
        </td>`;
    } else {
      // 수정
      const row = tbody.rows[editingIndex];
      row.cells[0].innerHTML = `<img src="${image}" alt="사진">`;
      row.cells[1].textContent = name;
      row.cells[2].textContent = content;
      editingIndex = -1;
      document.getElementById('submitBtn').textContent = '등록하기';
    }

    // 입력 초기화
    document.getElementById('name').value = '';
    document.getElementById('content').value = '';
    document.getElementById('image').value = '';
  }

  function editEntry(button) {
    const row = button.closest('tr');
    editingIndex = row.rowIndex - 1;
    document.getElementById('name').value = row.cells[1].textContent;
    document.getElementById('content').value = row.cells[2].textContent;
    document.getElementById('image').value = row.cells[0].querySelector('img').src;
    document.getElementById('submitBtn').textContent = '수정하기';
  }

  function deleteEntry(button) {
    const row = button.closest('tr');
    document.getElementById('entryTableBody').deleteRow(row.rowIndex - 1);
    if (editingIndex === row.rowIndex - 1) {
      document.getElementById('submitBtn').textContent = '등록하기';
      editingIndex = -1;
      document.getElementById('name').value = '';
      document.getElementById('content').value = '';
      document.getElementById('image').value = '';
    }
  }
