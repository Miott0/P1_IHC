const form = document.querySelector("#main-agendamento-exame");
const select = document.querySelector('#Exame');
const horaAgendada = document.getElementById('HoraConsulta');
const diaAgendado = document.getElementById('DataConsulta');

const dataAtual = new Date().getTime();



var hora = "";
horaAgendada.addEventListener("input", () => {
   hora = horaAgendada.value;
}, false);

var dataMarcada = null;
var span = document.getElementById('aviso-erro-data');
diaAgendado.addEventListener("input", () =>{
    dataMarcada = new Date(diaAgendado.value);
   /*  span.innerText = dataMarcada.getTime(); */
}, false)


var texto = null;
select.addEventListener('change', function() {
   var option = this.selectedOptions[0];
    texto = option.textContent;
}, false);



form.onsubmit = evento =>{
    
    if(hora < '08:00' || hora > '23:00'){
        horaAgendada.className = 'class-erro';
        document.getElementById("aviso-erro-hora").innerHTML = "<p>Precisa preencher campo!!!</p>"
        evento.preventDefault();
        return
    }
    else{
        horaAgendada.className = 'class-correto';
        document.getElementById("aviso-erro-hora").innerHTML = "<p></p>"
    }
    

    if(texto === " " || texto === null ){
        select.className = 'class-erro';
        document.getElementById("aviso-erro-exame").innerHTML = "<p>Precisa preencher campo!!!</p>"
        evento.preventDefault();
        return
    }
    else{
        select.className = 'class-correto';
        document.getElementById("aviso-erro-exame").innerHTML = "<p></p>"
    }


    if(dataMarcada < dataAtual){
        diaAgendado.className = 'class-erro';
        document.getElementById("aviso-erro-data").innerHTML = "<p>Coloque uma data válida!!!</p>"
        evento.preventDefault();
        return
    }
    else{
        diaAgendado.className = 'class-correto';
        document.getElementById("aviso-erro-data").innerHTML = "<p></p>"
    }
    


    window.alert("Consulta Agendada Com Sucesso");
}


