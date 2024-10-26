const partido = 44000;

if (partido >= 44000 && partido <= 44000) {
    const array = partido.toString().split("");
    const partePartido = array.slice(0, 2);
    const parteCandidato = array.slice(2,5);
    console.log(partePartido[0] + partePartido[1]);
    console.log(parteCandidato[0]+parteCandidato[1]+parteCandidato[2]);
}