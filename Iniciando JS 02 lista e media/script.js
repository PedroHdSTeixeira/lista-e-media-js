/*
Nesse desafio você irá criar uma lista de estudantes e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

nome;
nota da primeira prova;
nota da segunda prova.
Depois de criada a lista:
Crie uma função que irá calcular a média das notas de cada aluno;
Supondo que a média, para esse concurso é 7, verifique se cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

const infoStudents = [
    {
        name: "Pedro",
        nota1: 9,
        nota2: 8,
    },
    {
        name: "Laura",
        nota1: 7,
        nota2: 7,
    },
    {
        name: "Haru",
        nota1: 5,
        nota2: 4,
    },
]
    /*alert(infoStudents[0].name)*/


let average0 = (Number (infoStudents[0].nota1) + Number (infoStudents[0].nota2)) / 2
let average1 = (Number (infoStudents[1].nota1) + Number (infoStudents[1].nota2)) / 2
let average2 = (Number (infoStudents[2].nota1) + Number (infoStudents[2].nota2)) / 2


if (average0 < 7) {
    alert(`O aluno ${infoStudents[0].name} com a media ${average0} não foi aprovado! `)
}else{
    alert(`O aluno ${infoStudents[0].name} com a media ${average0} foi aprovado! 
    `)
}

if (average1 < 7) {
    alert(`A aluna ${infoStudents[1].name} com a media ${average1} não foi aprovado! `)
}else{
    alert(`A aluna ${infoStudents[1].name} com a media ${average1} foi aprovado! 
    `)
}

if (average2 < 7) {
    alert(`A aluna ${infoStudents[2].name} com a media ${average2} não foi aprovado! `)
}else{
    alert(`A aluna ${infoStudents[2].name} com a media ${average2} foi aprovado! 
    `)
}
