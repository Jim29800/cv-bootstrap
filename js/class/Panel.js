class Panel {
    constructor(titre, contenu) {
        this.html = 
        '<div class="col-sm-6">'
            '<div class="card">'
                '<div class="card-body">'
                    '<h5 class="card-title">'+ titre +'</h5>'
                    '<p class="card-text">'+ contenu +'</p>'
                '</div>'
            '</div>'
        '</div>';
    }
}