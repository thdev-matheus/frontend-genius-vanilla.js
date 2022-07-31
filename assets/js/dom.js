function jogoGenius() {

    const body = document.querySelector('body');

    const header = document.createElement('header');
    header.id = 'cabecalho';
    body.appendChild(header);

    const h1 = document.createElement('h1');
    h1.innerText = 'GENIUS';
    header.appendChild(h1);

    const main = document.createElement('main');
    main.id = 'container-principal';
    body.appendChild(main);

    const blocoInstrucoes = document.createElement('aside');
    blocoInstrucoes.id = 'bloco-instrucoes';
    main.appendChild(blocoInstrucoes);

    const primeiroTituloInstrucoes = document.createElement('h2');
    primeiroTituloInstrucoes.classList.add('titulo-instrucoes');
    primeiroTituloInstrucoes.innerText = 'Objetivo';
    blocoInstrucoes.appendChild(primeiroTituloInstrucoes);

    const primeiroParagrafoInstrucoes = document.createElement('p');
    primeiroParagrafoInstrucoes.classList.add('paragrafo-instrucoes');
    primeiroParagrafoInstrucoes.innerText = 'O objetivo é acertar o máximo de sequências quanto for possível.';
    blocoInstrucoes.appendChild(primeiroParagrafoInstrucoes);

    const segundoTituloInstrucoes = document.createElement('h2');
    segundoTituloInstrucoes.classList.add('titulo-instrucoes');
    segundoTituloInstrucoes.innerText = 'Instruções';
    blocoInstrucoes.appendChild(segundoTituloInstrucoes);

    const segundoParagrafoInstrucoes = document.createElement('p');
    segundoParagrafoInstrucoes.classList.add('paragrafo-instrucoes');
    segundoParagrafoInstrucoes.innerHTML = 'Ao clicar no botão <em><strong>"Jogar"</strong></em>, o Genius irá mostrar a primeira seqüência de cores.';
    blocoInstrucoes.appendChild(segundoParagrafoInstrucoes);

    const terceiroParagrafoInstrucoes = document.createElement('p');
    terceiroParagrafoInstrucoes.classList.add('paragrafo-instrucoes');
    terceiroParagrafoInstrucoes.innerText = 'Então você deve repetir a seqüência exatamente igual ao que o Genius mostrou. Se você acertar o Gênius irá repetir a seqüência e adicionar mais uma cor e assim por diante.';
    blocoInstrucoes.appendChild(terceiroParagrafoInstrucoes);

    const quartoParagrafoInstrucoes = document.createElement('p');
    quartoParagrafoInstrucoes.classList.add('paragrafo-instrucoes');
    quartoParagrafoInstrucoes.innerText = 'Qual o seu recorde máximo?';
    blocoInstrucoes.appendChild(quartoParagrafoInstrucoes);

    const quintoParagrafoInstrucoes = document.createElement('p');
    quintoParagrafoInstrucoes.classList.add('paragrafo-instrucoes');
    quintoParagrafoInstrucoes.innerText = 'Desafie os amigos e família e venha ser um Gênius!';
    blocoInstrucoes.appendChild(quintoParagrafoInstrucoes);

    const blocoPrincipal = document.createElement('section');
    blocoPrincipal.id = 'bloco-principal';
    main.appendChild(blocoPrincipal);

    const containerGenius = document.createElement('div');
    containerGenius.id = 'container-genius';
    blocoPrincipal.appendChild(containerGenius);

    const containerBotaoCores = document.createElement('div');
    containerBotaoCores.id = 'container-botao-cores';
    containerGenius.appendChild(containerBotaoCores);

    const botaoGeniusVerde = document.createElement('button');
    botaoGeniusVerde.id = 'verde';
    botaoGeniusVerde.classList.add('botao-genius');
    containerBotaoCores.appendChild(botaoGeniusVerde);

    const botaoGeniusVermelho = document.createElement('button');
    botaoGeniusVermelho.id = 'vermelho';
    botaoGeniusVermelho.classList.add('botao-genius');
    containerBotaoCores.appendChild(botaoGeniusVermelho);

    const botaoGeniusAmarelo = document.createElement('button');
    botaoGeniusAmarelo.id = 'amarelo';
    botaoGeniusAmarelo.classList.add('botao-genius');
    containerBotaoCores.appendChild(botaoGeniusAmarelo);

    const botaoGeniusAzul = document.createElement('button');
    botaoGeniusAzul.id = 'azul';
    botaoGeniusAzul.classList.add('botao-genius');
    containerBotaoCores.appendChild(botaoGeniusAzul);

    const blocoCentroGenius = document.createElement('div');
    blocoCentroGenius.id = 'bloco-centro-genius';
    containerGenius.appendChild(blocoCentroGenius);

    const botaoJogar = document.createElement('button');
    botaoJogar.id = 'botao-jogar';
    botaoJogar.innerText = 'JOGAR';
    blocoCentroGenius.appendChild(botaoJogar);

    const blocoPlacar = document.createElement('aside');
    blocoPlacar.id = 'bloco-placar';
    main.appendChild(blocoPlacar);

    const blocoRecorde = document.createElement('section');
    blocoRecorde.id = 'bloco-recorde';
    blocoPlacar.appendChild(blocoRecorde);

    const tituloRecorde = document.createElement('h2');
    tituloRecorde.classList.add('titulo-recorde');
    tituloRecorde.innerText = 'Recorde:';
    blocoRecorde.appendChild(tituloRecorde);

    const fundoRecorde = document.createElement('div');
    fundoRecorde.id = 'fundo-recorde';
    blocoRecorde.appendChild(fundoRecorde);

    const recorde = document.createElement('p');
    recorde.id = 'recorde';
    recorde.innerText = '0';
    fundoRecorde.appendChild(recorde);

    const tituloPontuacaoAtual = document.createElement('h2');
    tituloPontuacaoAtual.classList.add('titulo-pontuacao-atual');
    tituloPontuacaoAtual.innerText = 'Pontos:';
    blocoRecorde.appendChild(tituloPontuacaoAtual);

    const fundoPontuacaoAtual = document.createElement('div');
    fundoPontuacaoAtual.id = 'fundo-pontuacao-atual';
    blocoRecorde.appendChild(fundoPontuacaoAtual);

    const PontuacaoAtual = document.createElement('p');
    PontuacaoAtual.id = 'pontuacao-atual';
    PontuacaoAtual.innerText = '0';
    fundoPontuacaoAtual.appendChild(PontuacaoAtual);

    const blocoInformacoes = document.createElement('section');
    blocoInformacoes.id = 'bloco-informacoes';
    blocoPlacar.appendChild(blocoInformacoes);

    const feitoPor = document.createElement('h2');
    feitoPor.id = 'feito-por';
    feitoPor.innerText = 'Develop By:';
    blocoInformacoes.appendChild(feitoPor);

    const nomeDevMatheus = document.createElement('h3');
    nomeDevMatheus.classList.add('nome-dev', 'matheus');
    nomeDevMatheus.innerText = 'Matheus Vieira';
    blocoInformacoes.appendChild(nomeDevMatheus);

    const containerImgMatheus = document.createElement('div');
    containerImgMatheus.id = 'container-img';
    blocoInformacoes.appendChild(containerImgMatheus);

    const githubMatheus = document.createElement('a');
    githubMatheus.classList.add('link-social');
    githubMatheus.href = 'https://github.com/th-matheus';
    githubMatheus.target = '_blank'
    containerImgMatheus.appendChild(githubMatheus);

    const imgGithubMatheus = document.createElement('img');
    imgGithubMatheus.classList.add('img-social');
    imgGithubMatheus.src = './assets/img/github-amarelo.svg';
    imgGithubMatheus.alt = 'github-amarelo';
    githubMatheus.appendChild(imgGithubMatheus);

    const linkedinMatheus = document.createElement('a');
    linkedinMatheus.classList.add('link-social');
    linkedinMatheus.href = 'https://www.linkedin.com/in/th-matheus/';
    linkedinMatheus.target = '_blank';
    containerImgMatheus.appendChild(linkedinMatheus);

    const imgLinkedinMatheus = document.createElement('img');
    imgLinkedinMatheus.classList.add('img-social');
    imgLinkedinMatheus.src = './assets/img/linkedin-amarelo.svg';
    imgLinkedinMatheus.alt = 'linkedin-amarelo';
    linkedinMatheus.appendChild(imgLinkedinMatheus);


    const nomeDevHerbert = document.createElement('h3');
    nomeDevHerbert.classList.add('nome-dev', 'herbert');
    nomeDevHerbert.classList.add('herbert');
    nomeDevHerbert.innerText = 'Herbert Sipriano';
    blocoInformacoes.appendChild(nomeDevHerbert);

    const containerImgHerbert = document.createElement('div');
    containerImgHerbert.id = 'container-img';
    blocoInformacoes.appendChild(containerImgHerbert);

    const githubHerbert = document.createElement('a');
    githubHerbert.classList.add('link-social');
    githubHerbert.href = 'https://github.com/herbertcaiosama';
    githubHerbert.target = '_blank'
    containerImgHerbert.appendChild(githubHerbert);

    const imgGithubHerbert = document.createElement('img');
    imgGithubHerbert.classList.add('img-social');
    imgGithubHerbert.src = './assets/img/github-verde.svg';
    imgGithubHerbert.alt = 'github-verde';
    githubHerbert.appendChild(imgGithubHerbert);

    const linkedinHerbert = document.createElement('a');
    linkedinHerbert.classList.add('link-social');
    linkedinHerbert.href = 'https://www.linkedin.com/in/herbert-sipriano-30643667/';
    linkedinHerbert.target = '_blank';
    containerImgHerbert.appendChild(linkedinHerbert);

    const imgLinkedinHerbert = document.createElement('img');
    imgLinkedinHerbert.classList.add('img-social');
    imgLinkedinHerbert.src = './assets/img/linkedin-verde.svg';
    imgLinkedinHerbert.alt = 'linkedin-verde';
    linkedinHerbert.appendChild(imgLinkedinHerbert);

}

jogoGenius();