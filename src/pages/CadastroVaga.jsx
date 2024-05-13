import React from "react"

function handleSubmit(e) {
    e.preventDefault();
    const inputNumeroVaga = document.getElementById("inputNumeroVaga");
    const inputBlocoApartamento = document.getElementById("inputBlocoApartamento");
    const inputNumeroApartamento = document.getElementById("inputNumeroApartamento");
    const inputProprietarioVeiculo = document.getElementById("inputProprietarioVeiculo");
    const inputPlacaVeiculo = document.getElementById("inputPlacaVeiculo");
    const inputModeloVeiculo = document.getElementById("inputModeloVeiculo");
    const inputCorVeiculo = document.getElementById("inputCorVeiculo");
    const mensagem = `Vaga: ${inputNumeroVaga.value}\n`
    + `Apartamento\n`
    + `Bloco: ${inputBlocoApartamento.value}\n`
    + `Número: ${inputNumeroApartamento.value}\n`
    + `Veículo\n`
    + `Proprietário: ${inputProprietarioVeiculo.value}\n`
    + `Placa: ${inputPlacaVeiculo.value}\n`
    + `Modelo: ${inputModeloVeiculo.value}\n`
    + `Cor: ${inputCorVeiculo.value}\n`;
    console.log(mensagem);
    alert("Cadastro realizado com sucesso!")
}


const CadastroVaga = () => {
    return (
        <main class="container">
            <h2>Cadastrar Vaga</h2>
            <form id="formCadastroVaga" onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Vaga</legend>
                    <label for="inputNumeroVaga">Número</label>
                    <input type="number" id="inputNumeroVaga" name="inputNumeroVaga" required />
                </fieldset>
                <fieldset>
                    <legend>Aparamento</legend>
                    <label for="inputBlocoApartamento">Bloco</label>
                    <input type="text" id="inputBlocoApartamento" name="inputBlocoApartamento" required />
                    <label for="inputNumeroApartamento">Número</label>
                    <input type="number" id="inputNumeroApartamento" name="inputNumeroApartamento" required />
                </fieldset>
                <fieldset>
                    <legend>Veículo</legend>
                    <label for="inputProprietarioVeiculo">Nome do Proprietário</label>
                    <input type="text" id="inputProprietarioVeiculo" name="inputProprietarioVeiculo" required />
                    <label for="inputPlacaVeiculo">Placa</label>
                    <input type="text" id="inputPlacaVeiculo" name="inputPlacaVeiculo" required />
                    <label for="inputModeloVeiculo">Modelo</label>
                    <input type="text" id="inputModeloVeiculo" name="inputModeloVeiculo" required />
                    <label for="inputCorVeiculo">Cor</label>
                    <input type="text" id="inputCorVeiculo" name="inputCorVeiculo" required />
                </fieldset>
                <button type="submit">Cadastrar</button>
                <button type="reset">Limpar</button>
            </form>
        </main>
    );
};

export default CadastroVaga;
