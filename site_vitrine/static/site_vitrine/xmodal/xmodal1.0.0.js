//--[ xmodal un module js basique pour la creation de lodale sur des site et application web.]
//const Csrftoken = getCookie('csrftoken');
let cdgvcd = ' dsv sv';
var dvzvzr = 11;
const jvdzvhfv = 'dsvsdf';


class Xmodal {                                             

    //--[ loader]
    loader(id_container, msg) {
        let modal = (`
            <!-- [1] -->
            <div class="modal_style blancs xomodal-loader" id="modal-1" aria-hidden="true">

                <!-- [2] -->
                <div class="modal__overlay" tabindex="-1" data-micromodal-close>

                    <!-- [3] -->
                    <div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
                        <i class="text-center fa-solid fa-spinner base-color fs-1" id="loader_icon"></i><br>
                        <div class="text-center" style="font-weight:lighter;font-size:12px;">${msg}</div>
                    </div>
                </div>
            </div>
        `);
        $(id_container).html(modal);
        let modal_alert = 1;
        let a = 0;
        sessionStorage.setItem('xloader', 1);

        setInterval(function () {
            let x = sessionStorage.getItem('xloader');
            if (x != 0) {
                a += 1
                document.querySelector('#loader_icon').style.transform = `rotate(${a}deg)`;
            }
        }, 0.500);

        $('body').css('overflow', 'hidden');

    }
    loader_close() {
        sessionStorage.setItem('xloader', 0);
        $('.xomodal-loader').css('display', 'none');
        $('body').css('overflow', '');

    }
    
    //--|checked|
    checked(id_container) {
        let modal = (`
        <!-- [1] -->
        <div class="modal_style blancs xomodal-loader" id="modal-1" aria-hidden="true">

        <!-- [2] -->
        <div class="modal__overlay" tabindex="-1" data-micromodal-close>

            <!-- [3] -->
            <div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
                <i class="text-center fa-solid fa-check border-rounded-verte verte base-color fs-1" id="loader_icon"></i><br>
            </div>
        </div>
        </div>
        `);
        $(id_container).html(modal);
        setTimeout(function () {
            $('.xomodal-loader').css('display', 'none');
            $('body').css('overflow', '');
        }, 1000)

        $('body').css('overflow', 'hidden');

    }
    //--[ Alert]
    xalert(id_container, titre, body) {
        let modal = (`
            <!-- [1] -->
            <div class="modal_style blancs xomodal-alert" id="modal-1" aria-hidden="true">

                <!-- [2] -->
                <div class="modal__overlay" tabindex="-1" data-micromodal-close>

                    <!-- [3] -->
                    <div id="modal__container" class="modal__container m-3 round" role="dialog" aria-modal="true"
                        aria-labelledby="modal-1-title">
                        <header class="modal__header">
                            <h2 class="modal__title base-color" id="modal-1-title">
                                ${titre}
                            </h2>

                            <!-- [4] -->
                            <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
                        </header>

                        <main class="modal__content" id="modal-1-content">
                            
                            <p>
                                ${body}
                            </p>
                        </main>

                        <footer class="modal__footer">
                            <button class="modal__btn bg-btn modal__closex">ok</button>

                        </footer>

                    </div>
                </div>
            </div>
            `);
        $(id_container).html(modal);
        let modal_alert = 1;
        $('body').css('overflow', 'hidden');
        $('.modal__close').click(function (e) {
            e.preventDefault();
            $('.xomodal-alert').css('display', 'none');
            $('body').css('overflow', '');
        });
        $('.modal__closex').click(function (e) {
            e.preventDefault();
            $('.xomodal-alert').css('display', 'none');
            $('body').css('overflow', '');
        });
        $('#modal-1').mouseleave(function (e) {
            e.preventDefault();
            $('.xomodal-alert').css('display', 'none');
            $('body').css('overflow', '');
        });

    }

    //--[ Alert]
    menu_flottant(id_container, titre, composant_menu_flottant) {
        let modal = (`
            <!-- [1] -->
            <div class="modal_style blancs xomodal-alert" id="modal-1" aria-hidden="true">

                <!-- [2] -->
                <div class="modal__overlay" tabindex="-1" data-micromodal-close>

                    <!-- [3] -->
                    <div id="modal__container" class="modal__container roundex m-3 round" role="dialog" aria-modal="true"
                        aria-labelledby="modal-1-title">
                        <header class="modal__header">
                            <!--<span><i class="fas fa-chevron-left"></i></span>-->
                            <h2 class="modal__title base-color" id="modal-1-title">
                                ${titre}
                            </h2>
                            <!--<span><i class="fas fa-chevron-rigth"></i></span>-->

                            <!-- [4] -->
                            <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
                        </header>

                        <main class="modal__content container_menu_flottant scrole_horizotale" id="modal-1-content">
                            
                            <p>
                                ${composant_menu_flottant}   
                            </p>
                        </main>

                    </div>
                </div>
            </div>
            `);
        $(id_container).html(modal);
        let modal_alert = 1;
        $('body').css('overflow', 'hidden');
        $('.modal__close').click(function (e) {
            e.preventDefault();
            $('.xomodal-alert').css('display', 'none');
            $('body').css('overflow', '');
        });
        $('.modal__closex').click(function (e) {
            e.preventDefault();
            $('.xomodal-alert').css('display', 'none');
            $('body').css('overflow', '');
        });
        $('#modal-1').mouseleave(function (e) {
            e.preventDefault();
            $('.xomodal-alert').css('display', 'none');
            $('body').css('overflow', '');
        });

    }

    xDialogue(id_container, titre, body, fonction) {
        let modal = (`
            <!-- [1] -->
            <div class="modal_style blancs xomodal-alert" id="modal-1" aria-hidden="true">

                <!-- [2] -->
                <div class="modal__overlay" tabindex="-1" data-micromodal-close>

                    <!-- [3] -->
                    <div id="modal__container" class="modal__container m-3 round" role="dialog" aria-modal="true"
                        aria-labelledby="modal-1-title">
                        <header class="modal__header">
                            <h2 class="modal__title base-color" id="modal-1-title">
                                ${titre}
                            </h2>

                            <!-- [4] -->
                            <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
                        </header>

                        <main class="modal__content" id="modal-1-content">
                            
                            <p>
                                ${body}
                            </p>
                        </main>

                        <footer class="modal__footer">
                            <button class="modal__btn bg-btn modal__closex me-3">Non</button>
                            <button class="modal__btn modal__btn-primary modal__closex btn__ok">Oui</button>
                        </footer>

                    </div>
                </div>
            </div>
            `);
        $(id_container).html(modal);
        let modal_alert = 1;
        $('body').css('overflow', 'hidden');
        $('.modal__close').click(function (e) {
            e.preventDefault();
            $('.xomodal-alert').css('display', 'none');
            $('body').css('overflow', '');
        });
        $('.modal__closex').click(function (e) {
            e.preventDefault();
            $('.xomodal-alert').css('display', 'none');
            $('body').css('overflow', '');
        });
        $('#modal-1').mouseleave(function (e) {
            e.preventDefault();
            $('.xomodal-alert').css('display', 'none');
            $('body').css('overflow', '');
        });

        $('.btn__ok').click(function (e) {
            e.preventDefault();
            $('.xomodal-confirm').css('display', 'none');
            fonction(true);
        });

    }
    xInput(id_container, titre, body, body2, label, type, maxlength, fonction, function2) {
        let modal = (`
            <!-- [1] -->
            <div class="modal_style blancs xomodal-alert" id="modal-1" aria-hidden="true">

                <!-- [2] -->
                <div class="modal__overlay" tabindex="-1" data-micromodal-close>

                    <!-- [3] -->
                    <div id="modal__container" class="modal__container m-3 round" role="dialog" aria-modal="true"
                        aria-labelledby="modal-1-title">
                        <header class="modal__header">
                            <h2 class="modal__title base-color" id="modal-1-title">
                                ${titre}
                            </h2>

                            <!-- [4] -->
                            <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
                        </header>

                        <main class="modal__content" id="modal-1-content">
                            
                                <style>
                                    .inputx{
                                        padding: 4px;
                                        border: 1px solid silver;
                                        border-radius: 5px ;
                                    }
                                </style>
                                <h5>${body}</h5><br>

                                <label>${body2}</label><br>
                                <br>
                                <div id="input_body3"></div>
                                <label for="champ_val">${label}</label>
                                <input class="w-100 inputx p-2 mt-2" type="${type}" id="champ_val"  maxlength="${maxlength}" style="padding: 4px;">
                                <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msg_champ_val"></div><br>
                       </main>

                        <footer class="modal__footer">
                            <button class="modal__btn bg-btn modal__closex me-3">Annuler</button>
                            <button class="modal__btn modal__btn-primary  btn__ok">Valider</button>
                        </footer>

                    </div>
                </div>
            </div>
        `);

        $('.btn__ok').click(function (e) {
            e.preventDefault();

        });
        $(id_container).html(modal);
        let modal_alert = 1;
        $('body').css('overflow', 'hidden');
        $('.modal__close').click(function (e) {
            e.preventDefault();
            $('.xomodal-alert').css('display', 'none');
            $('body').css('overflow', '');
        });
        $('.modal__closex').click(function (e) {
            e.preventDefault();
            $('.xomodal-alert').css('display', 'none');
            $('body').css('overflow', '');
        });
        $('#modal-1').mouseleave(function (e) {
            e.preventDefault();
            $('.xomodal-alert').css('display', 'none');
            $('body').css('overflow', '');
        });
        function2();
        $('.btn__ok').click(function (e) {
            e.preventDefault();
            $('.xomodal-confirm').css('display', 'none');
            let champ_val = $('#champ_val').val();
            fonction(champ_val);
        });

    }
    //--[ Confirme]
    xconfirm(id_container, titre, body, fonction) {
        let modal = (`
<!-- [1] -->
<div class="modal xomodal-confirm" id="modal-1" aria-hidden="true">

    <!-- [2] -->
    <div class="modal__overlay" tabindex="-1" data-micromodal-close>

        <!-- [3] -->
        <div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
            <header class="modal__header">
                <h2 class="modal__title" id="modal-1-title">
                    ${titre}
                </h2>

                <!-- [4] -->
                <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
            </header>

            <main class="modal__content" id="modal-1-content">
                <p>
                    ${body}
                </p>
            </main>

            <footer class="modal__footer">
                <button class="modal__btn modal__btn-primary btn__ok">Ok</button>
                <button class="modal__btn  btn__annuler" data-micromodal-close
                    aria-label="Close this dialog window">Annuler</button>
            </footer>

        </div>
    </div>
</div>
`);
        $(id_container).html(modal);
        let modal_alert = 1;
        $('.modal__close').click(function (e) {
            e.preventDefault();
            $('.xomodal-confirm').css('display', 'none');
            fonction(false);
        });
        $('.btn__ok').click(function (e) {
            e.preventDefault();
            $('.xomodal-confirm').css('display', 'none');
            fonction(true);
        });
        $('.btn__annuler').click(function (e) {
            e.preventDefault(false);
            $('.xomodal-confirm').css('display', 'none');
            fonction();
        });

    }

    //--[ Dialogue]
    xdialogue(id_container, titre, body, type, placeholder, maxlength, fonction) {
        let modal = (`
<!-- [1] -->
<div class="modal xomodal-dialogue" id="modal-1" aria-hidden="true">

    <!-- [2] -->
    <div class="modal__overlay" tabindex="-1" data-micromodal-close>

        <!-- [3] -->
        <div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
            <header class="modal__header">
                <h2 class="modal__title" id="modal-1-title">
                    ${titre}
                </h2>

                <!-- [4] -->
                <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
            </header>

            <main class="modal__content" id="modal-1-content">
                <p>
                    ${body}
                </p>
                <input type="${type}" id="input_dialogue" placeholder="${placeholder}" maxlength="${maxlength}">
            </main>
            <form action="">
                <footer class="modal__footer">



                    <button type="submit" class="modal__btn modal__btn-primary btn__ok">Valider</button>
                    <button class="modal__btn  btn__annuler" data-micromodal-close
                        aria-label="Close this dialog window">Annuler</button>
                </footer>
            </form>
        </div>
    </div>
</div>
`);
        $(id_container).html(modal);


        $('.modal__close').click(function (e) {
            e.preventDefault();
            $('.xomodal-dialogue').css('display', 'none');
        });
        $('.btn__ok').click(function (e) {
            e.preventDefault();
            $('.xomodal-dialogue').css('display', 'none');
            let val = $('#input_dialogue').val();
            fonction(val);
        });
        $('.btn__annuler').click(function (e) {
            e.preventDefault(false);
            $('.xomodal-dialogue').css('display', 'none');
        });
    }

    //--[ modale qui Renvois le code de confirmation dans l'inscription]
    renvoisCodeConfirmationInscription(id_container) {
        let xmodal = new Xmodal();
        let code_pays_change = sessionStorage.getItem('code_pays_change');
        let teNocode_change = sessionStorage.getItem('teNocode_change');
        let code_pays = sessionStorage.getItem('code_pays');
        let drapot_pays;

        console.log(code_pays_change + ',' + teNocode_change + ',' + drapot_pays)

        if (code_pays_change == '+243' && code_pays_change != null) {
            drapot_pays = "/static/educpilote/imgs/drapo_rdc.jpg";
        } else if (code_pays_change == '+244' && code_pays_change != null) {
            drapot_pays = "/static/educpilote/imgs/drapo_angola.jpg";
        } else if (code_pays_change == '+242' && code_pays_change != null) {
            drapot_pays = "/static/educpilote/imgs/drapo_brazza.jpg";
        } else if (code_pays == '+243') {
            drapot_pays = "/static/educpilote/imgs/drapo_rdc.jpg";
            code_pays_change = '+243'
        } else if (code_pays == '+242') {
            drapot_pays = "/static/educpilote/imgs/drapo_brazza.jpg";
            code_pays_change = '+242'
        } else if (code_pays == '+244') {
            drapot_pays = "/static/educpilote/imgs/drapo_angola.jpg";
            code_pays_change = '+244'
        }




        console.log(code_pays_change, teNocode_change)

        let modal = (`
<!-- [1] -->
<div class="modal_style xomodal-alert" id="modal-1" aria-hidden="true">

    <!-- [2] -->
    <div class="modal__overlay " tabindex="-1" data-micromodal-close>

        <!-- [3] -->
        <div class="modal__container m-3 round" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
            <header class="modal__header">
                <h2 class="base-color fw-bold" id="modal-1-title">
                    le code a 6 chiffre est envoyer au numéro : <span id="tel_renvois_code"></span>

                </h2>
                <button class="modal__close btn-colse" aria-label="Close modal" data-micromodal-close></button>
            </header>
            <span class="fs-6">Modifier votre numéro ou laisser le comme-ça, cliquer sur Renvoyer le code</span>

            <main class="modal__content" id="modal-1-content">
                <!--| Numéro de téléphone|-->
                <div class="row gx-1">
                    <div class="col" id="code_pays_drapo"><img class="pays_phone_number pt-1" src="${drapot_pays}"
                            alt="" srcset="" width="50" height="30"><span class="mt-4 fw-bold fs-5"
                            id="code_pays_value">${code_pays_change}</span>
                    </div>

                    <div class=" mt-3 text-end"><input class="p-3" type="number" maxlength="15" name=""
                            id="telNumber_renvois_code"></div>
                </div>
                <span class="tel_Etab_msg pt-3 text-end" id="tel_Etab_msg"></span><br><br><br><br>

                <span id="pays_value" style="visibility: hidden;"></span>
                <span class="text-end tel_Etab_msg pt-3 text-start" id="tel_Etab_msg"></span>
            </main>

            <footer class="modal__footer">
                <span class="base-color fw-bold h5 renvois_code">Renvoyer le code</span>

            </footer>

        </div>
    </div>
</div>
`);
        $(id_container).html(modal);
        $('#tel_renvois_code').text(sessionStorage.getItem('tel_Etab'));


        let modal_alert = 1;
        $('body').css('overflow', 'hidden');

        $('#code_pays_value').click(function (e) {
            e.preventDefault();
            $('.xomodal-alert').css('display', 'none');
            $('body').css('overflow', '');
            $('#zone_code_pays').css('visibility', 'visible');
            $('#zone_code_pays').show();
        });
        $('.modal__close').click(function (e) {
            e.preventDefault();
            $('.xomodal-alert').css('display', 'none');
            $('body').css('overflow', '');
        });

        //--[ recuperation de numero de télephone]
        $('.renvois_code').click(function (e) {
            e.preventDefault();
            let tel_renvois_code = $('#telNumber_renvois_code').val();
            let Tel = Websecur.ValidateTel('telNumber_renvois_code', tel_renvois_code, 15, 9, 'tel_Etab_msg');
            console.log(tel_renvois_code)

            console.log($('#code_pays_value').text() + tel_renvois_code)

            if (Tel == true || tel_renvois_code == '') {
                $('#telNumber_renvois_code').css('border', "1px solid silver");
                xmodal.loader('#zoneModale');

                if (tel_renvois_code == '') {
                    tel_renvois_code = sessionStorage.getItem('tel_Etab');
                } else {


                    tel_renvois_code = $('#code_pays_value').text() + tel_renvois_code;
                }
                let nom = sessionStorage.getItem('nom');
                let email = sessionStorage.getItem('email');


                //--[ envois de l'adresse e-mail au back-end pour l'envois de code de verification']--\\
                let myHeaders = new Headers({ 'X-Csrftoken': Csrftoken });
                let data_request = {
                    cmd: 'generverifCode',
                    email: email,
                    nom_Etab: nom,
                    tel_Etab: code_pays_change + tel_renvois_code
                }
                let myInit = {
                    method: 'POST',
                    headers: myHeaders,
                    mode: 'cors',
                    cache: 'default',
                    body: JSON.stringify(data_request)
                }
                fetch('/inscription_4/', myInit).then((res) => {

                    return res.json();

                }).then((res) => {
                    xmodal.loader_close();
                    if (res.etant == 0) {
                        sessionStorage.setItem('tel_Etab', code_pays_change + tel_renvois_code);
                        $('#tel_renvois_code').text(code_pays_change + tel_renvois_code);
                        alert('code renvoyer ' + res.codegenerer);
                        sessionStorage.setItem('codeverification', res.codegenerer)

                        if (code_pays_change == '+243' && code_pays_change != null) {
                            sessionStorage.setItem('pays', 'République démocratique du congo')

                        } else if (code_pays_change == '+244' && code_pays_change != null) {
                            sessionStorage.setItem('pays', 'Angola')

                        } else if (code_pays_change == '+242' && code_pays_change != null) {
                            sessionStorage.setItem('pays', 'République du congo')

                        }

                        window.location.reload();
                    } else {
                        xmodal.xalert('#zoneModale', 'Régénération de code de versification ', 'Une erreur est survenu');

                    }

                })

            } else {

            }

        });

    }

