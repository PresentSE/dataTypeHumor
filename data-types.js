//Задание 1
const answer = 42;
const mainQuestion = 'Главный вопрос жизни, вселенной и всего такого:';
const rly = true;
const hz = undefined;
const oO = null;
const sumUp = {
    mainQuestion: 'Главный вопрос жизни, вселенной и всего такого:',
    answer: 42,
    rly: true,
};
const id = Symbol('42');
const bint = 42n;

console.log('Что узнать?', mainQuestion, typeof mainQuestion);
console.log('Приходите через 7,5 млн лет, пока ответ', hz, typeof hz);
console.log('Спустя 7,5 млн лет ответ', answer, typeof answer);
console.log('Уверены?', rly, typeof rly);
console.log('о.О О.о', oO, typeof oO, 'Да, null это объект, уже все привыкли.');
console.log('Получается', sumUp, typeof sumUp);
console.log('Ответ уникален, запомним', id, typeof id);
console.log('На случай если в какой-то вселенной 42>±(2^53-1)', bint, typeof bint);