const functions = require('./Exercices_1-3');



describe('A função sum(a, b) retorna a soma do parâmetro a com o b', () => {
    it('Teste se o retorno de sum(4, 5) é 9', () => {
        expect(functions.sum(4, 5)).toBe(9)
    });
    it('Teste se o retorno de sum(0, 0) é 0', () => {
        expect(functions.sum(0, 0)).toBe(0);
    });
    it('Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)', () => {
        expect(() => functions.sum(4, '5')).toThrowError();
    });
    it('Teste se a mensagem de erro é parameters must be numbers', () => {
        expect(() => functions.sum(4, '5')).toThrowError('parameters must be numbers');
    });
});

describe('A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array', () => {
    it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
        expect(functions.myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });
    it('Verifique se a chamada myRemove([1, 2, 3, 4], 3)  não retorna [1, 2, 3, 4]', () => {
        expect(functions.myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });
    it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
        expect(functions.myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });        
});

describe('A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5 , retorna "fizz" se for divisível apenas por 3 , retorna "buzz" se divisível apenas por 5 , retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número', () => {
    it('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
        expect(functions.myFizzBuzz(15)).toBe('fizzbuzz');
    });
    it('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
        expect(functions.myFizzBuzz(9)).toBe('fizz');
    });
    it('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
        expect(functions.myFizzBuzz(10)).toBe('buzz');
    });
    it('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
        expect(functions.myFizzBuzz(7)).toBe(7);
    });
    it('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
        expect(functions.myFizzBuzz('7')).toBe(false);
    });        
});
