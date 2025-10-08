<img width="720" height="720" alt="ChatGPT Image 8 de out  de 2025, 09_16_55" src="https://github.com/user-attachments/assets/8b37d9d8-9291-4122-9bde-97e1b84dee8c" />


# VeloFit - Delivery de Comidas Saudáveis 🥗

<p align="center">
  <strong>Sistema de delivery focado em alimentação saudável e bem-estar</strong>
</p>

## 📋 Sobre o Projeto

VeloFit é uma API REST desenvolvida com NestJS para um sistema de delivery especializado em comidas saudáveis. A plataforma permite o gerenciamento completo de usuários, cardápio de produtos saudáveis organizados por categorias, e controle de pedidos/serviços.

## 🎯 Funcionalidades

- 👤 Cadastro e gerenciamento de usuários
- 🍱 Catálogo de produtos organizados por categorias
- 📦 Sistema de pedidos com planos de assinatura
- 🏷️ Categorização de produtos (refeições, lanches, sucos, etc.)
- 🔐 Autenticação e autorização de usuários
- 💳 Controle de mensalidades e frequência de entrega

## 🚀 Tecnologias Utilizadas

- **[NestJS](https://nestjs.com/)** - Framework Node.js progressivo
- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática
- **[TypeORM](https://typeorm.io/)** - ORM para TypeScript e JavaScript
- **[MySQL](https://www.mysql.com/)** - Sistema de gerenciamento de banco de dados
- **[Class Validator](https://github.com/typestack/class-validator)** - Validação de dados

## 🏗️ Arquitetura do Sistema

O projeto segue a arquitetura modular do NestJS, dividido em:

### Módulos Principais

- **Usuario** - Gerenciamento de clientes cadastrados
- **Servico** - Controle de pedidos e planos de assinatura
- **Categoria** - Categorização dos produtos do cardápio
- **Auth** - Autenticação e autorização

### Estrutura de Entidades

#### Usuario (Cliente)
- ID (gerado automaticamente)
- Nome completo
- Foto de perfil
- Email (único)
- Senha (criptografada, mínimo 8 caracteres)
- Relacionamento: 1:N com Serviços/Pedidos

#### Categoria
- ID (gerado automaticamente)
- Nome da Categoria (ex: Refeições Completas, Lanches Fit, Sucos Detox, Sobremesas Saudáveis)
- Relacionamento: 1:N com Serviços/Produtos

#### Servico (Pedido/Assinatura)
- ID (gerado automaticamente)
- Valor da Mensalidade
- Frequência de entrega (vezes por semana)
- Data de Matrícula/Início
- Modalidade (tipo de plano ou produto)
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
  username: 'seu_usuario',
  password: 'sua_senha',
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

### 👤 Usuários (Clientes)
- `GET /usuarios` - Lista todos os clientes
- `GET /usuarios/:id` - Busca cliente por ID
- `GET /usuarios/nome/:nome` - Busca clientes por nome
- `POST /usuarios` - Cadastra novo cliente
- `PUT /usuarios` - Atualiza dados do cliente

### 🏷️ Categorias de Produtos
- `GET /categorias` - Lista todas as categorias
- `GET /categorias/:id` - Busca categoria por ID
- `GET /categorias/nome/:nome` - Busca categorias por nome
- `POST /categorias` - Cria nova categoria
- `PUT /categorias/atualizar` - Atualiza categoria
- `DELETE /categorias/:id` - Remove categoria

### 📦 Serviços/Pedidos
- `GET /servicos` - Lista todos os pedidos/assinaturas
- `GET /servicos/:id` - Busca pedido por ID
- `GET /servicos/modalidade/:modalidade` - Busca por modalidade/tipo de plano
- `POST /servicos` - Cria novo pedido/assinatura
- `PUT /servicos` - Atualiza pedido
- `DELETE /servicos/:id` - Cancela pedido/assinatura

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

- ✅ Validação de dados com Class Validator
- ✅ CORS habilitado para integração frontend
- ✅ Email único por usuário
- ✅ Senhas com requisito mínimo de 8 caracteres
- ✅ Timezone configurado para Brasil (UTC-3)
- ✅ Deleção em cascata para manter integridade dos dados

## 💡 Casos de Uso

### Para Clientes:
- Cadastro e gerenciamento de perfil
- Navegação por categorias de alimentos
- Assinatura de planos de entrega
- Escolha de frequência de entregas
- Acompanhamento de pedidos

### Para Administradores:
- Gestão completa de produtos e categorias
- Controle de assinaturas ativas
- Gerenciamento de clientes
- Acompanhamento de receitas

## 🎨 Exemplos de Categorias

- 🍱 **Refeições Completas** - Pratos balanceados e nutritivos
- 🥗 **Saladas** - Opções frescas e variadas
- 🥤 **Sucos Detox** - Bebidas naturais e saudáveis
- 🍰 **Sobremesas Fit** - Doces sem culpa
- 🥪 **Lanches Saudáveis** - Opções práticas para o dia a dia

## 📦 Deploy

### Deploy Manual
1. Configure variáveis de ambiente
2. Use PM2 para gerenciamento de processos
3. Configure Nginx como proxy reverso
4. Implemente certificado SSL/HTTPS

### Deploy com Mau (Plataforma oficial NestJS)
```bash
npm install -g @nestjs/mau
mau deploy
```

## 🛣️ Roadmap Futuro

- [ ] Sistema de avaliações e comentários
- [ ] Integração com gateway de pagamento
- [ ] Sistema de cupons e promoções
- [ ] Rastreamento de entregas em tempo real
- [ ] Calculadora nutricional
- [ ] Recomendações personalizadas baseadas em preferências

## 📚 Recursos Adicionais

- [Documentação NestJS](https://docs.nestjs.com)

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir novas funcionalidades
- Enviar pull requests
- Melhorar a documentação

## 📄 Licença

Este projeto está sob a licença MIT.

<p align="center">
  Desenvolvido com ❤️ e 🥗 usando NestJS
</p>
