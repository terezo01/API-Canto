function buscarCEP() {
    const cep = document.getElementById('cep').value;

    // Verifica se o CEP possui 8 dígitos
    if (cep.length !== 8 || isNaN(cep)) {
        alert('Por favor, insira um CEP válido com 8 dígitos.');
        return;
    }

    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (!data.erro) {
                const cepInfo = document.getElementById('cep-info');
                cepInfo.innerHTML = `
                    <p><strong>Logradouro:</strong> ${data.logradouro}</p>
                    <p><strong>Bairro:</strong> ${data.bairro}</p>
                    <p><strong>Cidade:</strong> ${data.localidade}</p>
                    <p><strong>Estado:</strong> ${data.uf}</p>
                `;
            } else {
                alert('CEP não encontrado.');
            }
        })
        .catch(error => {
            console.error('Erro ao buscar os dados:', error);
            alert('Erro ao buscar os dados do CEP.');
        });
}