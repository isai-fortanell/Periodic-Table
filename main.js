// Change information of element
last_clicked = "";
slider_switch = true;
element_clicked = false;
current_matter_state = ""
element_visualization = document.getElementsByClassName("elementv-general")[0];
document.getElementsByClassName("switch_container")[0].style.visibility = "hidden";
atomic_number = 0;   

elements__electronic_configurations = ['--','1s1', '1s2', '[He]2s1', '[He]2s2', '[He]2s22p1', '[He]2s22p2', '[He]2s22p3', '[He]2s22p4', '[He]2s22p5', '[He]2s22p6', '[Ne]3s1', '[Ne]3s2', '[Ne]3s23p1', '[Ne]3s23p2', '[Ne]3s23p3', '[Ne]3s23p4', '[Ne]3s23p5', '[Ne]3s23p6', '[Ar]4s1', '[Ar]4s2', '[Ar]4s23d1', '[Ar]4s23d2', '[Ar]4s23d3', '[Ar]3d54s1', '[Ar]4s23d5', '[Ar]4s23d6', '[Ar]4s23d7', '[Ar]4s23d8', '[Ar]4s13d10', '[Ar]4s23d10', '[Ar]4s23d104p1', '[Ar]4s23d104p2', '[Ar]4s23d104p3', '[Ar]4s23d104p4', '[Ar]4s23d104p5', '[Ar]4s23d104p6', '[Kr]5s1', '[Kr]5s2', '[Kr]5s24d1', '[Kr]5s24d2', '[Kr]5s14d4', '[Kr]5s14d5', '[Kr]5s24d5', '[Kr]5s14d7', '[Kr]5s14d8', '[Kr]4d10', '[Kr]5s14d10', '[Kr]5s24d10', '[Kr]5s24d105p1', '[Kr]5s24d105p2', '[Kr]5s24d105p3', '[Kr]5s24d105p4', '[Kr]5s24d105p5', '[Kr]5s24d105p6', '[Xe]6s1', '[Xe]6s2', '[Xe]6s25d1', '[Xe]6s24f15d1', '[Xe]6s24f3', '[Xe]6s24f4', '[Xe]6s24f5', '[Xe]6s24f6', '[Xe]6s24f7', '[Xe]6s24f75d1', '[Xe]6s24f9', '[Xe]6s24f10', '[Xe]6s24f11', '[Xe]6s24f12', '[Xe]6s24f13', '[Xe]6s24f14', '[Xe]6s24f145d1', '[Xe]6s24f145d2', '[Xe]6s24f145d3', '[Xe]6s24f145d4', '[Xe]6s24f145d5', '[Xe]6s24f145d6', '[Xe]6s24f145d7', '[Xe]6s14f145d9', '[Xe]6s14f145d10', '[Xe]6s24f145d10', '[Xe]6s24f145d106p1', '[Xe]6s24f145d106p2', '[Xe]6s24f145d106p3', '[Xe]6s24f145d106p4', '[Xe]6s24f145d106p5', '[Xe]6s24f145d106p6', '[Rn]7s1', '[Rn]7s2', '[Rn]7s26d1', '[Rn]7s26d2', '[Rn]7s25f26d1', '[Rn]7s25f36d1', '[Rn]7s25f46d1', '[Rn]7s25f6', '[Rn]7s25f7', '[Rn]7s25f76d1', '[Rn]7s25f9', '[Rn]7s25f10', '[Rn]7s25f11', '[Rn]5f127s2', '[Rn]7s25f13', '[Rn]7s25f14', '[Rn]7s25f146d1', '[Rn]7s25f146d2', '[Rn]7s25f146d3', '[Rn]7s25f146d4', '[Rn]7s25f146d5', '[Rn]7s25f146d6', '[Rn]7s25f146d7', '[Rn]7s25f146d8', '[Rn]7s25f146d9', '[Rn]7s25f146d10', '[Rn]5f146d107s27p1', '[Rn]7s27p25f146d10', '[Rn]7s27p35f146d10', '[Rn]7s27p45f146d10', '[Rn]7s27p55f146d10', '[Rn]7s27p65f146d10']
elements__discoverers = ['--','H.Cavendish', 'P.Janssen', 'J.A.Arfwedson', 'L.N.Vauquelin', 'H. Davy, J. L. Gay-Lussac y L. J. Thenard', 'Desconocido','D.Rutherford', 'C.W.Scheele', 'H.Moissan', 'William Ramsay, Morris Travers', 'H.Davy', 'J.Black', 'H.C.Ørsted', 'J.J.Berzelius', 'H.Brand', 'Desconocido','C.W.Scheele', 'William Ramsay, Lord Rayleigh', 'H.Davy', 'H.Davy', 'L.F.Nilson', 'W.Gregor', 'A.M.del Río', 'L.N.Vauquelin', 'T.O.Bergman','Desconocido', 'G.Brandt', 'A.F.Cronstedt', 'Desconocido','Desconocido','P.E.L.deBoisbaudran', 'C.A.Winkler', 'Alberto Magno', 'J.J.Berzelius', 'A.J.Balard', 'William Ramsay, Morris Travers', 'Gustav Kirchhoff, Robert Bunsen', 'W. Cruikshank', 'J.Gadolin', 'M.H.Klaproth', 'C.Hatchett', 'C.W.Scheele', 'Carlo Perrier, Emilio Segre', 'J.Sniadecki', 'W.H.Wollaston', 'Desconocido','W.H.Wollaston', 'K.S.L Hermann','Ferdinand Reich, Hieronymus Theodor Richter', 'Desconocido','Desconocido', 'F.-J.M. vonReichenstein', 'B.Courtois', 'William Ramsay, Morris Travers. Travers', 'Gustav Kirchhoff, Robert Bunsen', 'C.W.Scheele', 'C.G.Mosander', 'W.vonHisinger, J.Berzelius, M.Klaproth', 'C.A.von Welsbach', 'C.A.von Welsbach', 'C.S.Wu', 'P.E.L. deBoisbaudran', 'E.Demarcay', 'J.C.G. deMarignac', 'C.G.Mosander', 'P.E.L. deBoisbaudran', 'M.Delafontaine', 'C.G.Mosander', 'P.T.Cleve', 'J.C.G. deMarignac', ' Georges Urbain, Carl Auer von Welsbach', 'Dirk Coster, George Charles von Hevesy', 'A.G.Ekeberg', 'T.Bergman', 'M.Ogawa', 'S.Tennant', 'S.Tennant', 'A.de Ulloa', 'W.Crookes', 'Desconocido','Claude François Geoffroy','Pierre y Marie Curie', 'D.R.Corson, Emilio Gino Segrè', 'Desconocido','Desconocido','F.E.Dorn', 'M.Perey', 'Pierre y Marie Curie', 'A.-L.Debierne', 'J.J.Berzelius', 'Oswald H.Göhring, Kasimir Fajans', 'M.H.Klaproth', 'Edwin McMillan, P.H. Abelson', 'G.T.Seaborg, Arthur C. Wahl, J.W.Kennedy, E.M.McMillan', ' Glenn Seaborg, Leon O. Morgan, Ralph James, Albert Ghiorso', ' Glenn Seaborg, Ralph James, Albert Ghiorso', 'Glenn Seaborg, Albert Ghiorso, Stanley Thompson', 'Glenn Seaborg, Albert Ghiorso, Stanley Thompson', 'A.Ghiorso y colaboradores', 'A.Ghiorso y colaboradores', 'A.Ghiorso y colaboradores', 'A.Ghiorso y colaboradores', 'A.Ghiorso y colaboradores', 'A.Ghiorso y colaboradores', 'A.Ghiorso y colaboradores', 'A.Ghiorso y colaboradores','Gottfried Münzenberg, Peter Armbruster', 'Gottfried Münzenberg, Peter Armbruster', 'Gottfried Münzenberg, Peter Armbruster', 'S.Hofmann', 'S.Hofmann', 'S.Hofmann', 'Joint Institute for Nuclear Research', 'Joint Institute for Nuclear Research', 'Joint Institute for Nuclear Research', 'Joint Institute for Nuclear Research','Joint Institute for Nuclear Research', 'Joint Institute for Nuclear Research'];
elements__year_discovered = ['--','1766', '1868', '1817', '1798', '1808', 'Antiguedad', '1772', '1774', '1670', '1898', '1807', '1808', 'Antiguedad', '1854', '1669', 'Antiguedad', '1774', '1894', '1807', 'Antiguedad', '1879', '1791', '1801', '1797', '1774', 'Antiguedad', '1735', '1751', 'Antiguedad', '1746', '1875', '1886', 'Antiguedad', '1817', '1826', '1898', '1861', '1790', '1794', '1789', '1801', '1778', '1937', '1827', '1803', '1803', 'Antiguedad', '1817', '1863', 'Antiguedad', 'Antiguedad', '1782', '1811', '1898', '1860', '1808', '1839', '1803', '1885', '1885', '1945', '1879', '1901', '1880', '1843', '1886', '1878', '1843', '1879', '1878', '1907', '1923', '1802', '1783', '1925', '1803', '1803', '1735', 'Antiguedad', 'Antiguedad', '1861', 'Antiguedad', '1753', '1898', '1940', '1900', '1939', '1898', '1899', '1828', '1913', '1789', '1940', '1940', '1944', '1944', '1949', '1950', '1952', '1952', '1955', '1957', '1961', '1964', '1967', '1974', '1976', '1984', '1982', '1994', '1994', '1996', '2004', '1998', '2003', '2000', '2010', '2002']
elements__block= ['--','s','s','s','s','p','p','p','p','p','p','s','s','p','p','p','p','p','p','s','s','d','d','d','d','d','d','d','d','d','d','p','p','p','p','p','p','s','s','d','d','d','d','d','d','d','d','d','d','p','p','p','p','p','p','s','s','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','d','d','d','d','d','d','d','d','d','p','p','p','p','p','p','s','s','f','f','f','f','f','f','f','f','f','f','f','f','f','f','f','d','d','d','d','d','d','d','d','d','p','p','p','p','p','p']
elements__cas = ['--','1333-74-0', '7440-59-7', '7439-93-2', '7440-41-7', '7440-42-8', '7440-44-0', '7727-37-9', '7782-44-7', '7782-41-4', '7440-01-9', '7440-23-5', '7439-95-4', '7429-90-5', '7440-21-3', '7723-14-0', '7704-34-9', '7782-50-5', '7440-37-1', '7440-09-7', '7440-70-2', '7440-20-2', '7440-32-6', '7440-62-2', '7440-47-3', '7439-96-5', '7439-89-6', '7440-48-4', '7440-02-0', '7440-50-8', '7440-66-6', '7440-55-3', '7440-56-4', '7440-38-2', '7782-49-2', '7726-95-6', '7439-90-9', '7440-17-7', '7440-24-6', '7440-65-5', '7440-67-7', '7440-98-7', '7439-98-7', '7440-26-8', '7440-18-8', '7440-16-6', '7440-05-3', '7440-22-4', '7440-43-9', '7440-74-6', '7440-31-5', '7440-36-0', '13494-80-9', '7553-56-2', '7440-63-3', '7440-46-2', '7440-39-3', '7439-91-0', '7440-45-1', '7440-10-0', '7440-00-8', '7440-12-2', '7440-19-9', '7440-53-1', '7440-54-2', '7440-27-9', '7429-91-6', '7440-60-0', '7440-52-0', '7440-30-4', '7440-64-4', '7439-94-3', '7440-58-6', '7440-25-7', '7440-33-7', '7440-15-5', '7440-04-2', '7439-88-5', '7440-06-4', '7440-57-5', '7439-97-6', '7440-28-0', '7439-92-1', '7440-69-9', '7440-08-6', '7440-68-8', '10043-92-2', '7440-73-5', '7440-14-4', '7440-34-8', '7440-29-1', '7440-13-3', '7440-61-1', '7439-99-8', '7440-07-5', '7440-35-9', '7440-51-9', '7440-40-6', '7440-71-3', '7429-92-7', '7440-72-4', '7440-11-1', '10028-14-5', '22537-19-5', '53850-36-5', '53850-35-4', '34038-81-2', '54037-14-8', '54037-57-9', '54038-01-6', '54083-77-1', '54386-24-2', '54084-26-3', '54084-70-7', '54085-16-4', '54085-64-2', '54100-71-9', '87658-56-8', '54144-19-3']




