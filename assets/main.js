document.addEventListener('DOMContentLoaded', function () {
  // Footer year
  document.querySelectorAll('.js-year').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Mobile nav toggle
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Highlight active nav link based on the page's data-page attribute
  var currentPage = document.body.getAttribute('data-page') || 'home';
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    if (a.getAttribute('data-page') === currentPage) {
      a.classList.add('active');
    }
  });

  // Contact form -> opens the visitor's email client with a pre-filled message
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('cf-name').value.trim();
      var email = document.getElementById('cf-email').value.trim();
      var subject = document.getElementById('cf-subject').value.trim() || 'Message from your portfolio site';
      var message = document.getElementById('cf-message').value.trim();
      var to = contactForm.getAttribute('data-to');
      var body = 'Name: ' + name + '\nEmail: ' + email + '\n\n' + message;
      var mailto = 'mailto:' + to + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      var status = document.getElementById('cf-status');
      if (status) {
        status.textContent = 'Opening your email app with this message pre-filled\u2026';
        status.classList.add('show', 'ok');
      }
      window.location.href = mailto;
    });
  }
});
