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