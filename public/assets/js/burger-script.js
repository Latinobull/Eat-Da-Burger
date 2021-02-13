document.addEventListener("DOMContentLoaded", (e) => {
  if (e) console.log("DOM Loaded");

  const createBurgerBtn = document.getElementById("create-form");

  if (createBurgerBtn) {
    createBurgerBtn.addEventListener("submit", (e) => {
      e.preventDefault();

      const newBurger = {
        burger_name: document.getElementById("ca").value.trim(),
        devoured: document.getElementById("Dev").checked,
      };
      fetch("api/burgers", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newBurger),
      }).then(() => {
        document.getElementById("ca").value = "";
        console.log("Created a new burger");
        location.reload();
      });
    });
  }

  const changeDevouredBtn = document.querySelectorAll();
});
