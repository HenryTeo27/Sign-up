const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  const password = document.querySelector('input[type="password"]');
  const confirmPassword = document.querySelector('input[name="comfirm-password"]');
  if (password.value !== confirmPassword.value) {
    event.preventDefault();
    alert('Password and Confirm Password do not match, please check again.');
  }
});
