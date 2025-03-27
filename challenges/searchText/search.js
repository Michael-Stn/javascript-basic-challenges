const p = document.getElementById('textContainer');

document.getElementById('searchForm').addEventListener('submit', (event) => {
  event.preventDefault();

  // reset previous search
  p.innerHTML = p.innerHTML.replaceAll(/<b>|<\/b>/g, '');

  const textToSearch = event.target.textToSearch.value;
  p.innerHTML = p.innerHTML.replace(
    new RegExp(textToSearch, 'g'),
    `<b>${textToSearch}</b>`
  );
});
