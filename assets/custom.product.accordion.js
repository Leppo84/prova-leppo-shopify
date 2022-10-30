class CustomProductAccordion extends HTMLElement {
  constructor() {
    super();
    const accordion_wrapper = document.createElement("div");
    accordion_wrapper.id = accordion_wrapper;    
    const section_btn1 = document.createElement("button");
    section_btn1.id = "btn1";    
    const section_btn2 = document.createElement("button");
    section_btn2.id = "btn2";    
    const section_btn3 = document.createElement("button");
    section_btn3.id = "btn3";
    
  }
}
customElements.define('custom-product-accordion',  CustomProductAccordion);
