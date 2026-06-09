\# 🧠 PROMPT FINAL (VERSÃO 3.0) — CONTROLE FINANCEIRO PWA (ANGULAR + SUPABASE)



Você é um arquiteto de software sênior responsável por gerar uma aplicação completa de controle financeiro pessoal, moderna, escalável e com experiência de aplicativo mobile (PWA).



O objetivo é criar um sistema estilo fintech (tipo Nubank simplificado), com foco em organização financeira, inteligência de gastos e experiência mobile-first.



\---



\# 🚀 STACK OBRIGATÓRIA



\- Angular (última versão estável)

\- TypeScript

\- Angular Material

\- Angular PWA (@angular/pwa)

\- RxJS

\- Chart.js

\- Supabase (Auth + PostgreSQL + API + RLS)



\---



\# 📱 OBJETIVO DO SISTEMA



Criar um Progressive Web App (PWA) de controle financeiro pessoal com:



\- aparência de aplicativo mobile

\- instalação no celular

\- funcionamento offline parcial

\- sincronização com backend (Supabase)

\- experiência fluida e moderna



\---



\# 👥 USUÁRIOS



\## Tipos:

\- Administrador

\- Usuário comum



\## Regras:

\- Usuário comum acessa apenas seus próprios dados

\- Administrador pode visualizar todos os usuários e dados (modo leitura geral)



\---



\# 🔐 AUTENTICAÇÃO (MULTI-DISPOSITIVO)



Usar Supabase Auth com suporte a:



\- login

\- cadastro

\- logout

\- persistência de sessão

\- autenticação em múltiplos dispositivos

\- lista de sessões ativas por usuário

\- opção de logout em todos os dispositivos



\---



\# 💰 FUNCIONALIDADES CORE



\## 1. Gastos (CRUD completo)



Permitir:

\- criar gasto

\- editar gasto

\- excluir gasto

\- listar gastos por mês



Campos:

\- descrição

\- valor

\- data

\- categoria

\- observação (opcional)

\- tipo (fixo, parcelado, recorrente)



\---



\## 2. Receitas (NOVO OBRIGATÓRIO)



Permitir controle de entradas financeiras.



Campos:

\- descrição

\- valor

\- data

\- tipo (salário, extra, freelance, investimento, outros)



Dashboard deve calcular:

\- total receitas

\- total despesas

\- saldo final



\---



\## 3. Categorias



Categorias padrão:



\- Farmácia

\- Mercado

\- Casa

\- Boletos

\- Compras parceladas

\- Presentes

\- Transporte

\- Alimentação

\- Lazer

\- Saúde

\- Outros



Usuário pode criar categorias personalizadas.



\---



\## 4. Organização por mês



\- todos os dados devem ser organizados por mês e ano

\- navegação entre meses

\- mês atual como tela principal

\- histórico completo de meses anteriores



\---



\## 5. Orçamento mensal



\- usuário define orçamento por mês

\- sistema calcula:

&#x20; - total gasto

&#x20; - percentual utilizado

&#x20; - saldo restante

&#x20; - alerta de estouro



\---



\## 6. Metas financeiras



Tipos:

\- mensal

\- anual



Campos:

\- nome

\- valor limite

\- tipo



Regras de status:



\- 0% a 79% → verde

\- 80% a 99% → amarelo

\- 100% → vermelho

\- acima de 100% → vermelho com alerta de ultrapassagem



\---



\## 7. Gastos recorrentes (NOVO)



Permitir criar gastos automáticos:



Tipos:

\- mensal

\- trimestral

\- semestral

\- anual



Exemplos:

\- aluguel

\- internet

\- assinatura



Sistema deve gerar lançamentos automaticamente.



\---



\## 8. Parcelamentos automáticos (NOVO IMPORTANTE)



Quando um gasto for parcelado:



Exemplo:

\- R$ 1200 em 12x



Sistema deve gerar automaticamente 12 registros mensais vinculados.



Campos:

\- total parcelas

\- parcela atual

\- grupo de parcelamento



\---



\# 📊 DASHBOARD



\## Cards principais:

\- total receitas

\- total despesas

\- saldo atual

\- orçamento utilizado

\- quantidade de transações



\---



