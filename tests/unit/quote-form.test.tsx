import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { QuoteForm } from "@/components/forms/quote-form";
Object.defineProperty(window, "scrollTo", { value: vi.fn(), writable: true });
describe("QuoteForm", () => {
  it("links empty submission errors and preserves entered values", async () => {
    const user = userEvent.setup();
    render(<QuoteForm />);
    await user.type(screen.getByLabelText(/contact name/i), "Nora Ellis");
    await user.click(screen.getByRole("button", { name: /complete demo/i }));
    expect(screen.getByRole("alert")).toHaveFocus();
    expect(screen.getByLabelText(/contact name/i)).toHaveValue("Nora Ellis");
    expect(screen.getAllByText("Enter your work email.")).toHaveLength(2);
  });
  it("preselects one valid category", () => {
    render(<QuoteForm initialCategory="strength-conditioning" />);
    expect(screen.getByLabelText("Strength & Conditioning")).toBeChecked();
  });
  it("ignores an invalid category", () => {
    render(<QuoteForm initialCategory="made-up" />);
    expect(
      screen
        .getAllByRole("checkbox")
        .every((box) => !(box as HTMLInputElement).checked),
    ).toBe(true);
  });
});
