// Navbar scroll
const nav = document.getElementById('nav');
addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 30));

// Barras do mock (alturas variadas)
const heights = [40, 65, 50, 80, 60, 90, 70];
document.getElementById('mockBars').innerHTML = heights
  .map((h, i) => `<div class="bar" style="height:${h}%; animation-delay:${i * 80}ms"></div>`).join('');

// Features
const features = [
  { ico: '📊', t: 'Painel inteligente', d: 'Veja entradas, saídas e saldo num relance, com gráficos claros e em tempo real.' },
  { ico: '🏷️', t: 'Categorias automáticas', d: 'Suas despesas são organizadas sozinhas — moradia, lazer, alimentação e mais.' },
  { ico: '🎯', t: 'Metas de economia', d: 'Defina objetivos e acompanhe o progresso com alertas amigáveis.' },
  { ico: '🔔', t: 'Lembretes de contas', d: 'Nunca mais perca um vencimento. O Fluxo avisa antes de você esquecer.' },
  { ico: '🤖', t: 'Relatórios com IA', d: 'Receba insights personalizados sobre como gastar melhor o seu dinheiro.' },
  { ico: '🔒', t: 'Segurança total', d: 'Seus dados são criptografados de ponta a ponta. Privacidade em primeiro lugar.' },
];
document.getElementById('featGrid').innerHTML = features.map(f => `
  <article class="feat reveal">
    <div class="feat__ico">${f.ico}</div>
    <h3>${f.t}</h3><p>${f.d}</p>
  </article>`).join('');

// Steps
const steps = [
  { n: 1, t: 'Crie sua conta', d: 'Cadastro em menos de 1 minuto, sem cartão de crédito.' },
  { n: 2, t: 'Conecte seus gastos', d: 'Importe ou registre suas transações de forma simples.' },
  { n: 3, t: 'Assuma o controle', d: 'Acompanhe tudo no painel e economize de verdade.' },
];
document.getElementById('steps').innerHTML = steps.map(s => `
  <div class="step reveal">
    <div class="step__num">${s.n}</div>
    <h3>${s.t}</h3><p>${s.d}</p>
  </div>`).join('');

// Plans
const plans = [
  { name: 'Grátis', price: 'R$ 0', per: '/mês', pop: false,
    items: ['Até 30 transações/mês', 'Painel essencial', '1 meta de economia'], btn: 'Começar agora' },
  { name: 'Pro', price: 'R$ 19', per: '/mês', pop: true,
    items: ['Transações ilimitadas', 'Categorias automáticas', 'Metas ilimitadas', 'Relatórios com IA'], btn: 'Assinar o Pro' },
  { name: 'Família', price: 'R$ 39', per: '/mês', pop: false,
    items: ['Tudo do Pro', 'Até 5 perfis', 'Painel compartilhado', 'Suporte prioritário'], btn: 'Escolher Família' },
];
document.getElementById('plans').innerHTML = plans.map(p => `
  <div class="plan ${p.pop ? 'plan--pop' : ''} reveal">
    ${p.pop ? '<span class="plan__tag">Mais popular</span>' : ''}
    <div class="plan__name">${p.name}</div>
    <div class="plan__price">${p.price}<small>${p.per}</small></div>
    <ul>${p.items.map(i => `<li>${i}</li>`).join('')}</ul>
    <a href="#" class="btn ${p.pop ? 'btn--primary' : 'btn--ghost'} btn--lg">${p.btn}</a>
  </div>`).join('');

// Reveal
const io = new IntersectionObserver((es) => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
}), { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
