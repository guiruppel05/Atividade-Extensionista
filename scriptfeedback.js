document.getElementById('feedbackForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const airtableURL = 'https://api.airtable.com/v0/appZGkNEJHaGPBMpG/Feedbacks%20Form'; // Substitua pelo ID da base e tabela
    const personalAccessToken = 'patXykrQOYqvn3A0x.c99051ed93d37d2a9d5a0b4f51255068f9cc6051b08b4d2ef6423de101642a76'; // Substitua pelo token gerado

    const data = {
        fields: {
            Name: name,
            Phone: phone,
            Email: email,
            Message: message,
            Date: new Date().toISOString(),
        },
    };

    fetch(airtableURL, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${personalAccessToken}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((response) => {
            if (response.ok) {
                alert('Feedback enviado com sucesso!');
                document.getElementById('feedbackForm').reset();
            } else {
                alert('Erro ao enviar o feedback.');
            }
        })
        .catch((error) => {
            console.error('Erro:', error);
            alert('Erro ao enviar o feedback.');
        });
});