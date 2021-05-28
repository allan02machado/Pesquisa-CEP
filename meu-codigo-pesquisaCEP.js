const cep = document.getElementById("cep");
cep.addEventListener(/*'click'*/('blur'), (e) => {
    let Cep = document.getElementById("cep").value;
    fetch(`https://api.postmon.com.br/v1/cep/${Cep}`)
        .then((response) => {
            response.json().then(data => {
                console.log(data);
                document.getElementById("cidade").value = data.cidade;
                document.getElementById("estado").value = data.estado;
                document.getElementById("logradouro").value = data.logradouro;
                document.getElementById("bairro").value = data.bairro;
                document.getElementById("complemento").value = data.complemento;
            })
        })
})