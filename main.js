document.querySelectorAll(".app").forEach(btn => {
  btn.addEventListener("click", () => {
    const url = btn.dataset.url;
    window.open(url, "_blank");
  });
});
