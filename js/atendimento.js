function cadastroCliente(){

    do{
        alert("Informe seus dados para cadastro no sistema \n");
        let nome = prompt();
        let idade = prompt();
        confirm("Você confirma os dados?"+ nome + "e" + idade)
    }
    while (false);
}

//window.onload = cadastroCliente;

document
    .getElementById("contact-form")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const message = document.getElementById("message").value;


        alert("Message sent!");
    });