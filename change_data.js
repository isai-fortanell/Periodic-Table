
data = "";
function init_data(_data){
    data= _data;
}


series_colorgradient = {
    "Metal de Transición":  "linear-gradient(45deg, #3B2C4499  0%, #3B2C4499 100%)",
    "No Metal": "linear-gradient(45deg, #6A526F33 0%, #6A526F33 100%)",
    "Metal Alcalino": "linear-gradient(45deg, #7abdaa33  0%, #7abdaa33 100%)",
    "Metal Alcalinotérreo": "linear-gradient(45deg, #BC385433 10%, #BC385433 100%)",
    "Metaloide": "linear-gradient(45deg, #11210D99 0%, #11210D99 100%)",
    "Metal Postransicional": "linear-gradient(45deg, #062B6580 0%, #062B6580 100%)",
    "Gas Noble": "linear-gradient(45deg, #B25E3833 0%, #B25E3833 100%)",
    "Lantánido":"linear-gradient(45deg, #B9CFB566 0%, #B9CFB566 100%)",
    "Actínido": "linear-gradient(45deg,#DEB5D233 0%, #DEB5D233 100%)",
    "Halógeno": "linear-gradient(45deg, #D6BC8F33  0%, #D6BC8F33 100%)",
};



series_colors = {
    "Metal de Transición":  "#3B2C4499",
    "No Metal": "#6A526F33",
    "Metal Alcalino": "#7abdaa33",
    "Metal Alcalinotérreo": "#BC385433",
    "Metaloide": "#11210D99",
    "Metal Postransicional": "#062B6580",
    "Gas Noble": "#B25E3833",
    "Lantánido":"#B9CFB566",
    "Actínido": "#DEB5D233",
    "Halógeno": "#D6BC8F33",
};

__main_color = "#C2CCB3"

function change_current_state(at_num){
    temp_input =  document.getElementById("temp_input");
    _temperature_value = document.getElementsByClassName("select temperature_scale")[0].value;
    let min_k = parseFloat(data['melting_point'][at_num-1])
    let max_k = parseFloat(data['boiling_point'][at_num-1])
    input_k  = parseFloat(temp_input.value)
    if (_temperature_value=="C"){
        input_k  += +273}
    if (_temperature_value=="F"){
        input_k  = (5/9)*(input_k - 32) + 273.15 }
    if (input_k< min_k){
        return("Sólido")}
    else if (input_k== min_k){
        return("Punto de fusion")}
    else if (input_k> min_k && input_k<max_k){
        return("Liquido")}
    else if (input_k== max_k){
        return("Punto de ebullición")}
    else{ //input_k> max_k)
        return("Gas")}
}


function change_atomic_weight(raw_value,at_num){
    if (raw_value==undefined){return(" ")}
    if (Number.isNaN(parseFloat(raw_value))==false){
        return(parseFloat(raw_value));}        
    if (raw_value.includes("(")) {
        return(parseFloat(raw_value.slice(0,raw_value.indexOf("("))));}
    else if (raw_value.includes("[")) {
        a = parseFloat(raw_value.slice(1,raw_value.indexOf(",")).replace(" ", ''));
        b = parseFloat(raw_value.slice(raw_value.indexOf(",")+1,raw_value.length-1).replace(" ", ''));
        return(parseFloat((a+b)/2).toFixed(3));}
}

function change_density(at_num){
    raw_value = data['density'][at_num-1];
    value = parseFloat(raw_value);
    if (Number.isNaN(value)){return("--");}
    unit_selected = document.getElementsByClassName("select density")[0].value;
    if (unit_selected == "g/cm3"){
        if (value<0.0001){
            return(value.toFixed(7));
        }else{
            return(value.toFixed(3))}
    }else{
        if (value<0.001){
            return((value/1000).toFixed(8))
        }else{
            return((value/1000).toFixed(4))}}
}

function change_hardness(at_num){
    _unit = document.getElementsByClassName("select hardness")[0].value;
    if (_unit == "mohs"){
        return(data["hardness_mohs"][at_num-1])
    }  else if (_unit== "vickers"){
        return(data["hardness_vickers"][at_num-1])
    }  else{ // brinell
        return(data["hardness_brinell"][at_num-1])}
}

