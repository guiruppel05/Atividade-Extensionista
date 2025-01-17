const airtableAPIKey = "patQ4Go0PAWPefEa9.00ad4e4df32dfd47f281bd6278b8832ef0294de83a8dd22e4130a88bd3be86eb";
const airtableBaseID = "appZGkNEJHaGPBMpG";
const tableName = "Sexo-Idade"; // Substitua pelo nome da sua tabela no Airtable

document.getElementById('flex_center').addEventListener('submit', function (e) {
    e.preventDefault();

    // Captura os valores dos campos
    const sexo = document.getElementById('sexo').value;
    const idade = document.getElementById('idade').value;

    // Enviar os dados para o Airtable
    fetch(`https://api.airtable.com/v0/${airtableBaseID}/${tableName}`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${airtableAPIKey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            fields: {
                Sexo: sexo,
                Idade: parseInt(idade, 10)
            }
        })
    })
        .then(response => {
            if (response.ok) {
                alert('Dados enviados com sucesso!');
            } else {
                console.error('Erro ao enviar dados:', response.statusText);
            }
        })
        .catch(error => console.error('Erro:', error));
});
