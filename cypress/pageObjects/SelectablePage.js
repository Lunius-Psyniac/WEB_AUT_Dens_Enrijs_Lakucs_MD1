import { BasePage } from "../pageObjects/basePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/selectable";
  }

   static get gridButton() {
    return cy.get("[id='demo-tab-grid']");
   }
   static get listNumber() {
    return cy.get("[class='list-group-item list-group-item-action']");
   }
   static get validateListNumber() {
    return cy.get("[class='list-group-item active list-group-item-action']");
   }
}