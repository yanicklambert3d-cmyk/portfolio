document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('form[data-contact-email]').forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (!form.reportValidity()) return;
      var data = new FormData(form);
      var subject = 'Portfolio contact - ' + (data.get('name') || 'Visitor');
      var body = 'Name: ' + (data.get('name') || '') + '\nEmail: ' + (data.get('email') || '') + '\n\n' + (data.get('message') || '');
      window.location.href = 'mailto:' + form.dataset.contactEmail + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    });
    var note = document.createElement('p');
    note.textContent = 'Opens your email app. Review the message and send it there.';
    note.className = 'small mt-2';
    form.appendChild(note);
  });
});
