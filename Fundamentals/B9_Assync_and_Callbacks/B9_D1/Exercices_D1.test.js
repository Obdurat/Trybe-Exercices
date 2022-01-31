const exercice = require('./Exercices_D1');

test('verifique a chamada da callback de uma função uppercase.', (done) => {
    exercice.uppercase('aaa', (str) => {
        try {
            expect(str).toBe('AAA');
            done();
        } catch (error) {
            done(error);
        }
    });
});