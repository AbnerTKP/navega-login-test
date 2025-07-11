
# Template de Caso de Teste

Arquivo: `/test-cases/testcases.md`
 

### Padrão BDD

### BDD - TC-01 - Login com e-mail e senha válidos

Funcionalidade: Login

Cenário: Este caso de teste verifica o comportamento do sistema ao executar o cenário: Login com e-mail e senha válidos.
```
Given que o usuário está na tela de login
When ele preenche o campo de e-mail com um e-mail válido
And ele preenche o campo de senha com uma senha válida
And ele clica no botão 'Acessar'
Then o sistema deve redirecionar o usuário para a área logada
```


### BDD - TC-02 - Login com senha incorreta

Funcionalidade: Login

Cenário: Este caso de teste verifica o comportamento do sistema ao executar o cenário: Login com senha incorreta.
```
Given que o usuário está na tela de login
When ele preenche o campo de e-mail com um e-mail válido
And ele preenche o campo de senha com uma senha incorreta
And ele clica no botão 'Acessar'
Then o sistema deve exibir a mensagem 'Acesso negado. Verifique as credenciais.'
```


### BDD - TC-03 - Login com e-mail inexistente

Funcionalidade: Login

Cenário: Este caso de teste verifica o comportamento do sistema ao executar o cenário: Login com e-mail inexistente.
```
Given que o usuário está na tela de login
When ele preenche o campo de e-mail com um e-mail não cadastrado
And ele preenche o campo de senha com uma senha qualquer
And ele clica no botão 'Acessar'
Then o sistema deve exibir a mensagem 'Acesso negado. Verifique as credenciais.'
```


### BDD - TC-04 - Login com campos vazios

Funcionalidade: Login

Cenário: Este caso de teste verifica o comportamento do sistema ao executar o cenário: Login com campos vazios.
```
Given que o usuário está na tela de login
When ele deixa os campos de e-mail e senha em branco
And ele clica no botão 'Acessar'
Then o sistema deve exibir bordas vermelhas nos campos de login e senha
```


### BDD - TC-05 - Login com e-mail válido e senha vazia

Funcionalidade: Login

Cenário: Este caso de teste verifica o comportamento do sistema ao executar o cenário: Login com e-mail válido e senha vazia.
```
Given que o usuário está na tela de login
When ele insere Email
And nao insere senha
And ele clica no botão 'Acessar'
Then O campo de senha fica com as bordas vermelhas, nenhuma requisição é feita
```


### BDD - TC-06 - Login com e-mail vazio e senha preenchida

Funcionalidade: Login

Cenário: Este caso de teste verifica o comportamento do sistema ao executar o cenário: Login com e-mail vazio e senha preenchida.
```
Given que o usuário está na tela de login
When não insere email
And insere senha
And ele clica no botão 'Acessar'
Then O campo de email fica com as bordas vermelhas, nenhuma requisição é feita
```


### BDD - TC-07 - Login com e-mail com formato inválido

Funcionalidade: Login

Cenário: Este caso de teste verifica o comportamento do sistema ao executar o cenário: Login com e-mail com formato inválido.
```
Given que o usuário está na tela de login
When ele preenche o campo de e-mail com um formato inválido
And ele preenche o campo de senha com uma senha qualquer
And ele clica no botão 'Acessar'
Then Campo email fica com as bordas vermelhas, nenhuma requisição é feita
```


### BDD - TC-08 - Campo de senha oculta caracteres

Funcionalidade: Login

Cenário: Este caso de teste verifica o comportamento do sistema ao executar o cenário: Campo de senha oculta caracteres.
```
Given que o usuário está na tela de login
When ele preenche o campo de e-mail com um e-mail válido
And ele preenche o campo de senha com uma senha válida
Then o campo de senha oculta os caracteres digitados
```


### BDD - TC-09 - Link 'Esqueceu a senha?' funciona

Funcionalidade: Login

Cenário: Este caso de teste verifica o comportamento do sistema ao executar o cenário: Link 'Esqueceu a senha?' funciona.
```
Given que o usuário está na tela de login
When ele clica em 'Esqueceu sua senha?'
And ele é redirecionado para o link de esqueceu a senha
And ele preenche o e-mail da conta
And é enviado para ele uma nova senha
And ele retorna para a plataforma
And Tenta logar com a senha antiga
And Retorna erro de credenciais status 401
Then Ele loga normalmente com a nova senha enviada por email
```


### BDD - TC-10 - Mensagem de erro ao falhar login

Funcionalidade: Login

Cenário: Este caso de teste verifica o comportamento do sistema ao executar o cenário: Mensagem de erro ao falhar login.
```
Given que o usuário está na tela de login
When ele insere dados inválidos nos campos de login
And ele clica no botão 'Acessar'
Then o sistema deve exibir um toast de erro 'Ocorreu um erro. Tente novamente mais tarde'
```


### BDD - TC-11 - Mensagem de erro desaparece corretamente

Funcionalidade: Login

