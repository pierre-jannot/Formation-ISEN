/*Fonction d'affichage dynamique des listes avec choix du type pour le titre*/
function affichageDynamiqueListes(contenu, conteneur, type, classe="", side_panel=false) {

    contenu.forEach(contenu => {
        const section = document.createElement("section");
        if (classe){
            section.classList.add(classe);
        }
        const h = document.createElement(type);
        h.textContent = contenu.titre;
        const ul = document.createElement("ul");

        contenu.elements.forEach(element => {
            const li = document.createElement("li");
            li.textContent = element;
            ul.appendChild(li);
        });
        section.appendChild(h);
        section.appendChild(ul);

        conteneur.appendChild(section);

        if (side_panel){
            section.addEventListener("click", () => {
                const panel = document.getElementById("side_panel");
                panel.classList.toggle("active");
                const body = document.getElementById("body");
                body.classList.toggle("shifted");
            });
        }
    });
}

/*Titre de la page*/
const titre = `Portfolio Pierre JANNOT`;
document.getElementById("titre").textContent = titre;

/*Nom Prénom*/
const identité = `Pierre JANNOT`;
document.getElementById("identité").textContent = identité;

/*Image de profil*/
const imgProfil = document.getElementById("img_profil");
/*const imgProfil = document.createElement("img");*/
imgProfil.src = `./images/profil.jpg`;
imgProfil.alt = `Photo de profil de Pierre JANNOT`;
imgProfil.width = 120;
/* conteneur.appendChild(imgProfil); */

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
const experience_ENSOSP = [
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
        }
    ];

const experience_CEMES = [
    {
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

const ct_experiences = document.getElementById("ct_expériences");

const h2 = document.getElementById("titre_expériences");
h2.textContent = "Expérience professionnelle";

affichageDynamiqueListes(experience_ENSOSP, ct_experiences, `h3`, "anim_expe", true);
affichageDynamiqueListes(experience_CEMES, ct_experiences, `h3`, "", false);

/*Contenu du side panel*/
/*Titre*/
const sp_h2 = document.getElementById("sp_h2");
sp_h2.textContent = `Ingénieur Traitement du Signal - ENSOSP`;
/*Dates*/
const sp_h3 = document.getElementById("sp_h3");
sp_h3.textContent = "Janvier 2023 - Août 2023";
/*Logo*/
const img_ensosp = document.getElementById("img_ensosp");
img_ensosp.src = "images/ensosp.png";
img_ensosp.alt = "Logo de l'ENSOSP";
img_ensosp.width = 300;
/*Contexte et travail*/
const sp_contexte = document.getElementById("sp_contexte");
sp_contexte.textContent = `Mon emploi au sein de l'ENSOSP avait pour objectif de développer le projet iSafe, visant à produire un outil 
                    de mesure des constantes vitales des personnes accidentées de la route. L'affichage de leurs constantes 
                    ainsi que de leur état de santé permettrait une prise en charge plus rapide par les primo-intervenants et un 
                    déplacement vers un centre hospitalier adapté à leur état. Cet emploi fait suite à mon stage de fin d'études réalisé au 
                    Laboratoire de Biomécanique Appliquée de Marseille en tant qu'Ingénieur en Traitement du Signal sur le même projet.`
const sp_travail = document.getElementById("sp_travail");
sp_travail.textContent = `Lors de ces deux expériences, j'ai travaillé sur les bracelets Empatica E4 et Empatica EmbracePlus, qui permettent 
                    de collecter des données physiologiques telles que l'onde de pouls, la température cutanée, la conductance de la peau et 
                    possède aussi un accéléromètre 3D. J'ai réalisé de nombreux scripts permettant de traiter les données brutes issues de ces 
                    capteurs, d'extraire des informations pertinentes telles que la fréquences et la variabilité cardiaque, la fréquence 
                    respiratoire, le niveau de stress, la position de la personne mesurée et de détecter des événements spécifiques tels que 
                    les chocs, les chutes ou les mouvements réalisés.`
/*Images iSafe*/
const isafe_img_1 = document.getElementById("isafe_img_1");
isafe_img_1.src = "images/affichage_isafe_1.png";
const isafe_img_2 = document.getElementById("isafe_img_2");
isafe_img_2.src = "images/affichage_isafe_2.png";

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

const ct_compétences = document.getElementById("ct_compétences");
affichageDynamiqueListes(compétences,ct_compétences,`h2`);

const ct_contact = document.getElementById("contact");
ct_contact.textContent = "Contact";

/* Champs entrée mail avec bouton d'envoi */
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

/* Filtrage des compétences */
const experiences_filter = document.getElementById('experiences_filter');
const items = document.querySelectorAll('.experiences li');

experiences_filter.addEventListener('input', () => {
    const filterValue = experiences_filter.value.toLowerCase();

    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(filterValue)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
});