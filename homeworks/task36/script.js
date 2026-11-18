class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }

  getFullName() {
    return `Полное имя сотрудника: ${this.surname} ${this.name}`;
  }

  getSalary(){
    return `Зарплата сотрудника: ${this.rate * this.days}`;
  }
}

class Boss extends Worker {
  constructor(name, surname, rate, days, workers) {
    super(name, surname, rate, days);
    this.workers = workers;
  }

  getSalary(){
    return `Зарплата сотрудника: ${this.rate * this.days * this.workers}`;
  }
}

// const ivan = new Worker("Иван", "Иванов", 10, 12);
// ivan.getFullName();
// ivan.getSalary();

const boss = new Boss("Иван", "Иванов", 10, 31, 10);
console.log(boss.name);
console.log(boss.surname);
console.log(boss.getFullName());
console.log(boss.rate);
console.log(boss.days);
console.log(boss.workers);
console.log(boss.getSalary());