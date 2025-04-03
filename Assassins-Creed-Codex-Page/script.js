document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".more-info-btn");

    buttons.forEach(btn => {
        btn.addEventListener("click", function () {
            let existingTooltip = document.querySelector(".tooltip");
            if (existingTooltip) existingTooltip.remove(); // Remove any existing tooltip

            let tooltip = document.createElement("div");
            tooltip.classList.add("tooltip");
            tooltip.textContent = btn.getAttribute("data-info");
            document.body.appendChild(tooltip);

            let rect = btn.getBoundingClientRect();
            tooltip.style.position = "absolute";
            tooltip.style.left = rect.left + window.scrollX + "px";
            tooltip.style.top = rect.top + window.scrollY + 35 + "px"; // Adjust below the button
            tooltip.style.display = "block";

            // Remove tooltip when clicking anywhere else
            document.addEventListener("click", function removeTooltip(e) {
                if (!btn.contains(e.target) && !tooltip.contains(e.target)) {
                    tooltip.remove();
                    document.removeEventListener("click", removeTooltip);
                }
            });
        });
    });
});
