interface Pessoa {
    nome: string,
    idade: number,
    profissao?: string
}

const pessoa: Pessoa = {
    nome: 'tugão',
    idade: 21
}

const pessoa2: Pessoa = {
    nome: 'Kaio',
    idade: 31,
    profissao: 'QA'
}

const arrayPessoa: Array<Pessoa> = [
    pessoa,
    pessoa2,
]

const arrayNum: number[] = [
    1, 2, 3, 4
]