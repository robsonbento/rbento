import React from 'react';
import * as S from './styles';
import { useState, useEffect } from 'react';
import {format} from 'date-fns';
import api from '../../services/api';
import {Redirect} from 'react-router-dom';
import Header from '../../componentes/Header/index';
import Footer from '../../componentes/Footer/index';


function Add({match}) {

    const [redirect, setRedirect]=useState(false);

    const [nome, editNome]=useState();
    const [sobrenome, editSobrenome]=useState();
    const [cpf, editCPF]=useState();
    const [fone, editTelef]=useState();
    const [placa, editPlaca]=useState();
    const [marca, editMarca]=useState();
    const [anoMod, editAnoMod]=useState();
    const [modelo, editModelo]=useState();
    const [cor, editCor]=useState();

    const [macaddress, setMacaddress]=useState('200:200:200');
    const [type, setType]=useState();
    const [concluido, setConcluido]=useState(false);
    const [cancelado, setCancelado]=useState(false);
    const [excluir, setExcluir]=useState(false);
    
    const [dataEntrada, editDataEntrada]=useState();
    const [dataPart, editDataPart]=useState();
    const [pedido, editPedido]=useState();
    const [valor_pedido, editValorPedido]=useState();
    const [descricao, setDescricao]=useState();

    async function addVeiculo(){
        await api.post('/veiculo', {
            nome,
            sobrenome,
            cpf,
            fone,
            placa,
            marca,
            anoMod,
            modelo,
            cor,            

        }).then(()=>alert('Salvo com sucesso!')
        )
    }
    

    async function addEvento(){
        if(!placa)
        return alert ('Informe a Placa!')
        else if(!pedido)
        return alert ('Informe o Pedido')

        if(match.params.id){ 
            await api.put(`/eventos/${match.params.id}`, { //put - Atualizar
                macaddress,
                placa,
                dataEntrada,
                dataPart,
                pedido,
                valor_pedido,
                concluido,
                descricao,
                excluir,
            }).then(()=>
            setRedirect(true)
        )

        }else{ 
            await api.post('/eventos', { //post - Criar
                macaddress,
                placa,
                dataEntrada,
                dataPart,
                pedido,
                valor_pedido,
                descricao,
                concluido,
                cancelado,
                excluir,
            }).then(()=>
            setRedirect(true)
        )
    }
}

    async function loadDetalhes(){
        await api.get(`/eventos/${match.params.id}`,) //get - Buscar do banco de dados
        .then(resposta=>{
    
            editDataEntrada(format(new Date(resposta.data.dataEntrada), 'yyyy-MM-dd'))
            editPedido(resposta.data.pedido)
            editValorPedido(resposta.data.valor_pedido)
            editNome(resposta.data.nome)
            editTelef(resposta.data.fone)
            editPlaca(resposta.data.placa)
            editModelo(resposta.data.modelo)
            setConcluido(resposta.data.concluido)
            setCancelado(resposta.data.cancelado)
            setExcluir(resposta.data.excluir)
            
        })
    }

    useEffect(()=>{
        loadDetalhes();
    
    },[])
    

    async function Remover(){
        const resp = window.confirm('Deseja mesmo Remover?')
        if(resp == true){
            alert('ok, Removido!!')
            await api.delete(`/eventos/${match.params.id}`,) // delete - excluir definitivo
            .then(() => setRedirect(true));
        } 
    }

  return (
    <S.App>
        {redirect && <Redirect to='/' />}
        <Header></Header>
        <S.body>
        <S.div2>
                <S.div3>
                    <div>VEICULO</div>

                    <S.box>
                        <input type='text' placeholder='Nome' value={nome} 
                        onChange={e=>editNome(e.target.value)}/>
                    </S.box>

                    <S.box>
                        <input type='text' placeholder='Sobrenome' value={nome} 
                        onChange={e=>editNome(e.target.value)}/>
                    </S.box>

                    <S.box>
                        <input type='text' placeholder='CPF' value={nome} 
                        onChange={e=>editNome(e.target.value)}/>
                    </S.box>

                    <S.box>
                        <input type='text' placeholder='Telefone' value={fone} 
                        onChange={e=>editTelef(e.target.value)}/>
                    </S.box>

                    <S.box>
                        <input type='text' placeholder='Placa' value={placa} 
                        onChange={e=>editPlaca(e.target.value)}/>
                    </S.box>

                    <S.box>
                        <input type='text' placeholder='Ano Modelo' value={modelo} 
                        onChange={e=>editModelo(e.target.value)}/>
                    </S.box>

                    <S.box>
                        <input type='text' placeholder='Marca' value={modelo} 
                        onChange={e=>editModelo(e.target.value)}/>
                    </S.box>

                    <S.box>
                        <input type='text' placeholder='Modelo' value={modelo} 
                        onChange={e=>editModelo(e.target.value)}/>
                    </S.box>

                    <S.box>
                        <input type='text' placeholder='Cor' value={modelo} 
                        onChange={e=>editModelo(e.target.value)}/>
                    </S.box>

                </S.div3>
                <S.Salvar>
                    <button type='button' onClick={addEvento}>Salvar</button>
                </S.Salvar>
          </S.div2>
            
            {/* -------------------------------------------------------------------------------- */}
            <S.div2>
                <S.div3>
                    <div>EVENTO</div>

                    <S.box>
                        <input type='text' placeholder='Placa' value={placa} 
                        onChange={e=>editPlaca(e.target.value)}/>
                    </S.box>

                    <S.box>
                        <span>Data Entrada:</span>
                        <input type='date' placeholder='Data Entrada' value={dataEntrada} 
                        onChange={e=>editDataEntrada(e.target.value)}/>
                    </S.box>
                        
                    <S.box>
                        <span>Data Participação:</span>
                        <input type='date' placeholder='Data Participação' value={dataPart} 
                        onChange={e=>editDataPart(e.target.value)}/>
                    </S.box>

                    <S.box>
                        <input type='text' placeholder='Nº Pedido' value={pedido} 
                        onChange={e=>editPedido(e.target.value)}/>
                    </S.box>

                    <S.box>
                        <input type='number' placeholder='Valor' value={valor_pedido} 
                        onChange={e=>editValorPedido(e.target.value)}/>
                    </S.box>    
                    
                        <textarea rows={5} placeholder='Observação:' value={descricao} 
                        onChange={e=>setDescricao(e.target.value)}/>
                </S.div3>
                
                <S.div4>
                    <S.div5>
                        <input type='checkbox' checked={concluido} onChange={()=>setConcluido(!concluido)}/>
                        <span>{concluido ? 'Concluido':'Pendente'}</span>
                     </S.div5> 
                        {match.params.id && 
                    <S.Exc>
                        <input type='checkbox' checked={excluir} onChange={()=>setExcluir(!excluir)}/> 
                        <span>Excluir</span>
                    </S.Exc>
                    }
                    
                </S.div4>
                
                <S.Salvar>
                    <button type='button' onClick={addEvento}>Salvar</button>
                </S.Salvar>
          </S.div2>
          
        </S.body>
        <Footer></Footer>
    </S.App>
    
)
}

export default Add;