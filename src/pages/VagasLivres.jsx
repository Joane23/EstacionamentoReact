import React, { useState } from "react"
import VagaEstacionamentoCard from "../components/VagaEstacionamentoCard";
import VAGAS_ESTACIONAMENTO from "../data"

const VagasLivres = () => {
    const [vagasLivres, setVagasLivres] = useState(
        VAGAS_ESTACIONAMENTO
            .filter(vagaEstacionamento => vagaEstacionamento.veiculo === null)
    );

    const vagasLivresListaComponents = vagasLivres.map(vagaEstacionamento => {
        return <VagaEstacionamentoCard
            key = {vagaEstacionamento.numero}
            vagaEstacionamento={vagaEstacionamento}
        />
    });

    return (
        <main class="container">
            <h2>Vagas Livres</h2>
            {vagasLivresListaComponents}
        </main>
    );
};

export default VagasLivres;
