import { describe, expect, test } from "vitest";
import { isActivePath } from "../js/utils/userInterface.js";

describe("isActivePath", () => {
  test("isActivePath returns true when current path matches href exatcly", () => {
    expect(isActivePath("/home", "/home")).toBe(true);
  });

  test("isActivePath returns true for root path('/') when path is '/'' or '/index.html'", () => {
    expect(isActivePath("/", "/index.html")).toBe(true);
  });

  test("isActivePath returns true when current path includes href", () => {
    expect(isActivePath("/register", "/register")).toBe(true);
  });

  test("isActivePath returns false when paths dont match", () => {
    expect(isActivePath("/index.html", "/register")).toBe(false);
  });
});
