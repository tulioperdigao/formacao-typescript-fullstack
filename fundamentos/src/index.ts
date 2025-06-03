// Sistema Bancário Simples

// name, accountNumber -> Atributos
// depositar, sacar -> Métodos
import { CompanyAccount } from './class/CompanyAccount';
import {PeopleAccount} from './class/PeopleAccount';


const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Tulio', 10);
peopleAccount.deposit();