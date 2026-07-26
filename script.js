const MAX_FEAR = 12;

function readFear() {
  const params = new URLSearchParams(window.location.search);
  const value = Number(params.get("fear") ?? 0);

  if (!Number.isFinite(value)) return 0;
  return Math.max(0, Math.min(MAX_FEAR, Math.round(value)));
}

function renderFear(fear) {
  const container = document.getElementById("wolves");

  for (let position = 1; position <= MAX_FEAR; position += 1) {
    const wolf = document.createElement("img");
    wolf.src = "wolf.png";
    wolf.alt = "";
    wolf.className = "wolf";

    if (position <= fear) {
      wolf.classList.add("active");
    }

    if (position === fear && fear > 0) {
      wolf.classList.add("just-added");
    }

    container.appendChild(wolf);
  }
}

renderFear(readFear());