function update_data(data,atomic_number){
    init_data(data);
    if (element_clicked==false){
        return("")
    }
    document.getElementById("header_search").innerHTML ="Busca"+ "<br>"+" un elemento";

    serie = document.getElementById("serie").getElementsByClassName("magnitude")[0]
    serie.innerHTML = data['classification'][atomic_number-1];
    serie.style.background = series_colorgradient[data["classification"][atomic_number-1]];
    document.getElementById("main_box_element").style.background = series_colorgradient[data["classification"][atomic_number-1]];
    document.getElementsByClassName("element_information_name")[0].style.background = series_colorgradient[data["classification"][atomic_number-1]];
    atomic_mass = document.getElementById("atomic_mass").getElementsByClassName("magnitude")[0].innerHTML = change_atomic_weight(data['atomic_weight'][atomic_number-1],atomic_number);
    document.getElementById("radius").getElementsByClassName("magnitude")[0].innerHTML = change_radius(data,atomic_number)
    document.getElementById("melting_point_scale").innerHTML = change_temperature(atomic_number,"scale")[0];
    document.getElementById("boiling_point_scale").innerHTML = change_temperature(atomic_number,"scale")[1];
    document.getElementById("boiling_point").getElementsByClassName("magnitude")[0].innerHTML = change_temperature(atomic_number,"boiling");
    document.getElementById("melting_point").getElementsByClassName("magnitude")[0].innerHTML = change_temperature(atomic_number,"melting");
    document.getElementById("current_state").innerHTML = change_current_state(atomic_number)


    document.getElementById("hardness").getElementsByClassName("magnitude")[0].innerHTML = change_hardness(atomic_number);
    document.getElementById("electronic_affinity").getElementsByClassName("magnitude")[0].innerHTML = change_electronaff(atomic_number);
    document.getElementById("ionization_energy").getElementsByClassName("magnitude")[0].innerHTML = change_ionization(atomic_number);
    document.getElementById("electronegativity").getElementsByClassName("magnitude")[0].innerHTML = change_electronegativity(atomic_number);
    document.getElementById("density").getElementsByClassName("magnitude")[0].innerHTML = change_density(atomic_number);
    conductivity = document.getElementById("conductivity").getElementsByClassName("magnitude")[0].innerHTML =  change_conductivity(atomic_number);
    document.getElementById("sensible_heat").getElementsByClassName("magnitude")[0].innerHTML = change_specific_heat(atomic_number);
    document.getElementById("latent_heat").getElementsByClassName("magnitude")[0].innerHTML = change_latent_heat(atomic_number);
    change_oxidation_states(atomic_number);

    document.getElementById("crust_abundance").getElementsByClassName("magnitude")[0].innerHTML = change_abundance(atomic_number, "crust_abundance");
    document.getElementById("ocean_abundance").getElementsByClassName("magnitude")[0].innerHTML = change_abundance(atomic_number, "ocean_abundance");

}


