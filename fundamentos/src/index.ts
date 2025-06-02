// Sistema Bancário Simples

// name, accountNumber -> Atributos
// depositar, sacar -> Métodos

class Account {
    // Atributos
    name: string;
    accountNumber: number;

    // Construtor
    constructor(name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
    }

    // Métodos
    deposit = () => {
        console.log('Você depositou!');
    }
    withdraw = () => {
        console.log('Você sacou!')
    }
}

const newAccount: Account = new Account('Tulio', 1);
console.log(newAccount);

const account: Account = new Account('Kaio', 1);
account.deposit();