Cenário: Este caso de teste verifica o comportamento do sistema ao executar o cenário: Mensagem de erro desaparece corretamente.
```
Given que o usuário está na tela de login com o servidor fora
When ele preenche o campo de e-mail com um e-mail válido
And ele preenche o campo de senha com uma senha válida
And ele clica no botão 'Acessar'
And Toast de erro é exibido
Then Toast de erro some com animação
```


### BDD - TC-12 - Campos não limpam após falha

Funcionalidade: Login

Cenário: Este caso de teste verifica o comportamento do sistema ao executar o cenário: Campos não limpam após falha.
```
Given que o usuário está na tela de login
When ele insere dados inválidos nos campos de login
And ele clica no botão 'Acessar'
Then Os campos login e senha não limpam após toast de erro
```


### BDD - TC-13 - Injeção SQL no campo senha

Funcionalidade: Login

Cenário: Este caso de teste verifica o comportamento do sistema ao executar o cenário: Injeção SQL no campo senha.
```
Given que o usuário está na tela de login
When ele insere um e-mail válido
And insere um comando malicioso no campo de senha (ex: `' OR 1=1 --`)
And clica no botão 'Acessar'
Then o sistema deve exibir o toast de erro
And não deve autenticar o usuário
```


### BDD - TC-14 - Injeção XSS nos campos

Funcionalidade: Login

Cenário: Verificar se o sistema está protegido contra injeção XSS ao tentar inserir código JavaScript nos campos de entrada.
```
Given que o usuário está na tela de login
When ele insere uma string maliciosa no campo de e-mail ou senha (ex: <script>alert("XSS")</script>)
And clica no botão 'Acessar'
Then o sistema deve exibir uma mensagem de erro de login inválido
And não deve executar nenhum script inserido nos campos
```


### BDD - TC-15 - Login com e-mail maiúsculo

Funcionalidade: Login

Cenário: Este caso de teste verifica o comportamento do sistema ao executar o cenário: Login com e-mail maiúsculo.
```
Given que o usuário está na tela de login
When ele preenche o campo de e-mail com um e-mail válido em letra maíuscula
And ele preenche o campo de senha com uma senha válida
And ele clica no botão 'Acessar'
Then o sistema deve redirecionar o usuário para a área logada
```


### BDD - TC-16 - Tecla Enter aciona login

Funcionalidade: Login

Cenário: Este caso de teste verifica o comportamento do sistema ao executar o cenário: Tecla Enter aciona login.
```
Given que o usuário está na tela de login
When ele preenche o campo de e-mail com um e-mail válido
And ele preenche o campo de senha com uma senha válida
And e aperta a tecla 'enter' ou 'return' do teclado
Then o sistema deve redirecionar o usuário para a área logada
```


### BDD - TC-17 - Login offline

Funcionalidade: Login

Cenário: Este caso de teste verifica o comportamento do sistema ao executar o cenário: Login offline.
```
Given que o usuário está na tela de login
When ele insere dados inválidos nos campos de login
And ele clica no botão 'Acessar'
Then o sistema deve exibir um toast de erro 'Ocorreu um erro. Tente novamente mais tarde'
```


### BDD - TC-18 - Responsividade da tela

Funcionalidade: Login

Cenário: Este caso de teste verifica o comportamento do sistema ao executar o cenário: Responsividade da tela.
```
Given que o usuário está na tela de login com um celular
When ele preenche o campo de e-mail com um e-mail válido
And ele preenche o campo de senha com uma senha válida
And ele clica no botão 'Acessar'
Then o sistema deve redirecionar o usuário para a área logada sem problemas pelo mobile
```


### BDD - TC-19 - Feedback visual ao clicar em 'Acessar'

Funcionalidade: Login

Cenário: Este caso de teste verifica o comportamento do sistema ao executar o cenário: Feedback visual ao clicar em 'Acessar'.
```
Given que o usuário está na tela de login
When ele preenche o campo de e-mail com um e-mail válido
And ele preenche o campo de senha com uma senha válida
And ele clica no botão 'Acessar'
Then deve aparecer um loading indicando que a requisição foi feita
```


### BDD - TC-20  - E-mails com '+' ou '.' são aceitos

Funcionalidade: Login

Cenário: Este caso de teste verifica o comportamento do sistema ao executar o cenário: E-mails com '+' ou '.' são aceitos.
```
Given que o usuário está na tela de login
When ele preenche o campo de e-mail com um e-mail válido
And ele preenche o campo de senha com uma senha válida
And ele clica no botão 'Acessar'
Then o sistema deve redirecionar o usuário para a área logada
```


### BDD - TC-21 - Senha não aparece no localStorage

Funcionalidade: Login

Cenário: Este caso de teste verifica o comportamento do sistema ao executar o cenário: Senha não aparece no localStorage.
```
Given que o usuário está na tela de login
When ele preenche o campo de e-mail com um e-mail válido
And ele preenche o campo de senha com uma senha válida
And ele clica no botão 'Acessar'
Then o sistema deve redirecionar o usuário para a área logada
And o localStorage não deve conter a senha em texto claro
```
