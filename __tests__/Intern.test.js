const Intern = require("../lib/Intern");

describe("Intern", () => {
    it("Can set School via constructor arguments", () => {
        const school = "UCF";
        const e = new Intern('Name', 1, 'test@test.com', school);
        expect(e.school).toBe(school);
    });

    it("Can set name via constructor arguments. Super calls Employee.", () => {
        const name = "Mateo-Wallace";
        const e = new Intern(name);
        expect(e.name).toBe(name);
    });

    describe("getSchool", () => {
        it("Can get School via getSchool()", () => {
            const school = "UCF";
            const e = new Intern('Name', 1, 'test@test.com', school);
            expect(e.getSchool()).toBe(school);
        });
    });

    describe("getRole", () => {
        it("getRole() should return \"Intern\"", () => {
            const role = "Intern";
            const e = new Intern();
            expect(e.getRole()).toBe(role);
        });
    });

});