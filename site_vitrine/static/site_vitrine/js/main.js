const _Xmodal = new Xmodal();
const Csrf_token = getCookie("csrftoken");
console.log(Csrf_token);

; (function () {

    'use strict';

    var carousels = function () {
        $(".owl-carousel1").owlCarousel(
            {
                loop: true,
                center: true,
                margin: 0,
                responsiveClass: true,
                nav: false,
                responsive: {
                    0: {
                        items: 1,
                        nav: false
                    },
                    600: {
                        items: 1,
                        nav: false
                    },
                    1000: {
                        items: 3,
                        nav: true,
                        loop: false
                    }
                }
            }
        );

        $(".owl-carousel2").owlCarousel(
            {
                loop: true,
                center: false,
                margin: 0,
                responsiveClass: true,
                nav: true,
                responsive: {
                    0: {
                        items: 1,
                        nav: false
                    },
                    600: {
                        items: 2,
                        nav: false
                    },
                    1000: {
                        items: 3,
                        nav: true,
                        loop: true
                    }
                }
            }
        );
    }


    // svg responsive in mobile mode
    var checkPosition = function () {
        if ($(window).width() < 767) {
            $("#bg-services").attr("viewBox", "0 0 1050 800");
        }
    };

    (function ($) {
        carousels();
        checkPosition();
    })(jQuery);


}());

// menu toggle button
function myFunction(x) {
    x.classList.toggle("change");
}

$(document).ready(function () {

    //gestion de la visite de l'utilisateur
    let etat_viste = localStorage.getItem('etat_vist');

    if (etat_viste != null && etat_viste == "1") {
        $('.message-bottom').css('display', "block");
        $('.message-bottom').html(`
            Eh ! Content de vous revoir sur Educ-Technology. <br> Contactez-nous dès maintenant pour <br>construire quelque chose ensemble !    
        `);

    } else if (etat_viste == null || etat_viste == "0") {
        localStorage.setItem('etat_vist', '1');

        setTimeout(function () {
            _Xmodal.xalert('.zone_modal', "🎉 Bienvenue sur Educ-technology !", `
                    Vous êtes au bon endroit pour transformer vos idées en réalité.<br>
                    ✨ Pourquoi nous choisir ?
                    <ul>
                        <li>Prix compétitifs : Des solutions adaptées à votre budget sans compromis sur la qualité.</li>
                        <li>Expertise reconnue : Plus de 5 années d’expérience dans le développement, le marketing digital et la conception graphique.</li>
                        <li>Service sur-mesure : Chaque projet est unique, tout comme nos solutions.</li>
                    </ul>
    
                    💡 Offre spéciale pour vous :
                    <div class="ps-2">Bénéficiez de 10 % de réduction sur votre premier projet si vous commencez dès aujourd'hui !</div><br>
    
                    📞 Contactez-nous maintenant 
    
                    <div class="container text-center mt-5 small">
                        <div class="social-buttons">
                        <!-- Bouton WhatsApp -->
                        <a href="https://wa.me/1234567890" class="btn btn-success btn-lg" target="_blank">
                            <i class="fab fa-whatsapp"></i>
                        </a>
                        <!-- Bouton Facebook -->
                        <a href="https://facebook.com" class="btn btn-primary btn-lg" target="_blank">
                            <i class="fab fa-facebook"></i>
                        </a>
                        <!-- Bouton pour appeler -->
                        <button class="btn btn-secondary btn-lg" onclick="alert('Appelez-nous au : +123 456 789')">
                            <i class="fas fa-phone"></i> Téléphone
                        </button>
                        </div>
                    </div>
                `)
        }, 2000);
    }

    document.addEventListener('DOMContentLoaded', () => {
        const elements = document.querySelectorAll('.animate-from-bottom');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                }
            });
        }, { threshold: 0.2 }); // L'élément doit être 20% visible

        elements.forEach((el) => observer.observe(el));
    });

    //Proposition des service
    // Sélectionner l'élément cible
    const target = document.querySelector('.target');

    // Créer une instance d'IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // L'élément est visible
                $('.modale-btn-user').css('display', "block");
                $('.xclose').click(function (e) {
                    e.preventDefault();
                    $('.modale-btn-user').css('display', "none");
                });
            }
        });
    }, {
        threshold: 0.5 // 50% de l'élément doit être visible
    });

    // Observer l'élément cible
    observer.observe(target);

    gestionMessages();

});

// gestion message est abbonnement sur notre nowletter
function gestionMessages() {
    $('#messages_rapide').change(function (e) {
        e.preventDefault();
        $('.message_personnalise').val($('#messages_rapide').val());
    });

    $('#btn_send_message').click(function (e) {
        e.preventDefault();

        let nom_complet = $('#nom_complet').val();
        let email = $('#email').val();
        let message_personnalise = $('.message_personnalise').val();

        if (nom_complet != "" && email != "" && message_personnalise != "") {
            let etat_email = isValidEmail(email);

            if (etat_email == true) {

                //const selectedCanal = $('input[name="canal"]:checked').val();
                const isChecked = $('#abonner').prop('checked');

                console.log(isChecked);

                _Xmodal.loader('.zone_modal', "Envoi...");
                let datas_request = {
                    "action": "envoi_message_visiteur_vers_eductechnology",
                    "datas": {
                        "abonnement": isChecked,
                        "email" : email,
                        "nom_complet":nom_complet,
                        "message_personnalise" : message_personnalise
                    }
                }
                let myHeaders = new Headers({ 'X-CSRFToken': Csrf_token });
                let myInit = {
                    method: 'POST',
                    headers: myHeaders,
                    mode: 'cors',
                    cache: 'default',
                    body: JSON.stringify(datas_request)
                }
                fetch('/message-manager/', myInit).then((res) => {

                    return res.json()
                }).then((res) => {
                    if (res.code == 0) {
                        _Xmodal.xalert('.zone_modal', "Message envoyé. ", `Merci ${nom_complet} de nous avoir contactés. Nous avons bien reçu votre message et vous enverrons une réponse sur votre boite mail !`);
                    }
                })


            } else {
                _Xmodal.xalert('.zone_modal', "Message d'alerte", "L'adresse e-mail que vous avez saisie est invalide. Veuillez vérifier et entrer une adresse e-mail valide.");
            }
        } else {
            _Xmodal.xalert('.zone_modal', "Message d'alerte", "Attention ! Veuillez remplir tous les champs requis avant d'envoyer votre message. Cela nous aidera à mieux répondre à votre demande. Merci !");
        }
    });
}
function isValidEmail(email) {
    // Expression régulière pour valider une adresse e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}