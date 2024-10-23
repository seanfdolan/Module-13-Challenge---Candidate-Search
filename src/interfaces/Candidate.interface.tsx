// TODO: Create an interface for the Candidate objects returned by the API
interface Candidate {
    id: number;
    name: string;
    email: string;
    phone: string;
    experience: number;
    skills: string[];
}

const Candidate: Candidate = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '555-555-5555',
    experience: 5,
    skills: ['JavaScript', 'React', 'Node.js'],
};

console.log(Candidate);

type Candidate2 = {
    id: number;
    name: string;
    email: string;
    phone: string;
    experience: number;
    skills: string[];
};

const Candidate2: Candidate2 = {
    id: 2,
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    phone: '555-555-5555',
    experience: 5,
    skills: ['JavaScript', 'React', 'Node.js'],
};

console.log(Candidate2);

type Level = 'Junior' | 'Mid' | 'Senior';

const juniorLevel: Level = 'Junior';
console.log(juniorLevel);

type Description = string;
const description1 : Description = 'Description 1';
console.log(description1);

interface Description2 {
    text: string;
}

interface Person {
    firstName: string;
}

interface Person {
    lastName: string;
}

const person1: Person = {
    firstName: 'John',
    lastName: 'Doe',
};

console.log(person1);

interface Reportable {
    getDetails(): string;
    getSummary(): string;
}

class Company implements Reportable {
    private name: string;
    private numEmployees: number;

    constructor(
        name: string,
        numEmployees: number,
    ) {
        this.name = name;
        this.numEmployees = numEmployees;
    }

    getName(): string {
        return this.name;
    }

    getNumEmployees(): number {
        return this.numEmployees;
    }

    getDetails(): string {
        return '${this.name} has ${this.numEmployees} employees';
    }

    getSummary(): string {
        return 'This company ${this.name} has ${this.numEmployees} employees';
    }
}
