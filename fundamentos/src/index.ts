const num: number = 15;

if(num > 15) {
    console.log('Num é maior que 15.');
} else if(num === 15) {
    console.log('Num é 15.');
} else {
    console.log('Num é menor que 15.');
};

const typeUser = {
    admin: 'Seja bem-vindo admin.',
    student: 'Você é um estudante.',
    viewer: 'Você pode visualizar'
};

function validateUser(user: string) {
    console.log(typeUser[user as keyof typeof typeUser]);
};

const usuario = 'admin';

validateUser(usuario);
validateUser('student');
validateUser('viewer');