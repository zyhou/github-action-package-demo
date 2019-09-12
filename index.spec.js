const sayHello = require("./index");

describe("sayHello", () => {
  it("should return the right hello", () => {
    const consoleSpy = jest.spyOn(global.console, "log");
    sayHello();

    expect(consoleSpy).toHaveBeenCalledWith(
      "Hello from Github package repository"
    );
  });
});
