export type Gender = 'male' | 'female';

export type Person = {
    name: string;
    age: number;
    gender: Gender;
};

export type Employee = Person & {
    company: string;
};

type PersonInput =
    | { name: string; age: number; gender: Gender }
    | { name: string; age: number; gender: Gender; company: string };

export declare function getPersons(): Person[];

export declare function personToString(person: PersonInput): string;
