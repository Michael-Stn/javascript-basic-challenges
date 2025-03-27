const message = document.getElementById('message');
const phoneRegExp = /^\d{4}-\d{2}-\d{2}$/;

document.getElementById('validateForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const isPhoneCorrect = phoneRegExp.test(event.target.phone.value);
  message.innerText = isPhoneCorrect ? 'Correct' : 'Incorrect';
});
