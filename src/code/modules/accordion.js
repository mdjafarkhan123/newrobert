/**
 * accordion.js
 * FAQ accordion — open/close with aria-expanded state.
 * Loaded when the FAQ section approaches the viewport.
 */

export function init() {
    const buttons = document.querySelectorAll(".accordion-item__button");

    if (!buttons.length) return;

    buttons.forEach((btn) => {
        btn.addEventListener("click", function () {
            const isOpen = this.getAttribute("aria-expanded") === "true";

            // Collapse all
            buttons.forEach((b) => b.setAttribute("aria-expanded", "false"));

            // If it was closed, open it
            if (!isOpen) {
                this.setAttribute("aria-expanded", "true");
            }
        });
    });
}