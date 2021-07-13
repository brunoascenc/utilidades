interface UserInterface {
  name: string;
  age?: number;
  getMessage(): string;
}

const user: UserInterface = {
  name: 'Bruno',
  age: 22,
  getMessage() {
    return 'Hello' + name;
  },
};

const user2: UserInterface = {
  name: 'Brunow',
  getMessage() {
    return 'Hello' + name;
  },
};
