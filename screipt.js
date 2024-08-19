function EnviarFormulario() {
    var Formulario = new Object;

    Formulario.nomeCompleto = document.getElementById("nomeCompleto").value;
    Formulario.dataDeNascimento = document.getElementById("dataDeNascimento").value;
    Formulario.cpf = document.getElementById("cpf").value;
    Formulario.email = document.getElementById("email").value;
    Formulario.celular = document.getElementById("celular").value;
    Formulario.senha = document.getElementById("senha").value;
    Formulario.pais = document.getElementById("pais").value;
    Formulario.estado = document.getElementById("estado").value;
    Formulario.cidade = document.getElementById("cidade").value;
    Formulario.endereco = document.getElementById("endereco").value;

    var json = JSON.stringify(Formulario);

    console.log(json); 
    console.log(Formulario);
    alert ("Formulario enviado com sucesso!")
}