    deleteElement(idElement) {
        $(idElement).css('background', 'red');
        $(idElement).css('color', 'white');
        $(idElement).hide(1000);
    }

    xAjouteUser(id_container, titre, labelbuttonAction, action, dataDefault = {},) {
        let xmodal = new Xmodal();
        let modal_add = (`
            <!-- [1] -->
            <div class="modal_style blancs xomodal-alert" id="modal-1" aria-hidden="true">

                <!-- [2] -->
                <div class="modal__overlay" tabindex="-1" data-micromodal-close>

                    <!-- [3] -->
                    <div id="modal__container" class="modal__container m-3 shadow" role="dialog" aria-modal="true"
                        aria-labelledby="modal-1-title">
                        <header class="modal__header">
                            <h2 class="modal__title base-color" id="modal-1-title">
                                ${titre}
                            </h2>

                            <!-- [4] -->
                            <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
                        </header>

                        <main class="modal__content" id="modal-1-content">
                            
                            <input class="w-100 inputx" type="text" name="" id="NomUtilisateur" placeholder="Nom Utilisateur">
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msguser_nomutilisateur">regre</div>
                            
                            <input class="w-100 inputx mt-2" type="text" name="" id="user_Email" placeholder="Email">
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msguser_Email">regre</div>

                            <input class="w-100 inputx mt-2" type="text" name="" id="userFonction" placeholder="Fonction">
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msguser_fonction">regre</div>

                            <input class="w-100 inputx mt-2" type="text" name="" id="userTelephone" placeholder="Téléphone">
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msguserTelephone">regre</div>
                            
                            <select class="w-100 inputx mt-2" name="" id="user_categorie" placeholder="categorie">
                                <option value="">Catégorie</option>
                            </select>
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msguserCategorie">regre</div>

                            <select class="w-100 inputx mt-2" name="" id="user_poste">
                                <option value="">Poste</option>
                            </select>
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msguserPost">regre</div>
                            
                            <select class="w-100 inputx mt-2" name="" id="user_service">
                                <option value="">Service</option>
                            </select>
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msguserService">regre</div>

                            <select class="w-100 inputx mt-2" name="" id="userDroitDashboard">
                                <option value="">Droit Dashboard</option>
                                <option value="*">* (Tout dashboard)</option>
                                <option value="Chef Ressort">Chef Ressort</option>
                                <option value="Chef Antenne">Chef Antenne</option>
                                <option value="">Non accorder</option>
                            </select>

                            <!--| Champ dinamique droitDashRessort|-->
                            <select style="visibility: hidden;" class="w-100 inputx mt-2" name="" id="droitDashRessort">
                                <option value="">Ressort</option>
                            </select>
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msguserdroitDashRessort">regre</div>
                            
                            <!--| Champ dinamique droitDashAntenne|-->
                            <select style="visibility: hidden;" class="w-100 inputx mt-2" name="" id="droitDashAntenne">
                                <option value="">Antenne</option>
                            </select>
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msguserdroitDashAntenne">regre</div>

                            <br><br>

                            <p>Informations de connexion</p>
                            <input class="w-100 " type="text" name="" id="userLogin" placeholder="Login">
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msguserLogin"></div>
                            <br>
                            
                            <form name="form_actif" id="form_actif">
                                <label for="useractif">Actif</label>
                                <input type="checkbox" name="actif" id="useractif">
                            </form>
                        </main>

                        <footer class="modal__footer">
                            <i style="visibility: hidden;" class="fa-solid fa-spinner fs-5 p-2 action_spinner" id="action_spinner"></i>
                            <button class="modal__btn me-2 bg-black modal__closex">Fermer</button>
                            <button class="bouton_modale ms-2 mt-2" id="btn_addUser" ><i class="fa-solid fa-right-to-bracket  text-blanctext-white pe-3"></i> ${labelbuttonAction}</button>

                        </footer>

                    </div>
                </div>
            </div>
            `);
        let modal_update = (`
            <!-- [1] -->
            <div class="modal_style blancs xomodal-alert" id="modal-1" aria-hidden="true">

                <!-- [2] -->
                <div class="modal__overlay" tabindex="-1" data-micromodal-close>

                    <!-- [3] -->
                    <div id="modal__container" class="modal__container m-3 shadow" role="dialog" aria-modal="true"
                        aria-labelledby="modal-1-title">
                        <header class="modal__header">
                            <h2 class="modal__title base-color" id="modal-1-title">
                                ${titre}
                            </h2>

                            <!-- [4] -->
                            <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
                        </header>

                        <main class="modal__content" id="modal-1-content">
                            <p>Informations personnelle</p>
                            
                            <span class="text-min">Nom Utilisateur</span>
                            <input class="w-100 inputx" value="${dataDefault.nomutilisateur}" type="text" name="" id="NomUtilisateur" placeholder="Nom Utilisateur">
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msguser_nomutilisateur">regre</div>
                            
                            <span class="text-min">Email</span>
                            <input class="w-100 inputx " value="${dataDefault.email}" type="text" name="" id="user_Email" placeholder="Email">
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msguser_Email">regre</div>

                            <span class="text-min">Fonction</span>
                            <input class="w-100 inputx " value="${dataDefault.Fonct}" type="text" name="" id="userFonction" placeholder="Fonction">
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msguser_fonction">regre</div>

                            <span class="text-min">Téléphone</span>
                            <input  class="w-100 inputx " value="${dataDefault.telephone}" type="text" name="" id="userTelephone" placeholder="Téléphone">
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msguserTelephone">regre</div>

                            <span class="text-min">Categorie</span>
                            <select class="w-100 inputx " name="" id="user_categorie" placeholder="categorie">
                                <option value="${dataDefault.utilisateur_idusercat}">${dataDefault.userCathegorie}</option>
                            </select>
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msguserCategorie">regre</div>

                            <span class="text-min">Poste</span>
                            <select class="w-100 inputx " name="" id="user_poste">
                            <option value="${dataDefault.utilisateur_idposte}">${dataDefault.utilisateur_poste}</option>
                            </select>
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msguserPost"></div>

                            <span class="text-min">Service</span>
                            <select class="w-100 inputx " name="" id="user_service">
                                <option value="${dataDefault.utilisateur_idservice}">${dataDefault.utilisateur_service}</option>
                            </select>
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msguserService">regre</div>

                            <span class="text-min">Droit Dashboard</span>
                            <select class="w-100 inputx " name="" id="userDroitDashboard">
                                <option value="${dataDefault.droit_dash}">${dataDefault.Labeldroit_dash}</option>
                                <option value="*">* (Tout dashboard)</option>
                                <option value="Chef Ressort">Chef Ressort</option>
                                <option value="Chef Antenne">Chef Antenne</option>
                                <option value="">Non accorder</option>
                            </select>

                            <!--| Champ dinamique droitDashRessort|-->
                            <select style="visibility: hidden;" class="w-100 inputx mt-2" name="" id="droitDashRessort">
                                <option value="">Ressort</option>
                            </select>
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msguserdroitDashRessort"></div>

                            <!--| Champ dinamique droitDashAntenne|-->
                            <select style="visibility: hidden;" class="w-100 inputx mt-2" name="" id="droitDashAntenne">
                                <option value="">Antenne</option>
                            </select>
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msguserdroitDashAntenne"></div>
                            
                            <br><br>

                            <p>Informations de connexion</p>
                            <span class="text-min">Login</span>
                            <input class="w-100 inputx" value="${dataDefault.login}" type="text" name="" id="userLogin" placeholder="Login">
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msguserLogin"></div>

                            <style>
                                #rei_password:hover{
                                color:rgb(238, 113, 104);
                            }
                            </style>
                            <p id="rei_password" class="btn">Réinitialiser le mot de passe <i class="fa-solid fa-rotate-right ms-2 icon_rein_password"></i></p>
                            <br>
                            
                            <form name="form_actif" id="form_actif">
                                <label for="useractif" >Actif</label>
                                <input type="checkbox" name="actif" id="useractif">
                            </form>
                            
                        </main>

                        <footer class="modal__footer" >
                            <i style="visibility: hidden;" class="fa-solid fa-spinner fs-5 p-2 action_spinner" id="action_spinner"></i>
                            <button class="modal__btn bg-black modal__closex">Fermer</button>
                            <button class="modal__btn bg-black " id="btn_deleteuser"><i class="fa-solid fa-trash-can  pe-3"></i>Suprimé</button>
                            <button class="bouton_modale ms-1" id="btn_addUser" ><i class="fa-solid fa-pen  text-blanctext-white pe-3"></i>${labelbuttonAction}</button>

                        </footer>

                    </div>
                </div>
            </div>
            `);
        let modal;
        let _action;
        let id_user_update = "";

        if (action == 'modifier') {
            id_user_update = dataDefault.idutilisateur;
            modal = modal_update;
            _action = 'modifier';


            $(id_container).html(modal);

            //--|verification de l'actif de l'use|
            if (dataDefault.active == "Activé") {
                $('#useractif').attr('checked', 'checked');
            }
        } else {

            modal = modal_add;
            $(id_container).html(modal);
            _action = 'ajoute';
        }

        //--|Validation de données des l'utilisateur|


        $('#droitDashAntenne').hide();
        $('#droitDashRessort').hide();

        if (action == 'modifier') {
            $('#btn_deleteuser').show();
        } else {
            $('#btn_deleteuser').hide();
        }


        //--|Validation de données des l'utilisateur|
        $('#btn_addUser').click(function (e) {

            $('#action_spinner').attr("class", "fa-solid fa-spinner fs-5 p-2 action_spinner");
            $('#action_spinner').css('color', "black");

            //--<Informations personnel>
            let _WebsecurFrondEnd_validateData = new WebsecurFrondEnd_validateData();

            let form_valide = true;
            let nomutilisateur = $('#NomUtilisateur').val();
            let _nomutilisateur = _WebsecurFrondEnd_validateData.ValidateText(nomutilisateur, 'NomUtilisateur', 100, 4, 'msguser_nomutilisateur');
            if (_nomutilisateur != true) {

                form_valide = false;
            }

            let user_Email = $('#user_Email').val();
            let _user_Email = _WebsecurFrondEnd_validateData.ValidateEmail(user_Email, 'user_Email', 'Veuillez saisir une Email valide', 'msguser_Email');
            if (_user_Email != true) {

                form_valide = false;
            }

            let userFonction = $('#userFonction').val();
            let _userFonction = _WebsecurFrondEnd_validateData.ValidateText(userFonction, 'userFonction', 100, 2, 'msguser_fonction');
            if (_userFonction != true) {

                form_valide = false;
            }

            let userTelephone = $('#userTelephone').val();
            let _userTelephone = _WebsecurFrondEnd_validateData.ValidateTel(userTelephone, 'userTelephone', 15, 9, 'msguserTelephone');
            if (_userTelephone != true) {

                form_valide = false;
            }
            let user_categorie = $('#user_categorie').val();
            let _user_categorie = _WebsecurFrondEnd_validateData.validateChampSelect(user_categorie, 'user_categorie', 'Valeur invalide', 'msguserCategorie')
            if (_user_categorie != true) {

                form_valide = false;
            }

            let user_poste = $('#user_poste').val();
            let _user_poste = _WebsecurFrondEnd_validateData.validateChampSelect(user_poste, 'user_poste', 'Valeur invalide', 'msguserPost')
            if (_user_poste != true) {

                form_valide = false;
            }

            let user_service = $('#user_service').val();
            let _user_service = _WebsecurFrondEnd_validateData.validateChampSelect(user_service, 'user_service', 'Valeur invalide', 'msguserService')
            if (_user_service != true) {

                form_valide = false;
            }




            let is_droit_dash = 0;
            let userDroitDashboardx = $('#userDroitDashboard').val();
            if (userDroitDashboardx == "Chef Ressort") {
                is_droit_dash = 2;
                let droitDashRessort = $('#droitDashRessort').val();
                let _droitDashRessort = _WebsecurFrondEnd_validateData.validateChampSelect(droitDashRessort, 'userDroitDashboard', 'Valeur invalide', 'msguserdroitDashRessort')
                if (_droitDashRessort == true) {

                    userDroitDashboardx = {
                        'droit': $('#userDroitDashboard').val(),
                        'element_droit': $('#droitDashRessort').val(),
                    }

                } else {

                    form_valide = false;
                }

            } else if (userDroitDashboardx == "Chef Antenne") {
                is_droit_dash = 2;
                let droitDashAntenne = $('#droitDashAntenne').val();
                let _droitDashAntenne = _WebsecurFrondEnd_validateData.validateChampSelect(droitDashAntenne, 'droitDashAntenne', 'Valeur invalide', 'msguserdroitDashAntenne')
                if (_droitDashAntenne == true) {

                    userDroitDashboardx = {
                        'droit': $('#userDroitDashboard').val(),
                        'element_droit': $('#droitDashAntenne').val(),
                    }

                } else {

                    form_valide = false;
                }

            } else if (userDroitDashboardx == "*") {
                is_droit_dash = 2;
                userDroitDashboardx = {
                    'droit': $('#userDroitDashboard').val(),
                    'element_droit': '*',
                }
            }

            //--<Informations de connexion>
            let login = $('#userLogin').val();
            let _login = _WebsecurFrondEnd_validateData.ValidateText(login, 'userLogin', 100, 4, 'msguserLogin');
            if (_login != true) {

                form_valide = false;
            }

            let actif = $('#form_actif').serializeArray();
            if (actif.length > 0) {
                actif = "Activé";
            } else {
                actif = "Désactivé";
            }
            console.log(form_valide);
            console.log(actif);

            //--|Envoi des données des l'utilisateur|
            if (form_valide == true) {
                let data_request = {
                    cmd: "addUser",
                    action: _action,
                    is_droit_dash: is_droit_dash,
                    id_user_update: id_user_update,
                    data_utilisateur: {
                        'nomutilisateur': nomutilisateur,
                        'user_Email': user_Email,
                        'userFonction': userFonction,
                        'userTelephone': userTelephone,
                        'user_categorie': user_categorie,
                        'user_poste': user_poste,
                        'user_service': user_service,
                        'userDroitDashboardx': userDroitDashboardx,
                        'login': login,
                        'actif': actif
                    }
                }
                $('.action_spinner').css('visibility', 'visible');
                let a = 0;
                sessionStorage.setItem('action_spinner', 1);

                setInterval(function () {
                    let x = sessionStorage.getItem('action_spinner');
                    if (x == 1) {
                        a += 1
                        document.querySelector('.action_spinner').style.transform = `rotate(${a}deg)`;
                    }
                }, 0.500);

                $.ajax({
                    type: "post",
                    url: "php/user_manage.php",
                    data: data_request,
                    dataType: "json",
                    success: function (response) {
                        sessionStorage.setItem('action_spinner', 0);

                        if (response.code == 0) {
                            $('#action_spinner').attr("class", "fa-solid fa-check fs-5 p-2 action_spinner");
                            $('#action_spinner').css('color', "green");
                            $('#action_spinner').css('transform', "180deg");
                        } else {
                            $('#action_spinner').attr("class", "fa-solid fa-circle-exclamation fs-5 p-2 action_spinner");
                            $('#action_spinner').css('color', "red");
                            xmodal.xalert('.zone_modale', "Modification Utilisateur", "Opération échoué")
                        }

                    }
                });
                console.log(data_request)
            }


        });

        //--|Champ dinamique|
        $('#userDroitDashboard').change(function (e) {
            let userDroitDashboard = $('#userDroitDashboard').val();
            if (userDroitDashboard == "*") {
                $('#droitDashRessort').css('visibility', 'hidden');
                $('#droitDashAntenne').css('visibility', 'hidden');

                $('#droitDashRessort').hide();
                $('#droitDashAntenne').hide();
                userDroitDashboard = "*";
            } else if (userDroitDashboard == "Chef Ressort") {

                $('#droitDashRessort').css('visibility', 'visible');
                $('#droitDashAntenne').css('visibility', 'hidden');

                $('#droitDashAntenne').hide();
                $('#droitDashRessort').show(1000);
            } else if (userDroitDashboard == "Chef Antenne") {
                $('#droitDashAntenne').css('visibility', 'visible');
                $('#droitDashRessort').css('visibility', 'hidden');

                $('#droitDashRessort').hide();
                $('#droitDashAntenne').show(1000);
            }
        })

        //--<Supression de l'utilisateur>
        $('#btn_deleteuser').click(function (e) {
            e.preventDefault();
            if (dataDefault.idutilisateur != '') {
                let data_request = {
                    cmd: 'deleteUser',
                    id_user_delete: dataDefault.idutilisateur
                }
                $('.action_spinner').css('visibility', 'visible');
                let a = 0;
                sessionStorage.setItem('action_spinner', 1);

                setInterval(function () {
                    let x = sessionStorage.getItem('action_spinner');
                    if (x == 1) {
                        a += 1
                        document.querySelector('.action_spinner').style.transform = `rotate(${a}deg)`;
                    }
                }, 0.500);

                $.ajax({
                    type: "post",
                    url: "php/user_manage.php",
                    data: data_request,
                    dataType: "json",
                    success: function (response) {
                        sessionStorage.setItem('action_spinner', 0);

                        if (response.code == 0) {
                            $('.xomodal-alert').css('display', 'none');
                            $('body').css('overflow', '');
                            xmodal.deleteElement('#user' + dataDefault.idutilisateur)
                        } else {
                            xmodal.xalert('.zone_modale', "Supression Utilisateur", "Opération échoué")
                        }

                    }
                });

            } else {
                alert('Utilisateur inconnu')
            }


        });

        //--| Réinitialisation de mot de passe |
        $('#rei_password').click(function (e) {
            e.preventDefault();

            if (dataDefault.idutilisateur != '') {
                let data_request = {
                    cmd: 'rein_password',
                    id_user_rein_password: dataDefault.idutilisateur
                }
                //$('.action_spinner').css('visibility', 'visible');
                let a = 0;
                sessionStorage.setItem('icon_rein_password', 1);

                setInterval(function () {
                    let x = sessionStorage.getItem('icon_rein_password');
                    if (x == 1) {
                        a += 1
                        document.querySelector('.icon_rein_password').style.transform = `rotate(${a}deg)`;
                    }
                }, 0.500);

                $.ajax({
                    type: "post",
                    url: "php/user_manage.php",
                    data: data_request,
                    dataType: "json",
                    success: function (response) {
                        sessionStorage.setItem('icon_rein_password', 0);

                        if (response.code == 0) {
                            xmodal.xalert('.zone_modale', "Réinitialisation de mot de passe", "Opération réussi")
                        } else {
                            xmodal.xalert('.zone_modale', "Réinitialisation de mot de passe", "Opération échoué")
                        }

                    }
                });

            } else {
                alert('Utilisateur inconnu')
            }
        });

        //--<Gestion de modale>
        let modal_alert = 1;
        $('body').css('overflow', 'hidden');
        $('.modal__close').click(function (e) {
            e.preventDefault();

            $('.xomodal-alert').css('display', 'none');
            $('body').css('overflow', '');
        });
        $('.modal__closex').click(function (e) {

            e.preventDefault();
            $('.xomodal-alert').css('display', 'none');
            $('body').css('overflow', '');
        });

    }

