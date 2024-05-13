import Apartamento from "./models/Apartamento";
import Veiculo from "./models/Veiculo";
import VagaEstacionamento from "./models/VagaEstacionamento";

const VAGAS_ESTACIONAMENTO = [
    new VagaEstacionamento(
        1,
        new Apartamento("A", 101),
        new Veiculo("Maria da Silva", "MVE-2054", "Chevrolet Onix", "Azul")
    ),
    new VagaEstacionamento(
        2,
        new Apartamento("A", 102),
        new Veiculo("João da Silva", "VME-5654", "Peugeot 206", "Branco")
    ),
    new VagaEstacionamento(
        3,
        new Apartamento("A", 103),
        new Veiculo("Ana Medeiros", "KJE-8975", "renault logan", "Cinza")
    ),
    new VagaEstacionamento(
        4,
        new Apartamento("A", 104),
        null
    ),
    new VagaEstacionamento(
        5,
        new Apartamento("A", 105),
        null
    ),
    new VagaEstacionamento(
        6,
        new Apartamento("A", 106),
        null
    ),
];

export default VAGAS_ESTACIONAMENTO;
