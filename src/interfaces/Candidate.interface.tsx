// TODO: Create an interface for the Candidate objects returned by the API
// export default interface Candidate {
//     avatar: string | null;
//     username: string | null;
//     location: string | null;
//     email: string | null;
//     company: string | null;
//     html_url: string | null;
// }


// TODO: Create an interface for the Candidate objects returned by the API
interface Candidate {
    name: string;
    username: string;
    location: string;
    avatar: string;
    email: string;
    html_url: string;
    company: string;
}

const candidate: Candidate = {
    name: 'John Doe',
    username: 'johndoe',
    location: 'New York, NY',
    avatar: 'https://avatars.githubusercontent.com/u/1?v=4',
    email: '',
    html_url: '',
    company: 'GitHub',
};

console.log(candidate);

type Candidate2 = {
    name: string;
    username: string;
    location: string;
    avatar: string;
    email: string;
    html_url: string;
    company: string;
}

const candidate2: Candidate2 = {
    name: 'Jane Doe',
    username: 'janedoe',
    location: 'Los Angeles, CA',
    avatar: 'https://avatars.githubusercontent.com/u/2?v=4',
    email: '',
    html_url: '',
    company: 'GitHub',
};

console.log(candidate2);

type Level = 'Junior' | 'Mid' | 'Senior';

const juniorLevel: Level = 'Junior';
console.log(juniorLevel);

// interface Employee {
//     candidate: Candidate;
// }

// const Candidate: React.FC<Employee> = ({ candidate }) => {
//     return (
//         <div className="candidate">
//             <img src={candidate.avatar} alt={candidate.name} />
//             <div className="candidate-info">
//                 <h2>{candidate.name}</h2>
//                 <p>{candidate.location}</p>
//                 <p>{candidate.company}</p>
//                 <a href={candidate.html_url}>{candidate.username}</a>
//                 <p>{candidate.email}</p>
//             </div>
//         </div>
//     );
// }

// export default Candidate;

type Description = string;
const description1: Description = 'Description one';
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

interface Reporrtable {
    getDetails: () => string;
    getSummary: () => string;
}

class Company implements Reporrtable {
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
        return `${this.name}, ${this.numEmployees}`;
    }

    getSummary(): string {
        return `Company: ${this.name} has ${this.numEmployees} employees`;
    }
}