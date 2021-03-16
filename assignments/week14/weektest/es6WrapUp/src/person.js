export default class Person {

  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  sayHello() {
    return `Hey ${this.name}, How are you doing?`;
  }
  
}