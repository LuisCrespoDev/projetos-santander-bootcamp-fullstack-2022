
enum Trabalho {
    Atriz,
    Padeiro
}

type Humano = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

let p1: Humano = {
    nome: 'maria',
    idade: 29,
    profissao: Trabalho.Atriz
};

let p2: Humano = {
    nome: 'roberto',
    idade: 19,
    profissao: Trabalho.Padeiro
};

let p3: Humano = {
    nome: 'laura',
    idade: 32,
    profissao: Trabalho.Atriz
};

let p4: Humano = {
    nome: "carlos",
    idade: 19,
    profissao: Trabalho.Padeiro
}