function change_radius(_data, at_num){
    _unit = document.getElementsByClassName("select radius")[0].value;
    radius_unit__option = document.getElementsByClassName("select radius")[0];
    radius_unit__option[0].innerHTML = "Van der Waals";
    radius_unit__option[1].innerHTML = "Covalente";
    radius_unit__option.disabled = false;
    _raw_data = _data["covalent_radius"][at_num-1];
    
    if (_raw_data.includes("empirical")){ // Empyrical, not covalent or VanderWaals
        radius_unit__option[0].innerHTML = "Empirico";
        radius_unit__option[1].innerHTML = "Empirico";
        radius_unit__option.disabled = true;
        return(parseFloat( _raw_data.slice(_raw_data.indexOf(":")+1,_raw_data.length) ));
    }if (_unit == "covalent"){
        return(parseFloat(_data["covalent_radius"][at_num-1]))
    }  else{ // van der waals
        return(parseFloat(_data["vdw_radius"][at_num-1]))}
}


function change_specific_heat(at_num){
    _unit = document.getElementsByClassName("select sensible_heat_unity")[0].value;
    _value = parseFloat(data["specific_heat"][at_num-1]);
    if (Number.isNaN(_value)){return("--");}   
    if (_unit == "J/kgK"){
        return(_value.toFixed(2));
    }  else{
        return((_value/4.18).toFixed(2));       
    }
}
function change_latent_heat(at_num){
    _heat_type = document.getElementsByClassName("select latent_heat_type")[0].value;
    _unit = document.getElementsByClassName("select latent_heat_unity")[0].value;
    _value = parseFloat(data[_heat_type][at_num-1]);
    if (Number.isNaN(_value)){return("--");}   
    if (_unit == "kJ/mol"){
        return(_value.toFixed(2));
    }
      else{
        return((_value/4.18).toFixed(2));} 
}
function change_electronegativity(at_num){
    _value=data["electronegativity"][at_num-1];
    if (Number.isNaN(_value)){return("--");}
    return(_value);   

}

function change_ionization(at_num){
    _unit = document.getElementsByClassName("select ionization_energy")[0].value;
    _electronic_affinity_value = document.getElementsByClassName("select ionization_energy")[0].value;
    level_selection = document.getElementsByClassName("select ionization_level")[0];

    _value=data["ionization_energy"][at_num-1];

    if(_value.length>1){
        _value = _value[level_selection.value-1]}
    if (Number.isNaN(_value) || _value=="--"){
        return("--");}
    if (_unit== "eV"){
        return(parseFloat(_value).toFixed(2))}  
    else{
        return((parseFloat(_value)*96.4916).toFixed(2))}
}

function update_ionization(at_num){ 
    level_selection = document.getElementsByClassName("select ionization_level")[0];
    _value=data["ionization_energy"][at_num-1];

    while (level_selection.firstChild) {
        level_selection.removeChild(level_selection.lastChild);}
    for (i=1; i<=_value.length; i+=1){
        _option = document.createElement("option");
        _option.value = i;
        _option.innerHTML = i+"°";
        level_selection.appendChild(_option);}
    radius_level__option = document.getElementsByClassName("select ionization_level")[0];

    if (_value.length>1){
        radius_level__option.style.opacity = "100";
        document.getElementById("levels_in_ionization").innerHTML= "("+_value.length+")";
        document.getElementById("levels_in_ionization").style.backgroundColor = "rgb(30,30,30)";
    }else{
        radius_level__option.style.opacity = "0";
        document.getElementById("levels_in_ionization").innerHTML= "";
        document.getElementById("levels_in_ionization").style.backgroundColor = "rgb(40,40,40)";}
}

function change_electronaff(at_num){
    _unit = document.getElementsByClassName("select electronic_affinity")[0].value;
    _value=data["electron_affinity"][at_num-1];
    if (Number.isNaN(_value)){return("--");}   
    if (_unit== "eV"){
        return(parseFloat(_value).toFixed(2))}  
    else{
        return((parseFloat(_value)*96.4916).toFixed(2))}
}

function change_conductivity(at_num){
    _unit = document.getElementsByClassName("select conductivity")[0].value;
    _value=data["electric_conductivity"][at_num-1];
    if (Number.isNaN(_value) || _value=="--"){return("--");}   
    power = 1;
    if(_value.includes("×")){ // If String is in scientific notation
        power = parseFloat(_value.slice(_value.indexOf("×")+2,_value.indexOf("S")));
        if (_value.includes("-")){
            power = parseFloat(_value.slice(_value.indexOf("×")+3,_value.indexOf("S")));
        }
        if(_unit=="S/m"){
            return( (parseFloat(_value)*Math.pow(10,power)).toExponential() );}
        return( parseFloat(_value)*Math.pow(10,power-6)); // ELse MegaS/m
    }
    if(_unit=="S/m"){ // String not in scientific notation
        return(_value.slice(0,_value.indexOf("S")));}
    return( parseFloat(_value)/Math.pow(10,6).toFixed(2) )// ELse MegaS/m
}


