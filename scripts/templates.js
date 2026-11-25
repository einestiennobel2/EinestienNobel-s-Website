/* Template definitions */
class ConstantFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<footer><p>&copy; 2026 Scringle Things. All rights reserved.</p></footer>`;
  };
};

/* Template generators*/ 
customElements.define("const-footer", ConstantFooter);
