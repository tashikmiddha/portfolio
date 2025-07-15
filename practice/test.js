
    document.getElementById("home").addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    document.getElementById("about").addEventListener("click", function () {
        window.scrollTo({ top: document.footer.scrollHeight, behavior: "smooth" });
    });

    document.getElementById("contact").addEventListener("click", function () {
        window.scrollTo({ top: document.footer.scrollHeight, behavior: "smooth" });
    });

    document.getElementById("services").addEventListener("click", function () {
        goToSecondPage();
    });

    document.getElementById("project").addEventListener("click", function () {
        goToSecondPage();
    });

    function goToSecondPage() {
        let secondPage = document.getElementById("secondPage");
        if (secondPage) {
            secondPage.scrollIntoView({ behavior: "smooth" });
        }
    }
