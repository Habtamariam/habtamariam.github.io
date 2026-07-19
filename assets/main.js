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

  // Reconstruct obfuscated contact links so the real address/number never
  // sits as plain text in the page source (basic scrapers only read static HTML).
  document.querySelectorAll('.js-email').forEach(function (el) {
    var user = el.getAttribute('data-u');
    var domain = el.getAttribute('data-d');
    if (!user || !domain) return;
    var addr = user + '@' + domain;
    el.setAttribute('href', 'mailto:' + addr);
    var label = el.querySelector('.js-contact-label');
    if (label) { label.textContent = addr; }
  });

  document.querySelectorAll('.js-tel').forEach(function (el) {
    var digits = el.getAttribute('data-n');
    if (!digits) return;
    el.setAttribute('href', 'tel:+' + digits);
    var label = el.querySelector('.js-contact-label');
    if (label) { label.textContent = el.getAttribute('data-display') || ('+' + digits); }
  });

  document.querySelectorAll('.js-wa').forEach(function (el) {
    var digits = el.getAttribute('data-n');
    if (!digits) return;
    el.setAttribute('href', 'https://wa.me/' + digits);
  });

  // Light deterrent against casual right-click "Save Image As" on the profile photo
  var heroNetwork = document.querySelector('.hero-network');
  if (heroNetwork) {
    heroNetwork.addEventListener('contextmenu', function (e) { e.preventDefault(); });
  }

  // Contact form -> opens the visitor's email client with a pre-filled message
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    var toUser = contactForm.getAttribute('data-to-u');
    var toDomain = contactForm.getAttribute('data-to-d');
    if (toUser && toDomain) { contactForm.setAttribute('data-to', toUser + '@' + toDomain); }
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

  // Blog/news relative timestamps ("3 days ago") computed from data-timestamp
  document.querySelectorAll('.js-relative-time').forEach(function (el) {
    var iso = el.getAttribute('data-timestamp');
    if (!iso) return;
    var then = new Date(iso);
    var diffMs = new Date() - then;
    var min = Math.floor(diffMs / 60000);
    var hr = Math.floor(min / 60);
    var day = Math.floor(hr / 24);
    var label = '';
    if (diffMs < 0) { label = ''; }
    else if (min < 1) { label = 'just now'; }
    else if (min < 60) { label = min + (min === 1 ? ' minute ago' : ' minutes ago'); }
    else if (hr < 24) { label = hr + (hr === 1 ? ' hour ago' : ' hours ago'); }
    else if (day < 30) { label = day + (day === 1 ? ' day ago' : ' days ago'); }
    var badge = el.querySelector('.js-relative-label');
    if (badge && label) { badge.textContent = '\u00b7 ' + label; }
  });

  // Blog: Read More / Show Less toggle
  document.querySelectorAll('.news-readmore').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var targetId = btn.getAttribute('data-target');
      var detail = document.getElementById(targetId);
      if (!detail) return;
      var open = detail.classList.toggle('is-open');
      btn.classList.toggle('is-open', open);
      btn.querySelector('.news-readmore-label').textContent = open ? 'Show Less' : 'Read More';
    });
  });

  // Blog: Share button (native share sheet if available, else copy link)
  document.querySelectorAll('.news-share').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var articleId = btn.getAttribute('data-share-id');
      var title = btn.getAttribute('data-share-title') || document.title;
      var url = window.location.href.split('#')[0] + '#' + articleId;
      var label = btn.querySelector('.news-share-label');
      if (navigator.share) {
        navigator.share({ title: title, url: url }).catch(function () {});
      } else if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(function () {
          if (label) {
            var original = label.textContent;
            label.textContent = 'Link copied!';
            setTimeout(function () { label.textContent = original; }, 2000);
          }
        });
      }
    });
  });

  // Blog: Topic filter
  var topicPills = document.querySelectorAll('.topic-pill');
  topicPills.forEach(function (pill) {
    pill.addEventListener('click', function () {
      topicPills.forEach(function (p) { p.classList.remove('active'); });
      pill.classList.add('active');
      var filter = pill.getAttribute('data-filter');
      document.querySelectorAll('.news-card').forEach(function (card) {
        var cat = card.getAttribute('data-category');
        card.classList.toggle('is-hidden', filter !== 'all' && cat !== filter);
      });
    });
  });
});
