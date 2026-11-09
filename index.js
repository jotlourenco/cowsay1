// Exemplo com o pacote cowsay
const cowsay = require('cowsay');

// 1. A vaquinha clássica falando
console.log(cowsay.say({ text: 'Olá, turma! Hoje aprendemos npm!' }));

// 2. Vaquinha pensando (balão de pensamento)
console.log(cowsay.think({ text: 'Será que o dayjs já instalou?' }));

// 3. Mudando os olhos
console.log(cowsay.say({ text: 'Estou com sono...', e: '--' }));

// 4. Outros personagens, não só vacas
console.log(cowsay.say({ text: 'Pacotes são demais!', f: 'dragon' }));

// 5. Uma mensagem diferente a cada execução
const frases = [
  'Não reinvente a roda!',
  'Um comando e pronto!',
  'Leia o package.json!',
  'Cuidado com nomes parecidos!',
];
const sorteada = frases[Math.floor(Math.random() * frases.length)];
console.log(cowsay.say({ text: sorteada }));