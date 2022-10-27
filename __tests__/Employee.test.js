const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("Can set name via constructor arguments", () => {
        const name = "Mateo";
        const e = new Employee(name);
        expect(e.name).toBe(name);
    });

    it("Can set id via constructor argument", () => {
        const id = 100;
        const e = new Employee("Name", id);
        expect(e.id).toBe(id);
    });

    it("Can set email via constructor argument", () => {
        const email = "mateo.t.wallace@gmail.com";
        const e = new Employee("Name", 1, email);
        expect(e.email).toBe(email);
    });

    describe("getName", () => {
        it("Can get name via getName()", () => {
            const name = "Mateo";
            const e = new Employee(name);
            expect(e.getName()).toBe(name);
        });
    });

    describe("getId", () => {
        it("Can get id via getId()", () => {
            const id = 100;
            const e = new Employee("Foo", id);
            expect(e.getId()).toBe(id);
        });
    });

    describe("getEmail", () => {
        it("Can get email via getEmail()", () => {
            const email = "mateo.t.wallace@gmail.com";
            const e = new Employee("Foo", 1, email);
            expect(e.getEmail()).toBe(email);
        });
    });

    describe("getRole", () => {
        it("getRole() should return \"Employee\"", () => {
            const role = "Employee";
            const e = new Employee();
            expect(e.getRole()).toBe(role);
        });
    });

});