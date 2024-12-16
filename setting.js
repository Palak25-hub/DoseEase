const accountButton = document.getElementById("account");
const subAccMenu = document.querySelector(".sub_acc");

    accountButton.addEventListener("click", function() {
        if (subAccMenu.style.display === "none") {
            subAccMenu.style.display = "block";
        } else {
            subAccMenu.style.display = "none";
        }
    });