    xModalRessort(id_container, titre, action, dataDefault = []) {
        let xmodal = new Xmodal();
        let modal_add = (`
            <!-- [1] -->
            <div class="modal_style blancs xomodal-alert" id="modal-1" aria-hidden="true">

                <!-- [2] -->
                <div class="modal__overlay" tabindex="-1" data-micromodal-close>

                    <!-- [3] -->
                    <div id="modal__container" class="modal__container m-3 shadow" role="dialog" aria-modal="true"
                        aria-labelledby="modal-1-title">
                        <header class="modal__header">
                            <h2 class="modal__title base-color" id="modal-1-title">
                                ${titre}
                            </h2>

                            <!-- [4] -->
                            <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
                        </header>

                        <main class="modal__content" id="modal-1-content">
                            
                            <input class="w-100 inputx" type="text" name="" id="LibelleRessort" placeholder="Libellé Ressort">
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msgLibelleRessort">regre</div>
                            
                            <input class="w-100 inputx mt-2" type="text" name="" id="CodeRessort" placeholder="Code Ressort">
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msgCodeRessort">regre</div>

                        </main>

                        <footer class="modal__footer">
                            <i style="visibility: hidden;" class="fa-solid fa-spinner fs-5 p-2 action_spinner" id="action_spinner"></i>
                            <button class="modal__btn me-2 bg-black modal__closex">Fermer</button>
                            <button class="bouton_modale ms-2 mt-2" id="btn_valide_ressort" ><i class="fa-solid fa-right-to-bracket  text-blanctext-white pe-3"></i> ${action}</button>

                        </footer>

                    </div>
                </div>
            </div>
        `);
        let modal_update = (`
            <!-- [1] -->
            <div class="modal_style blancs xomodal-alert" id="modal-1" aria-hidden="true">

                <!-- [2] -->
                <div class="modal__overlay" tabindex="-1" data-micromodal-close>

                    <!-- [3] -->
                    <div id="modal__container" class="modal__container m-3 shadow" role="dialog" aria-modal="true"
                        aria-labelledby="modal-1-title">
                        <header class="modal__header">
                            <h2 class="modal__title base-color" id="modal-1-title">
                                ${titre}
                            </h2>

                            <!-- [4] -->
                            <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
                        </header>

                        <main class="modal__content" id="modal-1-content">
                          

                            <span class="text-min">Code Ressort</span>
                            <input class="w-100 inputx mt-2" type="text" value="${dataDefault[1]}" name="" id="CodeRessort" placeholder="Code Ressort">
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msgCodeRessort">regre</div>

                            <span class="text-min">Libellé Ressort</span>
                            <input class="w-100 inputx" type="text" value="${dataDefault[2]}" name="" id="LibelleRessort" placeholder="Libellé Ressort">
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msgLibelleRessort">regre</div>
                            
                            <div>Plus <i class="fa-solid fa-angle-right fa-angle-bottom text-blanc fs-icon-min ps-3"></i></div>
                            <div class="mt-3 text-min">Nombres d'antennes  : <span>${dataDefault[3]}</span></div>
                        </main>

                        <footer class="modal__footer">
                            <i style="visibility: hidden;" class="fa-solid fa-spinner fs-5 p-2 action_spinner" id="action_spinner"></i>
                            <button class="modal__btn me-2 bg-black modal__closex">Fermer</button>
                            <button class="modal__btn bg-black " id="btn_deletressort"><i class="fa-solid fa-trash-can  pe-3"></i>Suprimé</button>
                            <button class="bouton_modale ms-1 mt-2" id="btn_valide_ressort" ><i class="fa-solid fa-pen  text-blanctext-white pe-3"></i> ${action}</button>

                        </footer>

                    </div>
                </div>
            </div>
        `);

        let modal;
        let _action;
        let id_ressort_update = "";

        if (action == 'modifier') {
            id_ressort_update = dataDefault[0];
            modal = modal_update;
            _action = 'modifier';

            $(id_container).html(modal);
        } else {

            modal = modal_add;
            _action = 'ajoute';
            $(id_container).html(modal);

        }

        //--|Validation de données de ressort|
        $('#btn_valide_ressort').click(function (e) {
            e.preventDefault();
            let _WebsecurFrondEnd_validateData = new WebsecurFrondEnd_validateData();

            let form_valide = true;
            let LibelleRessort = $('#LibelleRessort').val();
            let _LibelleRessort = _WebsecurFrondEnd_validateData.ValidateText(LibelleRessort, 'LibelleRessort', 100, 4, 'msgLibelleRessort');
            if (_LibelleRessort != true) {

                form_valide = false;
            }

            let CodeRessort = $('#CodeRessort').val();
            let _CodeRessort = _WebsecurFrondEnd_validateData.ValidateText(CodeRessort, 'CodeRessort', 100, 4, 'msgCodeRessort');
            if (_CodeRessort != true) {

                form_valide = false;
            }

            if (form_valide == true) {
                let data_request = {
                    'cmd': 'gestionRessort',
                    '_action': _action,
                    'id_ressort_update': id_ressort_update,
                    'CodeRessort': CodeRessort,
                    'LibelleRessort': LibelleRessort
                }

                //--|loader|
                $('.action_spinner').css('visibility', 'visible');
                let a = 0;
                sessionStorage.setItem('action_spinner', 1);
                setInterval(function () {
                    let x = sessionStorage.getItem('action_spinner');
                    if (x == 1) {
                        a += 1
                        document.querySelector('.action_spinner').style.transform = `rotate(${a}deg)`;
                    }
                }, 0.500);

                $.ajax({
                    type: "post",
                    url: "php/manage_ressort.php",
                    data: data_request,
                    dataType: "json",
                    success: function (response) {
                        sessionStorage.setItem('action_spinner', 0);
                        if (response.code == 0) {
                            $('#action_spinner').attr("class", "fa-solid fa-check fs-5 p-2 action_spinner");
                            $('#action_spinner').css('color', "green");

                        } else if (response.code == 2) {
                            $('#action_spinner').attr("class", "fa-solid fa-circle-exclamation fs-5 p-2 action_spinner");
                            $('#action_spinner').css('color', "red");
                            xmodal.xalert('.zone_modale', "Ajoute Ressort", "Opération échoué, Ressort existe")
                        }
                        else {
                            $('#action_spinner').attr("class", "fa-solid fa-circle-exclamation fs-5 p-2 action_spinner");
                            $('#action_spinner').css('color', "red");
                            xmodal.xalert('.zone_modale', "Gestion Ressort", "Opération échoué")
                        }
                    }
                });
                console.log(data_request)

            }

        });

        //--<Supression de ressort>
        $('#btn_deletressort').click(function (e) {
            e.preventDefault();
            if (dataDefault[0] != '') {
                let data_request = {
                    cmd: 'deleteressort',
                    id_ressort_delete: dataDefault[0]
                }
                $('.action_spinner').css('visibility', 'visible');
                let a = 0;
                sessionStorage.setItem('action_spinner', 1);

                setInterval(function () {
                    let x = sessionStorage.getItem('action_spinner');
                    if (x == 1) {
                        a += 1
                        document.querySelector('.action_spinner').style.transform = `rotate(${a}deg)`;
                    }
                }, 0.500);

                $.ajax({
                    type: "post",
                    url: "php/manage_ressort.php",
                    data: data_request,
                    dataType: "json",
                    success: function (response) {
                        sessionStorage.setItem('action_spinner', 0);

                        if (response.code == 0) {
                            $('.xomodal-alert').css('display', 'none');
                            $('body').css('overflow', '');
                            xmodal.deleteElement('#user' + dataDefault[0])
                        } else {
                            xmodal.xalert('.zone_modale', "Supression Utilisateur", "Opération échoué")
                        }

                    }
                });

            } else {
                alert('Utilisateur inconnu')
            }


        })

        let modal_alert = 1;
        $('body').css('overflow', 'hidden');
        $('.modal__close').click(function (e) {
            e.preventDefault();

            $('.xomodal-alert').css('display', 'none');
            $('body').css('overflow', '');
        });
        $('.modal__closex').click(function (e) {

            e.preventDefault();
            $('.xomodal-alert').css('display', 'none');
            $('body').css('overflow', '');
        });
    }

    xModalAntenne(id_container, titre, action, dataDefault = []) {
        let xmodal = new Xmodal();
        let modal_add = (`
            <!-- [1] -->
            <div class="modal_style blancs xomodal-alert" id="modal-1" aria-hidden="true">

                <!-- [2] -->
                <div class="modal__overlay" tabindex="-1" data-micromodal-close>

                    <!-- [3] -->
                    <div id="modal__container" class="modal__container m-3 shadow" role="dialog" aria-modal="true"
                        aria-labelledby="modal-1-title">
                        <header class="modal__header">
                            <h2 class="modal__title base-color" id="modal-1-title">
                                ${titre}
                            </h2>

                            <!-- [4] -->
                            <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
                        </header>

                        <main class="modal__content" id="modal-1-content">

                            
                            <input class="w-100 inputx" type="text" name="" id="codeAntenne" placeholder="Code Antenne">
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msgCodeAntenne">regre</div>
                        
                            
                            <input class="w-100 inputx mt-2"  type="text" name="" id="LibAntenne" placeholder="Libellé">
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msgLibantenne"></div>

                            
                            <select " class="w-100 inputx mt-2" name="" id="ressortAntenne">
                                <option value="">Ressort</option>
                            </select>
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msgRessortAntenne"></div>

                            
                        </main>

                        <footer class="modal__footer">
                            <i style="visibility: hidden;" class="fa-solid fa-spinner fs-5 p-2 action_spinner" id="action_spinner"></i>
                            <button class="modal__btn me-2 bg-black modal__closex">Fermer</button>
                            <button class="bouton_modale ms-2 mt-2" id="btn_valide_antenne" ><i class="fa-solid fa-right-to-bracket  text-blanctext-white pe-3"></i> ${action}</button>

                        </footer>

                    </div>
                </div>
            </div>
        `);
        let modal_update = (`
            <!-- [1] -->
            <div class="modal_style blancs xomodal-alert" id="modal-1" aria-hidden="true">

                <!-- [2] -->
                <div class="modal__overlay" tabindex="-1" data-micromodal-close>

                    <!-- [3] -->
                    <div id="modal__container" class="modal__container m-3 shadow" role="dialog" aria-modal="true"
                        aria-labelledby="modal-1-title">
                        <header class="modal__header">
                            <h2 class="modal__title base-color" id="modal-1-title">
                                ${titre}
                            </h2>

                            <!-- [4] -->
                            <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
                        </header>

                        <main class="modal__content" id="modal-1-content">

                            <span class="text-min">Code Antenne</span>
                            <input class="w-100 inputx" value="${dataDefault[1]}" type="text" name="" id="codeAntenne" placeholder="Code Antenne">
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msgCodeAntenne">regre</div>
                        
                            <span class="text-min">Libellé</span>
                            <input class="w-100 inputx mt-2" value="${dataDefault[2]}" type="text" name="" id="LibAntenne" placeholder="Libellé">
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msgLibantenne"></div>

                            <span class="text-min">Ressort</span>
                            <select " class="w-100 inputx mt-2" name="" id="ressortAntenne">
                                <option value="${dataDefault[3]}">${dataDefault[4]}</option>
                            </select>
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msgRessortAntenne"></div>
                            
                            <br>
                            <div>Plus <i class="fa-solid fa-angle-right fa-angle-bottom text-blanc fs-icon-min ps-3"></i></div>
                            <div class="mt-3 text-min">Nombres des Posts : <span>${dataDefault[5]}</span></div>
                        </main>

                        <footer class="modal__footer">
                            <i style="visibility: hidden;" class="fa-solid fa-spinner fs-5 p-2 action_spinner" id="action_spinner"></i>
                            <button class="modal__btn me-2 bg-black modal__closex">Fermer</button>
                            <button class="modal__btn bg-black " id="btn_deletAntenne"><i class="fa-solid fa-trash-can  pe-3"></i>Suprimé</button>
                            <button class="bouton_modale ms-1 mt-2" id="btn_valide_antenne" ><i class="fa-solid fa-pen  text-blanctext-white pe-3"></i> ${action}</button>

                        </footer>

                    </div>
                </div>
            </div>
        `);

        let modal;
        let _action;
        let id_antenne_update = "";

        if (action == 'Modifier') {
            id_antenne_update = dataDefault[0];
            modal = modal_update;
            _action = 'modifier';

            $(id_container).html(modal);
        } else {

            modal = modal_add;
            _action = 'ajoute';
            $(id_container).html(modal);

        }
        //--|Recuperations des informations|
        let data_requestx = {
            "cmd": 'getInfosADDuser',
        }
        $.ajax({
            type: "post",
            url: "php/user_manage.php",
            data: data_requestx,
            dataType: "json",
            success: function (response) {
                if (response.code == 0) {

                    //--| definitions des ressort dans le champ droit dash ressort|
                    if (response.ressorts.length != 0) {
                        let x = 0;
                        while (x < response.ressorts.length) {
                            $('#ressortAntenne').append(`<option value="${response.ressorts[x].Idressort}">${response.ressorts[x].Libressort}</option>`);
                            x += 1;
                        }
                    }


                }
                console.log(response)
            }
        });



        //--|Validation de données de l'antenne|
        $('#btn_valide_antenne').click(function (e) {
            e.preventDefault();
            let _WebsecurFrondEnd_validateData = new WebsecurFrondEnd_validateData();

            let form_valide = true;
            let LibelleAntenne = $('#LibAntenne').val();
            let _LibelleAntenne = _WebsecurFrondEnd_validateData.ValidateText(LibelleAntenne, 'LibAntenne', 100, 4, 'msgLibantenne');
            if (_LibelleAntenne != true) {

                form_valide = false;
            }

            let codeAntenne = $('#codeAntenne').val();
            let _codeAntenne = _WebsecurFrondEnd_validateData.ValidateText(codeAntenne, 'codeAntenne', 100, 4, 'msgCodeAntenne');
            if (_codeAntenne != true) {

                form_valide = false;
            }

            let ressortAntenne = $('#ressortAntenne').val();
            let _ressortAntenne = _WebsecurFrondEnd_validateData.ValidateText(ressortAntenne, 'ressortAntenne', 100, 1, 'msgRessortAntenne');
            if (_ressortAntenne != true) {

                form_valide = false;
            }


            if (form_valide == true) {
                let data_request = {
                    'cmd': 'gestionAntenne',
                    '_action': _action,
                    'id_antenne_update': id_antenne_update,
                    'codeAntenne': codeAntenne,
                    'LibelleAntenne': LibelleAntenne,
                    'id_ressortAntenne': ressortAntenne
                }

                //--|loader|
                $('.action_spinner').css('visibility', 'visible');
                let a = 0;
                sessionStorage.setItem('action_spinner', 1);
                setInterval(function () {
                    let x = sessionStorage.getItem('action_spinner');
                    if (x == 1) {
                        a += 1
                        document.querySelector('.action_spinner').style.transform = `rotate(${a}deg)`;
                    }
                }, 0.500);

                $.ajax({
                    type: "post",
                    url: "php/manage_ressort.php",
                    data: data_request,
                    dataType: "json",
                    success: function (response) {
                        sessionStorage.setItem('action_spinner', 0);
                        if (response.code == 0) {
                            $('#action_spinner').attr("class", "fa-solid fa-check fs-5 p-2 action_spinner");
                            $('#action_spinner').css('color', "green");

                        } else if (response.code == 2) {
                            $('#action_spinner').attr("class", "fa-solid fa-circle-exclamation fs-5 p-2 action_spinner");
                            $('#action_spinner').css('color', "red");
                            xmodal.xalert('.zone_modale', "Ajoute Ressort", "Opération échoué, Ressort existe")
                        }
                        else {
                            $('#action_spinner').attr("class", "fa-solid fa-circle-exclamation fs-5 p-2 action_spinner");
                            $('#action_spinner').css('color', "red");
                            xmodal.xalert('.zone_modale', "Gestion Ressort", "Opération échoué")
                        }
                    }
                });
                console.log(data_request)

            }

        });

        //--<Supression de ressort>
        $('#btn_deletAntenne').click(function (e) {
            e.preventDefault();
            if (dataDefault[0] != '') {
                let data_request = {
                    cmd: 'deleteAntenne',
                    id_antenne_delete: dataDefault[0]
                }
                $('.action_spinner').css('visibility', 'visible');
                let a = 0;
                sessionStorage.setItem('action_spinner', 1);

                setInterval(function () {
                    let x = sessionStorage.getItem('action_spinner');
                    if (x == 1) {
                        a += 1
                        document.querySelector('.action_spinner').style.transform = `rotate(${a}deg)`;
                    }
                }, 0.500);

                $.ajax({
                    type: "post",
                    url: "php/manage_ressort.php",
                    data: data_request,
                    dataType: "json",
                    success: function (response) {
                        sessionStorage.setItem('action_spinner', 0);

                        if (response.code == 0) {
                            $('.xomodal-alert').css('display', 'none');
                            $('body').css('overflow', '');
                            xmodal.deleteElement('#user' + dataDefault[0])
                        } else {
                            xmodal.xalert('.zone_modale', "Supression Utilisateur", "Opération échoué")
                        }

                    }
                });

            } else {
                alert('Utilisateur inconnu')
            }


        })

        let modal_alert = 1;
        $('body').css('overflow', 'hidden');
        $('.modal__close').click(function (e) {
            e.preventDefault();

            $('.xomodal-alert').css('display', 'none');
            $('body').css('overflow', '');
        });
        $('.modal__closex').click(function (e) {

            e.preventDefault();
            $('.xomodal-alert').css('display', 'none');
            $('body').css('overflow', '');
        });
    }

