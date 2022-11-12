// using Engineer constructor
const Engineer = require('../lib/engineer.js');

// creates engineer object
test('creates an engineer object', () => {
    const engineer = new Engineer('Tom', 321, 'tom@gmail.com','gitUser');
    expect(engineer.name).toEqual('Tom');
    expect(engineer.id).toEqual(321);
    expect(engineer.email).toEqual('tom@gmail.com');
})

test('get engineer github', () => {
    const engineer = new Engineer('Tom', 321, 'tom@gmail.com','gitUser');
    expect(engineer.getGithub()).toBe(`https://github.com/${engineer.github}`)
})

test('get engineer role', () => {
    const engineer = new Engineer('Tom', 321, 'tom@gmail.com','gitUser');
    expect(engineer.getRole()).toBe('Engineer')
})

