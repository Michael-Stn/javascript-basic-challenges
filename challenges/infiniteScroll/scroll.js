/*
window.innerHeight: Height of the browser window (visible part of the page by the user)
window.scrollY: How far the user has scrolled down the page
document.body.scrollHeight: Total height of the page (visible and non-visible part of the page)
*/

/* Other way to get the total height of the page (this is more accurate)
    But even sometimes it doesn't work properly beacuse of some pixels size difference

document.documentElement.scrollHeight: Total height of the page (visible and non-visible part of the page)
document.documentElement.clientHeight: Height of the browser window (visible part of the page by the user)
document.documentElement.scrollTop: How far the user has scrolled down the page
*/

window.addEventListener('scroll', function () {
  if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
    for (let i = 0; i < 5; i++) {
      const li = document.createElement('li');
      document.getElementById('container').appendChild(li);
    }
  }
});

/*
window.addEventListener('scroll', function () {
  if (
    document.documentElement.scrollTop +
      document.documentElement.clientHeight >=
    document.documentElement.scrollHeight
  ) {
    for (let i = 0; i < 5; i++) {
      const li = document.createElement('li');
      document.getElementById('container').appendChild(li);
    }
  }
});
*/
