document.addEventListener("DOMContentLoaded", () => {

    // Animasi sederhana saat halaman dibuka

    document.body.classList.add("loaded");


    // Efek mouse pada kartu

    const cards =
        document.querySelectorAll(".glass-box");


    cards.forEach(card => {

        card.addEventListener(
            "mousemove",
            e => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    e.clientX - rect.left;

                const y =
                    e.clientY - rect.top;

                const rotateX =
                    ((y / rect.height) - 0.5) * -3;

                const rotateY =
                    ((x / rect.width) - 0.5) * 3;

                card.style.transform =
                    `perspective(700px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-5px)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "";

            }
        );

    });


});