    xModalPoste(id_container, titre, action, dataDefault = []) {
        let xmodal = new Xmodal();
        let modal_add = (`
            <!-- [1] -->
            <div class="modal_style blancs xomodal-alert" id="modal-1" aria-hidden="true">

                <!-- [2] -->
                <div class="modal__overlay" tabindex="-1" data-micromodal-close>

                    <!-- [3] -->
                    <div id="modal__container" class="modal__container m-3 shadow" role="dialog" aria-modal="true"
                        aria-labelledby="modal-1-title">
                        <header class="modal__header">
                            <h2 class="modal__title base-color" id="modal-1-title">
                                ${titre}
                            </h2>

                            <!-- [4] -->
                            <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
                        </header>

                        <main class="modal__content" id="modal-1-content">

                            <span class="text-min">Code Poste</span>
                            <input class="w-100 inputx"  type="text" name="" id="codePoste" >
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msgCodePoste"></div>
                        
                            <span class="text-min">Libellé</span>
                            <input class="w-100 inputx "  type="text" name="" id="LibPoste" >
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msgLibposte"></div>

                            <span class="text-min mt-2">Antenne</span>
                            <select " class="w-100 inputx " name="" id="AntennePoste">
                                <option value=""></option>
                            </select>
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msgantennePoste"></div>
                            
                        </main>

                        <footer class="modal__footer">
                            <i style="visibility: hidden;" class="fa-solid fa-spinner fs-5 p-2 action_spinner" id="action_spinner"></i>
                            <button class="modal__btn me-2 bg-black modal__closex">Fermer</button>
                            <button class="bouton_modale ms-1 mt-2" id="btn_valide_poste" ><i class="fa-solid fa-pen  text-blanctext-white pe-3"></i> ${action}</button>

                        </footer>

                    </div>
                </div>
            </div>
        `);
        let modal_update = (`
            <!-- [1] -->
            <div class="modal_style blancs xomodal-alert" id="modal-1" aria-hidden="true">

                <!-- [2] -->
                <div class="modal__overlay" tabindex="-1" data-micromodal-close>

                    <!-- [3] -->
                    <div id="modal__container" class="modal__container m-3 shadow" role="dialog" aria-modal="true"
                        aria-labelledby="modal-1-title">
                        <header class="modal__header">
                            <h2 class="modal__title base-color" id="modal-1-title">
                                ${titre}
                            </h2>

                            <!-- [4] -->
                            <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
                        </header>

                        <main class="modal__content" id="modal-1-content">

                            <span class="text-min">Code Poste</span>
                            <input class="w-100 inputx" value="${dataDefault[1]}" type="text" name="" id="codePoste" placeholder="Code Poste">
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msgCodePoste"></div>
                        
                            <span class="text-min">Libellé</span>
                            <input class="w-100 inputx " value="${dataDefault[2]}" type="text" name="" id="LibPoste" placeholder="Libellé">
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msgLibposte"></div>

                            <span class="text-min mt-2">Antenne</span>
                            <select " class="w-100 inputx " name="" id="AntennePoste">
                                <option value="${dataDefault[3]}">${dataDefault[4]}</option>
                            </select>
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msgantennePoste"></div>
                            
                        </main>

                        <footer class="modal__footer">
                            <i style="visibility: hidden;" class="fa-solid fa-spinner fs-5 p-2 action_spinner" id="action_spinner"></i>
                            <button class="modal__btn me-2 bg-black modal__closex">Fermer</button>
                            <button class="modal__btn bg-black " id="btn_deleteposte"><i class="fa-solid fa-trash-can  pe-3"></i>Suprimé</button>
                            <button class="bouton_modale ms-1 mt-2" id="btn_valide_poste" ><i class="fa-solid fa-pen  text-blanctext-white pe-3"></i> ${action}</button>

                        </footer>

                    </div>
                </div>
            </div>
        `);

        let modal;
        let _action;
        let id_poste_update = "";

        if (action == 'Modifier') {
            id_poste_update = dataDefault[0];
            modal = modal_update;
            _action = 'modifier';

            $(id_container).html(modal);
        } else {

            modal = modal_add;
            _action = 'ajoute';
            $(id_container).html(modal);

        }
        //--|Recuperations des informations|
        let data_requestx = {
            "cmd": 'getInfosADDuser',
        }
        $.ajax({
            type: "post",
            url: "php/user_manage.php",
            data: data_requestx,
            dataType: "json",
            success: function (response) {
                if (response.code == 0) {

                    //--| definitions des antenne|
                    if (response.Antennes.length != 0) {
                        let x = 0;
                        while (x < response.Antennes.length) {
                            $('#AntennePoste').append(`<option value="${response.Antennes[x].Idantenne}">${response.Antennes[x].Libantenne}</option>`);
                            x += 1;
                        }
                    }


                }
                console.log(response)
            }
        });



        //--|Validation de données  de postes|
        $('#btn_valide_poste').click(function (e) {
            e.preventDefault();
            let _WebsecurFrondEnd_validateData = new WebsecurFrondEnd_validateData();

            let codePoste = $('#codePoste').val();
            let _codePoste = _WebsecurFrondEnd_validateData.ValidateText(codePoste, 'codePoste', 100, 4, 'msgCodePoste');
            if (_codePoste != true) {

                form_valide = false;
            }

            let form_valide = true;
            let LibPoste = $('#LibPoste').val();
            let _LibPoste = _WebsecurFrondEnd_validateData.ValidateText(LibPoste, 'LibPoste', 100, 4, 'msgLibposte');
            if (_LibPoste != true) {

                form_valide = false;
            }


            let AntennePoste = $('#AntennePoste').val();
            let _AntennePoste = _WebsecurFrondEnd_validateData.ValidateText(AntennePoste, 'AntennePoste', 100, 1, 'msgantennePoste');
            if (_AntennePoste != true) {

                form_valide = false;
            }


            if (form_valide == true) {
                let data_request = {
                    'cmd': 'gestionPoste',
                    '_action': _action,
                    'id_poste_update': id_poste_update,
                    'codePoste': codePoste,
                    'LibPoste': LibPoste,
                    'id_AntennePoste': AntennePoste
                }

                //--|loader|
                $('.action_spinner').css('visibility', 'visible');
                let a = 0;
                sessionStorage.setItem('action_spinner', 1);
                setInterval(function () {
                    let x = sessionStorage.getItem('action_spinner');
                    if (x == 1) {
                        a += 1
                        document.querySelector('.action_spinner').style.transform = `rotate(${a}deg)`;
                    }
                }, 0.500);

                $.ajax({
                    type: "post",
                    url: "php/manage_ressort.php",
                    data: data_request,
                    dataType: "json",
                    success: function (response) {
                        sessionStorage.setItem('action_spinner', 0);
                        if (response.code == 0) {
                            $('#action_spinner').attr("class", "fa-solid fa-check fs-5 p-2 action_spinner");
                            $('#action_spinner').css('color', "green");

                        } else if (response.code == 2) {
                            $('#action_spinner').attr("class", "fa-solid fa-circle-exclamation fs-5 p-2 action_spinner");
                            $('#action_spinner').css('color', "red");
                            xmodal.xalert('.zone_modale', "Ajoute Ressort", "Opération échoué, Ressort existe")
                        }
                        else {
                            $('#action_spinner').attr("class", "fa-solid fa-circle-exclamation fs-5 p-2 action_spinner");
                            $('#action_spinner').css('color', "red");
                            xmodal.xalert('.zone_modale', "Gestion Ressort", "Opération échoué")
                        }
                    }
                });
                console.log(data_request)

            }

        });

        //--<Supression de post>
        $('#btn_deleteposte').click(function (e) {
            e.preventDefault();
            if (dataDefault[0] != '') {
                let data_request = {
                    cmd: 'deleteposte',
                    id_post_delete: dataDefault[0]
                }
                $('.action_spinner').css('visibility', 'visible');
                let a = 0;
                sessionStorage.setItem('action_spinner', 1);

                setInterval(function () {
                    let x = sessionStorage.getItem('action_spinner');
                    if (x == 1) {
                        a += 1
                        document.querySelector('.action_spinner').style.transform = `rotate(${a}deg)`;
                    }
                }, 0.500);

                $.ajax({
                    type: "post",
                    url: "php/manage_ressort.php",
                    data: data_request,
                    dataType: "json",
                    success: function (response) {
                        sessionStorage.setItem('action_spinner', 0);

                        if (response.code == 0) {
                            $('.xomodal-alert').css('display', 'none');
                            $('body').css('overflow', '');
                            xmodal.deleteElement('#user' + dataDefault[0])

                        } else {
                            xmodal.xalert('.zone_modale', "Supression Utilisateur", "Opération échoué")
                        }

                    }
                });

            } else {
                alert('Utilisateur inconnu')
            }


        })

        let modal_alert = 1;
        $('body').css('overflow', 'hidden');
        $('.modal__close').click(function (e) {
            e.preventDefault();

            $('.xomodal-alert').css('display', 'none');
            $('body').css('overflow', '');
        });
        $('.modal__closex').click(function (e) {

            e.preventDefault();
            $('.xomodal-alert').css('display', 'none');
            $('body').css('overflow', '');
        });
    }

    xModalService(id_container, titre, action, dataDefault = []) {
        let xmodal = new Xmodal();
        let modal_add = (`
            <!-- [1] -->
            <div class="modal_style blancs xomodal-alert" id="modal-1" aria-hidden="true">

                <!-- [2] -->
                <div class="modal__overlay" tabindex="-1" data-micromodal-close>

                    <!-- [3] -->
                    <div id="modal__container" class="modal__container m-3 shadow" role="dialog" aria-modal="true"
                        aria-labelledby="modal-1-title">
                        <header class="modal__header">
                            <h2 class="modal__title base-color" id="modal-1-title">
                                ${titre}
                            </h2>

                            <!-- [4] -->
                            <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
                        </header>

                        <main class="modal__content" id="modal-1-content">

                            <span class="text-min">Code Service</span>
                            <input class="w-100 inputx" value="" type="text" name="" id="codeService" placeholder="Code Service">
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msgCodeService"></div>
                        
                            <span class="text-min">Libellé</span>
                            <input class="w-100 inputx " value="" type="text" name="" id="LibService" placeholder="Libellé">
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msgLibService"></div>
                            
                        </main>

                        <footer class="modal__footer">
                            <i style="visibility: hidden;" class="fa-solid fa-spinner fs-5 p-2 action_spinner" id="action_spinner"></i>
                            <button class="modal__btn me-2 bg-black modal__closex">Fermer</button>
                            <button class="modal__btn bg-black " id="btn_deleteService"><i class="fa-solid fa-trash-can  pe-3"></i>Suprimé</button>
                            <button class="bouton_modale ms-1 mt-2" id="btn_valide_Service" ><i class="fa-solid fa-right-to-bracket  text-blanctext-white pe-3"></i> ${action}</button>

                        </footer>

                    </div>
                </div>
            </div>
        `);
        let modal_update = (`
            <!-- [1] -->
            <div class="modal_style blancs xomodal-alert" id="modal-1" aria-hidden="true">

                <!-- [2] -->
                <div class="modal__overlay" tabindex="-1" data-micromodal-close>

                    <!-- [3] -->
                    <div id="modal__container" class="modal__container m-3 shadow" role="dialog" aria-modal="true"
                        aria-labelledby="modal-1-title">
                        <header class="modal__header">
                            <h2 class="modal__title base-color" id="modal-1-title">
                                ${titre}
                            </h2>

                            <!-- [4] -->
                            <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
                        </header>

                        <main class="modal__content" id="modal-1-content">

                            <span class="text-min">Code Service</span>
                            <input class="w-100 inputx" value="${dataDefault[1]}" type="text" name="" id="codeService" placeholder="Code Service">
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msgCodeService"></div>
                        
                            <span class="text-min">Libellé</span>
                            <input class="w-100 inputx " value="${dataDefault[2]}" type="text" name="" id="LibService" placeholder="Libellé">
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msgLibService"></div>
                            
                        </main>

                        <footer class="modal__footer">
                            <i style="visibility: hidden;" class="fa-solid fa-spinner fs-5 p-2 action_spinner" id="action_spinner"></i>
                            <button class="modal__btn me-2 bg-black modal__closex">Fermer</button>
                            <button class="modal__btn bg-black " id="btn_deleteService"><i class="fa-solid fa-trash-can  pe-3"></i>Suprimé</button>
                            <button class="bouton_modale ms-1 mt-2" id="btn_valide_Service" ><i class="fa-solid fa-pen  text-blanctext-white pe-3"></i> ${action}</button>

                        </footer>

                    </div>
                </div>
            </div>
        `);

        let modal;
        let _action;
        let id_Service_update = "";
        let form_valide = true;

        if (action == 'Modifier') {
            id_Service_update = dataDefault[0];
            modal = modal_update;
            _action = 'modifier';

            $(id_container).html(modal);
        } else {

            modal = modal_add;
            _action = 'ajoute';
            $(id_container).html(modal);

        }

        //--|Validation de données  de postes|
        $('#btn_valide_Service').click(function (e) {
            e.preventDefault();
            let _WebsecurFrondEnd_validateData = new WebsecurFrondEnd_validateData();

            let codeService = $('#codeService').val();
            let _codeService = _WebsecurFrondEnd_validateData.ValidateText(codeService, 'codeService', 100, 4, 'msgCodeService');
            if (_codeService != true) {
                console.log(_codeService)
                form_valide = _codeService;
            }

            let LibService = $('#LibService').val();
            let _LibService = _WebsecurFrondEnd_validateData.ValidateText(LibService, 'LibService', 100, 4, 'msgLibService');
            if (_LibService != true) {
                console.log(_LibService)
                form_valide = false;
            }

            console.log(form_valide)
            if (form_valide == true) {
                let data_request = {
                    'cmd': 'gestionService',
                    '_action': _action,
                    'id_Service_update': id_Service_update,
                    'codeService': codeService,
                    'LibService': LibService,
                }

                //--|loader|
                $('.action_spinner').css('visibility', 'visible');
                let a = 0;
                sessionStorage.setItem('action_spinner', 1);
                setInterval(function () {
                    let x = sessionStorage.getItem('action_spinner');
                    if (x == 1) {
                        a += 1
                        document.querySelector('.action_spinner').style.transform = `rotate(${a}deg)`;
                    }
                }, 0.500);

                $.ajax({
                    type: "post",
                    url: "php/manage_ressort.php",
                    data: data_request,
                    dataType: "json",
                    success: function (response) {
                        sessionStorage.setItem('action_spinner', 0);
                        if (response.code == 0) {
                            $('#action_spinner').attr("class", "fa-solid fa-check fs-5 p-2 action_spinner");
                            $('#action_spinner').css('color', "green");

                        } else if (response.code == 2) {
                            $('#action_spinner').attr("class", "fa-solid fa-circle-exclamation fs-5 p-2 action_spinner");
                            $('#action_spinner').css('color', "red");
                            xmodal.xalert('.zone_modale', "Ajoute Ressort", "Opération échoué, Ressort existe")
                        }
                        else {
                            $('#action_spinner').attr("class", "fa-solid fa-circle-exclamation fs-5 p-2 action_spinner");
                            $('#action_spinner').css('color', "red");
                            xmodal.xalert('.zone_modale', "Gestion Ressort", "Opération échoué")
                        }
                    }
                });
                console.log(data_request)

            }

        });

        //--<Supression des services>
        $('#btn_deleteService').click(function (e) {

            e.preventDefault();
            if (dataDefault[0] != '') {
                let data_request = {
                    cmd: 'deleteService',
                    id_service_delete: dataDefault[0]
                }
                $('.action_spinner').css('visibility', 'visible');
                let a = 0;
                sessionStorage.setItem('action_spinner', 1);

                setInterval(function () {
                    let x = sessionStorage.getItem('action_spinner');
                    if (x == 1) {
                        a += 1
                        document.querySelector('.action_spinner').style.transform = `rotate(${a}deg)`;
                    }
                }, 0.500);

                $.ajax({
                    type: "post",
                    url: "php/manage_ressort.php",
                    data: data_request,
                    dataType: "json",
                    success: function (response) {
                        sessionStorage.setItem('action_spinner', 0);

                        if (response.code == 0) {
                            $('.xomodal-alert').css('display', 'none');
                            $('body').css('overflow', '');
                            xmodal.deleteElement('#user' + dataDefault[0])

                        } else {
                            xmodal.xalert('.zone_modale', "Supression Utilisateur", "Opération échoué")
                        }

                    }
                });

            } else {
                alert('Utilisateur inconnu')
            }


        })

        let modal_alert = 1;
        $('body').css('overflow', 'hidden');
        $('.modal__close').click(function (e) {
            e.preventDefault();

            $('.xomodal-alert').css('display', 'none');
            $('body').css('overflow', '');
        });
        $('.modal__closex').click(function (e) {

            e.preventDefault();
            $('.xomodal-alert').css('display', 'none');
            $('body').css('overflow', '');
        });
    }

