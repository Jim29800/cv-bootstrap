$(document).ready(function () {

    /*  ----------------------
        GESTION DE LA SIDEBAR
        ----------------------
    */
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
    /*  -------------------
        GESTION DU CONTENU 
        -------------------
    */
    /* 
        Création des fonctions
    */
    //Fonction pour créer une UL, en donnant un tableau contenant les LI
    function makeUL(liArray) {
        let ul = '<ul class="list-unstyled">';
        liArray.forEach(element => {
            ul += '<li>' + element + '</li>';
        });
        ul += '</ul>'
        return ul;
    }
    // Création de la progress bar avec choix du %
    function progressBar(label, percent, color = null) {
        return '<div class="progress"><div class="progress-bar font-weight-bold text-left ' + color +'" role="progressbar" style="width: '+percent+'%;" aria-valuenow="'+ percent+'" aria-valuemin="0" aria-valuemax="100">'+label+'</div></div>';
    
    }

    /* 
        Structure de mes panels
    */
    class Panel {
        constructor(titre, contenu) {
            this.html = '<div class="col-sm-6">';
            this.html +=    '<div class="card text-white bg-dark">';
            this.html +=        '<div class="card-header"><h3>'+titre+'</h3></div>';
            this.html +=        '<div class="card-body">';
            this.html +=            '<p class="card-text">' + contenu + '</p>';
            this.html +=        '</div>';
            this.html +=    '</div>';
            this.html += '</div>';
        }
    }
    /*
        Menu PROFIL
    */
    // Informations personnel
    let infoPersoTitre = 'Informations personnel';
    let infoPersoContenu = makeUL(["28 Ans", "France", "06.03.03.57.08", "jbouvier1173@gmail.com", "Permis B - Véhicule personnel" ])
    let infoPerso = new Panel(infoPersoTitre, infoPersoContenu);
    
    // Technologies
    let technoTitre = 'Languages, Frameworks ...';
    let technoContenu = makeUL([
        progressBar("HTML 5", 90),
        progressBar("CSS 3", 75, "bg-info"), 
        progressBar("PHP 7", 80), 
        progressBar("JavaScript", 70, "bg-info"), 
        progressBar("jQuery", 75), 
        progressBar("Bootstrap 3-4", 80, "bg-info"), 
        progressBar("Symfony 3-4", 85), 
        progressBar("MySql", 75, "bg-info"), 
        progressBar("Angular 5", 60), 
        progressBar("cordova", 40, "bg-info"), 
        progressBar("Linux / Windows", 75)
    ]);
    let techno = new Panel(technoTitre, technoContenu);
    /*
        Menu Formation
    */
    // Simplon
    let simplonTitre = 'Ma formation';
    let simplonContenu = makeUL([
        "SIMPLON Carcassonne",
        "J'ai effectué ma formation de développeur web avec l'ERN (Ecole Régionale du Numérique) Simplon de 2017 à 2018.",
    "Durant cette période j'ai appris divers langages comme le HTML, JavaScript, PHP...ainsi que la POO (Programmation Orienté Objet) et aussi l'utilisation des Framework basé sur l'architecture MVC (Modèle Vue Contrôleur) tel que Symfony." ,
    "D'autre sujet que j'ai également réalisé comme la création d'API et l'utilisation de celle - ci via des requêtes Ajax et l'utilisation de technologie asynchrone comme Angular...",
    "Je dirait que la formation nous apprends surtout à apprendre, afin de pouvoir s'adapté à n'importe quelle technologie de façon autonome ou bien de faire de la veille.",
    "Tous ceci avec beaucoup de travail d'équipe, en appliquant des méthode agiles, comme la méthode Scrum avec ces sprints et ces stand up meeting ou la méthode Kanban, pair programming..."
    ]);
    let simplon = new Panel(simplonTitre, simplonContenu);
    //Compétence couverte
    let compTitre = 'TITRE PROFESSIONNEL Développeur Logiciel (Niv 3)';
    let compContenu = '<h5 class="card-title">Maquetter une application</h5>';
    compContenu += makeUL([
        "1 Développer une application client-serveur",
        "2 Concevoir une base de données",
        "3 Mettre en place une base de données",
        "4 Développer une interface utilisateur",
        "5 Développer des composants d'accès aux données"
    ]);
    compContenu += '<h5 class="card-title">Développer une application web</h5>';
    compContenu += makeUL([
        "6 Développer des pages web en lien avec une base de données",
        "7 Mettre en œuvre une solution de gestion de contenu ou e - commerce",
        "8 Développer une application simple de mobilité numérique",
        "9 Utiliser l’anglais"
    ]);
    let comp = new Panel(compTitre, compContenu);

    /*
        Formulaire de contact
    */
    let formTitre = 'Formulaire de contact';
    let formContenu = 
        '<div class="text-center">'+
            '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfDVYZwQ7itbqOB0hkzaus5yWFOuTtfmq8TEVnD6nWC3akvsw/viewform?embedded=true" width="100%" height="1050" frameborder="0" marginheight="0" marginwidth="0">Chargement en cours...</iframe>'+
        '</div>';
    let form = new Panel(formTitre, formContenu);

    /* Events */
    $('#profil').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
        $("#display").html(infoPerso.html + techno.html);
        $('#profil').addClass('active');
        $('#formation').removeClass('active');
        $('#formulaire').removeClass('active');
    });
    $('#formation').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
        $("#display").html(simplon.html + comp.html);
        $('#profil').removeClass('active');
        $('#formation').addClass('active');
        $('#formulaire').removeClass('active');
    });
    $('#formulaire').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
        $("#display").html(form.html);
        $('#profil').removeClass('active');
        $('#formation').removeClass('active');
        $('#formulaire').addClass('active');
    });
    //on load
    $("#display").html(infoPerso.html + techno.html)

});