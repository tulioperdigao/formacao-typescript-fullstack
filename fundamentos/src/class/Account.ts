export abstract class Account {
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
    deposit = (): void => {
        console.log('Você depositou!');
    }
    withdraw = (): void => {
        console.log('Você sacou!')
    }
    getBalance = (): void => {
        console.log(this.balance)
    }
}