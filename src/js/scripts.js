const time = [
    {
        url: "https://ca.slack-edge.com/TM13XHBBQ-U04D382RM0S-e856b713b7a6-512",
        nome: "Enza Rafaela",
        funcao: "Pessoa Especialista",
        linkedin: "",
        github: ""
    },
    {
        url: "https://ca.slack-edge.com/TM13XHBBQ-U01FLMM2CJ1-c77bcc8d5e26-512",
        nome: "Carolzita",
        funcao: "Pessoa Especialista",
        linkedin: "",
        github: ""
    },
    {
        url: "https://ca.slack-edge.com/TM13XHBBQ-U035TM9C7DJ-50dd640a9409-512",
        nome: "MariDê",
        funcao: "Facilitação e Experiência",
        linkedin: "",
        github: ""
    },
    {
        url: "https://ca.slack-edge.com/TM13XHBBQ-U023CHBDWD8-27fd1acd067c-512",
        nome: "J Lo",
        funcao: "Facilitação e Experiência",
        linkedin: "",
        github: ""
    },
    {
        url: "https://ca.slack-edge.com/TM13XHBBQ-U01JQRR7FSS-08320a8171e3-512",
        nome: "Joi",
        funcao: "Pessoa Instrutora",
        linkedin: "",
        github: ""
    },
    {
        url: "https://ca.slack-edge.com/TM13XHBBQ-U03DNHZLCH1-1673b49a990f-512",
        nome: "Thalles",
        funcao: "Pessoa Instrutora",
        linkedin: "",
        github: ""
    },
    {
        url: "https://ca.slack-edge.com/TM13XHBBQ-U02BG785KB9-a2e4ac4dda7b-512",
        nome: "Ana Laura",
        funcao: "Pessoa Instrutora",
        linkedin: "",
        github: ""
    }
];

