document.getElementById('feedbackForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const scriptURL =
        'https://script.google.com/macros/s/AKfycbz0HPhQ5bRUtKJrqS_WRAGTCU-_DmmviscxaCkvcqVXZsQRsKDD9W7u96OQKMvfxsYi/exec';
    const responseMessage = document.getElementById('responseMessage');

    fetch(scriptURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone, email, message }),
    })
        .then((response) => {
            if (response.ok) {
                responseMessage.textContent = 'Feedback enviado com sucesso!';
                responseMessage.style.color = 'green';
                document.getElementById('feedbackForm').reset();
            } else {
                responseMessage.textContent = 'Erro ao enviar o feedback.';
                responseMessage.style.color = 'red';
            }
        })
        .catch((error) => {
            console.error('Erro:', error);
            responseMessage.textContent = 'Erro ao enviar o feedback.';
            responseMessage.style.color = 'red';
        });
});
