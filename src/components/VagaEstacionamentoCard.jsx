const VagaEstacionamentoCard = ({ vagaEstacionamento }) => {
    return ( 
        <div class="vaga">
            <div>
                <p class="vaga-titulo">Vaga <span>{vagaEstacionamento.numero}</span></p>
            </div>
            <ul>
                <li>
                    Apartamento
                    <ul>
                        <li>Bloco: <span>{vagaEstacionamento.apartamento.bloco}</span></li>
                        <li>Número: <span>{vagaEstacionamento.apartamento.numero}</span></li>
                    </ul>
                </li>
                {vagaEstacionamento.veiculo != null  && 
                    <li>
                        Veículo
                        <ul>
                            <li>Proprietário: <span>{vagaEstacionamento.veiculo.proprietario}</span></li>
                            <li>Placa: <span>{vagaEstacionamento.veiculo.placa}</span></li>
                            <li>Modelo: <span>{vagaEstacionamento.veiculo.modelo}</span></li>
                            <li>Cor: <span>{vagaEstacionamento.veiculo.cor}</span></li>
                        </ul>
                    </li>
                }
                
            </ul>
            <hr/>
        </div> 
    );
};

export default VagaEstacionamentoCard;
