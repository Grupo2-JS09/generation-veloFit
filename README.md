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

O sistema utiliza **JWT (JSON Web Token)** para autenticação stateless, garantindo segurança e controle de acesso.

### Fluxo de Autenticação

1. O usuário se cadastra com senha criptografada.
2. Faz login e recebe um token JWT.
3. Envia o token no header de cada requisição protegida.
4. O sistema valida o token antes de liberar o acesso.

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

2. Configure o serviço web:

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

3. Variáveis de ambiente:

   ```env
   DATABASE_URL=postgresql://user:password@hostname/database
   JWT_SECRET=sua-chave-secreta
   NODE_ENV=production
   PORT=4000
   ```

4. Acesse a documentação após o deploy:
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

# Executar em produção
npm run start:prod

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
