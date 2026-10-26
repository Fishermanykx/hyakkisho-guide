const searchDialog = document.getElementById('site-search');
const searchInput = document.getElementById('fan-query');
const searchResults = document.getElementById('search-results');
const searchStatus = document.getElementById('search-status');
function searchArchive() {
  const words = searchInput.value.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
  searchResults.replaceChildren();
  const matches = words.length ? window.fanSearchData.filter(item => words.every(word => `${item.title} ${item.text}`.toLocaleLowerCase().includes(word))).sort((a, b) => words.filter(word => b.title.toLocaleLowerCase().includes(word)).length - words.filter(word => a.title.toLocaleLowerCase().includes(word)).length) : [];
  searchStatus.textContent = words.length ? `找到 ${matches.length} 枚书签` : '输入关键词，查找本站整理的公开资料。';
  for (const item of matches.slice(0, 15)) {
    const a = document.createElement('a');
    a.href = item.url;
    const title = document.createElement('strong');
    title.textContent = item.title;
    const text = document.createElement('span');
    const position = Math.max(0, item.text.toLocaleLowerCase().indexOf(words[0]) - 35);
    text.textContent = item.text.slice(position, position + 110) + (item.text.length > position + 110 ? '…' : '');
    a.append(title, text);
    searchResults.append(a);
  }
}
document.querySelectorAll('[data-open-search]').forEach(button => button.addEventListener('click', () => {
  searchDialog.showModal();
  searchInput.focus();
  searchArchive();
}));
document.getElementById('close-search').addEventListener('click', () => searchDialog.close());
searchInput.addEventListener('input', searchArchive);
searchDialog.addEventListener('click', event => { if (event.target === searchDialog) { const r=searchDialog.getBoundingClientRect(); if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom) searchDialog.close(); } });
document.addEventListener('keydown', event => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    if (!searchDialog.open) searchDialog.showModal();
    searchInput.focus();
    searchArchive();
  }
});
