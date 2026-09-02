/* =========================================================
   IT-GIRLS — INTERACTIVE FUNCTIONS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ARTICLE ACCORDIONS
    ===================================================== */

    const articles = document.querySelectorAll(".article");

    articles.forEach(article => {

        const header = article.querySelector(".article-header");

        if (!header) return;

        header.addEventListener("click", () => {

            article.classList.toggle("open");

        });

    });


    /* =====================================================
       EXPAND / COLLAPSE ALL
    ===================================================== */

    const expandButton =
        document.getElementById("expandAll");

    if (expandButton) {

        expandButton.addEventListener("click", () => {

            const allOpen =
                [...articles].every(article =>
                    article.classList.contains("open")
                );

            articles.forEach(article => {

                if (allOpen) {

                    article.classList.remove("open");

                } else {

                    article.classList.add("open");

                }

            });

            expandButton.textContent =
                allOpen
                    ? "Expand all"
                    : "Collapse all";

        });

    }


    /* =====================================================
       ARTICLE SEARCH
    ===================================================== */

    const searchInput =
        document.getElementById("search");

    if (searchInput) {

        searchInput.addEventListener("input", () => {

            const query =
                searchInput.value
                    .toLowerCase()
                    .trim();

            articles.forEach(article => {

                const text =
                    article.textContent.toLowerCase();

                article.style.display =
                    text.includes(query)
                        ? ""
                        : "none";

            });

        });

    }


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuButton =
        document.getElementById("menuButton");

    const mobileMenu =
        document.getElementById("mobileMenu");

    if (menuButton && mobileMenu) {

        menuButton.addEventListener("click", () => {

            mobileMenu.classList.toggle("open");

            menuButton.textContent =
                mobileMenu.classList.contains("open")
                    ? "×"
                    : "☰";

        });


        mobileMenu.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                mobileMenu.classList.remove("open");

                menuButton.textContent = "☰";

            });

        });

    }


    /* =====================================================
       BACK TO TOP
    ===================================================== */

    const backTop =
        document.getElementById("backTop");

    if (backTop) {

        backTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* =====================================================
       OPEN ARTICLE FROM URL HASH
    ===================================================== */

    function openArticleFromHash() {

        const hash =
            window.location.hash;

        if (!hash) return;

        const target =
            document.querySelector(hash);

        if (
            target &&
            target.classList.contains("article")
        ) {

            target.classList.add("open");

        }

    }


    openArticleFromHash();

    window.addEventListener(
        "hashchange",
        openArticleFromHash
    );

});
