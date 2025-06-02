// this quando passado dentro de qualquer método da classe, dizemos que ele acesse aquele atributo dentro daquela classe.

class User {
    name: string = 'Tulio'
    age: number = 21

    // toda classe precisa do seu método construtor
    constructor(name:string, age:number){
        this.name = name,
        this.age = age
    }

    showName = () => {
        console.log(this.name)
    }
}

const user = new User('Tulio', 21);
user.showName();

const otherUser = new User('Kaio', 31);
user.showName();