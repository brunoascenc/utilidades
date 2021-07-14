const addId = <T extends object>(obj: T) => {
  const id = Math.random().toString(16);
  return {
    ...obj,
    id,
  };
};

interface UserInterface<T, V> {
  name: string;
  data: T;
  meta: V;
}

const user: UserInterface<{ meta: string }, string> = {
  name: 'Jack',
  data: {
    meta: 'foo',
  },
  meta: 'cool',
};

const user2: UserInterface<string[]> = {
  name: 'John',
  data: ['a', 'b', 'c'],
  meta: 'cool',
};

const result = addId<UserInterface>(user, user2);
console.log('result', result);
