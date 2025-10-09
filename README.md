<img width="1536" height="1024" alt="ChatGPT Image 8 de out  de 2025, 15_06_45" src="https://github.com/user-attachments/assets/7ba66763-4001-4a49-8142-67d76126858e" />

# VeloFit - Sistema de Gerenciamento de Academia

<p align="center">
  <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
</p>

## 📋 Sobre o Projeto

VeloFit é uma API REST desenvolvida com NestJS para gerenciamento completo de academias, permitindo o controle de usuários, serviços oferecidos e categorias de atividades físicas.

## 🚀 Tecnologias Utilizadas

- **[NestJS](https://nestjs.com/)** - Framework Node.js progressivo
- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática
- **[TypeORM](https://typeorm.io/)** - ORM para TypeScript e JavaScript
- **[MySQL](https://www.mysql.com/)** - Sistema de gerenciamento de banco de dados
- **[Class Validator](https://github.com/typestack/class-validator)** - Validação de dados

## 🏗️ Arquitetura do Sistema

O projeto segue a arquitetura modular do NestJS, dividido em:

### Módulos Principais

- **Usuario** - Gerenciamento de usuários cadastrados
- **Servico** - Controle de serviços/planos oferecidos
- **Categoria** - Categorização dos serviços
- **Auth** - Autenticação e autorização

### Estrutura de Entidades

#### Usuario
- ID (gerado automaticamente)
- Nome
- Foto
- Email (usuário - único)
- Senha (mínimo 8 caracteres)
- Relacionamento: 1:N com Serviços

#### Categoria
- ID (gerado automaticamente)
- Nome da Categoria
- Relacionamento: 1:N com Serviços

#### Servico
- ID (gerado automaticamente)
- Valor da Mensalidade
- Frequência
- Data de Matrícula
- Modalidade
- Relacionamentos: N:1 com Usuario e Categoria

## 🔧 Configuração do Ambiente

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn
- MySQL Server

### Instalação

1. Clone o repositório:
```bash
git clone [url-do-repositorio]
cd velofit
```

2. Instale as dependências:
```bash
npm install
```

3. Configure o banco de dados:
   - Crie um banco de dados MySQL chamado `db_veloFit`
   - Ajuste as credenciais em `src/app.module.ts`:
```typescript
TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',      // Seu usuário
  password: 'root',      // Sua senha
  database: 'db_veloFit',
  // ...
})
```

## 🎮 Executando a Aplicação

### Modo Desenvolvimento
```bash
npm run start:dev
```

### Modo Produção
```bash
npm run start:prod
```

A aplicação estará disponível em: `http://localhost:4000`

## 📡 Endpoints da API

### Usuários
- `GET /usuarios` - Lista todos os usuários
- `GET /usuarios/:id` - Busca usuário por ID
- `GET /usuarios/nome/:nome` - Busca usuários por nome
- `POST /usuarios` - Cria novo usuário
- `PUT /usuarios` - Atualiza usuário

### Categorias
- `GET /categorias` - Lista todas as categorias
- `GET /categorias/:id` - Busca categoria por ID
- `GET /categorias/nome/:nome` - Busca categorias por nome
- `POST /categorias` - Cria nova categoria
- `PUT /categorias/atualizar` - Atualiza categoria
- `DELETE /categorias/:id` - Remove categoria

### Serviços
- `GET /servicos` - Lista todos os serviços
- `GET /servicos/:id` - Busca serviço por ID
- `GET /servicos/modalidade/:modalidade` - Busca por modalidade
- `POST /servicos` - Cria novo serviço
- `PUT /servicos` - Atualiza serviço
- `DELETE /servicos/:id` - Remove serviço

## 🧪 Testes

```bash
# Testes unitários
npm run test

# Testes e2e
npm run test:e2e

# Cobertura de testes
npm run test:cov
```

## 🔒 Recursos de Segurança

- Validação de dados com Class Validator
- CORS habilitado
- Validação de email único
- Senhas com requisito mínimo de 8 caracteres
- Timezone configurado para UTC-3 (Brasil)

## 📦 Deploy

Para deploy em produção, recomenda-se:

1. Configurar variáveis de ambiente
2. Usar ferramenta de gerenciamento de processos (PM2)
3. Configurar proxy reverso (Nginx)
4. Implementar HTTPS

## 📚 Recursos Adicionais

- [Documentação NestJS](https://docs.nestjs.com)

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## 📄 Licença

Este projeto está sob a licença MIT.

## 👥 Contato

Para dúvidas e suporte, entre em contato através dos canais oficiais do projeto.

---

Desenvolvido com ❤️ usando NestJS
