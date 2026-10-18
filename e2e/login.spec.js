import process from "node:process";
import { test, expect } from "@playwright/test";

test.describe("Login", () => {
  test("user can successfully log in with valid credentials from environment variables", async ({
    page,
  }) => {
    await page.goto("/login/index.html");

    const username = process.env.E2E_USERNAME;
    const email = process.env.E2E_EMAIL;
    const password = process.env.E2E_PASSWORD;

    await page.getByPlaceholder("Email").fill(email);
    await page.getByPlaceholder("Password").fill(password);

    await page.getByRole("Button", { name: "Login" }).click();

    await expect(page).toHaveURL("http://localhost:5500/login/index.html");

    await expect(page.getByRole("Button", { name: "Logout" })).toBeVisible();

    await expect(page.getByText(`Hi ${username}`));
  });

  test("user sees an error message with invalid credentials", async ({
    page,
  }) => {
    await page.goto("login/index.html");

    await page.getByPlaceholder("Email").fill("wrong@noroff.no");
    await page.getByPlaceholder("Password").fill("wrongpassword");

    await page.getByRole("Button", { name: "Login" }).click();

    await expect(page.locator("#message-container")).toContainText(
      "Invalid email or password",
    );
  });
});
