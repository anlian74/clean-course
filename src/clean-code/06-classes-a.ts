(() => {

    type Gender = 'M' | 'F'

    class Person {
        // public name: string;
        // public gender: Gender;
        // public birthday: Date;

        // constructor(name: string, gender: Gender, birthday: Date) {
        //     this.name = name;
        //     this.birthday = birthday;
        // }
        // Las líneas de arriba se pueden reducir a lo sguiente:

        constructor(
            public name: string,
            public gender: Gender,
            public bithdate: Date
        ) { }
    }

    class User extends Person {
        public lastAccess: Date;

        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ) {
            super(name, gender, birthdate);
            this.lastAccess = new Date();
        }

        checkCredentials(): boolean {
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ) {
            super(email, role, name, gender, birthdate);
        }
    }

    const userSettings = new UserSettings(
        '/usr/home',
        '/home',
        'jasr74@gmail.com',
        'Admin',
        'Ángel',
        'M',
        new Date('1974-03-16')
    );
    console.log({ userSettings });
})();