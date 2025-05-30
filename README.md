# Avaliação Técnica em Engenharia de Qualidade

## Objetivo

Esta avaliação tem como objetivo medir as habilidades e conhecimentos do(a) candidato(a) à vaga no time de Engenharia de Qualidade, com foco em testes de caixa preta, criação de cenários de teste e automação em ambiente controlado.

Este desafio simula um ambiente real, mas com liberdade para que você demonstre suas decisões técnicas. Esperamos que você:

- Defina a prioridade dos cenários de teste com base na análise de risco.
- Escolha o nível ideal de profundidade para a automação, equilibrando cobertura e robustez.
- Documente bugs e propostas de melhoria com autonomia, como em um time de desenvolvimento real.

Não existe uma única “resposta certa” — o que queremos avaliar é seu raciocínio técnico e suas práticas profissionais.

## Contexto

Nosso time de engenharia precisa da criação de um plano de testes para validar as funcionalidades publicadas no ambiente de testes.

(O acesso será fornecido com um usuário, e a senha temporária será enviada para o e-mail informado pelo participante do processo.)

Funcionalidade disponível para teste:

- Login

## Perguntas e Tarefas

### 1. Teste de Caixa Preta

- Elabore **cenários de teste** de caixa preta, considerando diferentes tipos de entrada e resultados esperados.
- Documente os casos de teste em **formato estruturado**, podendo ser:
    - **Tabela ou ferramenta de gerenciamento de testes**, contendo:
        - ID do teste
        - Pré-condições
        - Passos
        - Resultado esperado
        - Resultado obtido
        - BDD (Behavior Driven Development), utilizando a estrutura:
            - **Dado que...**
            - **Quando...**
            - **Então...**

### 2. Automação de Testes

Utilize **exclusivamente Cypress com JavaScript** para automatizar os cenários de teste elaborados na tarefa anterior.

A automação deve contemplar obrigatoriamente:

- Configuração do ambiente de testes
- Navegação até a funcionalidade testada
- Execução completa das ações previstas nos cenários
- Verificação dos resultados esperados com assertivas claras
- Aplicação de boas práticas de automação (organização, reutilização, comandos customizados quando fizer sentido)

Você pode utilizar inteligência artificial para apoiar a escrita do código, desde que o resultado final esteja funcional, limpo e faça sentido dentro do fluxo da aplicação.

---

### 3. Abertura de Bug

Durante a execução de um dos seus testes, simule a ocorrência de um defeito no sistema.

Preencha o **template de bug report** disponibilizado no repositório do GitHub, como se fosse registrar esse erro em uma ferramenta de gerenciamento de defeitos (ex: Jira, Azure DevOps, Trello).

Descreva o problema de forma **clara, objetiva e técnica**, com todas as informações necessárias para que o time de engenharia consiga **reproduzir e corrigir** o bug com agilidade.

**Importante:** O template de bug já está incluído no repositório desta avaliação. Basta duplicar e preencher com o cenário simulado.

---

### 4. Proposta de Melhoria

Durante a execução dos testes, você deverá identificar **pelo menos uma oportunidade de melhoria** no sistema testado.

Essa melhoria pode estar relacionada a:

- Usabilidade (UX/UI)
- Eficiência e tempo de execução
- Confiabilidade
- Segurança
- Acessibilidade
- Clareza das mensagens
- Validações ou fluxo de navegação
- Ou qualquer outro ponto que agregue valor ao produto e à experiência do usuário.

> Utilize o template de sugestão de melhoria fornecido no repositório do GitHub para documentar essa proposta.
> 

A sugestão deve ser descrita de forma **clara, objetiva e com justificativa técnica**, para que o time de engenharia e produto possa avaliar e aplicar com eficiência.

---

## Instruções de Entrega

Clone o repositório **qa-engineer-test**, que contém a estrutura base para a realização da avaliação técnica. Essa estrutura contempla todos os artefatos necessários para a entrega: automação de testes, templates para registro de bugs, propostas de melhoria e documentação dos casos de teste.

```
/Automacao
   /cypress
       /e2e               # Scripts de testes automatizados (end-to-end) em Cypress
       /fixtures          # Dados de teste utilizados nos scripts
       /support           # Comandos customizados e configurações auxiliares do Cypress
   cypress.config.js      # Arquivo de configuração do Cypress
   package.json           # Gerenciamento de dependências e scripts de execução
   README.md              # Instruções específicas relacionadas à automação

/Bug
   template.md            # Template padrão para registro de bugs

/Melhoria
   template.md            # Template para sugestão de melhorias no sistema

/CasosDeTeste
   template.md            # Template para documentação dos casos de teste

README.md                 # Arquivo principal com instruções gerais sobre o projeto

```

### Requisitos para entrega:

1. Crie um repositório **público** no seu GitHub contendo todos os arquivos e scripts desenvolvidos durante a avaliação.
2. Inclua um `README.md` com **instruções claras e objetivas sobre como executar o projeto**.
3. O prazo para entrega é de **3 dias corridos** a partir do recebimento desta avaliação.

> Caso não consiga concluir todas as etapas dentro do prazo, envie o que tiver finalizado até então — seu progresso será considerado na avaliação.

---

## Regras Gerais da Avaliação Técnica

A seguir, estão listadas as regras obrigatórias para a entrega e execução da atividade. **O não cumprimento de qualquer uma das exigências poderá resultar na desclassificação imediata do(a) candidato(a).**

1. **É expressamente proibido realizar fork do repositório disponibilizado.**
    
    O repositório deve ser clonado diretamente, conforme instruções fornecidas.
    
2. **O não cumprimento do prazo de entrega implicará na desclassificação.**
    
    A data limite de submissão deve ser rigorosamente respeitada.
    
3. **Todos os artefatos devem seguir as especificações e padrões definidos.**
    
    Exemplos de não conformidade:
    
    - Ausência de `README.md`
    - Arquivos nomeados fora do padrão estabelecido
    - Estrutura de pastas divergente das orientações
  
4. **Automação entregue deve estar funcional.**
    
    O projeto deve ser capaz de rodar integralmente sem erros de configuração, dependências ou execução.
    
5. **O repositório deve ser entregue conforme orientações.**
    
    A não submissão ou envio incorreto será considerado como não entrega.
    
6. **A entrega deve utilizar os templates oficiais disponibilizados.**
    
    Arquivos de casos de teste, bugs e propostas de melhoria devem seguir o formato indicado.
    
7. **A não entrega dos artefatos obrigatórios invalida a avaliação.**
    
    Devem ser entregues, no mínimo:
    
    - Casos de Teste
    - Relatório de Bug
    - Proposta de Melhoria

8. **A ausência de evidências que comprovem a execução dos testes, ou outras inconsistências relevantes, poderá resultar em desclassificação.**

---

**Boa sorte!**