function click_element(target, last_clicked, data, atomic_number){
    element_clicked = true;

    _x = atomic_number

    // Back last element clicked styles to normal 
    if (last_clicked != ""){
        last_clicked.classList.remove('selected');

        last_clicked.children[0].style.color ="#986D8E";
        last_clicked.children[1].style.color = "#eee";
        last_clicked.children[2].style.color = "#eee";
        last_clicked.children[3].style.color = "#986D8E";
    }
    

    target.classList.add('selected');
    target.children[0].style.color = "#EFEFEF";
    target.children[1].style.color = "#FFFFFF";
    target.children[2].style.color = "#EDEDED";
    target.children[3].style.color = "#CFCFCF";
         

    // Initialize new canvas for render model
    canvas = document.getElementById("atomic_model");
    context = canvas.getContext("2d");
    electron_for_render = canvas.getContext("2d");
    render_atomic_moodel(atomic_number, canvas, context, electron_for_render, data)
    document.getElementsByClassName("switch_container")[0].style.visibility = "visible";

    // Update aside information
    update_data(data,atomic_number);        
    update_ionization(atomic_number)
    document.getElementById("temp_input").addEventListener("input",function(e){
        update_data(data,atomic_number);        
    })



    // setInterval(update_data,1000,data,atomic_number)

    // ELECTRONIC CONFIGURATION
    electronic_configuration_div = document.getElementById("electronic_configuration").getElementsByClassName("magnitude")[0];
    while (electronic_configuration_div .firstChild) { //Remove last (avoid duplicates)
        electronic_configuration_div.removeChild(electronic_configuration_div.firstChild);}
    electronic_configuration = elements__electronic_configurations[atomic_number];
    for (let i = 0; i < electronic_configuration.length; i++) { // Set the new electronic configuration
        let word =electronic_configuration[i];
        if (isNaN(word)){ //letter
            _next = document.createElement("p");
            _next.innerHTML = word;
            _next.classList.add("el_config__base");}
        else{ //number
            _next =document.createElement("div");
            _next_inner = document.createElement("p")
            _next_inner.innerHTML = word;
            _next.appendChild(_next_inner)
            if ((!(isNaN(electronic_configuration[i+1]))  ) || (electronic_configuration[i+1] ==undefined)){
                _next.classList.add("el_config__super_linked");}
            else{
                _next.classList.add("el_config__super");}}
        electronic_configuration_div.appendChild(_next)}
    document.getElementById("valence").getElementsByClassName("magnitude")[0].innerHTML = valence;

    // Update central div information
    document.getElementById("element_name").innerHTML = target.children[2].innerText.toUpperCase();
    document.getElementsByClassName("atomic_number__visualization")[0].innerHTML = target.children[0].innerText;
    document.getElementsByClassName("atomic_number__visualization")[1].innerHTML = target.children[0].innerText;
    document.getElementsByClassName("symbol__visualization")[0].innerHTML = target.children[1].innerText;
    document.getElementsByClassName("symbol__visualization")[1].innerHTML = target.children[1].innerText;
    document.getElementsByClassName("name__visualization")[0].innerHTML = target.children[2].innerText;
    document.getElementsByClassName("mass__visualization")[0].innerHTML = change_atomic_weight(data['atomic_weight'][atomic_number-1],atomic_number);

    document.getElementById("cas_number").innerHTML = "CAS "+elements__cas[atomic_number];
    document.getElementById("discoverer").innerHTML = elements__discoverers[atomic_number];
    document.getElementById("year_discovered").innerHTML = elements__year_discovered[atomic_number];
    return(target);
}