    xModalActePoste(id_container, titre, action, dataDefault = []) {
        let xmodal = new Xmodal();
        let modal_add = (`
            <!-- [1] -->
            <div class="modal_style blancs xomodal-alert" id="modal-1" aria-hidden="true">

                <!-- [2] -->
                <div class="modal__overlay" tabindex="-1" data-micromodal-close>

                    <!-- [3] -->
                    <div id="modal__container" class="modal__container m-3 shadow" role="dialog" aria-modal="true"
                        aria-labelledby="modal-1-title">
                        <header class="modal__header">
                            <h2 class="modal__title base-color" id="modal-1-title">
                                ${titre}
                            </h2>

                            <!-- [4] -->
                            <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
                        </header>

                        <main class="modal__content" id="modal-1-content">
                            <span class="text-min">Acte</span>
                            <select name="" id="Acte" class="inputx w-100">
                                <option value=""></option>
                            </select>
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msgActe"></div>

                            <span class="text-min ">Poste</span>
                            <select name="" id="Poste" class="inputx w-100">
                                <option value="" ></option>
                            </select>
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msgPoste"></div>
                            
                          
                        </main>

                        <footer class="modal__footer">
                            <i style="visibility: hidden;" class="fa-solid fa-spinner fs-5 p-2 action_spinner" id="action_spinner"></i>
                            <button class="modal__btn me-2 bg-black modal__closex">Fermer</button>
                            <button class="bouton_modale ms-1 mt-2" id="btnvalide_acteposte" ><i class="fa-solid fa-right-to-bracket  text-blanctext-white pe-3"></i> ${action}</button>

                        </footer>

                    </div>
                </div>
            </div>
        `);
        let modal_update = (`
            <!-- [1] -->
            <div class="modal_style blancs xomodal-alert" id="modal-1" aria-hidden="true">

                <!-- [2] -->
                <div class="modal__overlay" tabindex="-1" data-micromodal-close>

                    <!-- [3] -->
                    <div id="modal__container" class="modal__container m-3 shadow" role="dialog" aria-modal="true"
                        aria-labelledby="modal-1-title">
                        <header class="modal__header">
                            <h2 class="modal__title base-color" id="modal-1-title">
                                ${titre}
                            </h2>

                            <!-- [4] -->
                            <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
                        </header>

                        <main class="modal__content" id="modal-1-content">
                            <span class="text-min">Acte</span>
                            <select name="" id="Acte" class="inputx w-100">
                                <option value="${dataDefault[3]}">${dataDefault[4]}</option>
                            </select>
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msgActe"></div>

                            <span class="text-min ">Poste</span>
                            <select name="" id="Poste" class="inputx w-100">
                                <option value="${dataDefault[5]}" >${dataDefault[6]}</option>
                            </select>
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msgPoste"></div>
                            
                          
                        </main>

                        <footer class="modal__footer">
                            <i style="visibility: hidden;" class="fa-solid fa-spinner fs-5 p-2 action_spinner" id="action_spinner"></i>
                            <button class="modal__btn me-2 bg-black modal__closex">Fermer</button>
                            <button class="modal__btn bg-black " id="btn_deleteActeposte"><i class="fa-solid fa-trash-can  pe-3"></i>Suprimé</button>
                            <button class="bouton_modale ms-1 mt-2" id="btnvalide_acteposte" ><i class="fa-solid fa-pen  text-blanctext-white pe-3"></i> ${action}</button>

                        </footer>

                    </div>
                </div>
            </div>
        `);

        //--|Recuperations des informations|
        let data_requestx = {
            "cmd": 'getInfoActePoste',
        }
        $.ajax({
            type: "post",
            url: "php/manage_ressort.php",
            data: data_requestx,
            dataType: "json",
            success: function (response) {
                if (response.code == 0) {

                    //--| definitions des poste|
                    if (response.postes.length != 0) {
                        let x = 0;
                        while (x < response.postes.length) {
                            $('#Poste').append(`<option value="${response.postes[x].idposte}">${response.postes[x].libposte}</option>`);
                            x += 1;
                        }
                    }

                    //--| definitions des actes|
                    if (response.actes.length != 0) {
                        let x = 0;
                        while (x < response.actes.length) {
                            $('#Acte').append(`<option value="${response.actes[x].idacte}">${response.actes[x].libacte}</option>`);
                            x += 1;
                        }
                    }


                }
                console.log(response)
            }
        });

        let modal;
        let _action;
        let id_acteposte_update = "";
        let form_valide = true;

        if (action == 'Modifier') {
            id_acteposte_update = dataDefault[0];
            modal = modal_update;
            _action = 'modifier';

            $(id_container).html(modal);
        } else {

            modal = modal_add;
            _action = 'ajoute';
            $(id_container).html(modal);

        }

        //--|Validation de données  de acte poste|
        $('#btnvalide_acteposte').click(function (e) {
            e.preventDefault();

            let _WebsecurFrondEnd_validateData = new WebsecurFrondEnd_validateData();

            let Acte = $('#Acte').val();
            let _Acte = _WebsecurFrondEnd_validateData.ValidateText(Acte, 'Acte', 100, 1, 'msgActe');
            if (_Acte != true) {
                console.log(_Acte)
                form_valide = false;
            }

            let Poste = $('#Poste').val();
            let _Poste = _WebsecurFrondEnd_validateData.ValidateText(Poste, 'Poste', 100, 1, 'msgPoste');
            if (_Poste != true) {
                console.log(_Poste)
                form_valide = false;
            }

            console.log(form_valide)
            if (form_valide == true) {
                let data_request = {
                    'cmd': 'gestionActeposte',
                    '_action': _action,
                    'id_acteposte_update': id_acteposte_update,
                    'acte': Acte,
                    'poste': Poste,
                }

                //--|loader|
                $('.action_spinner').css('visibility', 'visible');
                let a = 0;
                sessionStorage.setItem('action_spinner', 1);
                setInterval(function () {
                    let x = sessionStorage.getItem('action_spinner');
                    if (x == 1) {
                        a += 1
                        document.querySelector('.action_spinner').style.transform = `rotate(${a}deg)`;
                    }
                }, 0.500);

                $.ajax({
                    type: "post",
                    url: "php/manage_ressort.php",
                    data: data_request,
                    dataType: "json",
                    success: function (response) {
                        sessionStorage.setItem('action_spinner', 0);
                        if (response.code == 0) {
                            $('#action_spinner').attr("class", "fa-solid fa-check fs-5 p-2 action_spinner");
                            $('#action_spinner').css('color', "green");

                        } else if (response.code == 2) {
                            $('#action_spinner').attr("class", "fa-solid fa-circle-exclamation fs-5 p-2 action_spinner");
                            $('#action_spinner').css('color', "red");
                            xmodal.xalert('.zone_modale', "Ajoute Acte Poste", "Opération échoué, Acte Poste existe")
                        }
                        else {
                            $('#action_spinner').attr("class", "fa-solid fa-circle-exclamation fs-5 p-2 action_spinner");
                            $('#action_spinner').css('color', "red");
                            xmodal.xalert('.zone_modale', "Gestion Acte-Poste", "Opération échoué")
                        }
                    }
                });
                console.log(data_request)

            }

        });

        //--<Supression des acteposte>
        $('#btn_deleteActeposte').click(function (e) {

            e.preventDefault();
            if (dataDefault[0] != '') {
                let data_request = {
                    cmd: 'deleteActeposte',
                    id_acteposte_delete: dataDefault[0]
                }
                $('.action_spinner').css('visibility', 'visible');
                let a = 0;
                sessionStorage.setItem('action_spinner', 1);

                setInterval(function () {
                    let x = sessionStorage.getItem('action_spinner');
                    if (x == 1) {
                        a += 1
                        document.querySelector('.action_spinner').style.transform = `rotate(${a}deg)`;
                    }
                }, 0.500);

                $.ajax({
                    type: "post",
                    url: "php/manage_ressort.php",
                    data: data_request,
                    dataType: "json",
                    success: function (response) {
                        sessionStorage.setItem('action_spinner', 0);

                        if (response.code == 0) {
                            $('.xomodal-alert').css('display', 'none');
                            $('body').css('overflow', '');
                            xmodal.deleteElement('#user' + dataDefault[0])

                        } else {
                            xmodal.xalert('.zone_modale', "Supression Acte-Poste", "Opération échoué")
                        }

                    }
                });

            } else {
                alert('Utilisateur inconnu')
            }


        })

        let modal_alert = 1;
        $('body').css('overflow', 'hidden');
        $('.modal__close').click(function (e) {
            e.preventDefault();

            $('.xomodal-alert').css('display', 'none');
            $('body').css('overflow', '');
        });
        $('.modal__closex').click(function (e) {

            e.preventDefault();
            $('.xomodal-alert').css('display', 'none');
            $('body').css('overflow', '');
        });
    }

    xModalUsercat(id_container, titre, action, dataDefault = []) {
        let xmodal = new Xmodal();
        let modal_add = (`
            <!-- [1] -->
            <div class="modal_style blancs xomodal-alert" id="modal-1" aria-hidden="true">

                <!-- [2] -->
                <div class="modal__overlay" tabindex="-1" data-micromodal-close>

                    <!-- [3] -->
                    <div id="modal__container" class="modal__container m-3 shadow" role="dialog" aria-modal="true"
                        aria-labelledby="modal-1-title">
                        <header class="modal__header">
                            <h2 class="modal__title base-color" id="modal-1-title">
                                ${titre}
                            </h2>

                            <!-- [4] -->
                            <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
                        </header>

                        <main class="modal__content" id="modal-1-content">
                            <span class="text-min mb-2">Nom Catégorie</span>
                            <input name="" id="Usercat" class="inputx w-100" value="">
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msgUsercat"></div>     
                        </main>

                        <footer class="modal__footer">
                            <i style="visibility: hidden;" class="fa-solid fa-spinner fs-5 p-2 action_spinner" id="action_spinner"></i>
                            <button class="modal__btn me-2 bg-black modal__closex">Fermer</button>
                            <button class="bouton_modale ms-1 mt-2" id="btnvalide_Usercat" ><i class="fa-solid fa-right-to-bracket  text-blanctext-white pe-3"></i> ${action}</button>

                        </footer>

                    </div>
                </div>
            </div>
        `);
        let modal_update = (`
            <!-- [1] -->
            <div class="modal_style blancs xomodal-alert" id="modal-1" aria-hidden="true">

                <!-- [2] -->
                <div class="modal__overlay" tabindex="-1" data-micromodal-close>

                    <!-- [3] -->
                    <div id="modal__container" class="modal__container m-3 shadow" role="dialog" aria-modal="true"
                        aria-labelledby="modal-1-title">
                        <header class="modal__header">
                            <h2 class="modal__title base-color" id="modal-1-title">
                                ${titre}
                            </h2>

                            <!-- [4] -->
                            <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
                        </header>

                        <main class="modal__content" id="modal-1-content">
                            <span class="text-min mb-2">Nom Catégorie</span>
                            <input name="" id="Usercat" class="inputx w-100" value="${dataDefault[1]}">
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msgUsercat"></div>     
                        </main>

                        <footer class="modal__footer">
                            <i style="visibility: hidden;" class="fa-solid fa-spinner fs-5 p-2 action_spinner" id="action_spinner"></i>
                            <button class="modal__btn me-2 bg-black modal__closex">Fermer</button>
                            <button class="modal__btn bg-black " id="btn_deleteUsercat"><i class="fa-solid fa-trash-can  pe-3"></i>Suprimer</button>
                            <button class="bouton_modale ms-1 mt-2" id="btnvalide_Usercat" ><i class="fa-solid fa-pen  text-blanctext-white pe-3"></i> ${action}</button>

                        </footer>

                    </div>
                </div>
            </div>
        `);

        let modal;
        let _action;
        let id_usercat_update = "";
        let form_valide = true;

        if (action == 'Modifier') {
            id_usercat_update = dataDefault[0];
            modal = modal_update;
            _action = 'modifier';

            $(id_container).html(modal);
        } else {

            modal = modal_add;
            _action = 'ajoute';
            $(id_container).html(modal);

        }

        //--|Validation de données  de acte poste|
        $('#btnvalide_Usercat').click(function (e) {
            e.preventDefault();

            let _WebsecurFrondEnd_validateData = new WebsecurFrondEnd_validateData();

            let Usercat = $('#Usercat').val();
            let _Usercat = _WebsecurFrondEnd_validateData.ValidateText(Usercat, 'Usercat', 100, 3, 'msgUsercat');
            if (_Usercat != true) {
                form_valide = false;
            }

            console.log(form_valide)
            if (form_valide == true) {
                let data_request = {
                    'cmd': 'gestionUsercat',
                    '_action': _action,
                    'id_usercat_update': id_usercat_update,
                    'name_cat': Usercat
                }

                //--|loader|
                $('.action_spinner').css('visibility', 'visible');
                let a = 0;
                sessionStorage.setItem('action_spinner', 1);
                setInterval(function () {
                    let x = sessionStorage.getItem('action_spinner');
                    if (x == 1) {
                        a += 1
                        document.querySelector('.action_spinner').style.transform = `rotate(${a}deg)`;
                    }
                }, 0.500);

                $.ajax({
                    type: "post",
                    url: "php/manage_ressort.php",
                    data: data_request,
                    dataType: "json",
                    success: function (response) {
                        sessionStorage.setItem('action_spinner', 0);
                        if (response.code == 0) {
                            $('#action_spinner').attr("class", "fa-solid fa-check fs-5 p-2 action_spinner");
                            $('#action_spinner').css('color', "green");

                        } else if (response.code == 2) {
                            $('#action_spinner').attr("class", "fa-solid fa-circle-exclamation fs-5 p-2 action_spinner");
                            $('#action_spinner').css('color', "red");
                            xmodal.xalert('.zone_modale', "Ajoute Ressort", "Opération échoué, Catégorie existe.")
                        }
                        else {
                            $('#action_spinner').attr("class", "fa-solid fa-circle-exclamation fs-5 p-2 action_spinner");
                            $('#action_spinner').css('color', "red");
                            xmodal.xalert('.zone_modale', "Gestion Catégorie Utilisateurs", "Opération échoué")
                        }
                    }
                });
                console.log(data_request)

            }

        });

        //--<Supression des usercat>
        $('#btn_deleteUsercat').click(function (e) {

            e.preventDefault();
            if (dataDefault[0] != '') {
                let data_request = {
                    cmd: 'deleteUsecat',
                    id_usercat_delete: dataDefault[0]
                }
                $('.action_spinner').css('visibility', 'visible');
                let a = 0;
                sessionStorage.setItem('action_spinner', 1);

                setInterval(function () {
                    let x = sessionStorage.getItem('action_spinner');
                    if (x == 1) {
                        a += 1
                        document.querySelector('.action_spinner').style.transform = `rotate(${a}deg)`;
                    }
                }, 0.500);

                $.ajax({
                    type: "post",
                    url: "php/manage_ressort.php",
                    data: data_request,
                    dataType: "json",
                    success: function (response) {
                        sessionStorage.setItem('action_spinner', 0);

                        if (response.code == 0) {
                            $('.xomodal-alert').css('display', 'none');
                            $('body').css('overflow', '');
                            xmodal.deleteElement('#user' + dataDefault[0])

                        } else {
                            xmodal.xalert('.zone_modale', "Supression Catégorie Utilisateur", "Opération échoué")
                        }

                    }
                });

            } else {
                alert('Catégorie Non trouver')
            }


        })

        let modal_alert = 1;
        $('body').css('overflow', 'hidden');
        $('.modal__close').click(function (e) {
            e.preventDefault();

            $('.xomodal-alert').css('display', 'none');
            $('body').css('overflow', '');
        });
        $('.modal__closex').click(function (e) {

            e.preventDefault();
            $('.xomodal-alert').css('display', 'none');
            $('body').css('overflow', '');
        });
    }

