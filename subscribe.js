// Captura o formulário e elementos
const form = document.getElementById("subscribeForm");
const msg = document.getElementById("msgSuccess");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // CAPTURA DOS DADOS
    const email = document.getElementById("email").value;
    const carroPreferido = document.getElementById("carros").value;
    const tipo = document.querySelector("input[name='tipo']:checked").value;

    // OBJETO QUE SERIA ENVIADO AO BACK-END
    const dadosUsuario = {
        email: email,
        preferencia: carroPreferido,
        receber: tipo,
        dataCadastro: new Date().toLocaleString()
    };

    // SALVAMENTO NO LOCALSTORAGE (simulando um banco)
    let lista = JSON.parse(localStorage.getItem("cadastros")) || [];
    lista.push(dadosUsuario);
    localStorage.setItem("cadastros", JSON.stringify(lista));

    // ANIMAÇÃO DE SUCESSO
    msg.textContent = "Cadastrado com sucesso! Em breve você receberá novidades.";
    msg.style.opacity = 1;

    // Limpar formulário
    form.reset();

    // Sumir mensagem depois de 4s
    setTimeout(() => {
        msg.style.opacity = 0;
    }, 4000);
});
