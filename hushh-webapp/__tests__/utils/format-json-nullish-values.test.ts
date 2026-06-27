import { describe, expect, it } from "vitest";

import { formatCompleteJson } from "@/lib/utils/json-to-human";

describe("formatCompleteJson", () => {
  it("characterizes nullish values", () => {
    const output = formatCompleteJson({
      account_metadata: {
        institution_name: null,
        account_holder: undefined,
        account_type: "Brokerage",
      },
      portfolio_summary: null,
      empty_section: undefined,
    });

    expect(output).toContain("--- Account Information ---");
    expect(output).toContain("Account Type: Brokerage");
    expect(output).not.toContain("Institution:");
    expect(output).not.toContain("Account Holder:");
    expect(output).not.toContain("Portfolio Summary");
  });
});
