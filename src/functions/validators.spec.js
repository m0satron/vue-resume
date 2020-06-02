import { validateEmail, validatePhone } from "./validators.js";

describe("test suite for validators", () => {
  it("email: abcd@mail.com returns true", () => {
    const mail = "abcd@mail.com";
    const validator = validateEmail(mail);
    expect(validator).toBe(true);
  });
  it("email: abcd.abcd@mail.co.uk returns true", () => {
    const mail = "abcd.abcd@mail.co.uk";
    const validator = validateEmail(mail);
    expect(validator).toBe(true);
  });
  it("email: abcd.mail.com returns false", () => {
    const mail = "abcd.mail.com";
    const validator = validateEmail(mail);
    expect(validator).toBe(false);
  });
  it("email: abcd@mail returns false", () => {
    const mail = "abcd@mail";
    const validator = validateEmail(mail);
    expect(validator).toBe(false);
  });
  it("email: abcd returns false", () => {
    const mail = "abcd";
    const validator = validateEmail(mail);
    expect(validator).toBe(false);
  });
  it("email: *hello@mail.com returns false", () => {
    const mail = "*hello@mail.com";
    const validator = validateEmail(mail);
    expect(validator).toBe(false);
  });
  it("phone: 0707234567 returns true", () => {
    const phone = "0707234567";
    const validator = validatePhone(phone);
    expect(validator).toBe(true);
  });
  it("phone: 070723456 returns false", () => {
    const phone = "070723456";
    const validator = validatePhone(phone);
    expect(validator).toBe(false);
  });
  it("phone: 07072345678 returns false", () => {
    const phone = "07072345678";
    const validator = validatePhone(phone);
    expect(validator).toBe(false);
  });
});
