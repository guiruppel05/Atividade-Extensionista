// Seleciona o elemento do menu dropdown de idades
const idadeDropdown = document.getElementById('idade');

// Popula o menu dropdown com idades de 12 a 100
for (let i = 12; i <= 100; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    idadeDropdown.appendChild(option);
}


// Adicionar evento de clique no botão
document.getElementById("submitButton").addEventListener("click", () => {
    const sexo = document.getElementById("sexo").value;
    const idade = document.getElementById("idade").value;

    // Enviar os dados para o backend
    fetch("https://guiruppel05.pythonanywhere.com/save_data", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ sexo, idade }),
    })
    .then(response => response.json())
    .then(data => {
        console.log("Dados enviados:", data);
        alert("Dados enviados com sucesso!");
    })
    .catch(error => {
        console.error("Erro ao enviar dados:", error);
        alert("Erro ao enviar dados.");
    });
});
