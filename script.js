function maiorData(data1, data2) {
    if (data1 > data2) {
        return data1;
    } else {
        return data2;
    }
}

let data1 = new Date('2024-05-10');
let data2 = new Date('2024-05-15');
console.log(maiorData(data1, data2)); // Deverá retornar a data2

function calcularIntervalo(dataAntiga, dataNova) {
    if (dataAntiga > dataNova) {
        // Inverte as datas se necessário
        let temp = dataAntiga;
        dataAntiga = dataNova;
        dataNova = temp;
    }

    let diferencaMilissegundos = dataNova - dataAntiga;
    let umDiaEmMilissegundos = 24 * 60 * 60 * 1000; // 1 dia em milissegundos

    let diferencaDias = Math.floor(diferencaMilissegundos / umDiaEmMilissegundos);

    return diferencaDias;
}

let dataAntiga = new Date('2024-05-10');
let dataNova = new Date('2024-05-15');
console.log(calcularIntervalo(dataAntiga, dataNova)); // Deverá retornar 5

function dataAtual() {
    let data = new Date();
    let dia = data.getDate().toString().padStart(2, '0');
    let mes = (data.getMonth() + 1).toString().padStart(2, '0'); // Mês é base 0, então adicionamos 1
    let ano = data.getFullYear();
    let hora = data.getHours().toString().padStart(2, '0');
    let minuto = data.getMinutes().toString().padStart(2, '0');

    return `${hora}:${minuto} - ${dia}/${mes}/${ano}`;
}

console.log(dataAtual()); // Saída será algo como: 14:30 - 10/05/2024