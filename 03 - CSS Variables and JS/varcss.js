const inputs = document.querySelectorAll(".controls input");



function changeVars() {
    const suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach((input => {
    input.addEventListener("change", changeVars);
    input.addEventListener("mousemove", changeVars);
}));