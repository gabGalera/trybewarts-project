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
console.log('asa');
