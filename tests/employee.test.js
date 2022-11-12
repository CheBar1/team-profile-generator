// using Employee constructor
const Employee = require('../lib/employee.js');

// creates an employee object
test('creates an employee object', () => {
    const employee = new Employee('Ben', 123, 'ben@gmail.com');

    expect(employee.name).toEqual('Ben');
    expect(employee.id).toEqual(123);
    expect(employee.email).toEqual('ben@gmail.com');
})

test('get the employee role', () => {
    const employee = new Employee('Ben', 123, 'ben@gmail.com');
    expect(employee.getRole()).toBe('Employee');
})

 