const data = [
    {
        title:`Tenho que ter um computador para o curso? Se sim, qual?`,
        description: `Sim. 
                     Durante o curso, a maioria das atividades que você irá desempenhar serão realizadas no seu próprio computador/notebook.`
    },
    {
        title: "Posso utilizar o recurso WSL?" ,
        description: `Embora o Windows Subsystem for Linux (WSL) ofereça uma maneira conveniente de executar 
                    um ambiente Linux em um sistema Windows, ele também apresenta algumas desvantagens que 
                    podem afetar certos casos de uso. Aqui estão algumas das principais desvantagens do uso do WSL: <br><br>

                    * Desempenho: O WSL pode ter um desempenho inferior em comparação com a execução direta de 
                        uma distribuição Linux em um hardware compatível. Isso ocorre porque o WSL
                         precisa de uma camada de tradução entre os comandos do Linux e o subsistema do Windows, 
                         o que pode introduzir certa sobrecarga e impactar a velocidade de execução. <br><br>
                    * Limitações de compatibilidade: Embora o WSL seja compatível com muitos aplicativos e ferramentas Linux, 
                        nem todos eles funcionarão perfeitamente no ambiente. Alguns aplicativos que dependem de funcionalidades 
                        específicas do kernel Linux podem apresentar problemas ou não funcionar corretamente no WSL. <br><br>
                    * Acesso a dispositivos de hardware: O WSL não oferece suporte direto ao acesso a todos os dispositivos 
                        de hardware do sistema. Portanto, se você precisar usar recursos específicos do hardware, como placas 
                        de vídeo avançadas ou dispositivos USB especializados, poderá encontrar limitações ou problemas 
                        de compatibilidade ao usar o WSL. <br><br>
                    * Não é um ambiente de produção: Embora o WSL seja útil para desenvolvimento e tarefas diárias, 
                        ele não é projetado para ser usado como um ambiente de produção em escala empresarial. 
                        Se você estiver executando serviços ou aplicativos críticos em um ambiente de produção, 
                        é recomendável usar uma distribuição Linux nativa em vez do WSL.<br><br>
                    * Suporte limitado: Embora a Microsoft forneça suporte para o WSL, ele pode ser limitado em comparação com o suporte 
                        oferecido pelas comunidades Linux tradicionais. Se você encontrar problemas específicos do WSL, 
                        pode não haver tantos recursos ou soluções disponíveis em comparação com o uso de uma distribuição 
                        Linux padrão. <br><br>
                        
                    Não há restrições quanto ao uso de dual boot.`,
    },
    {
        title: "Meu Zoom/Slack ou outros aplicativos travam ao utilizá-lo dentro do Linux. O que posso fazer?" ,
        description: `Se você estiver enfrentando problemas com a versão snap desses aplicativos, considere as seguintes soluções: <br><br>

                        * Reinstale o Ubuntu ou outra distribuição Linux em uma versão menos pesada;<br><br>
                        * Instale os aplicativos necessários diretamente dos sites, utilizando arquivos .deb ou comandos de linha, em vez de usar o Snap;<br><br>
                        * Certifique-se de que está utilizando uma versão atualizada da distribuição Linux;<br><br>
                        * Instale os drivers corretos;`,
    },
    {
        title: "Meu Linux 'congela' e não consigo utilizar nenhum Software." ,
        description: `Existem várias razões pelas quais um sistema Linux pode congelar ou travar. <br><br> 
                    Aqui estão alguns dos motivos mais comuns:<br><br>

                    * Problemas de driver: Drivers de dispositivo mal otimizados ou incompatíveis podem causar 
                        congelamentos no sistema. Isso geralmente é mais comum com placas gráficas, adaptadores 
                        de rede sem fio ou drivers de som. Certifique-se de usar drivers atualizados e 
                        compatíveis com o hardware do seu sistema.<br><br>
                    * Problemas de hardware: Falhas de hardware, como problemas de memória, 
                        superaquecimento da CPU ou falhas no disco rígido, podem levar a congelamentos do sistema. 
                        Verifique se há problemas de hardware por meio de diagnósticos apropriados, como testes 
                        de memória ou verificações SMART para o disco rígido.<br><br>
                    * Uso intensivo de recursos: Aplicativos ou processos que consomem muitos recursos, 
                        como CPU ou memória, podem levar a um congelamento do sistema. Isso pode ocorrer 
                        quando um programa entra em um loop infinito ou quando muitos processos estão 
                        competindo por recursos limitados. Monitore o uso de recursos do sistema e 
                        verifique se algum processo específico está causando o problema.<br><br>
                    * Atualizações de software problemáticas: Às vezes, atualizações de software, 
                        como do kernel Linux ou de pacotes importantes, podem introduzir problemas 
                        de compatibilidade ou bugs que levam a congelamentos do sistema. 
                        Certifique-se de aplicar atualizações de software de forma cuidadosa 
                        e verifique se há relatos de problemas conhecidos antes de atualizar.<br><br>
                    * Configurações incorretas: Configurações inadequadas ou conflitos entre 
                        diferentes componentes do sistema podem resultar em congelamentos. 
                        Verifique as configurações relevantes, como configurações de energia, 
                        configurações de gerenciamento de dispositivos ou configurações de BIOS,
                        e certifique-se de que estão corretas e não entram em conflito.
        `,
    },
    {
        title: `O que fazer caso o Linux congele?`,
        description: `  Aqui estão algumas etapas que você pode seguir para tentar reparar o problema: <br><br>
                        * Uma solução eficaz  é acessar a tela TTY e executar um xkill.
                        Se isso não funcionar, você pode usar a combinação de teclas Alt + SysRq, 
                        pressionando as teclas REISUB a cada 2 segundos. Esta combinação realiza diversas 
                        ações, incluindo retornar o controle do teclado, terminar processos, sincronizar
                         discos e reiniciar a máquina. <br><br>
                        
                        * Reinicie o sistema: Um primeiro passo simples é reiniciar o computador.
                            Isso pode ajudar a limpar quaisquer problemas temporários ou processos 
                            problemáticos que estejam causando o congelamento. <br><br>

                        * Verifique o hardware: Verifique se há problemas de hardware, como falhas de memória, 
                            superaquecimento da CPU ou problemas de disco rígido. Execute testes de diagnóstico 
                            apropriados para verificar se há algum problema físico no sistema.<br><br>

                        * Atualize os drivers: Verifique se você está usando os drivers mais recentes
                         e corretos para o seu hardware. Visite o site do fabricante do hardware ou 
                         utilize ferramentas de gerenciamento de drivers para verificar se há atualizações disponíveis.<br><br>

                        * Monitore o uso de recursos: Verifique se algum processo está consumindo muitos 
                        recursos do sistema, como CPU ou memória. Use ferramentas como o Monitor do Sistema ou o 
                        comando "top" para identificar processos problemáticos e encerrá-los, se necessário. <br><br>

                        * Verifique logs do sistema: Analise os logs do sistema em busca de mensagens de erro 
                        ou indicadores de problemas. Os logs estão localizados em /var/log e podem fornecer 
                        informações úteis sobre eventos anteriores que levaram ao congelamento. <br><br>

                        * Desative serviços ou aplicativos problemáticos: Se você identificou que um serviço 
                        ou aplicativo específico está causando os congelamentos, tente desativá-los temporariamente 
                        ou desinstalá-los para verificar se o problema é resolvido. <br><br>

                        * Reverta atualizações recentes: Se o congelamento começou após uma atualização 
                        de software específica, você pode tentar reverter essa atualização ou retornar a 
                        uma versão anterior do software para ver se o problema é resolvido. <br><br>

                        * Verifique a integridade do sistema de arquivos: Use ferramentas como
                        fsck para verificar e reparar a integridade do sistema de arquivos. 
                        Isso pode ajudar a corrigir problemas relacionados ao sistema de arquivos 
                        que podem causar congelamentos. <br><br>

                        * Considere uma instalação limpa: Se todas as tentativas de solução 
                        de problemas falharem, pode ser necessário considerar uma reinstalação 
                        limpa do sistema operacional Linux. Isso pode ajudar a resolver problemas 
                        persistentes que não podem ser facilmente corrigidos de outra forma.`
    },
    {
        title: "Não estou conseguindo fazer o dual boot. O que pode ser?" ,
        description: `Você pode tentar refazer o pendrive do Linux com o esquema de partição GPT, 
                     dar boot por ele e usar a opção de 'apagar o disco e reinstalar o ubuntu'. `,
    },
    {
        title: "Não estou conseguindo compartilhar tela no ZOOM. A tela fica preta e o Zoom trava. O que pode ser?" ,
        description: `A solução seria voltar para o antigo gerenciador de janelas, o Xorg. <br><br>
                        Para fazer isso, basta:<br><br>
                        * Acessar a tela de Login (talvez precise fazer logout para acessá-la caso o login seja automático no computador);<br>
                        * Clicar no nome do usuário;<br><br>
                        * Clicar na engrenagem que fica no canto direito inferior (pode variar a localidade);<br>
                        * Selecionar a opção Ubuntu on Xorg (pode variar o texto);<br><br>
                        * Fazer login normalmente.<br><br>
                        * Não acontecerão diferenças visuais notáveis nas janelas ao fazer essa mudança, porém agora o compartilhamento de tela no zoom funcionará normalmente! `,
    },
    {
        title: "Existem requisitos mínimos de Hardware para acompanhar as aulas?" ,
        description: `Configuração de hardware mínima que recomendamos:<br><br>
                    * Processador:	Dual core ou superior compatível com arquitetura x86-64;<br>
                    * Memória RAM:	Pelo menos 4GB;<br><br>
                    * HD:	Pelo menos 120GB de armazenamento;<br><br>
                    * Internet:	Conexão Wi-Fi ou Cabeada de pelo menos 15Mbps;<br><br>
                    * Headset:	Conectividade com fone de ouvido e microfone;<br><br>
                    * WebCam: Integrada ao computador/notebook ou externa;`,
    },
    {
        title: "Qual versão do Node utilizar?" ,
        description: `Recomendamos que você utilize sempre a versão LTS (Long Term Support), que é a versão atual mais estável do Node.`,
    },
    {
        title: "Posso utilizar o Git For Education?" ,
        description: `Sim. Você pode solicitar inclusive na Plataforma de Aprendizagem, em Suporte CSE -> Outros. Ou diretamente no link: 
                     <a href="https://app.betrybe.com/course/support/others"> https://app.betrybe.com/course/support/others </a>  `,
    },
    {
        title: "Existe alguma versão de Linux mais leve que seja recomendado utilizar?" ,
        description: `No caso do Linux, recomendamos a utilização do Xubuntu ou Lubuntu. Caso não se adapte a nenhuma das opções, o Pop! OS ou Linux Mint poderá ser utilizado.`,
    },
    {
        title: "Como posso deixar o meu terminal colorido?" ,
        description:   `Sugestão 1: material na plataforma, lá em Desenvolvimento Web: Vida Real -> Artigo 40 <br><br>
                        Sugestão 2: outro guia supimpa de bom: <a href="https://gist.github.com/kevin-smets/8568070"> https://gist.github.com/kevin-smets/8568070</a><br><br>
                        O guia fala de Mac, mas seguindo as mesmas dicas para o Linux funciona bem. Só umas observações:<br><br>
                        - O iTerm é um Terminal mais legal para quem usa Mac (não precisa disso no Linux)<br><br>
                        - Para instalar o zsh no Linux, você digita: sudo apt install zsh<br><br>
                        - Se você instalar o zsh e seu terminal continuar no bash, que é o padrão, é só digitar zsh e [enter] que ele “troca”<br><br>
                        - A questão das fontes vocês podem testar e personalizar como quiserem. Eu mesmo nem usei aquela parte do “powerlevel” que diz no guia.`,
    },

];