    xModalActe(id_container, titre, action, dataDefault = []) {
        let xmodal = new Xmodal();
        let modal_add = (`
            <!-- [1] -->
            <div class="modal_style blancs xomodal-alert" id="modal-1" aria-hidden="true">

                <!-- [2] -->
                <div class="modal__overlay" tabindex="-1" data-micromodal-close>

                    <!-- [3] -->
                    <div id="modal__container" class="modal__container m-3 shadow" role="dialog" aria-modal="true"
                        aria-labelledby="modal-1-title">
                        <header class="modal__header">
                            <h2 class="modal__title base-color" id="modal-1-title">
                                ${titre}
                            </h2>

                            <!-- [4] -->
                            <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
                        </header>

                        <main class="modal__content" id="modal-1-content">

                            <span class="text-min">Libellé</span>
                            <input class="w-100 inputx" value="" type="text" name="" id="libacte" >
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msglibacte"></div>
                        
                            <span class="text-min">Taux</span>
                            <input class="w-100 inputx " value="" type="text" name="" id="Taux" >
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msgTaux"></div>

                            <span class="text-min">Devise</span>
                            <input class="w-100 inputx " value="" type="text" name="" id="Devise" >
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msgDevise"></div>

                            <span class="text-min">Code Acte</span>
                            <input class="w-100 inputx " value="" type="text" name="" id="codeacte" >
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msgcodeacte"></div>

                        </main>

                        <footer class="modal__footer">
                            <i style="visibility: hidden;" class="fa-solid fa-spinner fs-5 p-2 action_spinner" id="action_spinner"></i>
                            <button class="modal__btn me-2 bg-black modal__closex">Fermer</button>
                            <button class="bouton_modale ms-1 mt-2" id="btn_valide_acte" ><i class="fa-solid fa-pen  text-blanctext-white pe-3"></i> ${action}</button>

                        </footer>

                    </div>
                </div>
            </div>
        `);
        let modal_update = (`
            <!-- [1] -->
            <div class="modal_style blancs xomodal-alert" id="modal-1" aria-hidden="true">

                <!-- [2] -->
                <div class="modal__overlay" tabindex="-1" data-micromodal-close>

                    <!-- [3] -->
                    <div id="modal__container" class="modal__container m-3 shadow" role="dialog" aria-modal="true"
                        aria-labelledby="modal-1-title">
                        <header class="modal__header">
                            <h2 class="modal__title base-color" id="modal-1-title">
                                ${titre}
                            </h2>

                            <!-- [4] -->
                            <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
                        </header>

                        <main class="modal__content" id="modal-1-content">

                            <span class="text-min">Libellé</span>
                            <input class="w-100 inputx" value="${dataDefault[1]}" type="text" name="" id="libacte" placeholder="Code Poste">
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msglibacte"></div>
                        
                            <span class="text-min">Taux</span>
                            <input class="w-100 inputx " value="${dataDefault[2]}" type="text" name="" id="Taux" placeholder="Libellé">
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msgTaux"></div>

                            <span class="text-min">Devise</span>
                            <input class="w-100 inputx " value="${dataDefault[3]}" type="text" name="" id="Devise" placeholder="Libellé">
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msgDevise"></div>

                            <span class="text-min">Code Acte</span>
                            <input class="w-100 inputx " value="${dataDefault[4]}" type="text" name="" id="codeacte" placeholder="Libellé">
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msgcodeacte"></div>

                        </main>

                        <footer class="modal__footer">
                            <i style="visibility: hidden;" class="fa-solid fa-spinner fs-5 p-2 action_spinner" id="action_spinner"></i>
                            <button class="modal__btn me-2 bg-black modal__closex">Fermer</button>
                            <button class="modal__btn bg-black " id="btn_delete_acte"><i class="fa-solid fa-trash-can  pe-3"></i>Suprimé</button>
                            <button class="bouton_modale ms-1 mt-2" id="btn_valide_acte" ><i class="fa-solid fa-pen  text-blanctext-white pe-3"></i> ${action}</button>

                        </footer>

                    </div>
                </div>
            </div>
        `);

        let modal;
        let _action;
        let id_acte_update = "";

        if (action == 'Modifier') {
            id_acte_update = dataDefault[0];
            modal = modal_update;
            _action = 'modifier';

            $(id_container).html(modal);
        } else {

            modal = modal_add;
            _action = 'ajoute';
            $(id_container).html(modal);

        }

        //--|Validation de données|
        $('#btn_valide_acte').click(function (e) {
            e.preventDefault();
            let _WebsecurFrondEnd_validateData = new WebsecurFrondEnd_validateData();
            let form_valide = true;

            let libacte = $('#libacte').val();
            let _libacte = _WebsecurFrondEnd_validateData.ValidateText(libacte, 'libacte', 100, 4, 'msglibacte');
            if (_libacte != true) {

                form_valide = false;
            }

            let Taux = $('#Taux').val();
            let _Taux = _WebsecurFrondEnd_validateData.ValidateText(Taux, 'Taux', 100, 1, 'msgTaux');
            if (_Taux != true) {
                form_valide = false;
            }

            let codeacte = $('#codeacte').val();
            let _codeacte = _WebsecurFrondEnd_validateData.ValidateText(codeacte, 'codeacte', 100, 1, 'msgcodeacte');
            if (_codeacte != true) {

                form_valide = false;
            }

            let Devise = $('#Devise').val();
            let _Devise = _WebsecurFrondEnd_validateData.ValidateText(Devise, 'Devise', 100, 1, 'msgDevise');
            if (_Devise != true) {

                form_valide = false;
            }

            if (form_valide == true) {
                let data_request = {
                    'cmd': 'gestionActe',
                    '_action': _action,
                    'id_acte_update': id_acte_update,
                    'libacte': libacte,
                    'taux': Taux,
                    'devise': Devise,
                    'codeacte': codeacte
                }

                //--|loader|
                $('.action_spinner').css('visibility', 'visible');
                let a = 0;
                sessionStorage.setItem('action_spinner', 1);
                setInterval(function () {
                    let x = sessionStorage.getItem('action_spinner');
                    if (x == 1) {
                        a += 1
                        document.querySelector('.action_spinner').style.transform = `rotate(${a}deg)`;
                    }
                }, 0.500);

                $.ajax({
                    type: "post",
                    url: "php/manage_ressort.php",
                    data: data_request,
                    dataType: "json",
                    success: function (response) {
                        sessionStorage.setItem('action_spinner', 0);
                        if (response.code == 0) {
                            $('#action_spinner').attr("class", "fa-solid fa-check fs-5 p-2 action_spinner");
                            $('#action_spinner').css('color', "green");

                        } else if (response.code == 2) {
                            $('#action_spinner').attr("class", "fa-solid fa-circle-exclamation fs-5 p-2 action_spinner");
                            $('#action_spinner').css('color', "red");
                            xmodal.xalert('.zone_modale', "Ajoute Ressort", "Opération échoué, Acte existe")
                        }
                        else {
                            $('#action_spinner').attr("class", "fa-solid fa-circle-exclamation fs-5 p-2 action_spinner");
                            $('#action_spinner').css('color', "red");
                            xmodal.xalert('.zone_modale', "Gestion Acte", "Opération échoué")
                        }
                    }
                });
                console.log(data_request)

            }

        });

        //--<Supression de ressort>
        $('#btn_delete_acte').click(function (e) {
            e.preventDefault();
            if (dataDefault[0] != '') {
                let data_request = {
                    cmd: 'deleteActe',
                    id_acte_delete: dataDefault[0]
                }
                $('.action_spinner').css('visibility', 'visible');
                let a = 0;
                sessionStorage.setItem('action_spinner', 1);

                setInterval(function () {
                    let x = sessionStorage.getItem('action_spinner');
                    if (x == 1) {
                        a += 1
                        document.querySelector('.action_spinner').style.transform = `rotate(${a}deg)`;
                    }
                }, 0.500);

                $.ajax({
                    type: "post",
                    url: "php/manage_ressort.php",
                    data: data_request,
                    dataType: "json",
                    success: function (response) {
                        sessionStorage.setItem('action_spinner', 0);

                        if (response.code == 0) {
                            $('.xomodal-alert').css('display', 'none');
                            $('body').css('overflow', '');
                            xmodal.deleteElement('#user' + dataDefault[0])

                        } else {
                            xmodal.xalert('.zone_modale', "Supression Acte", "Opération échoué")
                        }

                    }
                });

            } else {
                alert('Acte inconnu')
            }


        })

        let modal_alert = 1;
        $('body').css('overflow', 'hidden');
        $('.modal__close').click(function (e) {
            e.preventDefault();

            $('.xomodal-alert').css('display', 'none');
            $('body').css('overflow', '');
        });
        $('.modal__closex').click(function (e) {

            e.preventDefault();
            $('.xomodal-alert').css('display', 'none');
            $('body').css('overflow', '');
        });
    }

    xModalTauxdevise(id_container, titre, action, dataDefault = []) {
        let xmodal = new Xmodal();
        let etat = dataDefault[3];
        if (etat == 0) {
            etat = 'Désactivé';
        } else {
            etat = 'activé'
        }
        let modal_add = (`
            <!-- [1] -->
            <div class="modal_style blancs xomodal-alert" id="modal-1" aria-hidden="true">

                <!-- [2] -->
                <div class="modal__overlay" tabindex="-1" data-micromodal-close>

                    <!-- [3] -->
                    <div id="modal__container" class="modal__container m-3 shadow" role="dialog" aria-modal="true"
                        aria-labelledby="modal-1-title">
                        <header class="modal__header">
                            <h2 class="modal__title base-color" id="modal-1-title">
                                ${titre}
                            </h2>

                            <!-- [4] -->
                            <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
                        </header>

                        <main class="modal__content" id="modal-1-content">

                            <span class="text-min">Taux</span>
                            <input class="w-100 inputx " value="${dataDefault[1]}" type="number" name="" id="Taux" >
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msgTaux"></div>

                            <span class="text-min">Etat Taux</span>
                            <select name="" id="Etattaux" class="inputx w-100">
                                <option value="1">Activé</option>
                                <option value="0">Désactivé</option>
                            </select>
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msgEtattaux"></div>

                        </main>

                        <footer class="modal__footer">
                            <i style="visibility: hidden;" class="fa-solid fa-spinner fs-5 p-2 action_spinner" id="action_spinner"></i>
                            <button class="modal__btn me-2 bg-black modal__closex">Fermer</button>
                            <button class="bouton_modale ms-1 mt-2" id="btn_valide_tauxdevise" ><i class="fa-solid fa-pen  text-blanctext-white pe-3"></i> ${action}</button>

                        </footer>

                    </div>
                </div>
            </div>
        `);
        let modal_update = (`
            <!-- [1] -->
            <div class="modal_style blancs xomodal-alert" id="modal-1" aria-hidden="true">

                <!-- [2] -->
                <div class="modal__overlay" tabindex="-1" data-micromodal-close>

                    <!-- [3] -->
                    <div id="modal__container" class="modal__container m-3 shadow" role="dialog" aria-modal="true"
                        aria-labelledby="modal-1-title">
                        <header class="modal__header">
                            <h2 class="modal__title base-color" id="modal-1-title">
                                ${titre}
                            </h2>

                            <!-- [4] -->
                            <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
                        </header>

                        <main class="modal__content" id="modal-1-content">

                            <span class="text-min">Taux</span>
                            <input class="w-100 inputx " value="${dataDefault[1]}" type="number" name="" id="Taux" placeholder="Libellé">
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msgTaux"></div>

                            <span class="text-min">date fixé</span>
                            <input class="w-100 inputx " value="${dataDefault[2]}" type="date" name="" id="Datefixe">
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msgDatefixe"></div>

                            <span class="text-min">Etat Taux</span>
                            <select name="" id="Etattaux" class="inputx w-100">
                                <option value="${dataDefault[3]}" >${etat}</option>
                                <option value="1">Activé</option>
                                <option value="0">Désactivé</option>
                            </select>
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msgEtattaux"></div>

                        </main>

                        <footer class="modal__footer">
                            <i style="visibility: hidden;" class="fa-solid fa-spinner fs-5 p-2 action_spinner" id="action_spinner"></i>
                            <button class="modal__btn me-2 bg-black modal__closex">Fermer</button>
                            <button class="modal__btn bg-black " id="btn_delete_tauxdevise"><i class="fa-solid fa-trash-can  pe-3"></i>Suprimé</button>
                            <button class="bouton_modale ms-1 mt-2" id="btn_valide_tauxdevise" ><i class="fa-solid fa-pen  text-blanctext-white pe-3"></i> ${action}</button>

                        </footer>

                    </div>
                </div>
            </div>
        `);

        let modal;
        let _action;
        let id_Tauxdevise_update = "";
        let date_fixe = "";

        if (action == 'Modifier') {
            id_Tauxdevise_update = dataDefault[0];
            modal = modal_update;
            _action = 'modifier';

            $(id_container).html(modal);
        } else {

            modal = modal_add;
            _action = 'ajoute';
            $(id_container).html(modal);

        }

        //--|Validation de données|
        $('#btn_valide_tauxdevise').click(function (e) {
            e.preventDefault();
            let _WebsecurFrondEnd_validateData = new WebsecurFrondEnd_validateData();
            let form_valide = true;

            if (action == 'Modifier') {
                date_fixe = $('#Datefixe').val();
                console.log(date_fixe)
                let _Datefixe = _WebsecurFrondEnd_validateData.ValidateDate(date_fixe, 'Datefixe', 'msgDatefixe');
                if (_Datefixe != true) {

                    form_valide = false;
                }
            } else {
                let _Date = new Date();
                date_fixe = _Date.toLocaleDateString()
                date_fixe = date_fixe.split('/', 3);
                date_fixe = date_fixe[2] + '-' + date_fixe[1] + '-' + date_fixe[0];
                console.log(date_fixe)
            }


            let Taux = $('#Taux').val();
            let _Taux = _WebsecurFrondEnd_validateData.ValidateText(Taux, 'Taux', 100, 1, 'msgTaux');
            if (_Taux != true) {
                form_valide = false;
            }

            let Etattaux = $('#Etattaux').val();
            let _Etattaux = _WebsecurFrondEnd_validateData.ValidateText(Etattaux, 'Etattaux', 100, 1, 'msgEtattaux');
            if (_Etattaux != true) {

                form_valide = false;
            }

            if (form_valide == true) {
                let data_request = {
                    'cmd': 'gestionTauxdevise',
                    '_action': _action,
                    'id_Tauxdevise_update': id_Tauxdevise_update,
                    'date_fixe': date_fixe,
                    'taux': Taux,
                    'Etattaux': Etattaux,
                }

                //--|loader|
                $('.action_spinner').css('visibility', 'visible');
                let a = 0;
                sessionStorage.setItem('action_spinner', 1);
                setInterval(function () {
                    let x = sessionStorage.getItem('action_spinner');
                    if (x == 1) {
                        a += 1
                        document.querySelector('.action_spinner').style.transform = `rotate(${a}deg)`;
                    }
                }, 0.500);

                $.ajax({
                    type: "post",
                    url: "php/manage_ressort.php",
                    data: data_request,
                    dataType: "json",
                    success: function (response) {
                        sessionStorage.setItem('action_spinner', 0);
                        if (response.code == 0) {
                            $('#action_spinner').attr("class", "fa-solid fa-check fs-5 p-2 action_spinner");
                            $('#action_spinner').css('color', "green");

                        } else if (response.code == 2) {
                            $('#action_spinner').attr("class", "fa-solid fa-circle-exclamation fs-5 p-2 action_spinner");
                            $('#action_spinner').css('color', "red");
                            xmodal.xalert('.zone_modale', "Ajoute Ressort", "Opération échoué, Acte existe")
                        }
                        else {
                            $('#action_spinner').attr("class", "fa-solid fa-circle-exclamation fs-5 p-2 action_spinner");
                            $('#action_spinner').css('color', "red");
                            xmodal.xalert('.zone_modale', "Gestion Acte", "Opération échoué")
                        }
                    }
                });
                console.log(data_request)

            }

        });

        //--<Supression de ressort>
        $('#btn_delete_tauxdevise').click(function (e) {
            e.preventDefault();
            if (dataDefault[0] != '') {
                let data_request = {
                    cmd: 'deletetauxdevise',
                    id_tauxdevise_delete: dataDefault[0]
                }
                $('.action_spinner').css('visibility', 'visible');
                let a = 0;
                sessionStorage.setItem('action_spinner', 1);

                setInterval(function () {
                    let x = sessionStorage.getItem('action_spinner');
                    if (x == 1) {
                        a += 1
                        document.querySelector('.action_spinner').style.transform = `rotate(${a}deg)`;
                    }
                }, 0.500);

                $.ajax({
                    type: "post",
                    url: "php/manage_ressort.php",
                    data: data_request,
                    dataType: "json",
                    success: function (response) {
                        sessionStorage.setItem('action_spinner', 0);

                        if (response.code == 0) {
                            $('.xomodal-alert').css('display', 'none');
                            $('body').css('overflow', '');
                            xmodal.deleteElement('#user' + dataDefault[0])

                        } else {
                            xmodal.xalert('.zone_modale', "Supression Taux Devise", "Opération échoué")
                        }

                    }
                });

            } else {
                alert('Acte inconnu')
            }


        })

        let modal_alert = 1;
        $('body').css('overflow', 'hidden');
        $('.modal__close').click(function (e) {
            e.preventDefault();

            $('.xomodal-alert').css('display', 'none');
            $('body').css('overflow', '');
        });
        $('.modal__closex').click(function (e) {

            e.preventDefault();
            $('.xomodal-alert').css('display', 'none');
            $('body').css('overflow', '');
        });
    }

