function like(ele) {
    if (ele.style.color != "red"){
        ele.style.color = "red"
    }
    else{
        ele.style.color = "grey"
    }
}
function remove(button) {
    var cartRow = button.parentElement.parentElement;
    cartRow.remove();
    alert("voulez vous retirer cet article");
    Totalgeneral();
}
function checknumber(input) {
    var quantity = input.value;
    if (isNaN(quantity) || quantity <= 0) {
        alert("Veuillez saisir une quantite valide.");
        input.value = 1;
        return;
    }
    var cartRow = input.parentElement.parentElement;
    var priceElement = cartRow.querySelector('.pu');
    var price = priceElement.textContent.replace(' Fcfa', '');
    var total = price * quantity;
    var totalElement = cartRow.querySelector('.total');
    totalElement.textContent = total + ' Fcfa';
    Totalgeneral();
}
function Totalgeneral() {
    var cartItems = document.getElementsByClassName('cart-items')[0];
    var cartRows = cartItems.getElementsByClassName('cart-row');
    var cartTotal = 0;
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var totalElement = cartRow.querySelector('.total');
        var total = parseFloat(totalElement.textContent.replace(' Fcfa', ''));
        cartTotal += total;
    }
    var cartTotalElement = document.getElementById('cart-total-amount');
    cartTotalElement.textContent = cartTotal + ' Fcfa';
}