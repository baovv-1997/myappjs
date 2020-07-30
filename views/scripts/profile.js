$(document).ready(function () {
  var modal = $("#myModal")[0];
  var btn = $("#update-profile");
  var span = $(".close");
  //
  const name = $("#profile__name");
  const gender = $("#profile__gender");
  const phone = $("#profile__phone");
  const address = $("#profile__address");
  const nationality = $("#profile__nationality");
  const skill = $("#profile__skill");
  const interests = $("#profile__interests");
  const nameErr = $(".profile-err-name")[0];
  const genderErr = $(".profile-err-gender")[0];
  const phoneErr = $(".profile-err-phone")[0];
  const addressErr = $(".profile-err-address")[0];
  const nationalityErr = $(".profile-err-nationality")[0];
  const skillErr = $(".profile-err-skill")[0];
  const interestsErr = $(".profile-err-interests")[0];
  const profileSubmit = $('.btn__profile');

  btn.click(function () {
    modal.style.display = "block";
    nameErr.textContent = "";
    genderErr.textContent = "";
    phoneErr.textContent = "";
    addressErr.textContent = "";
    nationalityErr.textContent = "";
    skillErr.textContent = "";
    interestsErr.textContent = "";

   
  });

  span.click(function () {
    modal.style.display = "none";
  });

  $(window).click(function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  })


  function updateProfile() {
    const data = {
      name: name.val(),
      gender: gender.val(),
      phone: phone.val(),
      address: address.val(),
      nationality: nationality.val(),
      skill: skill.val(),
      interests: interests.val(),
    }

    $.ajax({
      type: "PUT",
      url: '/user',
      data: data,
      dataType: 'json',
      success: function (result) {
        console.log(result);  
        window.location.replace("http://localhost:3000/");
      },
      error: function (e) {
        console.log("ERROR: ", e);
      }
    });
  }

  profileSubmit.click(updateProfile);
});