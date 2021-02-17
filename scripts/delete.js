function delete_obj(){
    var removed = false;
    showMessage('Clique um objecto pra remover',4000);
    var rm = function(){
        removed = newFunction(removed);
    }
    window.addEventListener('click',rm);
    removed = false;
}

function newFunction(removed) {
    if (event.target.parentNode.className == "container" && removed == false) {
        event.preventDefault();
        event.target.parentNode.remove();
        removed = true;
    }
    else if (event.target.tagName == "svg" && removed == false) {
        event.preventDefault();
        event.target.remove();
        removed = true;
    }
    return removed;
}
