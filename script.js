const status = document.querySelector(".status-dot");

if (status) {
  const updateStatus = () => {
    const hour = new Date().getHours();
    status.style.opacity = hour >= 9 && hour < 19 ? "1" : ".55";
  };
  updateStatus();
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => {
    link.blur();
  });
});
