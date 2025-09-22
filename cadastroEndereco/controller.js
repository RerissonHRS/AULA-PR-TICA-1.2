document.getElementById("btnBuscar").addEventListener("click", function() {
    let cep = document.getElementById("cep").value.replace(/\D/g, '');

    if (cep !== "" && /^[0-9]{8}$/.test(cep)) {
        let url = `https://viacep.com.br/ws/${cep}/json/`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (!("erro" in data)) {
                    document.getElementById("rua").value = data.logradouro;
                    document.getElementById("bairro").value = data.bairro;
                    document.getElementById("cidade").value = data.localidade;
                    document.getElementById("estado").value = data.uf;
                } else {
                    alert("CEP não encontrado!");
                }
            })
            .catch(error => {
                console.error("Erro ao buscar CEP:", error);
                alert("Ocorreu um erro ao buscar o CEP.");
            });
    } else {
        alert("Formato de CEP inválido!");
    }
});