window.onload = () => {
    const containerInfo = document.querySelector('.container-info');

    time.forEach( (pessoa) => {
        // Cria o elemento principal card
        let card = document.createElement('div');
        card.className = "card";
        card.style.width = "20rem";

        // Cria a imagem do card
        let img = document.createElement('img');
        img.className = "card-img-top";
        img.src = pessoa.url;  
        img.alt = "...";
        card.appendChild(img);

        let cardContainer = document.createElement('div');
        cardContainer.className = 'card-container';

        // Cria o corpo do card
        let cardBody = document.createElement('div');
        cardBody.className = "card-body";

        // Cria o título do card
        let title = document.createElement('h5');
        title.className = "card-title";
        title.textContent = pessoa.nome;
        cardContainer.appendChild(title);

        // Cria o texto do card
        let text = document.createElement('p');
        text.className = "card-text";
        text.textContent = pessoa.funcao;
        cardContainer.appendChild(text);

        cardBody.appendChild(cardContainer);

        let cardContainerSocial = document.createElement('div');
        cardContainerSocial.className = 'card-container';

        // Cria o link do LinkedIn
        let linkLinkedin = document.createElement('a');
        linkLinkedin.href = "#";  // Adicione o URL do perfil do LinkedIn aqui
        let iconLinkedin = document.createElement('i');
        iconLinkedin.className = "bi bi-linkedin";
        linkLinkedin.appendChild(iconLinkedin);
        cardContainerSocial.appendChild(linkLinkedin);

        // Cria o link do GitHub
        let linkGithub = document.createElement('a');
        linkGithub.href = "#";  // Adicione o URL do perfil do GitHub aqui
        let iconGithub = document.createElement('i');
        iconGithub.className = "bi bi-github";
        linkGithub.appendChild(iconGithub);
        cardContainerSocial.appendChild(linkGithub);

        cardBody.appendChild(cardContainerSocial);

        // Adiciona o corpo do card ao card
        card.appendChild(cardBody);
        containerInfo.appendChild(card);
    });

    // const body = document.querySelector('body');
    // data.forEach(element => {
    //     const elementoDetails = document.createElement('details');
    //     elementoDetails.c
    //     const elementoSummary = document.createElement('summary');
    //     elementoSummary.innerHTML = `${element.title} 
    //                                 <svg class='control-icon control-icon-expand' width='24' height='24' role='presentation'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#expand-more' /></svg>
    //                                 <svg class='control-icon control-icon-close' width='24' height='24' role='presentation'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#close' /></svg>`;
    //     const elementoParagrafo = document.createElement('p');
    //     elementoParagrafo.innerHTML = `${element.description}`;

    //     elementoDetails.appendChild(elementoSummary);
    //     elementoDetails.appendChild(elementoParagrafo);
    //     body.appendChild(elementoDetails);
    // });
}