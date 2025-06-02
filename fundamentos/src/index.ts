// Sistema Bancário Simples

// name, accountNumber -> Atributos
// depositar, sacar -> Métodos

abstract class Account {
    // Atributos
    name: string;
    accountNumber: number;
    balance: number = 0;

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
    getBalance = () => {
        console.log(this.balance)
    }
}

class PeopleAccount extends Account{
    doc_id: number;

    constructor(doc_id: number, name: string, accountNumber: number) {
        super(name, accountNumber);
        this.doc_id = doc_id;
    }
}

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Tulio', 10);
console.log(peopleAccount);