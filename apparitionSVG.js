var pointsFortsEP = document.querySelectorAll('#EP_pointsForts text');
var pointsFortsEPCircle = document.querySelectorAll('#EP_pointsForts circle');
var pointsFortsFM = document.querySelectorAll('#FM_pointsForts text');
var pointsFortsFMCircle = document.querySelectorAll('#FM_pointsForts circle');
let defilement = 0;

// Couleur
let couleurEvidence = '#2023d4';

// Calcul hauteur page
var body = document.body,
    html = document.documentElement;
var height = Math.max( body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight );


function svgErotiumPrimus() {
    defilement = 1;

    // Apparition du tracé pour EP
    document.getElementById('EP_path_main').style.setProperty("animation", "dash 5s linear forwards");

    // Apparition des textes
    document.getElementById('main_créationWeb').style.setProperty("animation", "dash 20s linear forwards");
    document.getElementById('EP_desc').style.setProperty("animation", "dash 20s linear forwards");
    document.getElementById('EP_title_desc').style.setProperty("animation", "dash 20s linear forwards");

    // Apparition points forts EP
    setTimeout(function () {
        pointsFortsEP.forEach(function (userItem) {
            userItem.style.setProperty("animation", "dash 20s linear forwards");
        });
        pointsFortsEPCircle.forEach(function (userItem) {
            userItem.setAttribute("opacity", "1");
        });
        pointsFortsEP[8].style.stroke = couleurEvidence;
        pointsFortsEP[9].style.stroke = couleurEvidence;
    }, 2000)


    // Apparition de l'image
    document.getElementById('EP_img').style.setProperty("opacity", "1");

    // Disparition du bouton commencer
    document.getElementById('main_btn_commencer').style.setProperty("opacity", "0");
    document.getElementById('main_btn_commencer').style.setProperty("visibility", "hidden");
}

window.addEventListener('scroll', function () {
    // Fm-lesCouleurs
    if (window.pageYOffset >= height * 10 / 100 && defilement > 0) {
        defilement = 2;
        document.getElementById('FM_path_main').style.setProperty("animation", "dash 5s linear forwards");
        document.getElementById('FM_img').style.setProperty("opacity", "1");
        document.getElementById('FM_desc').style.setProperty("animation", "dash 20s linear forwards");

        // Apparition points forts FM
        document.getElementById('FM_title_desc').style.setProperty("animation", "dash 20s linear forwards");
        // Cercles des points forts
        setTimeout(function () {
            pointsFortsFM.forEach(function (userItem) {
                userItem.style.setProperty("animation", "dash 20s linear forwards");

            });

            // Met en évidence le point le plus fort
            pointsFortsFMCircle.forEach(function (userItem) {
                userItem.setAttribute("opacity", "1");

            });
            for(let i = 6; i <= 10; i++){
                pointsFortsFM[i].style.stroke = couleurEvidence;

            }
        }, 2000)
    }

    //troisième site
    if (window.pageYOffset >= height * 27 / 100 && defilement > 0) {
        defilement = 3;

        document.getElementById('TM_path_main').style.setProperty("animation", "dash 5s linear forwards");

    }


    // Android EMT
    if (window.pageYOffset >= height * 35 / 100 && defilement > 1) {
        defilement = 4;
        document.getElementById('ADR_EMT_path_main1').style.setProperty("animation", "dash 5s linear forwards");

        setTimeout(function () {
            document.getElementById('ADR_EMT_path_main2').style.setProperty("animation", "dash 5s linear forwards");
            document.getElementById('ADR_EMT_path_main3').style.setProperty("animation", "dash 5s linear forwards");
        }, 300)

        setTimeout(function () {
            document.getElementById('ADR_EMT_path_main4').style.setProperty("animation", "dash 5s linear forwards");
            document.getElementById('ADR_EMT_path_main5').style.setProperty("animation", "dash 5s linear forwards");
        }, 900)

        setTimeout(function () {
            document.getElementById('ADR_EMT_path_main6').style.setProperty("animation", "dash 10s linear forwards infinite");
            document.getElementById('ADR_EMT_path_main7').style.setProperty("animation", "dash 10s linear forwards infinite");
            document.getElementById('ADR_EMT_path_main8').style.setProperty("animation", "dash 10s linear forwards infinite");
            document.getElementById('ADR_EMT_path_main9').style.setProperty("animation", "dash 10s linear forwards infinite");

            document.getElementById('ADR_EMT_path_main6').style.setProperty("stroke-dasharray", "40");
            document.getElementById('ADR_EMT_path_main7').style.setProperty("stroke-dasharray", "40");
            document.getElementById('ADR_EMT_path_main8').style.setProperty("stroke-dasharray", "40");
            document.getElementById('ADR_EMT_path_main9').style.setProperty("stroke-dasharray", "40");
        }, 1200)

        setTimeout(function () {
            document.getElementById('ADR_img_EMT1').style.setProperty("opacity", "1");
            document.getElementById('ADR_img_WD1').style.setProperty("opacity", "1");
            document.getElementById('PLAY_BADGE1').style.setProperty("opacity", "1");
            document.getElementById('PLAY_BADGE2').style.setProperty("opacity", "1");
        }, 200)
    }

    // Reconnaissace Google Atelier Digital
    if (window.pageYOffset >= height * 54 / 100 && defilement > 2) {
        defilement = 5;
        document.getElementById('AG_path_left').style.setProperty("animation", "dash 5s linear forwards");
        document.getElementById('AG_path_right').style.setProperty("animation", "dash 5s linear forwards");

        setTimeout(function () {
            document.getElementById('AG_path_left_subL').style.setProperty("animation", "dash 5s linear forwards");
            document.getElementById('AG_path_left_subR').style.setProperty("animation", "dash 5s linear forwards");

            document.getElementById('AG_path_right_subR').style.setProperty("animation", "dash 5s linear forwards");
            document.getElementById('AG_path_right_subL').style.setProperty("animation", "dash 5s linear forwards");

            document.getElementById('AG_path_left_subL_H').style.setProperty("animation", "dash 5s linear forwards");
            document.getElementById('AG_path_right_subR_H').style.setProperty("animation", "dash 5s linear forwards");



            document.getElementById('GOOGLE_DIP').style.setProperty("opacity", "1");
        }, 500)
    }

});

pointsFortsEP.forEach(function (userItem) {
    userItem.setAttribute("fill", "none");
    userItem.setAttribute("stroke", "black");
    userItem.setAttribute("stroke-width", "0.2");
});

pointsFortsEPCircle.forEach(function (userItem) {
    userItem.setAttribute("opacity", "0");
});

pointsFortsFM.forEach(function (userItem) {
    userItem.setAttribute("fill", "none");
    userItem.setAttribute("stroke", "black");
    userItem.setAttribute("stroke-width", "0.2");
});
pointsFortsFMCircle.forEach(function (userItem) {
    userItem.setAttribute("opacity", "0");
});

