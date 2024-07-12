$(document).ready(function() {
    $.getJSON('cards.json', function(data) {
        var cardsContainer = $('#cards-container');
        data.cards.forEach(function(card) {
            var cardHtml = `
                <div class="col-md-4">
                    <div class="card">
                        <img src="${card.image}" class="card-img-top" alt="${card.title}">
                        <div class="card-body">
                            <h5 class="card-title">${card.title}</h5>
                            <p class="card-text">${card.description}</p>
                        </div>
                    </div>
                </div>
            `;
            cardsContainer.append(cardHtml);
        });
    });

    $('a.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});
