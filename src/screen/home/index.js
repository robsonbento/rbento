import React, { useState, useEffect} from 'react';
import api from '../../services/api';
import * as S from './styles';

import Header from '../../componentes/Header/index';
import Footer from '../../componentes/Footer/index';
import Filtro from '../../componentes/Filtro/index';
import BoxFiltro from '../../componentes/BoxFiltro/index';
import cancel from '../../midia/cancelar.svg';
import concluido from '../../midia/concluido.svg';


function Home() {

  const [filtroAtivo, setFiltroAtivo] = useState('tudo');
  const [eventos, setEvento] = useState([]);

  const [feito, setFeito]=useState(false);
  
  async function loadEvento(){
    await api.get(`/eventos/filter/${filtroAtivo}/200:200:200`)
    .then(resposta => {
      setEvento(resposta.data);
    })
  }

  useEffect(() => {
    loadEvento();

  }, [filtroAtivo])

  


{/* -------------------------------------------------------------------------------- */}
  return (
    <S.App>
      
      <Header/>
     

        <S.FiltroArea>
          <button type="button" onClick={()=>setFiltroAtivo('tudo')}>
          <Filtro title="Todos" ativo={filtroAtivo=='tudo'}/>
          </button>

          <button type="button" onClick={()=>setFiltroAtivo('dodia')}>
          <Filtro title="Data" ativo={filtroAtivo=='dodia'} />
          </button>

          <button type="button" onClick={()=>setFiltroAtivo('dasemana')}>
          <Filtro title="Placa" ativo={filtroAtivo=='dasemana'}/>
          </button>

          <button type="button" onClick={()=>setFiltroAtivo('domes')}>
          <Filtro title="Periodo" ativo={filtroAtivo=='domes'}/>
          </button>

          <button type="button" onClick={()=>setFiltroAtivo('doano')}>
          <Filtro title="Outros" ativo={filtroAtivo=='doano'}/>
          </button>

          <button type="button" onClick={()=>setFiltroAtivo('pendente')}>
          <Filtro title="Pendente" ativo={filtroAtivo=='Pendente'}/>
          </button>
        </S.FiltroArea>
  {/* -------------------------------------------------------------------------------- */}

        <S.tituloBody>
          <span>{filtroAtivo=='pendente'?'EM ATRASO':'TAREFAS'}</span>
        </S.tituloBody>
        
        <S.body>
        
        <S.Container>
          <S.Titulo>
            <input type='checkbox' checked={feito} onChange={()=>setFeito(!feito)}/>
            <span>{feito ? 'concluido':''}</span>
          </S.Titulo>
          <S.Titulo1> 
            PARTICIPAÇÃO
          </S.Titulo1>
          <S.Titulo1>
            PLACA
          </S.Titulo1>
          <S.Titulo1>
            NOME
          </S.Titulo1>
          <S.Titulo1>
            Nº PEDIDO/NFe
          </S.Titulo1>
          <S.Titulo1>
            VALOR
          </S.Titulo1>
          
        </S.Container>

          
        {eventos.map(t => (
        
          <BoxFiltro 
          id={t._id}
          participacao={t.participacao}
          placa={t.placa}
          nome={t.nome}
          pedido={t.pedido}
          valor_pedido={t.valor_pedido}
          concluido={t.concluido}
          data={t.dataEntrada} 
          titulo={t.titulo} 
          descricao={t.descricao}/>
        
        ))} 
        
      </S.body>
      
      <S.ddd>
          <S.Select>
            <S.Icone>
              <a><img src={concluido}/></a>
            </S.Icone>
            <S.Icone>
              <a><img src={cancel}/></a>
            </S.Icone>
          </S.Select>
        </S.ddd>
{/* -------------------------------------------------------------------------------- */}
      <Footer></Footer>
    </S.App>
  );
}

export default Home;
