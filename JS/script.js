

    function criarComputador() {
        const pc = document.createElement('div');
        pc.classList.add('computador-caindo');
        pc.innerText = '💻' //Emoji do computador caindo

// Define uma posição horizontal aleatória (0 a 100% da largura da tela)

    pc.style.left = Math.random() * 100 + 'vw';

// Define uma velocidade aleatória para a queda (entre 3 e 6 segundos)

    const duracao = Math.random() * 3 + 3;
    pc.style.animationDuration = duracao + 's';

// Tamanhos levemente diferentes para dar profundidade

    pc.style.fontSize = Math.random() * 1.5 + 1 + 'rem';

    document.body.appendChild(pc);

// Remove o elemento do HTML após o término da animação para não travar o navegador

    setTimeout(() => {
        pc.remove();
    }, duracao * 1000);
}

    // Cria um novo computador a cada 400 milissegundos
setInterval(criarComputador, 400);


