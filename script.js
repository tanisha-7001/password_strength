function PasswordStrength() 
{
    var pass = document.getElementById('password').value;
    wide_charset(pass);
    var entropy=entropy_cal(pass);
    var x=common_passwords(pass);
    if(x==1) 
    document.getElementById('strength').innerHTML = 'Very Weak, it is a common password';

    else if ( entropy>=0 && entropy <28) 
    document.getElementById('strength').innerHTML = 'Very Weak';

    else if ((entropy>=28 && entropy <36)  )
    document.getElementById('strength').innerHTML = 'Weak';

    else if ( entropy>=36 && entropy <60) 
    document.getElementById('strength').innerHTML = 'Moderate';

    else if( entropy>=60 && entropy <128 )
    document.getElementById('strength').innerHTML = 'Strong';
    
    else if( entropy>=128 )
    document.getElementById('strength').innerHTML = 'Very Strong';
}

function entropy_cal(password)
{
  var characterset_length=0;
  var password_length = password.length;
    if (/[a-z]/.test(password)) 
    {
      characterset_length+=26;
    }
    if (/[A-Z]/.test(password)) 
    {
      characterset_length+=26;
    }
    if (/[0-9]/.test(password)) 
    {
      characterset_length+=10;
    }
    if(/[/`~!@#$%^&*()-_=+[]{}\|;:'"?.>,<]/.test(password))
    {
      characterset_length+=32;
    }
  entropy = password_length * Math.log2(characterset_length);
  return entropy;
}

function common_passwords(pass)
{
  const passwords = ["12345","123456","123456789","test1","password","12345678","zinch","g_czechout","asdf","qwerty","1234567890","1234567","Aa123456.",
  "1234","abc123","111111","123123","dubsmash","test","princess","qwertyuiop","sunshine","BvtTest123","11111","ashley","00000","000000",
  "monkey","livetest","55555","soccer","charlie","asdfghjkl","654321","family","michael","123321","football","baseball","q1w2e3r4t5y6",
  "nicole","jessica","purple","shadow","hannah","chocolate","michelle"];

  if(passwords.includes(pass))
  return 1;
  else
  return 0;
}

function wide_charset(password) 
{
  document.getElementById('set1').innerHTML = '';
  document.getElementById('set2').innerHTML = '';
  document.getElementById('set3').innerHTML = '';
  document.getElementById('set4').innerHTML = '';
  document.getElementById('set5').innerHTML = '';
    if (password.length <= 12 ) 
    {
      document.getElementById('set1').innerHTML = 'Length should be >=12';
    }

    if ((/([a-z])/.test(password))==false) 
    {     
      document.getElementById('set2').innerHTML = 'Password should contain lower case letter';
    }
    
    if (/[A-Z]/.test(password)==false) 
    {
      document.getElementById('set3').innerHTML = 'Password should contain upper case letter';
    }

    if (/[0-9]/.test(password)==false) 
    {
      document.getElementById('set4').innerHTML = 'Password should contain digis';
    }
   
    if(/[!@#$%^&*()]/.test(password)==false)
    {
      document.getElementById('set5').innerHTML = 'Password should contain special characters';
    }
}
    

function toggle() 
{
  var p= document.getElementById('password');
  if (p.type=='password') 
  {
    p.type = 'text';
  } 
  else 
  {
    p.type = 'password';
  }
}