function change_oxidation_states(at_num){
    
    _value = data['oxidation_state'][at_num-1];
    if (_value.includes("(parenthesized oxidation states are predictions)")){
        _value = _value.slice(0,_value.indexOf("parenthesized oxidation states are predictions)")-1)
    }
    values = _value.split(" ")
    real_values = "";
    predicted_values = "";
    for (value of values){
        if (_value.includes("predicted")){
            if (value!="(predicted)" ){
                predicted_values+=value;
            }
        }else{
            if (value.includes("(")  && value!="(predicted)" ){
                predicted_values+=value;      
            }
            else{
                real_values+=value;

            }
        }
    }
    document.getElementById("ox_st_real").innerHTML=real_values;
    document.getElementById("ox_st_pred").innerHTML=predicted_values;
    document.getElementById("prediction_label").style.opacity = "100";
    if (predicted_values==""){
        document.getElementById("prediction_label").style.opacity = "0";
    }
    
}


// Change temperature values function
function change_temperature(at_num, melting_or_boiling){
    if (melting_or_boiling =="scale"){
        _temperature_value = document.getElementsByClassName("select temperature_scale")[0].value;
        kelvin_m = parseFloat(data["melting_point"][at_num-1])
        kelvin_b = parseFloat(data["boiling_point"][at_num-1])
        values = [0,0]
        if (Number.isNaN(kelvin_m)){values[0]=="--";}
        if (_temperature_value == "F"){
            values[0]= (( kelvin_m - 273.15) *9/5 + 32).toFixed(2)+" °F";
            values[1]= (( kelvin_b - 273.15) *9/5 + 32).toFixed(2)+" °F";
        }   else if (_temperature_value == "C"){
            values[0]=  (kelvin_m - 273.15).toFixed(2)+" °C";
            values[1]=  (kelvin_b - 273.15).toFixed(2)+" °C";
        }    else{
            values[0]=  kelvin_m.toFixed(2)+" K";
            values[1]=  kelvin_b.toFixed(2)+" K";
        }
        if (Number.isNaN(kelvin_m)){values[0]="--";}
        if (Number.isNaN(kelvin_b)){values[1]="--";}
        return(values);
    }
    index = melting_or_boiling === 'melting' ? 0:1;
    _temperature_value = document.getElementsByClassName("select temperature")[index].value;
    kelvin = melting_or_boiling === 'melting' ? parseFloat(data["melting_point"][at_num-1]):parseFloat(data["boiling_point"][at_num-1]);
    
    if (Number.isNaN(kelvin)){return("--");}
    if (_temperature_value == "F"){
        return((( kelvin - 273.15) *9/5 + 32).toFixed(2));
    }   else if (_temperature_value == "C"){
        return( (kelvin - 273.15).toFixed(2));
    }    else{
        return( kelvin.toFixed(2));}
}

function change_abundance(at_num, crust_or_ocean){
    index = crust_or_ocean === 'melting' ? 0:1;
    _value = crust_or_ocean === 'crust_abundance' ? data["crust_abundance"][at_num-1]:data["ocean_abundance"][at_num-1];
    _unit = crust_or_ocean === 'crust_abundance' ? document.getElementsByClassName("select abundance")[0].value :document.getElementsByClassName("select abundance")[1].value;
    if (Number.isNaN(_value) || _value=="Not Applicable"){return("No aplica");}   
    _value = _value.slice(0,_value.indexOf(" "))
    power = 1;
    if(_value.includes("×")){ // If String is in scientific notation
        power = parseFloat(_value.slice(_value.indexOf("×")+2,_value.length));
        if (_value.includes("-")){
            power = parseInt(_value.slice(_value.indexOf("×")+3,_value.length));
        }
        if(_unit=="g/L" || _unit=="g/kg"){ 
            return(parseFloat(_value)+"e-"+(Math.abs(power)+3))
        }
        return(parseFloat(_value)+"e-"+Math.abs(power));
    }
    if(_unit=="g/L" || _unit=="g/kg"){ // String not in scientific notation
        return( (parseFloat(_value)/1000).toExponential() );}
    return( parseFloat(_value).toFixed(2) )// ELse mg? kg:L

}
