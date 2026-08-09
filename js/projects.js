(function () {
  // grab the filter bar controls and the container cards get rendered into
  const grid = document.getElementById("card-grid");
  const skillSelect = document.getElementById("skill-filter");
  const sortSelect = document.getElementById("sort-order");
  const countEl = document.getElementById("filter-count");

  // Populate skill filter options from the project data.
  const allSkills = Array.from(new Set(PROJECTS.flatMap((p) => p.skills))).sort(
    (a, b) => a.localeCompare(b),
  );
  allSkills.forEach((skill) => {
    const opt = document.createElement("option");
    opt.value = skill;
    opt.textContent = skill;
    skillSelect.appendChild(opt);
  });

  // build the HTML markup for one project card
  function cardHTML(project) {
    const fitClass =
      project.thumbFit === "contain" ? "card-thumb contain" : "card-thumb";
    return `
      <a class="project-card" href="${project.url}">
        <div class="${fitClass}">
          <img src="${project.thumb}" alt="${project.name} thumbnail" loading="lazy" />
        </div>
        <div class="card-meta-row">
          <h3>${project.name}</h3>
          <span class="card-date">${project.dateDisplay}</span>
        </div>
        <p class="card-skills">${project.skills.join(" ~ ")}</p>
      </a>
    `;
  }

  // re-filter, re-sort, and re-render the whole card grid from scratch
  function render() {
    const skill = skillSelect.value;
    const sort = sortSelect.value;

    // keep only projects that have the selected skill
    let list = PROJECTS.filter(
      (p) => skill === "all" || p.skills.includes(skill),
    );

    // sort the filtered list by the selected order
    list = list.slice().sort((a, b) => {
      if (sort === "newest") return b.sortDate.localeCompare(a.sortDate);
      if (sort === "oldest") return a.sortDate.localeCompare(b.sortDate);
      if (sort === "name") return a.name.localeCompare(b.name);
      return 0;
    });

    countEl.textContent = `${list.length} project${list.length === 1 ? "" : "s"}`;

    grid.innerHTML = list.map(cardHTML).join("");

    // show a placeholder message if the filter matched nothing
    const existingEmpty = document.querySelector(".no-results");
    if (existingEmpty) existingEmpty.remove();
    if (!list.length) {
      const empty = document.createElement("p");
      empty.className = "no-results";
      empty.textContent = "No projects match that filter yet.";
      grid.insertAdjacentElement("afterend", empty);
    }
  }

  // re-render whenever either dropdown changes, plus once on page load
  skillSelect.addEventListener("change", render);
  sortSelect.addEventListener("change", render);
  render();
})();
