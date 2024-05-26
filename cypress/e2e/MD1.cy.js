import { SelectablePage } from "../pageObjects/SelectablePage";

describe("MD1 Scenario", () => {
  context("Selectable", () => {
    beforeEach(() => {
      SelectablePage.visit();
    });

    it("Grid", () => {
      // Click on Grid button
      SelectablePage.gridButton.click();
      // Click on Two button
      SelectablePage.listNumber.contains("Two").click();
      // Click on Four button
      SelectablePage.listNumber.contains("Four").click();
      // Click on Six button
      SelectablePage.listNumber.contains("Six").click();
      // Click on Eight button
      SelectablePage.listNumber.contains("Eight").click();
      // Validate that button Two is highlighted
      SelectablePage.validateListNumber.should("contain.text", "Two")
      // Validate that button Four is highlighted
      SelectablePage.validateListNumber.should("contain.text", "Four")
      // Validate that button Six is highlighted
      SelectablePage.validateListNumber.should("contain.text", "Six")
      // Validate that button Eight is highlighted
      SelectablePage.validateListNumber.should("contain.text", "Eight")
      // Validate that button One is not highlighted
      SelectablePage.listNumber.should("contain.text", "One")
      // Validate that button Three is not highlighted
      SelectablePage.listNumber.should("contain.text", "Three")
      // Validate that button Five is not highlighted
      SelectablePage.listNumber.should("contain.text", "Five")
      // Validate that button Seven is not highlighted
      SelectablePage.listNumber.should("contain.text", "Seven")
      // Validate that button Nine is not highlighted
      SelectablePage.listNumber.should("contain.text", "Nine")
    });
  });
});