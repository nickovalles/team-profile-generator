const Manager = require("../lib/Manager");

//Nicolas Ovalles - Nick - nick@tacos.com
//Golda Dopp - Golda - golda@tacos.com
//name, ID, email, getName, getId, getEmail, getRole
//officeNumber
//school, getSchool, 
//overriden to return - manager, engineer, intern (getrole func)

test('Create office number', () => {
    const testValue = 422422422;
    const member = new Manager("Nick", 1, "nick@tacos.com", testValue);
    expect(member.officeNumber).toBe(testValue);
});

test('getRole() to return \"Manager\"', () => {
    const testValue = "Manager";
    const member = new Manager("Nick", 1, "nick@tacos.com", 422422422);
    expect(member.getRole()).toBe(testValue);
});

test('getOffice() to return office number', () => {
    const testValue = 422422422;
    const member = new Manager("Nick", 1, "nick@tacos.com", testValue);
    expect(member.getOfficeNumber()).toBe(testValue);
});