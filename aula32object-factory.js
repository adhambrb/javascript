function  criapessoa(nome, sobrenome, idade){
    return {nome, sobrenome,idade };
};
const pessoa1 = criapessoa ('luiz','otavio',25);
const pessoa2 = criapessoa ('adham','branco',21);
const pessoa3 = criapessoa ('rafael','junior',5);
console.log(pessoa1.nome,pessoa1.sobrenome);
