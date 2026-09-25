const btnInterativo = document.getElementById('btn-interativo');
const mensagemInterativa = document.getElementById('mensagem-interativa');

btnInterativo.addEventListener('click', function() {
    mensagemInterativa.textContent = 'Obrigado pelo interesse! Explore os nossos recursos abaixo.';
    mensagemInterativa.style.color = '#27ae60';
    mensagemInterativa.style.marginTop = '1rem';
    mensagemInterativa.style.fontWeight = 'bold';
    mensagemInterativa.classList.remove('hidden');
});

const formContacto = document.getElementById('form-contacto');
const feedbackEnvio = document.getElementById('feedback-envio');

formContacto.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    
    if (nome.trim() !== '') {
        feedbackEnvio.textContent = `Obrigado, ${nome}! A sua mensagem foi enviada com sucesso.`;
        feedbackEnvio.style.color = '#27ae60';
        formContacto.reset();
    } else {
        feedbackEnvio.textContent = 'Por favor, preencha o seu nome corretamente.';
        feedbackEnvio.style.color = '#e74c3c';
    }
});
