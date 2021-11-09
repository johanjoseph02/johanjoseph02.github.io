$(document).ready(function () 
{
    $(window).scroll(function () 
    {
      if (this.scrollY > 20)
      {
        $(".navbar").addClass("navbar-sticky");
      } 
      else 
      {
        $(".navbar").removeClass("navbar-sticky");
      }
    });
});
console.log(".");
console.log(".");
console.log("Hello there, fellow inspector");
console.log(".");
console.log(".");
console.log("Welcome to my Portfolio Website")
console.log("Designed and Developed by Johan Mathew Joseph")
console.log(".");
console.log(".");
function userEntry()
{
    event.preventDefault();
    document.getElementById("contact-main-information-form-name").value = null;
    document.getElementById("contact-main-information-form-email").value = null;
    document.getElementById("contact-main-information-form-message").value = null;
    alert("Submission successful")
}