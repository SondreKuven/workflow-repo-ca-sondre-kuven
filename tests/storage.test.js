// @vitest-environment jsdom

import { beforeEach, describe, expect, test } from "vitest";
import { getUsername } from "../js/utils/storage.js";

describe("getUsername", () => {
  beforeEach(() => {
    localStorage.removeItem("user");
  });

  test("returns the name from user object in storage", () => {
    const user = {
      data: {
        name: "Sondre",
      },
    };

    localStorage.setItem("user", JSON.stringify(user));

    expect(getUsername()).toBe("Sondre");
  });

  test("returns null when no user exists in storage", () => {
    expect(getUsername()).toBeNull();
  });
});
