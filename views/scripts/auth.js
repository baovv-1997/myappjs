$(document).ready(function () {
  const btnToggle = $('.from__toggle');
  const signupName = $("#signup__name");
  const signupEmail = $("#signup__email");
  const signupPass = $("#signup__pass");
  const signupConfirm = $("#signup__confirm");
  const btnRegistion = $(".btn__registion");

  const signupNameErr = $('.signup-err-name')[0];
  const signupEmailErr = $('.signup-err-email')[0];
  const signupPassErr = $('.signup-err-pass')[0];
  const signupConfirmErr = $('.signup-err-confirm')[0];

  const signinEmail = $("#login__email");
  const signinPass = $("#login__pass");
  const signinEmailErr = $(".login-err-email")[0];
  const signinPassErr = $(".login-err-pass")[0];
  const btnLogin = $(".btn__login");

  function toggleForm() {
    var container = document.querySelector('.auth__wrap')
    container.classList.toggle('active');
  }

  function signUp() {
    signupNameErr.textContent = "";
    signupEmailErr.textContent = "";
    signupPassErr.textContent = "";
    signupConfirmErr.textContent = "";

    const data = {
      name: signupName.val(),
      email: signupEmail.val(),
      pass: signupPass.val(),
      confirm: signupConfirm.val(),
    }

    $.ajax({
      type: "POST",
      url: '/users',
      data: data,
      dataType: 'json',
      success: function (result) {
        if (result.errors) {
          for (err of result.errors) {
            console.log(err);
            if (err.param === 'name') {
              signupNameErr.textContent = err.msg;
            }
            if (err.param === 'email') {
              signupEmailErr.textContent = err.msg;
            }
            if (err.param === 'pass') {
              signupPassErr.textContent = err.msg;
            }
            if (err.param === 'confirm') {
              signupConfirmErr.textContent = err.msg;
            }
          }
          return;
        }
        window.location.replace("http://localhost:3000/");
      },
      error: function (e) {
        console.log("ERROR: ", e);
      }
    });
  }

  function signIn() {
    signinEmailErr.textContent = "";
    signinPassErr.textContent = "";

    const data = {
      email: signinEmail.val(),
      pass: signinPass.val(),
    }

    $.ajax({
      type: "POST",
      url: '/token',
      data: data,
      dataType: 'json',
      success: function (result) {
        console.log(result);
        if (result.errors) {
          for (err of result.errors) {
            if (err.param === 'email') {
              signinEmailErr.textContent = err.msg;
            }
            if (err.param === 'pass') {
              signinPassErr.textContent = err.msg;
            }
          }
          return;
        }
        window.location.replace("http://localhost:3000/");
      },
      error: function (e) {
        console.log("ERROR: ", e);
      }
    })
  }

  // addEvent
  btnToggle.click(toggleForm);
  btnLogin.click(signIn);
  btnRegistion.click(signUp);
})
