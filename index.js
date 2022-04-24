function rate(btn) {
    var rating_btn = document.getElementsByClassName('rating-button');
    for (var i = 0; i < rating_btn.length; i++) {
        rating_btn[i].style.backgroundColor = 'hsl(216, 12%, 25%)';
        rating_btn[i].style.color = 'hsl(217, 12%, 63%)';
    }
    btn.style.backgroundColor = 'hsl(25, 97%, 53%)';
    btn.style.color = 'hsl(0, 0%, 100%)';
}