function activate_search_tab(data){
    search_container = document.getElementById("search_container");
    search_input = document.getElementById("search_input");
    search_datalist = document.getElementById("search_datalist");
    search_container.addEventListener("input",function(e){
        text_field = (e.target.value.toLowerCase()).normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        const options_in_datalist = Array.from(search_datalist.options).map(option => option.value);
        let elements_indatalist =[];


        while (search_datalist.firstChild){search_datalist.removeChild(search_datalist.lastChild)}
        if (text_field!=""){
            for (let i = 0; i <=117; i++) {
                el_name = (data["name"][i].toLowerCase()).normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                el_symbol = data["symbol"][i].toLowerCase()
                if ((el_name.includes(text_field) && el_name.indexOf(text_field)==0) || (el_symbol.includes(text_field) && el_symbol.indexOf(text_field)==0) ){
                    if (search_datalist.childElementCount<=2){
                        document.getElementById("header_search").innerHTML ="Selecciona"+ "<br>"+" un elemento";
                        _option = document.createElement("option");
                        _option.value = data["symbol"][i];
                        _option.innerHTML = data["name"][i].normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                        search_datalist.appendChild(_option);
                        elements_indatalist.push([data["symbol"][i],i])
                    }
                }}
        }
        if (options_in_datalist.includes(search_input.value)) { //When user selects an element from the datalist
            for (el of elements_indatalist){
                _name = el[0]
                if (_name==search_input.value){
                    _actual_atomic_number = el[1]+1 // ATOMIC NUMBER is nor the <tr> number in the table (Oganesson is 90th place)
                    if (_actual_atomic_number > 103) {
                        _actual_atomic_number-= 28;
                    } else if (_actual_atomic_number > 88) { 
                        _actual_atomic_number += 17;
                    } else if (_actual_atomic_number > 71) { 
                        _actual_atomic_number -=  14;
                    } else if (_actual_atomic_number > 56) { 
                        _actual_atomic_number += 34;}
                    last_clicked = click_element(targets[_actual_atomic_number-1], last_clicked, data, el[1]+1);
                    atomic_number = el[1]+1
                }
            }
        }
    })
}



