//lib here
const Engineer = require("../lib/Engineer")

//Nicolas Ovalles - Nick - nick@tacos.com
//Golda Dopp - Golda - golda@tacos.com
//name, ID, email, getName, getId, getEmail, getRole
//officeNumber
//school, getSchool, 
//overriden to return - manager, engineer, intern (getrole func)

test('Create GitHub account', () => {
    const testValue = "GitHubUser";
    const member = new Engineer("Golda Dopp", 1, "golda@tacos.com", testValue);
    expect(member.github).toBe(testValue);
});

//getRole

test("getRole() to return \"Engineer\"", () => {
    const testValue = "Engineer";
    const member = new Engineer("Golda", 1, "golda@tacos.com", "GitHubUser");
    expect(member.getRole()).toBe(testValue);
});

test("getGithub() to return GitHub username", () => {
    const testValue = "GitHubUser";
    const member = new Engineer("Golda", 1, "golda@tacos.com", testValue);
    expect(member.getGithub()).toBe(testValue);
});