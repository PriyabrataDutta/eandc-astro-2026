// Sends the sidebar "Quick Enquiry" forms to /api/contact without changing their look.
document.querySelectorAll('form[data-enquiry]').forEach(function (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var btn = form.querySelector('[type="submit"]');
    var label = btn ? btn.textContent : '';
    var all = Object.fromEntries(new FormData(form));
    // The API reads name/email/phone/service/message; any other field is added to the message.
    var data = { name: all.name, email: all.email, phone: all.phone, service: all.service || 'Quick Enquiry', message: all.message || '' };
    Object.keys(all).forEach(function (k) {
      if (!(k in data) && all[k]) data.message += '\n' + k + ': ' + all[k];
    });
    data.message += '\nPage: ' + location.pathname;
    if (btn) { btn.disabled = true; btn.textContent = 'Sending...'; }
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(function (r) { return r.json().then(function (d) { if (!r.ok || !d.success) throw new Error(d.error); }); })
      .then(function () { form.reset(); if (btn) btn.textContent = 'Thank you, we will call you'; })
      .catch(function (err) { alert((err && err.message) || 'Could not send. Please call 080 2837 1974.'); if (btn) btn.textContent = label; })
      .finally(function () { if (btn) btn.disabled = false; });
  });
});
