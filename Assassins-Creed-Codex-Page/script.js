document.addEventListener("DOMContentLoaded", function() {
    const infoElements = document.querySelectorAll(".more-info");

    infoElements.forEach(el => {
        el.addEventListener("mouseenter", function(event) {
            let tooltip = document.createElement("div");
            tooltip.classList.add("tooltip");
            tooltip.textContent = el.getAttribute("data-info");
            document.body.appendChild(tooltip);

            let rect = el.getBoundingClientRect();
            tooltip.style.left = rect.left + window.scrollX + "px";
            tooltip.style.top = rect.top + window.scrollY + "px";
            tooltip.style.display = "block";

            el.addEventListener("mouseleave", () => {
                tooltip.remove();
            });
        });
    });
});