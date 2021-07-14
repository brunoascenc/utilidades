interface UserInterface {
  getFullName(): string;
}

class User implements UserInterface {
  firstName: string;
  lastName: string;
  readonly unchangebleName: string;
  static readonly maxAge = 50;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.unchangebleName = firstName;
  }

  changeUnchangebleName(): void {
    // this.unchangebleName = "foo"
  }

  getFullName(): string {
    return this.firstName + '' + this.lastName;
  }
}

class Admin extends User {
  //herança
  private editor: string;

  setEditor(editor: string): void {
    this.editor = editor;
  }

  getEditor(): string {
    return this.editor;
  }
}

const user = new User('Bruno', 'Ascenção');
console.log(user);

const admin = new Admin('Foo', 'Bar');
console.log(admin.firstName);
