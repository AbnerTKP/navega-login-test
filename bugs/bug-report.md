# Template de Bug

Arquivo: `/bugs/bug-report.md`

**Bug:** Campo de e-mail aceita espaços em branco no início e fim

**Descrição:**

O sistema permite que o usuário realize login mesmo quando o campo de e-mail contém espaços em branco antes ou depois do endereço. Isso pode causar inconsistências, falhas de autenticação ou problemas em logs.

**Cenário de Reprodução:**

1. Acesse a tela de login em https://qa.navega.com.vc/login  
2. No campo de e-mail, insira: `   usuario@email.com  `  
3. Insira a senha correta  
4. Clique no botão "Acessar"  
5. Observe que o login é realizado com sucesso

**Resultado Atual:**

O sistema realiza o login normalmente, ignorando os espaços em branco sem qualquer validação ou aviso ao usuário.

**Resultado Esperado:**

O sistema deveria:
- Remover automaticamente os espaços antes do envio, **ou**
- Exibir uma mensagem informando que o e-mail inserido é inválido

**Evidência:**

![Evidência](../cypress/screenshots/login.cy.js/bug-espaco-email.png)


**Hipótese Técnica:**

O campo de e-mail aparentemente não está sendo validado corretamente no client-side. Ao permitir o envio de valores com espaços em branco, o sistema ignora uma possível falha de entrada do usuário.


**Ambiente**:

https://qa.navega.com.vc/login

**Versão:**

v3.1.1 (ambiente de testes)

**Sistema Operacional:**

macOS Sonoma 14.4.1

**Navegador:**

Google Chrome 125.0.6422.60
