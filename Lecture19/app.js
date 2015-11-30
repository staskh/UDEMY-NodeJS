var person = {
        firtsname: 'John',
        secondname: 'Doe',
        greet: function () {
                console.log('Hello '+ this.firtsname + ' ' + this.secondname)
        }
};

person.greet();

console.log(person['firtsname']+' ' + person['secondname']);