    xModalCatV(id_container, titre, action, dataDefault = []) {
        let xmodal = new Xmodal();

        let modal_add = (`

            <!-- [1] -->
            <div class="modal_style blancs xomodal-alert" id="modal-1" aria-hidden="true">

                <!-- [2] -->
                <div class="modal__overlay" tabindex="-1" data-micromodal-close>

                    <!-- [3] -->
                    <div id="modal__container" class="modal__container m-3 shadow" role="dialog" aria-modal="true"
                        aria-labelledby="modal-1-title">
                        <header class="modal__header">
                            <h2 class="modal__title base-color" id="modal-1-title">
                                ${titre}
                            </h2>

                            <!-- [4] -->
                            <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
                        </header>

                        <main class="modal__content" id="modal-1-content">

                            <span class="text-min">Libellé Catégorie Véhicule</span>
                            <input class="w-100 inputx " type="text" name="" id="Libcatv">
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msgLibcatv"></div>

                            <span class="text-min">Code Catégorie Véhicule</span>
                            <input class="w-100 inputx " type="text" name="" id="Codecatv">
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msgCodecatv"></div>

                            <span class="text-min">Taux</span>
                            <input class="w-100 inputx " type="text" name="" id="Taux">
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msgTaux"></div>

                        </main>

                        <footer class="modal__footer">
                            <i style="visibility: hidden;" class="fa-solid fa-spinner fs-5 p-2 action_spinner" id="action_spinner"></i>
                            <button class="modal__btn me-2 bg-black modal__closex">Fermer</button>
                            <button class="bouton_modale ms-1 mt-2" id="btn_valide_catv" ><i class="fa-solid fa-pen  text-blanctext-white pe-3"></i> ${action}</button>

                        </footer>

                    </div>
                </div>
            </div>
        `);
        let modal_update = (`
            <!-- [1] -->
            <div class="modal_style blancs xomodal-alert" id="modal-1" aria-hidden="true">

                <!-- [2] -->
                <div class="modal__overlay" tabindex="-1" data-micromodal-close>

                    <!-- [3] -->
                    <div id="modal__container" class="modal__container m-3 shadow" role="dialog" aria-modal="true"
                        aria-labelledby="modal-1-title">
                        <header class="modal__header">
                            <h2 class="modal__title base-color" id="modal-1-title">
                                ${titre}
                            </h2>

                            <!-- [4] -->
                            <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
                        </header>

                        <main class="modal__content" id="modal-1-content">

                            <span class="text-min">Libellé Catégorie Véhicule</span>
                            <input class="w-100 inputx " value="${dataDefault[1]}" type="text" name="" id="Libcatv" placeholder="Libellé">
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msgLibcatv"></div>

                            <span class="text-min">Code Catégorie Véhicule</span>
                            <input class="w-100 inputx " value="${dataDefault[2]}" type="text" name="" id="Codecatv">
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msgCodecatv"></div>

                            <span class="text-min">Taux</span>
                            <input class="w-100 inputx " value="${dataDefault[2]}" type="text" name="" id="Taux">
                            <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msgTaux"></div>

                        </main>

                        <footer class="modal__footer">
                            <i style="visibility: hidden;" class="fa-solid fa-spinner fs-5 p-2 action_spinner" id="action_spinner"></i>
                            <button class="modal__btn me-2 bg-black modal__closex">Fermer</button>
                            <button class="modal__btn bg-black " id="btn_delete_catv"><i class="fa-solid fa-trash-can  pe-3"></i>Suprimé</button>
                            <button class="bouton_modale ms-1 mt-2" id="btn_valide_catv" ><i class="fa-solid fa-pen  text-blanctext-white pe-3"></i> ${action}</button>

                        </footer>

                    </div>
                </div>
            </div>
        `);

        let modal;
        let _action;
        let id_catv_update = "";

        if (action == 'Modifier') {
            id_catv_update = dataDefault[0];
            modal = modal_update;
            _action = 'modifier';

            $(id_container).html(modal);
        } else {

            modal = modal_add;
            _action = 'ajoute';
            $(id_container).html(modal);

        }

        //--|Validation de données|
        $('#btn_valide_catv').click(function (e) {
            e.preventDefault();
            let _WebsecurFrondEnd_validateData = new WebsecurFrondEnd_validateData();
            let form_valide = true;

            let Libcatv = $('#Libcatv').val();
            let _Libcatv = _WebsecurFrondEnd_validateData.ValidateText(Libcatv, 'Libcatv', 100, 1, 'msgLibcatv');
            if (_Libcatv != true) {
                form_valide = false;
            }

            let Codecatv = $('#Codecatv').val();
            let _Codecatv = _WebsecurFrondEnd_validateData.ValidateText(Codecatv, 'Codecatv', 100, 1, 'msgCodecatv');
            if (_Codecatv != true) {

                form_valide = false;
            }

            let Taux = $('#Taux').val();
            let _Taux = _WebsecurFrondEnd_validateData.ValidateText(Taux, 'Taux', 100, 1, 'msgTaux');
            if (_Taux != true) {

                form_valide = false;
            }

            if (form_valide == true) {
                let data_request = {
                    'cmd': 'gestionCatv',
                    '_action': _action,
                    'id_catv_update': id_catv_update,
                    'Libcatv': Libcatv,
                    'Codecatv': Codecatv,
                    'Taux': Taux,
                }

                //--|loader|
                $('.action_spinner').css('visibility', 'visible');
                let a = 0;
                sessionStorage.setItem('action_spinner', 1);
                setInterval(function () {
                    let x = sessionStorage.getItem('action_spinner');
                    if (x == 1) {
                        a += 1
                        document.querySelector('.action_spinner').style.transform = `rotate(${a}deg)`;
                    }
                }, 0.500);

                $.ajax({
                    type: "post",
                    url: "php/manage_ressort.php",
                    data: data_request,
                    dataType: "json",
                    success: function (response) {
                        sessionStorage.setItem('action_spinner', 0);
                        if (response.code == 0) {
                            $('#action_spinner').attr("class", "fa-solid fa-check fs-5 p-2 action_spinner");
                            $('#action_spinner').css('color', "green");

                        } else if (response.code == 2) {
                            $('#action_spinner').attr("class", "fa-solid fa-circle-exclamation fs-5 p-2 action_spinner");
                            $('#action_spinner').css('color', "red");
                            xmodal.xalert('.zone_modale', "Ajoute Ressort", "Opération échoué, Acte existe")
                        }
                        else {
                            $('#action_spinner').attr("class", "fa-solid fa-circle-exclamation fs-5 p-2 action_spinner");
                            $('#action_spinner').css('color', "red");
                            xmodal.xalert('.zone_modale', "Catégorie Véhicules", "Opération échoué")
                        }
                    }
                });
                console.log(data_request)

            }

        });

        //--<Supression de ressort>
        $('#btn_delete_catv').click(function (e) {
            e.preventDefault();
            if (dataDefault[0] != '') {
                let data_request = {
                    cmd: 'delete_catv',
                    id_catv_update: dataDefault[0]
                }
                $('.action_spinner').css('visibility', 'visible');
                let a = 0;
                sessionStorage.setItem('action_spinner', 1);

                setInterval(function () {
                    let x = sessionStorage.getItem('action_spinner');
                    if (x == 1) {
                        a += 1
                        document.querySelector('.action_spinner').style.transform = `rotate(${a}deg)`;
                    }
                }, 0.500);

                $.ajax({
                    type: "post",
                    url: "php/manage_ressort.php",
                    data: data_request,
                    dataType: "json",
                    success: function (response) {
                        sessionStorage.setItem('action_spinner', 0);

                        if (response.code == 0) {
                            $('.xomodal-alert').css('display', 'none');
                            $('body').css('overflow', '');
                            xmodal.deleteElement('#user' + dataDefault[0])

                        } else {
                            xmodal.xalert('.zone_modale', "Supression Taux Devise", "Opération échoué")
                        }

                    }
                });

            } else {
                alert('Acte inconnu')
            }


        })

        let modal_alert = 1;
        $('body').css('overflow', 'hidden');
        $('.modal__close').click(function (e) {
            e.preventDefault();

            $('.xomodal-alert').css('display', 'none');
            $('body').css('overflow', '');
        });
        $('.modal__closex').click(function (e) {

            e.preventDefault();
            $('.xomodal-alert').css('display', 'none');
            $('body').css('overflow', '');
        });
    }

    xInput2champ(id_container, titre, body, maxlength, fonction, type1, type2, label1, label2) {
        let modal = (`
            <!-- [1] -->
            <div class="modal_style blancs xomodal-alert" id="modal-1" aria-hidden="true">

                <!-- [2] -->
                <div class="modal__overlay" tabindex="-1" data-micromodal-close>

                    <!-- [3] -->
                    <div id="modal__container" class="modal__container m-3 round" role="dialog" aria-modal="true"
                        aria-labelledby="modal-1-title">
                        <header class="modal__header">
                            <h2 class="modal__title base-color" id="modal-1-title">
                                ${titre}
                            </h2>

                            <!-- [4] -->
                            <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
                        </header>

                        <main class="modal__content" id="modal-1-content">
                            
                                <style>
                                    .inputx{
                                        padding: 4px;
                                        border: 1px solid silver;
                                        border-radius: 5px ;
                                    }
                                </style>
                                <h4>${body}</h4>
                                <br>
                                <label for="password">${label1}</label>
                                <input class="w-100 inputx p-2 mt-2" type="${type1}" id="input1"  maxlength="${maxlength}" style="padding: 4px;">
                                <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msg_input1"></div><br>

                                <label for="conf_password ">${label2}</label>
                                <input class="w-100 inputx p-2 mt-2" type="${type2}" id="input2"  maxlength="${maxlength}" style="padding: 4px;">
                                <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msg_input2"></div>
                        </main>

                        <footer class="modal__footer">
                            <button class="modal__btn bg-btn modal__closex me-3">Annuler</button>
                            <button class="modal__btn modal__btn-primary  btn__ok">Enregistrer</button>
                        </footer>

                    </div>
                </div>
            </div>
        `);

        $('.btn__ok').click(function (e) {
            e.preventDefault();

        });
        $(id_container).html(modal);
        let modal_alert = 1;
        $('body').css('overflow', 'hidden');
        $('.modal__close').click(function (e) {
            e.preventDefault();
            $('.xomodal-alert').css('display', 'none');
            $('body').css('overflow', '');
        });
        $('.modal__closex').click(function (e) {
            e.preventDefault();
            $('.xomodal-alert').css('display', 'none');
            $('body').css('overflow', '');
        });
        $('#modal-1').mouseleave(function (e) {
            e.preventDefault();
            $('.xomodal-alert').css('display', 'none');
            $('body').css('overflow', '');
        });

        $('.btn__ok').click(function (e) {
            e.preventDefault();
            $('.xomodal-confirm').css('display', 'none');
            fonction(true);
        });

    }

    xInput3champ(id_container, titre, body, maxlength, fonction, type1, type2,type3, label1, label2, label3) {
        let modal = (`
            <!-- [1] -->
            <div class="modal_style blancs xomodal-alert" id="modal-1" aria-hidden="true">

                <!-- [2] -->
                <div class="modal__overlay" tabindex="-1" data-micromodal-close>

                    <!-- [3] -->
                    <div id="modal__container" class="modal__container m-3 round" role="dialog" aria-modal="true"
                        aria-labelledby="modal-1-title">
                        <header class="modal__header">
                            <h2 class="modal__title base-color" id="modal-1-title">
                                ${titre}
                            </h2>

                            <!-- [4] -->
                            <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
                        </header>

                        <main class="modal__content" id="modal-1-content">
                            
                                <style>
                                    .inputx{
                                        padding: 4px;
                                        border: 1px solid silver;
                                        border-radius: 5px ;
                                    }
                                </style>
                                <h4>${body}</h4>
                                <br>
                                <label for="password">${label1}</label>
                                <input class="w-100 inputx p-2 mt-2" type="${type1}" id="input1"  maxlength="${maxlength}" style="padding: 4px;">
                                <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msg_input1"></div><br>

                                <label for="conf_password ">${label2}</label>
                                <input class="w-100 inputx p-2 mt-2" type="${type2}" id="input2"  maxlength="${maxlength}" style="padding: 4px;">
                                <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msg_input2"></div><br>

                                <label for="conf_password ">${label3}</label>
                                <input class="w-100 inputx p-2 mt-2" type="${type3}" id="input3"  maxlength="${maxlength}" style="padding: 4px;">
                                <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msg_input2"></div>
                        </main>

                        <footer class="modal__footer">
                            <button class="modal__btn bg-btn modal__closex me-3">Annuler</button>
                            <button class="modal__btn modal__btn-primary  btn__ok">Enregistrer</button>
                        </footer>

                    </div>
                </div>
            </div>
        `);

        $('.btn__ok').click(function (e) {
            e.preventDefault();

        });
        $(id_container).html(modal);
        let modal_alert = 1;
        $('body').css('overflow', 'hidden');
        $('.modal__close').click(function (e) {
            e.preventDefault();
            $('.xomodal-alert').css('display', 'none');
            $('body').css('overflow', '');
        });
        $('.modal__closex').click(function (e) {
            e.preventDefault();
            $('.xomodal-alert').css('display', 'none');
            $('body').css('overflow', '');
        });
        $('#modal-1').mouseleave(function (e) {
            e.preventDefault();
            $('.xomodal-alert').css('display', 'none');
            $('body').css('overflow', '');
        });

        $('.btn__ok').click(function (e) {
            e.preventDefault();
            $('.xomodal-confirm').css('display', 'none');
            fonction(true);
        });

    }

    xInput5champ(id_container, titre, body, maxlength, fonction, type1, type2,type3,type4,type5, label1, label2, label3,label4,label5,fc_change) {
        let modal = (`
            <!-- [1] -->
            <div class="modal_style blancs xomodal-alert" id="modal-1" aria-hidden="true">

                <!-- [2] -->
                <div class="modal__overlay" tabindex="-1" data-micromodal-close>

                    <!-- [3] -->
                    <div id="modal__container" class="modal__container m-3 round" role="dialog" aria-modal="true"
                        aria-labelledby="modal-1-title">
                        <header class="modal__header">
                            <h2 class="modal__title base-color" id="modal-1-title">
                                ${titre}
                            </h2>

                            <!-- [4] -->
                            <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
                        </header>

                        <main class="modal__content" id="modal-1-content">
                            
                                <style>
                                    .inputx{
                                        padding: 4px;
                                        border: 1px solid silver;
                                        border-radius: 5px ;
                                    }
                                </style>
                                <h4>${body}</h4>
                                <br>
                                <label for="password">${label1}</label>
                                <input class="w-100 inputx p-2 mt-2" type="${type1}" id="input1"  maxlength="${maxlength}" style="padding: 4px;">
                                <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msg_input1"></div><br>

                                <label for="conf_password ">${label2}</label>
                                <input class="w-100 inputx p-2 mt-2" type="${type2}" id="input2"  maxlength="${maxlength}" style="padding: 4px;">
                                <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msg_input2"></div><br>

                                <label for="conf_password ">${label3}</label>
                                <input class="w-100 inputx p-2 mt-2" type="${type3}" id="input3"  maxlength="${maxlength}" style="padding: 4px;">
                                <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msg_input3"></div><br>

                                <label for="conf_password ">${label4}</label>
                                <input class="w-100 inputx p-2 mt-2" type="${type4}" id="input4"  maxlength="${maxlength}" style="padding: 4px;">
                                <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msg_input4"></div><br>

                                <label for="conf_password ">${label5}</label>
                                <input class="w-100 inputx p-2 mt-2" type="${type5}" id="input5"  maxlength="${maxlength}" style="padding: 4px;">
                                <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msg_input5"></div>
                        </main>

                        <footer class="modal__footer">
                            <button class="modal__btn bg-btn modal__closex me-3">Annuler</button>
                            <button class="modal__btn modal__btn-primary  btn__ok">Enregistrer</button>
                        </footer>

                    </div>
                </div>
            </div>
        `);

        $('.btn__ok').click(function (e) {
            e.preventDefault();

        });
        $(id_container).html(modal);
        let modal_alert = 1;
        $('body').css('overflow', 'hidden');
        $('.modal__close').click(function (e) {
            e.preventDefault();
            $('.xomodal-alert').css('display', 'none');
            $('body').css('overflow', '');
        });
        $('.modal__closex').click(function (e) {
            e.preventDefault();
            $('.xomodal-alert').css('display', 'none');
            $('body').css('overflow', '');
        });
        $('#modal-1').mouseleave(function (e) {
            e.preventDefault();
            $('.xomodal-alert').css('display', 'none');
            $('body').css('overflow', '');
        });

        $('.btn__ok').click(function (e) {
            e.preventDefault();
            $('.xomodal-confirm').css('display', 'none');
            fonction(true);
        });
        fc_change()

    }

