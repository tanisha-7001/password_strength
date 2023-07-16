function togglePasswordVisibility() {
    var passwordInput = document.getElementById('password-input');
    var visibilityCheckbox = document.getElementById('visibility-checkbox');

    if (visibilityCheckbox.checked) {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
}

function myFunction() 
{
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
}

function checkPasswordStrength() 
{
    var password = document.getElementById('password-input').value;
    var strength = estimatePasswordStrength(password);
    var strengthResult = document.getElementById('strength-result');
    if(strength>=0 && strength<=40)
    strengthResult.textContent = 'Weak';
    else if(strength>=40 && strength<=80)
    strengthResult.textContent = 'Average';
    else if(strength>=80 && strength<=100)
    strengthResult.textContent = 'Strong';
}
  
  function estimatePasswordStrength(password) 
  {
    var score = 0;

    // Length-based scoring
    if (password.length >= 8 && password.length <= 12) {
      score += 20;
    } else if (password.length > 12) {
      score += 20;
    }

    // Character types
    if (/[a-z]/.test(password)) {
      score += 20;
    }
    if (/[A-Z]/.test(password)) {
      score += 20;
    }
    if (/[0-9]/.test(password)) {
      score += 20;
    }
    if (/[^a-zA-Z0-9]/.test(password)) {
      score += 20;
    }

    // Adjust score based on length
    if (score < 0) {
      score = 0;
    } else if (score > 100) {
      score = 100;
    }

    return score;
    console.log(score);
}