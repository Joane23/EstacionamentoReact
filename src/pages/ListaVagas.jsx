import React, { useState } from "react";
import VagaEstacionamentoCard from "../components/VagaEstacionamentoCard";
import VAGAS_ESTACIONAMENTO from "../data"

const ListaVagas = () => {
    const [vagas, setVagas] = useState(
        VAGAS_ESTACIONAMENTO
            .filter(vagaEstacionamento => vagaEstacionamento.veiculo !== null)
    );

    const vagasListaComponents = vagas.map(vagaEstacionamento => {
        return <VagaEstacionamentoCard
            key = {vagaEstacionamento.numero}
            vagaEstacionamento={vagaEstacionamento}
        />
    });

    return (
        <main class="container">
            <h2>Vagas</h2>
            {vagasListaComponents}
        </main>
    );
};

export default ListaVagas;
