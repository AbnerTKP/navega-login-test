# Template de Melhoria

Arquivo: `/improvements/improvement.md`

**4. Proposta de Melhoria**

**Título:** Falta de feedback visual ao tentar fazer login

**Descrição:**

Atualmente, quando o usuário clica no botão 'Acessar' para fazer login, nada acontece visualmente na tela. Mesmo que a requisição esteja sendo processada em segundo plano, não há qualquer indicação de que o sistema está carregando ou tentando autenticar o usuário.

Isso pode gerar dúvida ou frustração, pois parece que o clique não funcionou — levando o usuário a clicar várias vezes ou achar que a aplicação travou.

**Justificativa Técnica:**

Incluir um indicador visual de carregamento (como um spinner, ícone animado ou botão desabilitado com texto "Carregando...") melhora muito a experiência do usuário. 

Além de aumentar a **clareza** da interação, evita **ações repetidas**, reduz **retrabalho no backend** e transmite mais **confiança e profissionalismo**.

**Sugestão:**

Adicionar um feedback visual no botão 'Acessar' sempre que uma requisição de login for enviada. Algumas opções:

- Mostrar um spinner no lugar do texto do botão
- Exibição de um toast com indicador de carregamento "Aguarde..." ou "Entrando..."

Assim o usuário saberá que sua ação foi registrada e que o sistema está trabalhando nisso.
