describe("Hooking System", function() {
	it("is loaded properly", function() {
		const HookingSystem = require(__dirname + "/../src/hooking-system.js");
		const hookingSystem = new HookingSystem({});
		expect(typeof hookingSystem).toEqual("object");
		expect(typeof hookingSystem.Data).toEqual("function");
		expect(typeof hookingSystem.Hook).toEqual("function");
		expect(typeof hookingSystem.data).toEqual("object");
		expect(typeof hookingSystem.hooks).toEqual("object");
	});

});