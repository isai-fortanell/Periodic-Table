
function render_atomic_moodel(electrons, canvas, context, electron_for_render, _data){
    // Update for new animation and render
    context.clearRect(0, 0, canvas.width, canvas.height);
    canvas.style.transform = "";
    canvas.style.transition = "";


    // Initialize variables (canvas center for rendering)
    padding = 5
    width = canvas.width-(padding*2);
    height= (canvas.height/1)-(padding*2);
    centerx = (width/2)+padding;
    centery= (height/2)+padding,

    // Electronic configuration tree arrays: [cuantum block (s,p,d,f) , maximun electrons in block]
    _elect_config_tree = [[1,2],[2,2],[2,6],[3,2],[3,6],[4,2],[3,10],[4,6],[5,2],[4,10],[5,6],[6,2],[4,14],[5,10],[6,6],[7,2],[5,14],[6,10],[7,6]]
    // Electronic configuration singularity arrays: [cuantum block (s,p,d,f) , maximun electrons in block (limitate for let the algorithm calculate the real configuration instead theorical)]
    if (electrons == 24){ //Chromium electronic configuration singularity
        _elect_config_tree[5] = [4,1]
    }
    if (electrons == 29){ //Cupper electronic configuration singularity
        _elect_config_tree[5] = [4,0]
    }
    if (electrons == 28){ //Nickel electronic configuration singularity
        _elect_config_tree[5] = [4,1]
    }
    if ((electrons == 41) || (electrons == 42) || (electrons == 44) || (electrons == 45)){ //Niobium, Nolybdenum, Ruthenium and Rhodium electronic configuration singularity
        _elect_config_tree[8] = [5,1]
    }
    if (electrons == 46){ //Paladium electronic configuration singularity
        _elect_config_tree[8] = [5,0]
    }
    if (electrons == 47){ //Silver electronic configuration singularity
        _elect_config_tree[8] = [5,0]
    }
    if (electrons == 57){ //Lanthanum electronic configuration singularity
        _elect_config_tree[12] = [4,0]
    }
    if (electrons == 58){ //Ceriumelectronic configuration singularity
        _elect_config_tree[12] = [4,1]
    }
    if (electrons == 64){ //Gadolinium electronic configuration singularity
        _elect_config_tree[12] = [4,7]
    }
    if ((electrons == 78) || (electrons == 79)){ //Platinum, Gold electronic configuration singularity
        _elect_config_tree[11] = [6,1]
    }
    if (electrons == 89){ //Actinium electronic configuration singularity
        _elect_config_tree[16] = [5,0]
    }
    if (electrons == 90){ //Thorium electronic configuration singularity
        _elect_config_tree[16] = [5,0]
    }
    if (electrons == 91){ //Protactinium electronic configuration singularity
        _elect_config_tree[16] = [5,2]
    }
    if (electrons == 92){ //Uranium electronic configuration singularity
        _elect_config_tree[16] = [5,3]
    }
    if (electrons == 93){ //Neptunium electronic configuration singularity
        _elect_config_tree[16] = [5,4]
    }
    if (electrons == 96){ //Curium electronic configuration singularity
        _elect_config_tree[16] = [5,7]
    }
    if (electrons == 97){ //Berkelium electronic configuration singularity
        _elect_config_tree[16] = [5,9]
    }
    if (electrons == 110){ //Farmstadtium electronic configuration singularity
        _elect_config_tree[15] = [7,1]
    }


    // Electrons in level
    max_electrons_per_level = [2,8,18,32,18,8]
    electrons_per_level = [0,0,0,0,0,0,0]
    electrons_in_level = 0;
    idx_level = 0;
    _electrons = electrons;
    while(_electrons>0){
        block= _elect_config_tree[idx_level]
        energy_level = block[0]
        max_electrons_in_block = block[1]

        if (max_electrons_in_block-_electrons<0){
            electrons_per_level[energy_level-1] += max_electrons_in_block;
            _electrons-=max_electrons_in_block;
        }
        else{
            electrons_per_level[energy_level-1] += _electrons;
            _electrons-= _electrons;
        }
        idx_level+=1
    }     
    idx_level+=1 // Nucleus
    


    // Innet html for electorns per level 
    _electrons_per_level = electrons_per_level 
    while (_electrons_per_level[_electrons_per_level.length-1] == 0){
        _electrons_per_level.pop()
    }
    document.getElementById("first_level").innerHTML = "";
    document.getElementById("second_level").innerHTML = "";
    document.getElementById("third_level").innerHTML = "";
    document.getElementById("fourth_level").innerHTML = "";
    document.getElementById("fifth_level").innerHTML = "";
    document.getElementById("sixth_level").innerHTML = "";
    document.getElementById("seventh_level").innerHTML = "";
    if (_electrons_per_level[0] != undefined){
        document.getElementById("first_level").innerHTML = _electrons_per_level[0];
    }
    if (_electrons_per_level[1] != undefined){
        document.getElementById("second_level").innerHTML = _electrons_per_level[1];
    }
    if (_electrons_per_level[2] != undefined){
        document.getElementById("third_level").innerHTML = _electrons_per_level[2];
    }
    if (_electrons_per_level[3] != undefined){
        document.getElementById("fourth_level").innerHTML = _electrons_per_level[3];
    }
    if (_electrons_per_level[4] != undefined){
        document.getElementById("fifth_level").innerHTML = _electrons_per_level[4];
    }
    if (_electrons_per_level[5] != undefined){
        document.getElementById("sixth_level").innerHTML = _electrons_per_level[5];
    }
    if (_electrons_per_level[6] != undefined){
        document.getElementById("seventh_level").innerHTML = _electrons_per_level[6];
    }


    // Render bohr model atom
    energy_levels = electrons_per_level.length;
    context.clearRect(0, 0, width, height);
    context.beginPath();                

    electron_for_render.clearRect(0, 0, width/2, height/2);
    electron_for_render.beginPath();                

    for (render_level = 0; render_level<=energy_levels+1; render_level++){


        if (render_level !=0){ //First 0 radius rendering
            level_radius = render_level*((width/2)/(energy_levels+1));
            
            // Energy levels orbits rendering    
            context.beginPath();
            context.arc(centerx, centery, level_radius, 0, 2 * Math.PI);
            context.lineWidth = 2;
            context.strokeStyle = 'black';
            context.stroke();  

            // Energy levels electrons rendering    
            if (render_level !=1){     
                electrons_in_level= _electrons_per_level[render_level-2];
                angle_between = 360/electrons_in_level;
                radian_between = angle_between*3.1416/180;

                for (electron_rendering= 0; electron_rendering<electrons_in_level; electron_rendering++){                           
                    x = Math.cos(radian_between*(electron_rendering+1))*level_radius
                    y = Math.sin(radian_between*(electron_rendering+1))*level_radius

                    electron_for_render.beginPath();      
                    electron_for_render.arc(centerx+x, centery+y, 5, 0, 2 * Math.PI);
                    electron_for_render.lineWidth = 1.5;
                    electron_for_render.strokeStyle = __main_color;
                    electron_for_render.fillStyle= __main_color;
                    electron_for_render.fill() 

                    if( render_level ==energy_levels+1){
                        valence = electrons_per_level[electrons_per_level.length-1];
                        if ( (valence<2)){
                            electron_for_render.beginPath();      
                            electron_for_render.arc(centerx+x, centery+y, 5, 0, 2 * Math.PI);
                            electron_for_render.lineWidth = 1.5;
                            electron_for_render.strokeStyle = __main_color;
                            electron_for_render.fillStyle= '#eee';
                            electron_for_render.fill() 
                        }     
                    }

                }
            }
            if( render_level ==energy_levels+1){
                electrons_in_level= _electrons_per_level[render_level-2];
                angle_between = 360/electrons_in_level;
                radian_between = angle_between*3.1416/180;

                for (electron_rendering= 0; electron_rendering<electrons_in_level; electron_rendering++){                           
                    x = Math.cos(radian_between*(electron_rendering+1))*level_radius
                    y = Math.sin(radian_between*(electron_rendering+1))*level_radius

                    valence = electrons_per_level[electrons_per_level.length-1];
                    valence_for_render = canvas.getContext("2d");
                    valence_for_render.arc(centerx+x, centery+y, 5, 0, 2 * Math.PI);
                    valence_for_render.lineWidth = 1.5;
                    valence_for_render.strokeStyle = __main_color;                
                    valence_for_render.stroke();
                }
            }
        }
        if (render_level ==1){
            context.lineWidth = 5;
            context.strokeStyle = 'black';
            context.stroke()
            context.fillStyle = series_colors[_data["classification"][electrons-1]];
            context.fill();
        }
    }
    animation= anime({
        targets: canvas,
        rotate: '.5turn',
        duration: 1000,
        autoplay: false,
    })
    if (slider_switch){
        animation.play();
    }
    

}



