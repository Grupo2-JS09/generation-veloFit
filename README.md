<img width="1536" height="1024" alt="Logo VeloFit" src="https://github.com/user-attachments/assets/158a8a7b-80ec-45c4-832e-b0f79c6e1bff" />


# 🏋️‍♂️ VeloFit - Sistema de Gerenciamento de Academia

## 📋 Sobre o Projeto

**VeloFit** é uma API REST desenvolvida com **NestJS**, **TypeORM** e **PostgreSQL**, projetada para o gerenciamento completo de academias.  
O sistema permite o controle de **usuários**, **categorias**, **serviços/planos** e inclui um **método inteligente de cálculo de mensalidade**, além de autenticação segura com **JWT**.

---

## 🚀 Tecnologias Utilizadas

- **NestJS** - Framework Node.js progressivo
- **TypeScript** - Superset do JavaScript com tipagem estática
- **TypeORM** - ORM para TypeScript e JavaScript
- **PostgreSQL** - Banco de dados hospedado no **Render**
- **JWT (JSON Web Token)** - Autenticação e autorização
- **Bcrypt** - Criptografia de senhas
- **Passport** - Middleware de autenticação
- **ESLint** - Linter para manter a qualidade e o padrão de código

---

## 🔐 Autenticação JWT

- Cadastro do Usuário: Durante o registro, a senha fornecida pelo usuário é criptografada utilizando o algoritmo BCrypt antes de ser armazenada no banco de dados.

- Login e Geração do Token: Após as credenciais serem validadas (compara-se a senha fornecida com o hash armazenado usando BCrypt), o sistema gera um token JWT contendo informações do usuário e o retorna como resposta.

- Acesso a Recursos Protegidos: Para requisitar endpoints protegidos (como atualização de dados ou consulta de academias), o cliente deve enviar o token JWT no cabeçalho Authorization das requisições, geralmente no formato Bearer <token>.

- Validação do Token: Em cada requisição autenticada, o sistema verifica a validade do token JWT — incluindo sua autenticidade, integridade e data de expiração — antes de autorizar o acesso ao recurso solicitado.

### Exemplo de Token

```json
{
  "id": 1,
  "nome": "João Silva",
  "usuario": "joao@email.com",
  "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

## 💰 Cálculo de Mensalidade (Interno do VeloFit)

O **VeloFit** possui um sistema interno de cálculo automático da mensalidade com base na **categoria** e na **frequência semanal de treinos** do aluno.

### Fórmula

```
valor_final = valor_base - (valor_base × ((7 - frequência_semanal) × 0.02))
```

### Categorias e Valores Base

| Categoria ID | Tipo    | Valor Base |
| ------------ | ------- | ---------- |
| 1            | Básico  | R$ 100,00  |
| 2+           | Premium | R$ 120,00  |

### Exemplo de Cálculo

- Categoria: Básico (R$ 100,00)
- Frequência: 4x por semana
- Desconto: (7 - 4) × 2% = 6%
- **Valor final:** R$ 94,00

### Endpoint

```http
GET /servicos/calculo_mensalidade/:id
Authorization: Bearer {seu-token-jwt}
```

**Resposta:**

```json
{
  "valor_mensalidade": 94.0,
  "frequencia": 4,
  "categoria": "Básico"
}
```

---

## 🗄️ Estrutura do Banco de Dados (DER)

## ☁️ Deploy no Render

O **Render** é usado para hospedar tanto o **banco de dados PostgreSQL** quanto o **serviço web da API**.

### Configuração do Render

1. Crie um novo banco PostgreSQL:

   - **Name:** `velofit-db`
   - **Plan:** Free (para testes) ou Starter (produção)

2. DER:

  <img width="807" height="291" alt="der" src="https://github.com/user-attachments/assets/f71c551c-8000-40b3-aad9-c805e9438ca0" />

3. Configure o serviço web:

   ```yaml
   databases:
     - name: velofit-db
       plan: free
       databaseName: db_velofit
       user: velofit_user

   services:
     - type: web
       name: velofit-api
       env: node
       plan: free
       buildCommand: npm install && npm run build
       startCommand: npm run start:prod
       envVars:
         - key: DATABASE_URL
           fromDatabase:
             name: velofit-db
             property: connectionString
         - key: JWT_SECRET
           generateValue: true
         - key: PORT
           value: 4000
   ```

4. Variáveis de ambiente:

   ```env
   DATABASE_URL=postgresql://user:password@hostname/database
   JWT_SECRET=sua-chave-secreta
   NODE_ENV=production
   PORT=4000
   ```

5. Acesse a documentação após o deploy:
   ```
   https://velofit-api.onrender.com/swagger
   ```

---

## 🧪 Testes

```bash
npm run test:e2e
```

---

## 📦 Scripts Disponíveis

```bash
# Executar em modo de desenvolvimento
npm run start:dev

# Testes end-to-end
npm run test:e2e
```

---

## 🔧 Estrutura do Projeto

```
src/
├── auth/                # Autenticação JWT
├── categoria/           # CRUD de categorias
├── servico/             # CRUD de serviços + cálculo de mensalidade
├── usuario/             # CRUD de usuários
├── data/                # Configuração de banco de dados
├── app.module.ts        # Módulo principal
└── main.ts              # Inicialização da aplicação
```

---

## 📄 Licença

Este projeto está sob a licença **MIT**.

---

**VeloFit Brasil**  
📧 grupo_02-turma-javascript_09@outlook.com  
Desenvolvido com ❤️ usando **NestJS**
