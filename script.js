document.addEventListener('DOMContentLoaded', () => {
    const telefone = "5591985537977"; 
    const mensagem = encodeURIComponent("Olá NeoFrio! Vi o site e gostaria de solicitar um orçamento para refrigeração.");

    // Função única para abrir o Zap
    const abrirZap = (e) => {
        e.preventDefault();
        window.open(`https://api.whatsapp.com/send?phone=${telefone}&text=${mensagem}`, '_blank');
    };

    // Seleciona todos os botões de contato da página
    const botoes = document.querySelectorAll('.cta-principal, .btn-whatsapp-header, .whatsapp-float');

    botoes.forEach(botao => {
        botao.addEventListener('click', abrirZap);
    });

    console.log("🚀 Sistema NeoFrio carregado!");
});