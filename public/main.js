/* Editorial portfolio — tiny progressive-enhancement script.
   Nothing here is required for the content to render: the site is plain HTML.
   This only adds the mobile menu, the mailto contact form, and the subtle
   scroll reveal / "active row" emphasis from the design. */

(function () {
  "use strict";

  // Enable the reveal styles only when JS runs, so no-JS visitors see content.
  document.documentElement.classList.add("reveal-ready");

  document.addEventListener("DOMContentLoaded", function () {
    // ---- Mobile menu toggle ----
    var toggle = document.querySelector("[data-nav-toggle]");
    var mobileNav = document.querySelector("[data-mobile-nav]");
    if (toggle && mobileNav) {
      toggle.addEventListener("click", function () {
        var open = mobileNav.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
        toggle.textContent = open ? "Close" : "Menu";
      });
    }

    // ---- Contact form → opens the visitor's mail client (no backend) ----
    var form = document.querySelector("[data-contact-form]");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var email = form.getAttribute("data-email") || "";
        var name = (form.querySelector("#cf-name") || {}).value || "";
        var from = (form.querySelector("#cf-email") || {}).value || "";
        var message = (form.querySelector("#cf-message") || {}).value || "";
        var subject = encodeURIComponent(
          "Portfolio enquiry from " + (name || "visitor")
        );
        var body = encodeURIComponent(
          message + "\n\n— " + name + (from ? " (" + from + ")" : "")
        );
        window.location.href =
          "mailto:" + email + "?subject=" + subject + "&body=" + body;
      });
    }

    var reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // ---- Scroll reveal: fade + rise as elements enter view ----
    var reveals = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
    if (!("IntersectionObserver" in window) || reduce) {
      reveals.forEach(function (el) {
        el.classList.add("is-revealed");
      });
    } else {
      var revObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-revealed");
              revObserver.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
      );
      reveals.forEach(function (el) {
        revObserver.observe(el);
      });
    }

    // ---- Active index row: the row nearest the reading band is fully inked ----
    var rows = Array.prototype.slice.call(document.querySelectorAll(".index-row"));
    if ("IntersectionObserver" in window && rows.length) {
      var rowObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            entry.target.setAttribute(
              "data-active",
              entry.isIntersecting ? "true" : "false"
            );
          });
        },
        { rootMargin: "-42% 0px -42% 0px", threshold: 0 }
      );
      rows.forEach(function (row) {
        rowObserver.observe(row);
      });
    }
  });
})();
