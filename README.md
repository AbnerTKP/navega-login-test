
# 🔐 Projeto de Qualidade – Testes de Login com Cypress

Este projeto demonstra a aplicação de práticas modernas de garantia da qualidade (QA) sobre a funcionalidade de login de uma aplicação web. Toda a estrutura foi pensada para refletir a rotina de QA em um time ágil, desde a modelagem de cenários em BDD até a automação com Cypress, análise de bugs e proposta de melhoria.

---

## ✅ Funcionalidade Validada

- [x] Fluxo de login com credenciais válidas
- [x] Comportamentos esperados com entradas inválidas
- [x] Verificação de mensagens de erro
- [x] Teste visual de responsividade

---

## 🧩 Tecnologias e Estratégia

- **Cypress + JavaScript** para testes E2E
- **Padrão BDD (Gherkin)** para os cenários de teste
- **Page Object Model (POM)** para organização dos scripts
- Organização modular para facilitar leitura, manutenção e escalabilidade
- Validação com base em comportamento do usuário final

---

## 🗂 Estrutura do Projeto

```
qa-engineer-test/
├── bugs/                  # Relatório de bug documentado com evidência
├── improvements/          # Sugestão de melhoria com justificativa técnica
├── test-cases/            # Casos de teste escritos no padrão BDD
├── cypress/
│   ├── e2e/               # Testes Cypress (login.cy.js)
│   ├── page-objects/      # Page Object (loginPage.js)
│   ├── support/           # Custom commands (se necessário)
│   └── screenshots/       # Evidências de execução e falhas
├── cypress.config.js      # Configuração do Cypress
├── package.json           # Dependências e scripts
└── README.md              # Este arquivo
```

---

## 🚀 Como Executar o Projeto

### ✅ Pré-requisitos

#### 📦 Node.js 18+ (LTS recomendado)

- **Windows/macOS/Linux (via terminal):**

```bash
# macOS (Homebrew)
brew install node

# Linux (Debian/Ubuntu)
sudo apt update
sudo apt install nodejs npm

# Windows
choco install nodejs-lts
```

#### 🔧 Git

```bash
# macOS (Homebrew)
brew install git

# Linux (Debian/Ubuntu)
sudo apt update
sudo apt install git

# Windows
choco install git
```

> Recomendado usar gerenciadores como [Homebrew](https://brew.sh) no macOS ou [Chocolatey](https://chocolatey.org) no Windows.

---

### 🧰 Passo a Passo de Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/qa-engineer-test.git
```

2. **Instale as dependências**
```bash
npm install
```

> O Cypress será instalado automaticamente na versão `14.5.1` conforme declarado no `package.json`.

---

### ▶️ Como Rodar os Testes

#### Modo Interativo (Cypress UI)
```bash
npx cypress open
```

#### Modo Headless (execução via terminal)
```bash
npx cypress run
```

---

### 📦 Dependências principais

```json
"devDependencies": {
  "cypress": "^14.5.1"
}
```

---

## 📋 Casos de Teste (BDD)

Todos os cenários estão documentados utilizando a estrutura **Gherkin**, organizados por:

- Funcionalidade: Login
- Comportamentos esperados e limites (positivos e negativos)
- Validações visuais e lógicas

📄 Ver: `/test-cases/template.md`

---

## 🧪 Automação

A automação cobre o fluxo de login com validações de:

- Redirecionamento após login bem-sucedido
- Exibição de mensagens de erro
- Tratamento de campos obrigatórios

📄 Script: `/cypress/e2e/login.cy.js`  
📄 Elementos: `/cypress/page-objects/loginPage.js`

---

## 🐞 Bug Reportado

> **Título:** Campo de e-mail permite espaços em branco antes/depois  
> **Impacto:** Permite entrada inválida sem aviso, pode afetar autenticação e rastreabilidade de dados.

📁 Detalhes: `/bugs/template.md`  
📸 Evidência: `bug-espaco-email.png`

---

## 💡 Melhoria Proposta

> **Título:** Modal de login desalinhado em dispositivos móveis com telas pequenas (ex: iPhone SE)  
> **Impacto:** Layout compromete a experiência mobile; logomarca sobrepõe conteúdo.

📁 Detalhes: `/improvements/template.md`  
📸 Evidência: `login-modal-responsividade.png`

---

## 📈 Conclusão

Este projeto visa demonstrar uma abordagem completa de QA sobre uma funcionalidade crítica, aplicando:

- Análise de risco e priorização
- Escrita de cenários em BDD
- Automação com boas práticas de código
- Relato claro de defeitos
- Proposta de melhoria com foco em experiência do usuário

---

## 🙋‍♂️ Autor

**Abner Souza**  
QA  
[LinkedIn](https://linkedin.com/in/abner-souza)