    xInput6champ(id_container, titre, body, maxlength, fonction, type1, type2,type3,type4,type5,type6, label1, label2, label3,label4,label5,label6,fc_change) {
        let modal = (`
            <!-- [1] -->
            <div class="modal_style blancs xomodal-alert" id="modal-1" aria-hidden="true">

                <!-- [2] -->
                <div class="modal__overlay" tabindex="-1" data-micromodal-close>

                    <!-- [3] -->
                    <div id="modal__container" class="modal__container m-3 round" role="dialog" aria-modal="true"
                        aria-labelledby="modal-1-title">
                        <header class="modal__header">
                            <h2 class="modal__title base-color" id="modal-1-title">
                                ${titre}
                            </h2>

                            <!-- [4] -->
                            <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
                        </header>

                        <main class="modal__content" id="modal-1-content">
                            
                                <style>
                                    .inputx{
                                        padding: 4px;
                                        border: 1px solid silver;
                                        border-radius: 5px ;
                                    }
                                </style>
                                <h4>${body}</h4>
                                <br>
                                <label for="password">${label1}</label>
                                <input class="w-100 inputx p-2 mt-2" type="${type1}" id="input1"  maxlength="${maxlength}" style="padding: 4px;">
                                <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msg_input1"></div><br>

                                <label for="conf_password ">${label2}</label>
                                <input class="w-100 inputx p-2 mt-2" type="${type2}" id="input2"  maxlength="${maxlength}" style="padding: 4px;">
                                <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msg_input2"></div><br>

                                <label for="conf_password ">${label3}</label>
                                <input class="w-100 inputx p-2 mt-2" type="${type3}" id="input3"  maxlength="${maxlength}" style="padding: 4px;">
                                <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msg_input3"></div><br>

                                <label for="conf_password ">${label4}</label>
                                <input class="w-100 inputx p-2 mt-2" type="${type4}" id="input4"  maxlength="${maxlength}" style="padding: 4px;">
                                <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msg_input4"></div><br>

                                <label for="conf_password ">${label5}</label>
                                <input class="w-100 inputx p-2 mt-2" type="${type5}" id="input5"  maxlength="${maxlength}" style="padding: 4px;">
                                <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msg_input5"></div><br>

                                <label for="conf_password ">${label6}</label>
                                <input class="w-100 inputx p-2 mt-2" type="${type6}" id="input6"  maxlength="${maxlength}" style="padding: 4px;">
                                <div style="visibility: hidden;" class="bls_msg text-end text-min" id="msg_input6"></div>
                        </main>

                        <footer class="modal__footer">
                            <button class="modal__btn bg-btn modal__closex me-3">Annuler</button>
                            <button class="modal__btn modal__btn-primary  btn__ok">Enregistrer</button>
                        </footer>

                    </div>
                </div>
            </div>
        `);

        $('.btn__ok').click(function (e) {
            e.preventDefault();

        });
        $(id_container).html(modal);
        let modal_alert = 1;
        $('body').css('overflow', 'hidden');
        $('.modal__close').click(function (e) {
            e.preventDefault();
            $('.xomodal-alert').css('display', 'none');
            $('body').css('overflow', '');
        });
        $('.modal__closex').click(function (e) {
            e.preventDefault();
            $('.xomodal-alert').css('display', 'none');
            $('body').css('overflow', '');
        });
        $('#modal-1').mouseleave(function (e) {
            e.preventDefault();
            $('.xomodal-alert').css('display', 'none');
            $('body').css('overflow', '');
        });

        $('.btn__ok').click(function (e) {
            e.preventDefault();
            $('.xomodal-confirm').css('display', 'none');
            fonction(true);
        });
        fc_change()

    }

    //--|Fonction specifique de l'application idoxy-app|
    //--[ Modale de selection de mode de reinitialisation de mot de passe]
    xModereinitialisationMotdepasse(id_container, titre, body) {
        let modal = (`
            <!-- [1] -->
            <div class="modal_style blancs xomodal-alert" id="modal-1" aria-hidden="true">

                <!-- [2] -->
                <div class="modal__overlay" tabindex="-1" data-micromodal-close>

                    <!-- [3] -->
                    <div id="modal__container" class="modal__container m-3 round" role="dialog" aria-modal="true"
                        aria-labelledby="modal-1-title">
                        <header class="modal__header">
                            <h2 class="modal__title base-color" id="modal-1-title">
                                ${titre}
                            </h2>

                            <!-- [4] -->
                            <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
                        </header>

                        <main class="modal__content" id="modal-1-content">
                            
                            <p>
                                ${body}
                            </p>
                        </main>

                        <footer class="modal__footer">
                            <button class="modal__btn bg-btn modal__closex">ok</button>

                        </footer>

                    </div>
                </div>
            </div>
            `);
        $(id_container).html(modal);
        let modal_alert = 1;
        $('body').css('overflow', 'hidden');
        $('.modal__close').click(function (e) {
            e.preventDefault();
            $('.xomodal-alert').css('display', 'none');
            $('body').css('overflow', '');
        });
        $('.modal__closex').click(function (e) {
            e.preventDefault();
            $('.xomodal-alert').css('display', 'none');
            $('body').css('overflow', '');
        });
        $('#modal-1').mouseleave(function (e) {
            e.preventDefault();
            $('.xomodal-alert').css('display', 'none');
            $('body').css('overflow', '');
        });

    }

    //--|modal des choix |
    xchoix2mode(id_container, titre, body, fonction) {
        let modal = (`
            <!-- [1] -->
            <div class="modal_style blancs xomodal-alert" id="modal-1" aria-hidden="true">

                <!-- [2] -->
                <div class="modal__overlay" tabindex="-1" data-micromodal-close>

                    <!-- [3] -->
                    <div id="modal__container" class="modal__container m-3 round" role="dialog" aria-modal="true"
                        aria-labelledby="modal-1-title">
                        <header class="modal__header">
                            <h2 class="modal__title base-color" id="modal-1-title">
                                ${titre}
                            </h2>

                            <!-- [4] -->
                            <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
                        </header>

                        <main class="modal__content" id="modal-1-content">
                            
                            <p>
                                ${body}
                            </p>
                            <div class="d-flex align-items-center">
                                <div class="p-1">
                                    <label class=" border roundedx  p-2 bg-zone-de-sante2 btn shadow" for="ctr" id="">
                                        <div class="text-min fw-bold text-end"></div>
                                        <div style="font-weight:lighter;" class=" text-start">Par e-mail
                                        </div>

                                        <div class="d-flex align-items-center">
                                            <i class=" fa-solid fa-envelope fs-1"></i>
                                        </div>

                                        <div class=" text-end ">
                                            <span style="font-weight:lighter;" class="text-min pt-1">Sélectionner</span>
                                            <button class=" fw-bold bg-white text-min border border-white roundedx btn-mail">
                                                <input type="radio" name="mode_generation_carte" id="email"></button>
                                        </div>

                                    </label>
                                </div>
                                <div class="p-1">
                                    <label class="border roundedx p-2 bg-zone-de-sante1 btn shadow" fro="men" id="">
                                        <div class="text-min fw-bold text-end"></div>
                                        <div style="font-weight:lighter;" class=" text-start">Par SMS
                                        </div>

                                        <div class="d-flex align-items-center">
                                            <i class=" fa-solid fa-comments fs-1"></i>
                                        </div>

                                        <div class=" text-end ">
                                            <span style="font-weight:lighter;" class="text-min pt-1">Sélectionner</span>
                                            <button class=" fw-bold bg-white text-min border border-white roundedx btn-sms">
                                                <input type="radio" name="mode_generation_carte" id="sms"></button>
                                        </div>

                                        </labe>
                                </div>

                                
                            </div>
                        </main>

                        <footer class="modal__footer">
                            <button class="modal__btn bg-btn modal__closex">ok</button>
                            <button class="modal__btn modal__btn-primary  btn__ok">Suivant</button>
                        </footer>

                    </div>
                </div>
            </div>
            `);


        $(id_container).html(modal);
        let modal_alert = 1;
        $('body').css('overflow', 'hidden');
        $('.modal__close').click(function (e) {
            e.preventDefault();
            $('.xomodal-alert').css('display', 'none');
            $('body').css('overflow', '');
        });
        $('.modal__closex').click(function (e) {
            e.preventDefault();
            $('.xomodal-alert').css('display', 'none');
            $('body').css('overflow', '');
        });
        $('#modal-1').mouseleave(function (e) {
            e.preventDefault();
            $('.xomodal-alert').css('display', 'none');
            $('body').css('overflow', '');
        });

        $('.btn-mail').click(function (e) {
            sessionStorage.setItem('mode_res', 1);
        });

        sessionStorage.setItem('mode_res', 0);
        $('.btn-sms').click(function (e) {
            sessionStorage.setItem('mode_res', 2);
        });

        $('.btn__ok').click(function (e) {
            e.preventDefault();
            $('.xomodal-confirm').css('display', 'none');
            fonction(true);
        });

    }

    xgestionApi(id_container, titre, body, List_api) {
        let modal = (`

            <!-- [1] -->
            <div class="modal_style blancs xomodal-alert" id="modal-1" aria-hidden="true">

                <!-- [2] -->
                <div class="modal__overlay" tabindex="-1" data-micromodal-close>

                    <!-- [3] -->
                    <div id="modal__container" class="modal__container m-3 round" role="dialog" aria-modal="true"
                        aria-labelledby="modal-1-title">
                        <header class="modal__header">
                            <h2 class="modal__title base-color" id="modal-1-title">
                                ${titre}
                            </h2>

                            <!-- [4] -->
                            <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
                        </header>

                        <main class="modal__content" id="modal-1-content">
                            
                            <p>
                                ${body}
                            </p>

                            <div class="text-end mb-2">
                                <button class="modal__btn modal__btn-primary  btn_add_balance">Nouveau Bundel</button>
                            </div>
                            <div class="text-min rounded border" id="zone_">
                                
                            </div>
                            <input style="visibility: hidden;" class="input rounded border w-50 mt-2" type="number" placeholder="Bundel" name="" id="new_Bundel">

                            </hr>
                            <div class="text-min btn-historique">Historique <i class="fa-solid fa-angle-right ps-2 text-min btn icon-historique_api"></i></div>
                            
                            <div class="text-min" id="zone_historique">
                            </div>
                            

                        </main>

                        <footer class="modal__footer">
                            <button class="modal__btn bg-btn modal__closex me-3">Annuler</button>
                            <button class="modal__btn modal__btn-primary  btn__ok">Enregistrer</button>
                        </footer>

                    </div>
                </div>
            </div>
            `);

        $(id_container).html(modal);
        let modal_alert = 1;
        $('body').css('overflow', 'hidden');
        $('.modal__close').click(function (e) {
            e.preventDefault();
            $('.xomodal-alert').css('display', 'none');
            $('body').css('overflow', '');
        });
        $('.modal__closex').click(function (e) {
            e.preventDefault();
            $('.xomodal-alert').css('display', 'none');
            $('body').css('overflow', '');
        });
        $('#modal-1').mouseleave(function (e) {
            e.preventDefault();
            $('.xomodal-alert').css('display', 'none');
            $('body').css('overflow', '');
        });

        //--|Ajoute Bundel|
        $('.btn_add_balance').click(function (e) {
            e.preventDefault();
            $('#new_Bundel').css('visibility', 'visible');
        });

        $('.btn__ok').click(function (e) {
            e.preventDefault();
            let bundel_ajoute = $('#new_Bundel').val();
            if (bundel_ajoute != "") {
                let datas_request = {
                    "action": "add_bundel_api",
                    "datas": {
                        'bundel': bundel_ajoute,
                        'id_api':sessionStorage.getItem('id_api')
                    }
                }
                const Csrf_token = getCookie('csrftoken');
                let myHeaders = new Headers({ 'X-CSRFToken': Csrf_token });
                let myInit = {
                    method: 'POST',
                    headers: myHeaders,
                    mode: 'cors',
                    cache: 'default',
                    body: JSON.stringify(datas_request)
                }
                fetch('/gestionApi/', myInit).then((res) => {
                    return res.json()
                }).then((res) => {
                    window.location.reload();
                })
            } else {
                alert('Veuillez compléter le champ "bundel" pour en ajouter un')
            }
        });

        //--|integration des api|
        
        let ctr_List_api = 0;
        while (ctr_List_api < List_api.length) {
            ctr_List_api = List_api.length - 1
            let ctr_balance = List_api[ctr_List_api].balance.length - 1;
            let composant_html = `
                <div>

                    <div class="row mt-2 border-bottom">
                        <span class="col fw-bold">${List_api[ctr_List_api].nom}</span>
                    </div>

                    <div class="row mt-2 border-bottom">
                        <span class="col">${List_api[ctr_List_api].description}</span>
                    </div>

                    <div class="container pt-2 pb-2 shadow">
                    
                        <div class="row mt-2 mb-2 border-bottom">
                            <span class="col text-start">Bundel </span><span class="col">: ${List_api[ctr_List_api].balance[ctr_balance].bundel}</span>
                        </div>

                        <div class="row mt-2 mb-2 border-bottom">
                            <span class="col text-start">Bundel Utilisé:</span><span class="col">: ${List_api[ctr_List_api].balance[ctr_balance].bundel_utiliser}</span>
                        </div>
                        <div class="row">
                            <span class="col text-start">Bundel restant:</span><span class="col">: ${List_api[ctr_List_api].balance[ctr_balance].bundel_restant}</span>

                        </div>
                        <div class="row">
                            <span class="col text-start">Date </span><span class="col">: ${List_api[ctr_List_api].balance[0].date}</span>

                        </div>
                    </div>
                </div>
            `;
            $('#zone_').append(composant_html);
            sessionStorage.setItem('id_api',List_api[ctr_List_api].id);
            ctr_List_api = List_api.length;
            ctr_List_api++;
        }

        //--|integration Historique|
        $('#zone_historique').hide();
        let ctr_List_api_historique = 0;
        while (ctr_List_api_historique < List_api.length) {

            let ctr_balance = 0;
            while (ctr_balance < List_api[ctr_List_api_historique].balance.length) {
                let composant_html = `
                <div>
                    <div class="container pt-2 pb-2 shadow">
                    
                        <div class="row mt-2 mb-2 border-bottom">
                            <span class="col text-start">Bundel </span><span class="col">: ${List_api[ctr_List_api_historique].balance[ctr_balance].bundel}</span>
                        </div>

                        <div class="row mt-2 mb-2 border-bottom">
                            <span class="col text-start">Bundel Utilisé:</span><span class="col">: ${List_api[ctr_List_api_historique].balance[ctr_balance].bundel_utiliser}</span>
                        </div>
                        <div class="row">
                            <span class="col text-start">Bundel restant:</span><span class="col">: ${List_api[ctr_List_api_historique].balance[ctr_balance].bundel_restant}</span>

                        </div>
                        <div class="row">
                            <span class="col text-start">Date </span><span class="col">: ${List_api[ctr_List_api_historique].balance[ctr_balance].date}</span>

                        </div>
                    </div>
                </div>
            `;
                $('#zone_historique').append(composant_html);
                ctr_balance++;
            }

            ctr_List_api_historique++;
        }

        let _Utiliteur = new Utiliteur();
        _Utiliteur.ClickONof('.btn-historique', () => {
            $('#zone_historique').show(500);
            $('.icon-historique_api').css('transform', 'rotate(90deg)');
        }, () => {
            $('.icon-historique_api').css('transform', 'rotate(0deg)');
            $('#zone_historique').hide(500);
        })
    }
}

let is_renvois_code = sessionStorage.getItem('is_renvois_code');
//--| gestion de selection des numéro de télephone|

if (is_renvois_code == 'oui') {
    let TelNumber_code_pays = {
        'code': '',
        'numero': '',
        'pays': '',
    }
    //--| rdc|
    $('#number_rdc').click(function (e) {
        e.preventDefault();
        $('#code_pays_value').text('+243');
        TelNumber_code_pays.code = +243;
        TelNumber_code_pays.numero = $('#telNumber').val();
        TelNumber_code_pays.pays = 'République démocratique du congo';
        $('#pays_value').text('République démocratique du congo');
        $('.pays_phone_number').attr('src', "/static/educpilote/imgs/drapo_rdc.jpg");
        $('#zone_code_pays').hide(1000);

        let xxmodal = new Xmodal();
        sessionStorage.setItem('code_pays_change', '+243');
        xxmodal.renvoisCodeConfirmationInscription('#zoneModale');
        console.log(is_renvois_code)
    });

    //--| rdc|
    $('#number_brazza').click(function (e) {
        e.preventDefault();
        $('#code_pays_value').text('+242');
        TelNumber_code_pays.code = +242;
        TelNumber_code_pays.numero = $('#telNumber').val();
        TelNumber_code_pays.pays = 'République du congo';
        $('#pays_value').text('République du congo');
        $('.pays_phone_number').attr('src', "/static/educpilote/imgs/drapo_brazza.jpg");
        $('#zone_code_pays').hide(1000);

        let xxmodal = new Xmodal();
        sessionStorage.setItem('code_pays_change', '+242');
        xxmodal.renvoisCodeConfirmationInscription('#zoneModale');
        console.log(is_renvois_code)
    });

    //--| rdc|
    $('#number_angola').click(function (e) {
        e.preventDefault();
        $('#code_pays_value').text('+244');
        TelNumber_code_pays.code = +244;
        TelNumber_code_pays.numero = $('#telNumber').val();
        TelNumber_code_pays.pays = 'Angola';
        $('#pays_value').text('Angola');
        $('.pays_phone_number').attr('src', "/static/educpilote/imgs/drapo_angola.jpg");
        $('#zone_code_pays').hide(1000);

        let xxmodal = new Xmodal();
        sessionStorage.setItem('code_pays_change', '+244');
        xxmodal.renvoisCodeConfirmationInscription('#zoneModale');
        console.log(is_renvois_code)
    });

    //--[renvois de code de confirmation]
    $('.renvois_code').click(function (e) {
        e.preventDefault();
        let tel = $('#telNumber').val();

        if (tel == '') {
            $('.xomodal-alert').css('display', 'none');
            $('body').css('overflow', '');
            xxmodal.loader('#zoneModale');

            $('#tel_Etab_msg').css('visibility', 'hidden');
            $('#telNumber').css('border', '1px solid silver');
        } else {
            let Tel = Websecur.ValidateTel('telNumber', tel, 15, 9, 'tel_Etab_msg');
            if (Tel == true) {
                let TelNumber = {
                    'telNocode': tel,
                    'code_pays': code_pays
                }
            }
        }

    });
}


