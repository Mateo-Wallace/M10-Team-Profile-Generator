const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it("Can set GitHub via constructor arguments", () => {
        const gitHub = "Mateo-Wallace";
        const e = new Engineer('Name', 1, 'test@test.com', gitHub);
        expect(e.gitHub).toBe(gitHub);
    });

    it("Can set name via constructor arguments. Super calls Employee.", () => {
        const name = "Mateo-Wallace";
        const e = new Engineer(name);
        expect(e.name).toBe(name);
    });

    describe("getGitHub", () => {
        it("Can get GitHub via getGitHub()", () => {
            const gitHub = "Mateo-Wallace";
            const e = new Engineer('Name', 1, 'test@test.com', gitHub);
            expect(e.getGitHub()).toBe(gitHub);
        });
    });

    describe("getRole", () => {
        it("getRole() should return \"Engineer\"", () => {
            const role = "Engineer";
            const e = new Engineer();
            expect(e.getRole()).toBe(role);
        });
    });

});