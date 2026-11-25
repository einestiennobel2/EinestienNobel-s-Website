/* Template definitions */
class ConstantFooter extends HTMLElement {
  constructor() {
    this.innerHTML = `<footer>&copy; 2026 Scringle Things. All rights reserved.</footer>`;
  }
}

/* Template generators*/ 
customElements.define("const-footer", ConstantFooter);
