// Catalog/blog "Keep in touch" form: same markup and success alert, now emailed via /api/contact.
document.getElementById('contact').addEventListener('submit', function (e) {
  e.preventDefault();
  var form = e.target;
  var val = function (id) { return document.getElementById(id).value; };
  fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: val('name'),
      email: val('email'),
      phone: val('mobile'),
      service: 'Catalog request: ' + location.pathname,
      message: 'Designation: ' + val('designation') + '\nCompany: ' + val('company')
    })
  })
    .then(function (r) { return r.json().then(function (d) { if (!r.ok || !d.success) throw new Error(d.error); }); })
    .then(function () {
      var alertBox = document.querySelector('.alert');
      alertBox.style.display = 'block';
      setTimeout(function () { alertBox.style.display = 'none'; }, 3000);
      form.reset();
    })
    .catch(function (err) { alert((err && err.message) || 'Could not send. Please call 080 2837 1974.'); });
});
