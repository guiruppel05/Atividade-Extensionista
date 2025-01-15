document.getElementById('feedbackForm').addEventListener('submit', function(e) {
       e.preventDefault();

       const name = document.getElementById('name').value;
       const message = document.getElementById('message').value;

       fetch('https://script.google.com/macros/s/AKfycbz0HPhQ5bRUtKJrqS_WRAGTCU-_DmmviscxaCkvcqVXZsQRsKDD9W7u96OQKMvfxsYi/exec', {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json',
           },
           body: JSON.stringify({
               name: name,
               message: message,
           }),
       })
       .then(response => response.json())
       .then(data => {
           console.log('Sucesso:', data);
           alert('Feedback enviado com sucesso!');
       })
       .catch((error) => {
           console.error('Erro:', error);
           alert('Falha ao enviar feedback.');
       });
    });