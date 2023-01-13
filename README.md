# Boas vindas ao repositório do projeto Trybers and Dragons!

Para este projeto, apliquei os princípios da arquitetura `SOLID` e os princípios de `POO` em uma estrutura de jogos de interpretação de papéis, mais conhecidos como jogos `RPG` (_Role Playing Game_).

# Orientações

## 🐋 Rodando no Docker vs Localmente</strong></summary><br />
  
  ### Com Docker

  > Rode o serviço `node` com o comando `docker-compose up -d`.
  - Esse serviço irá inicializar um container chamado `trybers_and_dragons`.
  - A partir daqui você pode rodar o container `trybers_and_dragons` via CLI ou abri-lo no VS Code.

  > Use o comando `docker exec -it trybers_and_dragons bash`.
  - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

  > Instale as dependências [**Caso existam**] com `npm install`
  
  ⚠ Atenção ⚠ Caso opte por utilizar o Docker, **TODOS** os comandos disponíveis no `package.json` (npm start, npm test, npm run dev, ...) devem ser executados **DENTRO** do container, ou seja, no terminal que aparece após a execução do comando `docker exec` citado acima. 

  ⚠ Atenção ⚠ O **git** dentro do container não vem configurado com suas credenciais. Ou faça os commits fora do container, ou configure as suas credenciais do git dentro do container.

  ⚠ Atenção ⚠ Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto.


✨ **Dica:** A extensão `Remote - Containers` (que estará na seção de extensões recomendadas do VS Code) é indicada para que você possa desenvolver sua aplicação no container Docker direto no VS Code, como você faz com seus arquivos locais.


---
  
  ### Sem Docker
  
  > Instale as dependências [**Caso existam**] com `npm install`
  
  ⚠ Atenção ⚠ Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto.

  ✨ **Dica:** Para rodar o projeto desta forma, obrigatoriamente você deve ter o `node` instalado em seu computador.

  ✨ **Dica:** Utilize a versão 16 do `node`.
  
   # Antes de começar a desenvolver
   
  1. Clone o repositório `Usar link SSH`

- Entre na pasta do repositório que você acabou de clonar:
  * `cd pasta-do-repositório`

 2. Instale as dependências [**Caso existam**]
  * `npm install`
  
 3. Inicie a aplicação:
  * `npm run dev`
  
  # 🐉 Contextualizando 🐲

  No universo de Trybers and Dragons - T&D, quase todos os seres que andam por essas terras pertencem a uma **raça** definida.

  As diversas raças (como, por exemplo, Élfica, Orc ou Anã) definem as características das personagens dentro do jogo desde a sua criação, como os seus pontos de vida e a sua destreza. No entanto, existem seres bestiais denominados **monstros** que não possuem uma raça específica, mas podem lutar.

  Alguns seres também possuem uma **energia** e, ao treinarem o uso da energia, passam a possuir um **arquétipo**. De modo geral, os arquétipos definem a vocação de uma personagem, suas habilidades e visão de mundo: como encaram as situações, exploram masmorras ou enfrentam monstros. Como exemplos de arquétipos presentes em T&D, podemos citar guerreiro, mago e necromante.

  Boa parte dos seres podem ser considerados lutadores, bastando para isso possuir alguns atributos específicos. Em muitas ocasiões podem acontecer lutas entre personagens diversas, bem como entre personagens e monstros.
   
