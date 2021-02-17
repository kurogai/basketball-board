var size = 0;

function start_drag(container_value,obj){
    var dragItem = document.querySelector('#'+obj);
    var container = document.querySelector('#'+container_value);

    var active = false;
    var currentX;
    var currentY;
    var initialX;
    var initialY;
    var xOffset = 0;
    var yOffset = 0;

    container.addEventListener("touchstart",dragStart,false);
    container.addEventListener("touchend",dragEnd,false);
    container.addEventListener("touchmove",drag,false);

    container.addEventListener("mousedown",dragStart,false);
    container.addEventListener("mouseup",dragEnd,false);
    container.addEventListener("mousemove",drag,false);

    function dragStart(e){
        if(e.type === "touchstart"){
            initialX = e.touches[0].clientX - xOffset;
            initialY = e.touches[0].clientY - yOffset;
        }else{
            initialX = e.clientX - xOffset;
            initialY = e.clientY - yOffset;
        }

        if(e.target === dragItem){
            active = true;
        }
    }

    function dragEnd(e){
        initialX = currentX;
        initialY = currentY;
        active = false;
    }

    function drag(e){
        if(active){
            e.preventDefault();

            if(e.type === "touchmove"){
                currentX = e.touches[0].clientX - initialX;
                currentY = e.touches[0].clientY - initialY;
            }else{
                currentX = e.clientX - initialX;
                currentY = e.clientY - initialY;
            }

            xOffset = currentX;
            yOffset = currentY;

            setTranslate(currentX,currentY,container);
        }
    }

    function setTranslate(xPos,yPos,el,ek){
        el.style.transform = "translate3d("+xPos+"px,"+yPos+"px,0)";
    }
}

function equipa(id){

    let campo = document.getElementById("campo");
    let bola_exists = false;

    if (id == "bola" && bola_exists == false){
        showMessage('Bola adiconada!',4000);

        bola_exists = true;

        let bola = document.createElement("div");
        let bola_container = document.createElement('div');

        bola.id = "bola-obj"
        bola.className = "bola";
        bola_container.id = "container-bola";
        
        //player_container.className = "range";
        bola_container.style.width = "30px";
        bola_container.style.height = "30px";
        //player_container.style.backgroundColor = "rgb(202, 0, 0)";
        bola_container.style.display = "flex";
        bola_container.style.alignItems = "center";
        bola_container.style.justifyContent = "center";
        bola_container.style.overflow = "hidden";
        bola_container.style.touchAction = "none";
        bola_container.style.position = "absolute";


        bola_container.appendChild(bola);
        campo.appendChild(bola_container);

        start_drag(bola_container.id,bola.id);

    }else{
        showMessage('Jogador Adicionado!',4000);

        let player = document.createElement('div');
        let player_container = document.createElement('div');
        
        player_container.id = "container-"+size;
        player_container.className = "container";
        player_container.style.width = "40px";
        player_container.style.height = "40px";
        //player_container.style.backgroundColor = "rgb(202, 0, 0)";
        player_container.style.display = "flex";
        player_container.style.alignItems = "center";
        player_container.style.justifyContent = "center";
        player_container.style.overflow = "hidden";
        player_container.style.touchAction = "none";
        player_container.style.position = "absolute";


        size = size + 1;
        
        player.className = "jogador";

        player.id = id+size;

        if(id == "equipaA"){
            player.style.backgroundColor = "rgb(202, 0, 0)";
            player_container.style.transform = "translate3d(0px,0px,0)";
        }else if(id == "equipaB"){
            player.style.backgroundColor = "rgb(0, 54, 202)";
            player_container.style.transform = "translate3d(0px,-0px,0)";
        }

        player.innerText = String(document.getElementById('defaultNumber').value);
        player.style.fontSize = "25px";
        
        
        //player.appendChild(player_text);  
        player_container.appendChild(player);

        campo.appendChild(player_container);
        start_drag(player_container.id,player_container.lastChild.id);
    }
}