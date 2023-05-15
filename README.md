# Thoughts - Rede Social de Pensamentos

O projeto Thoughts é uma rede social de pensamentos que permite aos usuários compartilharem seus pensamentos e ideias com outros membros da comunidade. Com o Thoughts, você pode explorar pensamentos publicados por outros usuários e interagir com eles por meio de curtidas e comentários. É um espaço para expressar suas reflexões, encontrar inspiração e conectar-se com pessoas que compartilham interesses similares.

Neste projeto, seguimos a arquitetura MVC (Model-View-Controller), que é uma abordagem de desenvolvimento de software que organiza o código em três componentes principais: Model, View e Controller.

## O projeto Thoughts foi desenvolvido utilizando as seguintes ferramentas:
<ul>
  <li>Node.js: Um ambiente de tempo de execução JavaScript usado para construir aplicativos do lado do servidor.</li>
  <li>MySQL: Um sistema de gerenciamento de banco de dados relacional usado para armazenar e recuperar os dados da aplicação.</li>
  <li>Express: Um framework web para Node.js que facilita a criação de APIs e aplicativos web.</li>
  <li>Template Engine: Handlebars: Uma engine de templates que permite renderizar o conteúdo dinâmico em HTML.</li>
  <li>Sequelize: Uma biblioteca ORM (Object-Relational Mapping) para Node.js que simplifica a interação com o banco de dados MySQL.</li>
</ul>

## Funcionalidades
O projeto Thoughts oferece as seguintes funcionalidades:

<ul>
  <li>Cadastro e login de usuários: Os usuários podem criar contas no Thoughts fornecendo informações básicas, como nome, e-mail e senha. Eles também podem fazer login com suas credenciais para acessar suas contas.</li>
   <li>Criação, edição e exclusão de pensamentos: Os usuários podem criar novos pensamentos, escrevendo suas reflexões e compartilhando-as com a comunidade. Eles também têm a capacidade de editar e excluir os pensamentos que criaram.</li>
  <li>Filtro de busca e ordenação: O Thoughts fornece uma funcionalidade de pesquisa que permite aos usuários pesquisar pensamentos com base em palavras-chave ou outros critérios. Além disso, eles podem ordenar os pensamentos de acordo com a data de postagem para visualizar os mais recentes ou os mais antigos.</li>
</ul>

## Instalação e Configuração
Para executar o projeto Thoughts localmente, siga as etapas abaixo:

### Certifique-se de ter o Node.js e o MySQL instalados em seu sistema.
<ul>
    <li>XAMPP: Baixe e instale o XAMPP, que é uma solução de servidor local que inclui o Apache, o MySQL e o PHP. Você pode encontrar o XAMPP em seu site oficial: https://www.apachefriends.org/index.html</li>
    <li>MySQL Workbench: Baixe e instale o MySQL Workbench, uma ferramenta gráfica para gerenciamento de banco de dados MySQL. Você pode encontrar o MySQL Workbench no site oficial do MySQL: https://www.mysql.com/products/workbench/</li>
</ul>

Faça o clone deste repositório para o seu ambiente local.
```bash
git clone https://github.com/seu-usuario/thoughts.git
```

Navegue até o diretório do projeto.
```bash
cd thoughts
```

Instale as dependências do projeto usando o npm (gerenciador de pacotes do Node.js).
```bash
npm install
```
### Configure o banco de dados MySQL.

<ul>
  <li>Inicie o XAMPP e inicie o servidor MySQL.</li>
  <li>Abra o MySQL Workbench e conecte-se ao servidor MySQL local.</li>
  <li>Crie um banco de dados no MySQL para o projeto Thoughts.</li>
</ul>

### Como criar um banco de dados no MySql com o Workbench

<ul>
  <li>No Workbench, abra o seu sevidor local e crie um novo schema clicando no ícone ilustrado abaixo.</li>
  
  ![image](https://github.com/doguebart/Thoughts/assets/95982653/423e555a-6e04-43aa-b108-023954c696ce)
  
  <li>Mude o nome do schema para "thoughts" e clique em apply.</li>
  
  ![image](https://github.com/doguebart/Thoughts/assets/95982653/26b201d8-05ca-4ab2-b9da-eb2594469f94)
</ul>

Inicie o servidor local.

```bash
npm start
```
### Como acessar o site?

O servidor será iniciado em http://localhost:3000. Acesse essa URL em seu navegador para visualizar e interagir com o projeto Thoughts.

Certifique-se de ter o XAMPP e o MySQL Workbench em execução e todas as dependências instaladas corretamente para evitar quaisquer erros durante a configuração.

## Fluxo de Criação e Visualização de Pensamentos

Nesta seção, descreveremos o fluxo de criação e visualização de pensamentos no projeto Thoughts.

### Visualização de Pensamentos

Quando um usuário não está logado no sistema, ele ainda pode visualizar os pensamentos publicados por outras pessoas. Isso permite que os usuários não logados explorem os pensamentos compartilhados pela comunidade e encontrem inspiração. No entanto, eles não têm permissão para criar e publicar pensamentos enquanto não estiverem logados.

### Criação de Conta e Autenticação

Para um novo usuário criar novos pensamentos, é necessário criar uma conta no Thoughts. Para isso, o usuário deve navegar até a página de registro e fornecer as informações necessárias, como nome, e-mail e senha. Após preencher os campos obrigatórios, o usuário pode enviar o formulário de registro.

Após a conclusão bem-sucedida do registro, o usuário será redirecionado para a página de dashboard, onde poderá gerenciar seus pensamentos e interagir com outros usuários.

### Criação e Publicação de Pensamentos

Na página de dashboard, o usuário verá um botão "Criar pensamento". Ao clicar nesse botão, ele será redirecionado para uma página de cadastro de pensamento.

Na página de cadastro de pensamento, o usuário poderá escrever sua reflexão ou pensamento em um formulário. Ao concluir o preenchimento do formulário, o usuário poderá enviar o pensamento para ser publicado na plataforma Thoughts.

Após criar e publicar um novo pensamento, o usuário será redirecionado novamente para a página de dashboard. Lá, ele poderá ver o pensamento recém-criado na lista de seus próprios pensamentos.

### Edição e Remoção de Pensamentos

Na página de dashboard, o usuário terá a opção de editar ou remover um pensamento que ele tenha criado anteriormente. Para editar um pensamento, o usuário pode selecionar o botão de edição correspondente ao pensamento desejado. Isso redirecionará o usuário para a página de edição do pensamento, onde ele poderá fazer as alterações desejadas.

Da mesma forma, o usuário pode remover um pensamento selecionando o botão de exclusão correspondente ao pensamento na página de dashboard.

O fluxo de criação e visualização de pensamentos descrito acima oferece aos usuários uma experiência intuitiva e fácil de usar, permitindo-lhes compartilhar suas reflexões, bem como editar e remover pensamentos conforme necessário.
