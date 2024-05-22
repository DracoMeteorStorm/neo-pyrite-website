document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");
  if (content) {
    content.innerHTML = "<h1>Home Page</h1><p>Welcome to the home page.</p>";
  }

  document.getElementById("home-link")?.addEventListener("click", (e) => {
    e.preventDefault();
    content.innerHTML = "<h1>Home Page</h1><p>Welcome to the home page.</p>";
  });

  document.getElementById("about-link")?.addEventListener("click", (e) => {
    e.preventDefault();
    import("./about").then(module => module.loadAbout());
  });

  document.getElementById("contact-link")?.addEventListener("click", (e) => {
    e.preventDefault();
    import("./contact").then(module => module.loadContact());
  });
});
