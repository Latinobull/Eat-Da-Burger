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

  const changeDevouredBtn = document.querySelectorAll(".change-devoured");
  if (changeDevouredBtn) {
    changeDevouredBtn.forEach((button) => {
      button.addEventListener("click", (e) => {
        const id = e.target.getAttribute("data-id");
        const newDevoured = e.target.getAttribute("data-devoured");

        const newDevouredState = {
          devoured: newDevoured,
        };

        fetch(`/api/burgers/${id}`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },

          body: JSON.stringify(newDevouredState),
        }).then((response) => {
          if (response.ok) {
            console.log(`changed state to: ${newDevoured}`);
            location.reload("/");
          } else {
            alert("something went wrong!");
          }
        });
      });
    });
  }
});
