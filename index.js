/*Fonction d'affichage dynamique des listes avec choix du type pour le titre*/
function affichageDynamiqueListes(contenu, conteneur, type) {

    contenu.forEach(contenu => {
        const h = document.createElement(type);
        h.textContent = contenu.titre;
        const ul = document.createElement("ul");

        contenu.elements.forEach(element => {
            const li = document.createElement("li");
            li.textContent = element;
            ul.appendChild(li);
        });

        conteneur.appendChild(h);
        conteneur.appendChild(ul);

        h.addEventListener("click", () => {
            ul.style.display = (ul.style.display === "none" || ul.style.display === "") ? "block" : "none";
        });
    });
}

/*Titre de la page*/
const titre = `Portfolio Pierre JANNOT`;
document.getElementById("titre").textContent = titre;

/*Nom Prénom*/
const identité = `Pierre JANNOT`;
document.getElementById("identité").textContent = identité;

/*Image de profil*/
const conteneur = document.getElementById("img_profil");
const imgProfil = document.createElement("img");
imgProfil.src = `./images/profil.jpg`;
imgProfil.alt = `Photo de profil de Pierre JANNOT`;
imgProfil.width = 100;
conteneur.appendChild(imgProfil);

/*Statut*/
const statut = `Ingénieur en Biotechnologies et e-Santé<br>Apprenant en 
Intelligence Artificielle`;
document.getElementById("statut").innerHTML = statut;

/*Parcours*/
const parcours = [`Issu d'une classe préparatoire au Lycée Rouvière et de 
l'école d'ingénieur ESIEE Paris, je me suis formé dans le domaine de la 
Biotechnologie et de l'e-Santé en vue d'améliorer la prise en charge de 
patients dans le milieu médical.`,`Cette formation m'a permis d'obtenir 
des compétences dans la programmation Python, R, Java et C++ ainsi que le 
traitement du signal et de l'image avec Matlab. Suite à cette formation, 
j'ai pu poursuivre mon stage de fin d'études en tant qu'ingénieur en 
Traitement du Signal au sein de l'ENSOSP à Aix-en-Provence où j'ai pu 
développer mes compétences dans le traitement du signal. De plus, depuis 
2017, je suis réserviste militaire pour la Marine Nationale, ce qui m'a 
permis de travailler sur mon autonomie et sur la gestion d'équipes.`];

const ct_parcours = document.getElementById("parcours");

/*Affichage des éléments dans deux paragraphes séparés*/
parcours.forEach(parcours => {
    const p = document.createElement("p");
    p.textContent = parcours;
    ct_parcours.appendChild(p);
});

/*Séparation des expériences en listes et affichage dynamique pour un ajout plus facile d'éléments*/
const experiences = [
    {
        titre: `Ingénieur Traitement du Signal - ENSOSP :`,
        elements: [
            `Traitement de nombreux signaux de constantes vitales`,
            `Production de scripts Matlab et Python pour organiser
                            et traiter les données automatiquement`,
            `Réalisation d'un script de génération de signaux pour pallier
                            l'absence d'une campagne de mesures`,
            `Échange courant avec le service SSSM des pompiers de l'ENSOSP
                            pour déterminer les axes d'amélioration du projet`
                        ]
        }, {
            titre: `Stagiaire Ingénieur Tests Unitaires Python :`,
            elements: [
                `Apprentissage autonome des tests unitaires Python`,
                `Production de scripts de tests unitaires pour vérifier le bon
                            fonctionnement de la librairie PyMoDAQ lors d'une mise à jour
                            sur GitHub`,
                `Réalisation de fiches d'apprentissage des tests unitaires pour
                            permettre au prochain ingénieur une adaptation rapide`
                        ]

        }
    ];

/*Séparation des compétences en listes et affichage dynamique pour un ajout plus facile d'éléments*/
const compétences = [
    {
        titre: `Compétences Techniques :`,
        elements: [`Traitement du Signal et de l'Image`,
                    `Classification par Machine Learning`,
                    `Matlab`,
                    `Arduino`,
                    `Git et GitHub`,
                    `Tests Unitaires`,
                    `Machine Learning`]
    }, {
        titre: `Langages de programmation :`,
        elements: [`Python`,
                    `Java`,
                    `C++`,
                    `Assembleur`,
                    `R`,
                    `VHDL`,
                    `HTML`,
                    `CSS`]
    }
]

const ct_experiences = document.getElementById("ct_expériences");

const h1 = document.getElementById("titre_expériences");
h1.textContent = "Expérience professionnelle";

affichageDynamiqueListes(experiences, ct_experiences, `h2`);

const ct_compétences = document.getElementById("ct_compétences");
affichageDynamiqueListes(compétences,ct_compétences,`h1`);

/* Champs entrée mail avec bouton d'envoi */
const ct_input = document.getElementById("input");
const button = document.getElementById("input_button");

let mail = "";

/* Vérification que le texte entré correspond bien à une adresse mail */
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* Message de confirmation ou d'erreur selon la valeur soumise par l'utilisateur */
button.addEventListener("click", () => {
    mail = document.getElementById("mailInput").value;
    if (mail && emailPattern.test(mail)) {
        console.log(`Mail enregistré : ${mail}`);
        alert(`Merci ! Votre mail ${mail} a bien été enregistré.`);
    } else {
        alert("Veuillez entrer une adresse mail valide.");
    }
});