\## Gráficos obrigatórios:



\- pizza: gastos por categoria

\- barras: últimos 6 meses (despesas)

\- linha: evolução financeira (receitas vs despesas)



\---



\## Indicadores:

\- saúde financeira geral

\- metas atingidas

\- alertas de orçamento



\---



\# 🧠 INTELIGÊNCIA FINANCEIRA (VERSÃO 3.0)



\## 1. Insights automáticos



O sistema deve analisar dados e gerar insights como:



\- “Seu gasto com mercado aumentou 18%”

\- “Categoria mais cara: Casa”

\- “Você está gastando acima da média dos últimos meses”



Usar:

\- médias

\- variação percentual

\- comparação mês a mês



\---



\## 2. Previsão de metas (IA simples)



O sistema deve prever comportamento futuro com base em histórico:



Exemplo:

\- Meta: R$ 2.000

\- Gasto atual: R$ 1.200

\- tendência crescente



Resultado:

> “Você deve ultrapassar a meta em 7 dias se continuar neste ritmo”



Usar:

\- média diária

\- projeção linear simples



\---



\## 3. Notificações PWA



Enviar alertas como app real:



\- orçamento em 80%

\- meta próxima do limite

\- resumo semanal disponível

\- gastos recorrentes do dia



\---



\# 📱 PÁGINAS OBRIGATÓRIAS



\## 1. Login

\- email

\- senha



\## 2. Cadastro

\- nome

\- email

\- senha



\## 3. Dashboard (Home)

\- boas-vindas com nome do usuário

\- resumo financeiro

\- gráficos



\## 4. Gastos

\- CRUD completo

\- filtros por mês e categoria



\## 5. Receitas

\- CRUD de entradas financeiras



\## 6. Metas

\- criação e monitoramento de metas



\## 7. Histórico

\- lista de meses anteriores

\- detalhamento mensal



\## 8. Configurações

\- tema (claro, escuro, sistema)

\- preferências do usuário



\---



\# 🧱 ARQUITETURA ANGULAR OBRIGATÓRIA



src/app/

&#x20; core/        (auth, guards, interceptors)

&#x20; shared/      (componentes reutilizáveis)

&#x20; features/

&#x20;   auth/

&#x20;   dashboard/

&#x20;   expenses/

&#x20;   income/

&#x20;   budget/

&#x20;   goals/

&#x20;   history/

&#x20;   settings/



\---



\# 🗄️ BANCO DE DADOS (SUPABASE)



Criar tabelas:



\- users (auth)

\- expenses

\- incomes

\- categories

\- budgets

\- goals

\- recurring\_expenses

\- installments

\- sessions (multi-device auth tracking)



Todas as tabelas devem usar user\_id e RLS (Row Level Security).



\---



\# 🔐 SEGURANÇA



\- RLS obrigatório no Supabase

\- cada usuário só acessa seus próprios dados

\- administrador com acesso global (somente leitura geral)



\---



\# 📱 EXPERIÊNCIA MOBILE (CRÍTICO)



O app deve parecer um aplicativo financeiro real:



\- layout mobile-first

\- bottom navigation

\- cards modernos

\- animações suaves

\- loading states

\- empty states

\- confirmações de ações

\- UX estilo fintech (Nubank-like)



\---



\# ⚙️ REQUISITOS TÉCNICOS



\- Angular standalone components

\- RxJS reativo

\- Services para Supabase

\- Guards de autenticação

\- environment configs

\- PWA configurado corretamente

\- Chart.js integrado

\- código limpo e modular



\---



\# 🚀 ENTREGÁVEL FINAL



Gerar:



1\. Projeto Angular completo estruturado

2\. Código de todas as páginas

3\. Serviços Supabase (auth + DB)

4\. Models TypeScript

5\. Guards e interceptors

6\. SQL completo do Supabase

7\. Configuração PWA funcional

8\. Instruções de deploy no GitHub Pages

9\. Guia de execução local



\---



\# 🎯 OBJETIVO FINAL



Criar um sistema:



\- estilo fintech moderno

\- altamente funcional

\- escalável

\- PWA instalável

\- pronto para portfólio profissional

\- comparável a apps reais de mercado (Nubank simplificado)

