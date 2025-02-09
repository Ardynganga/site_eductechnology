class Utiliteur {
    //--[ methode qui permet de basculer en des click 0-1]
    ClickONof(element_HTML, Methode_on, Methode_of, nameContaire) {
        $(element_HTML).click(function (e) {
            e.preventDefault();

            //----------
            if (window.localStorage.getItem(nameContaire) != null) {
                
                let ctr = window.localStorage.getItem(nameContaire);
                ctr = parseInt(ctr);
                console.log(ctr)
                ctr += 1;
                ctr = ctr % 2;

                if (ctr == 0) {

                    Methode_on();
                    window.localStorage.setItem(nameContaire, ctr)
                } else {

                    //--[ of ]
                    Methode_of();
                    window.localStorage.setItem(nameContaire, ctr)
                }

                window.localStorage.setItem(nameContaire, ctr)
            } else {
                
                window.localStorage.setItem(nameContaire, 1)
            }

        });
    }

    parsMontant(number) {
        
        console.log(number)
        number = parseInt(number);
        let i = number.toString().split('', 20);
        let montant = 0;
        let ctrx = 0;
        while (ctrx < i.length) {
            if (i.length == 4) {
                montant = i[0] + ' ' + i[1] + i[2] + i[3];

            } else if (i.length == 5) {
                montant = i[0] + i[1] + ' ' + i[2] + i[3] + i[4];

            }
            else if (i.length == 6) {
                montant = i[0] + i[1] + i[2] + ' ' + i[3] + i[4] + i[5];

            } else if (i.length == 7) {
                montant = i[0]+ ' ' + i[1] + i[2] + i[3] + ' ' + i[4] + i[5] + i[6];

            }else if (i.length == 8) {
                montant = i[0] + i[1]+ ' ' + i[2] + i[3] + i[4]+ ' '  + i[5] + i[6]+ i[7];

            }else if (i.length == 9) {
                montant = i[0] + i[1] + i[2]+ ' ' + i[3] + i[4]+ i[5]+ ' '  + i[6]+ i[7]+ i[8];

            }else if (i.length == 10) {
                montant = i[0]+ ' ' + i[1] + i[2] + i[3] + ' '+ i[4]+ i[5]+ i[6]+ ' '  + i[7]+ i[8]+ i[9];
            }
            ctrx++;
        }
        return montant;
    }

    verifierProprieteToListe(liste, propriete, valeur) {
        return liste.find(objet => objet[propriete] === valeur) || null;
    }
}