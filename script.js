/* =========================================================
   IT-GIRLS — INTERACTIVE FUNCTIONS
========================================================= */


/* =========================================================
   ARTICLE ACCORDIONS
========================================================= */

const articles = document.querySelectorAll(".article");

document.querySelectorAll(".article-header").forEach(button => {

    button.addEventListener("click", () => {

        const article = button.closest(".article");

        article.classList.toggle("open");

    });

});



/* =========================================================
   EXPAND / COLLAPSE ALL
========================================================= */

const expandButton = document.getElementById("expandAll");

expandButton.addEventListener("click", () => {

    const allOpen = [...articles].every(article =>
        article.classList.contains("open")
    );


    articles.forEach(article => {

        article.classList.toggle("open", !allOpen);

    });


    expandButton.textContent =
        allOpen ? "Expand all" : "Collapse all";

});



/* =========================================================
   ARTICLE SEARCH
========================================================= */

const searchInput = document.getElementById("search");

searchInput.addEventListener("input", () => {

    const query = searchInput.value.toLowerCase().trim();


    articles.forEach(article => {

        const searchableText =
            article.dataset.search.toLowerCase();


        if (
            query === "" ||
            searchableText.includes(query)
        ) {

            article.style.display = "";

        } else {

            article.style.display = "none";

        }

    });

});



/* =========================================================
   MOBILE MENU
========================================================= */

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");


menuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("open");


    if (mobileMenu.classList.contains("open")) {

        menuButton.textContent = "×";

    } else {

        menuButton.textContent = "☰";

    }

});


/* Close menu after clicking a link */

document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("open");

        menuButton.textContent = "☰";

    });

});



/* =========================================================
   BACK TO TOP
========================================================= */

document.getElementById("backTop").addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



/* =========================================================
   OPEN ARTICLE FROM URL HASH
   Example:
   index.html#article-ix
========================================================= */

if (window.location.hash) {

    const target = document.querySelector(
        window.location.hash
    );


    if (target && target.classList.contains("article")) {

        target.classList.add("open");

        setTimeout(() => {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }, 300);

    }

}
