//input
//lib here

const Employee = require("../lib/Employee");


//Nicolas Ovalles - Nick - nick@tacos.com
//Golda Dopp - Golda - golda@tacos.com
//name, ID, email, getName, getId, getEmail, getRole
//officeNumber
//school, getSchool, 
//overriden to return - manager, engineer, intern (getrole func)

test('Create new employee instance', () => {
    const member = new Employee();
    //toBe
    expect(typeof(member)).toBe("object");
});

test('Create name of team member', () => {
    const name = "Nicolas Ovales";
    const member = new Employee(name);
    //toBe
    expect(member.name).toBe(name);
});

test('Create id of employee', () => {
    const testValue = 10;
    const member = new Employee("Golda Dopp", testValue);
    //toBe
    expect(member.id).toBe(testValue);
});

test('Create email of team member', () => {
    const testValue = "nick@tacos.com";
    const member = new Employee("Golda", 1, testValue);
    //toBe
    expect(member.email).toBe(testValue);
});

test('Create getName()', () => {
    const testValue = "Nicolas Ovalles";
    const member = new Employee(testValue);
    //toBe
    expect(member.getName()).toBe(testValue);
});

test('Create getId()', () => {
    const testValue = 10;
    const member = new Employee("Golda Dopp", testValue);
    //toBe
    expect(member.getId()).toBe(testValue);
});

test('Create getEmail()', () => {
    const testValue = "golda@tacos.com";
    const member = new Employee("Golda", 1, testValue);
    //toBe
    expect(member.getEmail()).toBe(testValue);
});

test('Create getRole()', () => {
    const testValue = "Employee";
    const member = new Employee("Nicolas Ovalles", 1, "nick@tacos.com");
    //toBe
    expect(member.getRole()).toBe(testValue);
});