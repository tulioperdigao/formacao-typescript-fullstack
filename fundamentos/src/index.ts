// Sistema Bancário Simples

// name, accountNumber -> Atributos
// depositar, sacar -> Métodos
import { CompanyAccount } from './class/CompanyAccount';
import {PeopleAccount} from './class/PeopleAccount';


// const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Tulio', 10);
// console.log(peopleAccount);
// peopleAccount.deposit();

const companyAccount: CompanyAccount = new CompanyAccount("Tulio's Company", 11);
// companyAccount.deposit();
console.log(companyAccount);