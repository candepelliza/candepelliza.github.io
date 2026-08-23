// Tiny progressive-enhancement script: mobile nav toggle + mailto contact form.
// No dependencies, no build step.

(function () {
  // --- Mobile navigation toggle ---
  var toggle = document.querySelector("[data-nav-toggle]");
  var mobileNav = document.querySelector("[data-mobile-nav]");
  if (toggle && mobileNav) {
    toggle.addEventListener("click", function () {
      var open = mobileNav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.textContent = open ? "Close" : "Menu";
    });
  }

  // --- Contact form: build a mailto: link on submit (no backend needed) ---
  var form = document.querySelector("[data-contact-form]");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var email = form.getAttribute("data-email") || "";
      var name = (form.querySelector("#cf-name") || {}).value || "";
      var from = (form.querySelector("#cf-email") || {}).value || "";
      var message = (form.querySelector("#cf-message") || {}).value || "";
      var subject = encodeURIComponent("Portfolio enquiry from " + (name || "visitor"));
      var body = encodeURIComponent(
        message + "\n\n\u2014 " + name + (from ? " (" + from + ")" : "")
      );
      window.location.href =
        "mailto:" + email + "?subject=" + subject + "&body=" + body;
    });
  }
})();
