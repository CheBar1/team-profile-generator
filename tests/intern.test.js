// using Intern constructor
const Intern = require('../lib/intern.js');

// creates an object
test('creates an intern object', () => {
    const intern = new Intern('Sam', 456, 'sam@gmail.com','AdelaideUni');
    expect(intern.name).toEqual('Sam');
    expect(intern.id).toEqual(456);
    expect(intern.email).toEqual('sam@gmail.com');
})

test('get intern school', () => {
    const intern = new Intern('Sam', 456, 'sam@gmail.com','AdelaideUni');
    expect(intern.getSchool()).toBe(`AdelaideUni`)
})

test('get intern role', () => {
    const intern = new Intern('Sam', 456, 'sam@gmail.com','AdelaideUni');
    expect(intern.getRole()).toBe('Intern')
})