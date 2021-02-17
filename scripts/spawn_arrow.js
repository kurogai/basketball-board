function spawnArrow(){
    let div = document.createElement('div');
    let p = document.createElement('p');
    let select = document.createElement('select');
    let option = document.createElement('option');
    let button_change = document.createElement('button');
    let button_close = document.createElement('button');

    div.id = "arrowSpawn";
    div.style.position = "absolute";
    div.style.marginTop = "2%";
    div.style.marginLeft = "70%";
    div.style.backgroundColor = "coral";
    div.style.padding = "3px";

    p.innerText = 'Tipo:';
    option.value = "Movimento";
    select.appendChild(option);
    option.value = "Movimento";
    select.appendChild(option);
    option.value = "Movimento";
    select.appendChild(option);
    //select.innerText += '<option>Movimento</option>';
    //select.innerText += '<option>Passe</option>';
    //select.innerText += '<option>Drible</option>';

    button_change.innerText = "Alterar";
    button_close.innerText = "Fechar";
    button_close.setAttribute("onclick","document.getElementById('arrowSpawn').remove()");

    p.appendChild(select);
    p.innerHTML += button_change;
    p.innerHTML += button_close;
    div.append(p);
    document.getElementsByTagName('body')[0].appendChild(div);
}