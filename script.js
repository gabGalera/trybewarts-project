function validateForm() {
  const button = document.getElementById('login-btn');
  button.addEventListener('click', () => {
    const email = document.getElementById('input-email').value;
    const password = document.getElementById('input-password').value;
    if (email === 'tryber@teste.com' && password === '123456') {
      alert('Olá, Tryber!');
    } else alert('Email ou senha inválidos.');
  });
}
validateForm();

function testCheckbox() {
  const checkbox = document.getElementById('agreement');
  const button = document.getElementById('submit-btn');
  button.disabled = true;
  checkbox.addEventListener('change', () => {
    if (checkbox.checked === true) {
      button.disabled = false;
    } else button.disabled = true;
  });
}
testCheckbox();