fetch('data.json')
    .then(response => response.json())
    .then(data => {

    targets = document.getElementsByClassName("ch_element");
    // setInterval(() =>CC(targets, last_clicked, data),1000)

    activate_search_tab(data)

    document.addEventListener('mouseover', function(e) {
        let target = e.target //What element user is mouseover
        if (target.className.slice(0,10) != "ch_element"){target = target.parentElement;}
        if (target.className=="switch"){
            const checkbox = document.querySelector('.switch input');
            if (checkbox.checked) {slider_switch = true;
            } else {slider_switch=false;}
        }
        // User mouseover element
        if (target.className=="description_container" || target.className=="characteristic" || target.className=="characteristic special" ||target.className=="numeric_data" ){
            target.addEventListener('click', e=>{
                update_data(data,atomic_number);        
            });}
        if (target.className.slice(0,10) == "ch_element"){
            target.addEventListener('click', e=>{
                atomic_number = target.children[0].innerText;   
                last_clicked = click_element(target, last_clicked, data, atomic_number);
            })
    }}, false);
})
    .catch(error => {
    console.error("Error during json file data reading:", error);
});




// Responsive information <aside> (for mobiles)
document.getElementsByClassName("back-button_mobile_inner")[0].addEventListener('click', e=>{
    document.getElementsByClassName("element-info_section")[0].className = "element-info_section";
    document.getElementsByClassName("aside_inner")[0].className = "aside_inner";
    document.getElementsByClassName("element-visualization_inner")[0].className = "element-visualization_inner";
    document.getElementsByClassName("element-visualization")[0].className = "element-visualization";
    document.getElementsByClassName("back-button_mobile")[0].className = "back-button_mobile";
    characteristics = document.getElementsByClassName("element-characteristic")
    for (characteristic in characteristics) {
        document.getElementsByClassName("element-characteristic")[characteristic].className = "element-characteristic"
    }
})

