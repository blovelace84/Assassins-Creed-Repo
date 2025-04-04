document.addEventListener("DOMContentLoaded", () => {
    const codexContainer = document.getElementById("codexContainer");
    const searchInput = document.getElementById("searchInput");
    let codexData = [];
  
    // Fetch the JSON file
    fetch("codex.json")
      .then(res => res.json())
      .then(data => {
        codexData = data;
        renderCodex(codexData);
      })
      .catch(err => console.error("Error loading codex data:", err));
  
    function renderCodex(data) {
      codexContainer.innerHTML = "";
  
      data.forEach(entry => {
        const codexEntry = document.createElement("div");
        codexEntry.className = "codex-entry";
        codexEntry.innerHTML = `
          <img src="${entry.image}" alt="${entry.name}">
          <div class="entry-text">
            <h2>${entry.name}</h2>
            <p>${entry.summary}</p>
            <button class="more-info-btn" data-info="${entry.details}">More Info</button>
          </div>
        `;
        codexContainer.appendChild(codexEntry);
      });
  
      attachMoreInfoHandlers();
    }
  
    function attachMoreInfoHandlers() {
      const buttons = document.querySelectorAll(".more-info-btn");
  
      buttons.forEach(btn => {
        btn.addEventListener("click", function () {
          let existingTooltip = document.querySelector(".tooltip");
          if (existingTooltip) existingTooltip.remove();
  
          let tooltip = document.createElement("div");
          tooltip.classList.add("tooltip");
          tooltip.textContent = btn.getAttribute("data-info");
          document.body.appendChild(tooltip);
  
          let rect = btn.getBoundingClientRect();
          let tooltipWidth = 250;
          let left = rect.left + window.scrollX;
  
          if (left + tooltipWidth > window.innerWidth) {
            left = window.innerWidth - tooltipWidth - 20;
          }
  
          tooltip.style.left = left + "px";
          tooltip.style.top = rect.top + window.scrollY + 35 + "px";
          tooltip.style.display = "block";
  
          document.addEventListener("click", function removeTooltip(e) {
            if (!btn.contains(e.target) && !tooltip.contains(e.target)) {
              tooltip.remove();
              document.removeEventListener("click", removeTooltip);
            }
          });
        });
      });
    }
  
    searchInput.addEventListener("input", () => {
      const searchValue = searchInput.value.toLowerCase();
      const filtered = codexData.filter(entry =>
        entry.name.toLowerCase().includes(searchValue)
      );
      renderCodex(filtered);
    });
  });
  