const lista: Array<number> = [1, 2, 3, 4];

//const listaString: string[] = ['tulio', 'lady', 'bruna'];
//const buscaNum = lista.find(num =>num > 2);
//console.log(buscaNum);

// lista.forEach(num => {
//     if (num > 2) {
//         console.log(num);
//     }
// })

lista.map(num => {
    if (num > 2) {
        console.log(num);
    }
})