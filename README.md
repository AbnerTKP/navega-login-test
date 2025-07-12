
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

## 🔐 Uso de Variáveis de Ambiente

Para garantir a segurança e organização dos testes automatizados, este projeto utiliza o arquivo `cypress.env.json` para armazenar dados sensíveis, como e-mails e senhas utilizados nos testes. Essa prática evita o hardcode de credenciais diretamente nos testes e facilita a manutenção dos dados de teste.

### 🧪 Exemplo de estrutura (não contém dados reais):

```json
{
  "validEmail": "seu-email@dominio.com",
  "validPassword": "suaSenhaSegura!",
  "invalidEmail": "email-invalido@teste.com",
  "invalidPassword": "senhaErrada",
  "uppercaseEmail": "SEU-EMAIL@DOMINIO.COM",
  "uppercasePassword": "SenhaComLetrasMaiusculas!",
  "specialPassword": "Senha@#*123"
}
```

### ⚠️ Importante: não versionar esse arquivo no repositório público. O mesmo já está incluído no .gitignore para evitar o upload acidental ao GitHub.

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

📄 Ver: `/test-cases/testcases.md`

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

📁 Detalhes: `/bugs/bug-report.md`  
📸 Evidência: `bug-espaco-email.png`

---

## 💡 Melhoria Proposta

> **Título:** Falta de feedback visual ao tentar fazer login  
> **Impacto:** Usuário não tem indicação de carregamento; pode achar que o clique falhou e repetir a ação. Prejudica a experiência, gera retrabalho no backend e passa sensação de sistema travado.

📄 **Detalhes:** `/improvements/improvement.md`  
🖼️ **Evidência:** `login-modal-carregamento.png`

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
