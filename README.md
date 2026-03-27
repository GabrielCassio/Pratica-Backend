# ⚔️ User Register System

Este projeto é uma API REST robusta construída com **Node.js** e **Express**, utilizando o **Prisma 7** como ORM. O diferencial aqui é o uso do adaptador `better-sqlite3`, que oferece uma performance superior para bancos de dados SQLite locais.

---

## 🛠️ Tecnologias Utilizadas

* **Runtime:** Node.js
* **Framework:** Express.js
* **ORM:** Prisma 7 (com `@prisma/adapter-better-sqlite3`)
* **Banco de Dados:** SQLite
* **Linguagem:** TypeScript

---

## 📦 Configuração Inicial

Sempre que clonar este repositório, siga estes passos para garantir que o ambiente esteja pronto:

### 1. Instalar dependências
```bash
npm install
```

### 2. Variáveis de Ambiente

Crie um arquivo .env na raiz do projeto. Embora o Prisma 7 esteja configurado via adaptador manual, alguns comandos da CLI ainda podem solicitar a URL:

```bash
DATABASE_URL="file:./prisma/dev.db"
```

### 3. Gerar o Prisma Client
Este comando cria os tipos do TypeScript baseados no seu schema.prisma. Sem isso, o código apresentará erros de importação.

````bash
npx prisma generate
````

### 4. Sincronizar o Banco de Dados
Para criar o arquivo dev.db e todas as tabelas (como a tabela User), execute:

````bash
npx prisma db push
````

---

### 🚀 Como Executar
Para iniciar o servidor em modo de desenvolvimento:

````Bash
npm run dev
````
O servidor estará disponível em http://localhost:3000.

---
## 📬 Testando a API (Postman/Insomnia)
Criar Usuário (POST /users)
Ao enviar requisições, certifique-se de que o corpo está em JSON puro.

⚠️ Atenção: O JSON é rigoroso. Não use aspas simples e nunca deixe uma vírgula sobrando no último campo, ou o servidor retornará um SyntaxError.

Corpo (Raw JSON):
````json
{
    "name": "Gabriel Cássio"
}
````
Configuração Necessária:

Method: POST

URL: http://localhost:3000/users

Header: Content-Type: application/json

---

## 🧠 Notas de Arquitetura
Service Pattern: A lógica de negócio está isolada em arquivos .service.ts para facilitar testes e manutenção.

Prisma 7 Adapter: Devido às mudanças na versão 7 do Prisma, a conexão com o banco é feita manualmente no arquivo src/database/client.ts usando o PrismaBetterSqlite3.

Tratamento de Erros: O projeto valida entradas básicas (como nomes vazios) e duplicidade de registros antes de tentar salvar no banco.

---

## 🛠️ Comandos Úteis do Prisma
npx prisma studio: Abre uma interface visual para editar os dados do banco no navegador.

npx prisma migrate dev: Registra mudanças no esquema e cria um histórico de migrações.