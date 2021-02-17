function draw(g_color){
    let id = document.getElementsByTagName('svg').length;
    let draw_f = document.getElementById('draw');

    var added = false;
    document.getElementById('draw').style.zIndex = 1;

    let start = function(){

        let oldX = new Number(event.clientX);
        let oldY = new Number(event.clientY);

        let mouseX = 0;
        let mouseY = 0;

        let event_move = function(event){
            if(added == false){
                mouseX = Number(event.clientX);
                mouseY = Number(event.clientY);
            }
        }

        let event_click = function(){
            if(added == false){
                let color = (g_color == "Preto") ? 'black' : ((g_color == "Azul") ? 'blue ' : ((g_color == 'Verde') ? 'green' : ((g_color == 'Vermelho' ? 'red' : ((g_color == 'Roxo' ? 'rgb(99, 0, 192)' : null))))));

                let arrow_final = `<svg id="svg-${id}" height="600px" width="100%"><defs><marker id="arrow-${id}" markerWidth="10" markerHeight="10" refX="7" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" fill="${color}"/></marker></defs><line x1="${oldX}" y1="${oldY - 50}" x2="${mouseX - 3}" y2="${mouseY - 60}" style="stroke: ${color}; width: 8;" marker-end="url(#arrow-${id})" stroke-width="4"/></svg>`;
                draw_f.innerHTML+=arrow_final;     

                added = true;
                document.getElementById('draw').removeAttribute('style');
                //spawnArrow();
            }
        }

        draw_f.addEventListener('mousemove',event_move);
        draw_f.addEventListener('click',event_click);
        id++;
    }

    showMessage('Clique na posicao inicial, e depois clique onde vai apontar',8000);
    draw_f.addEventListener('click',start);
    added = false;  
}