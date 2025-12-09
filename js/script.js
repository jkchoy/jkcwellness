// document content loaded
document.addEventListener('DOMContentLoaded', () => {

  // GLOBAL FUNCTIONS GO HERE




  // ENABLE MOBILE MENU 
  const sitenav = document.querySelector(".site-nav");
  const menubutton = document.querySelector(".menubutton");

  menubutton.onclick = () => {
    // IF MENU IS CLOSED, OPEN IT, ELSE CLOSE IT
    if (sitenav.getAttribute("data-menustate") === "open") {
      sitenav.setAttribute("data-menustate", "closed");
    } else {
      sitenav.setAttribute("data-menustate", "open");
    };
  };
  // CLOSE NAV WHEN A LINK IS CLICKED
  const sitenavlinks = document.querySelectorAll(".site-nav a");
  sitenavlinks.forEach((link) => {
    link.onclick = () => {
      sitenav.setAttribute("data-menustate", "closed");
    };
  });


  // Remove the data-attribute on resize to fix drawer nav animation
  window.onresize = () => {
    sitenav.removeAttribute("data-menustate");
  };

  // SCROLL-TRIGGERED ANIMATION
  // CHANGE ACTIVE STATE FOR ALL TARGET ELEMENTS WITH INTERSECTION OBSERVER
  const myobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.setAttribute("data-viewstate", "active");
      } else {
        entry.target.setAttribute("data-viewstate", "inactive");
      };
    });
  });

  const mytargets = document.querySelectorAll('.observe-me');
  mytargets.forEach((el) => {
    myobserver.observe(el);
  });



});