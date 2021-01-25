//lib here
const Intern = require("../lib/Intern");

//Nicolas Ovalles - Nick - nick@tacos.com
//Golda Dopp - Golda - golda@tacos.com
//name, ID, email, getName, getId, getEmail, getRole
//officeNumber
//school, getSchool, 
//overriden to return - manager, engineer, intern (getrole func)

test('Create school', () => {
    const testValue = "University of Utah";
    const member = new Intern("Nick", 1, "nick@tacos.com", testValue);
    expect(member.school).toBe(testValue);
});

test('getRole() to return \"Intern\"', () => {
    const testValue = "Intern";
    const member = new Intern("Nick", 1, "nick@tacos.com", "University of Utah");
    expect(member.getRole()).toBe(testValue);
});

test('getSchool()', () => {
    const testValue = "University of Utah";
    const member = new Intern("Nick", 1, "nick@tacos.com", testValue);
    expect(member.getSchool()).toBe(testValue);
});