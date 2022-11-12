// using Manager constructor
const Manager = require('../lib/manager.js');

// creates manager object
test('creates an manager object', () => {
    const manager = new Manager('Amy', 654, 'amy@gmail.com','08 8356 5210');
    expect(manager.name).toEqual('Amy');
    expect(manager.id).toEqual(654);
    expect(manager.email).toEqual('amy@gmail.com');
})

test('get manager office number', () => {
    const manager = new Manager('Amy', 654, 'amy@gmail.com','08 8356 5210');
    expect(manager.getOfficeNumber()).toBe('08 8356 5210')
})

test('get manager role', () => {
    const manager = new Manager('Amy', 654, 'amy@gmail.com','08 8356 5210');
    expect(manager.getRole()).toBe('Manager')
})
