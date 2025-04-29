AOS.init();

const dataDoEvento = new Date("Sep 12 2025 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contadorTempo = setInterval(function(){
    const tempoAtual = new Date();
    const timeStampTempoAtual = tempoAtual.getTime();

    tempoAteEvento = timeStampDoEvento - timeStampTempoAtual;

    const diasAteEvento = Math.floor(tempoAteEvento / (1000 * 60 * 60 * 24));
    const horasAteEvento = Math.floor(tempoAteEvento % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const minutosAteEvento = Math.floor(tempoAteEvento % (1000 * 60 * 60) / (1000 * 60));
    const segundosAteEvento = Math.floor(tempoAteEvento % (1000 * 60) / 1000);

    document.getElementById('contadorDias').innerHTML = `${diasAteEvento}`;
    document.getElementById('contadorHoras').innerHTML = `${horasAteEvento}`;
    document.getElementById('contadorMinutos').innerHTML = `${minutosAteEvento}`;
    document.getElementById('contadorSegundos').innerHTML = `${segundosAteEvento}`;




    if(tempoAteEvento < 0){
        clearInterval(contadorTempo);
        document.getElementById('hero__text_contador').innerHTML = 'Evento expirado!';
        document.getElementById('contadorDias').innerHTML = `00`;
        document.getElementById('contadorHoras').innerHTML = `00`;
        document.getElementById('contadorMinutos').innerHTML = `00`;
        document.getElementById('contadorSegundos').innerHTML = `00`;
    }
}, 1000);