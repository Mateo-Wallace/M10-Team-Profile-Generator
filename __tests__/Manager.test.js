const Manager = require("../lib/Manager");

describe("Manager", () => {
    it("Can set Office via constructor arguments", () => {
        const office = 5;
        const e = new Manager('Name', 1, 'test@test.com', office);
        expect(e.office).toBe(office);
    });

    it("Can set name via constructor arguments. Super calls Employee.", () => {
        const name = "Mateo-Wallace";
        const e = new Manager(name);
        expect(e.name).toBe(name);
    });

    describe("getOffice", () => {
        it("Can get Office via getOffice()", () => {
            const office = 5;
            const e = new Manager('Name', 1, 'test@test.com', office);
            expect(e.getOffice()).toBe(office);
        });
    });

    describe("getRole", () => {
        it("getRole() should return \"Manager\"", () => {
            const role = "Manager";
            const e = new Manager();
            expect(e.getRole()).toBe(role);
        });
    });

});