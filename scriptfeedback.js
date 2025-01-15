document.getElementById("feedbackForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const data = {
        name,
        phone,
        email,
        message,
    };

    const scriptURL = 'https://script.google.com/macros/s/AKfycbw34iFzG4VEaUt_VjQylMeBtXlGNxOqMm8eDEhL4bckLRT27Ehj0h9uYdmrc0WdUWx3/exec'; // Substitua pela URL do seu script
    const responseMessage = document.getElementById("responseMessage");

    fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => {
            if (response.ok) {
                responseMessage.textContent = "Feedback enviado com sucesso!";
                document.getElementById("feedbackForm").reset();
            } else {
                responseMessage.textContent = "Erro ao enviar o feedback. Tente novamente.";
            }
        })
        .catch((error) => {
            responseMessage.textContent = "Erro ao enviar o feedback. Tente novamente.";
            console.error("Erro:", error);
        });
});