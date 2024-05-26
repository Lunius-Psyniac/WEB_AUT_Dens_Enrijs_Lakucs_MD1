import { SelectablePage } from "../pageObjects/SelectablePage";

describe("MD1 Scenario", () => {
  context("Selectable", () => {
    beforeEach(() => {
      SelectablePage.visit();
    });

    it("Grid", () => {
      SelectablePage.gridButton.click();
      SelectablePage.listNumber.contains("Two").click();
      SelectablePage.listNumber.contains("Four").click();
      SelectablePage.listNumber.contains("Six").click();
      SelectablePage.listNumber.contains("Eight").click();
      SelectablePage.validateListNumber.should("contain.text", "Two")
      SelectablePage.validateListNumber.should("contain.text", "Four")
      SelectablePage.validateListNumber.should("contain.text", "Six")
      SelectablePage.validateListNumber.should("contain.text", "Eight")
      SelectablePage.listNumber.should("contain.text", "One")
      SelectablePage.listNumber.should("contain.text", "Three")
      SelectablePage.listNumber.should("contain.text", "Five")
      SelectablePage.listNumber.should("contain.text", "Seven")
      SelectablePage.listNumber.should("contain.text", "Nine")
    });
  });
});