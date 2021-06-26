# NLW TOGETHER

### Projeto desenvolvido entre os dias 20/06 a 25/06 durante a semana **NLW TOGETHER** na trilha de nodeJS

<br />
<br />

## Qual o intuito do projeto?
Nesta edição do evento, o projeto se pauta na valorização das pessoas e por este motivo, desenvolvemos junto da dev Dani Leão, uma API que cadastra usuários, tags e elogios aos usuários cadastrados se pautando nestas tags.

<br />

## Quais as entidades?
1. Usuários
2. Tags
3. Elogios

<br />

## Quais as regras deste fluxo?

- Cadastro de usuário

   Não é permitido cadastrar mais de um usuário com o mesmo e-mail

   Não é permitido cadastrar usuário sem e-mail

- Cadastro de Tag

   Não é permitido cadastrar tag sem nome

   Não é permitido cadastrar mais de uma tag com o mesmo nome

   Não é permitido o cadastro por usuários que não sejam administradores

- Cadastro de elogios

   Não é permitido um usuário cadastrar um elogio para si

   Não é permitido cadastrar elogios para usuários inválidos

   O usuário precisa estar autenticado na aplicação

<br />

## Quais tecnologias foram utilizadas?
- NodeJS
- Typescript
- TypeORM
- SQLite
- Express
- JWT
- Bcryptjs