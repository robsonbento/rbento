import React, { useState, useEffect} from 'react';
import api from '../../services/api';
import * as S from './styles';
import logo from '../../midia/icone.png';
import notif from '../../midia/bell.svg';
import {Link} from 'react-router-dom';


function Header() {

  const [filtroAtivo, setFiltroAtivo] = useState('tudo');
  const [pendente, setPendente] = useState('0');

  async function VerifyPendte(){
    await api.get(`/tarefa/filter/pendente/200:200:200`)
    .then(resposta => {
      setPendente(resposta.data.length);
    })
  }

  useEffect(() => {
    VerifyPendte();

  }, [])

  function clickNotific(){ // clicar na notificação e ir para pagina de pendente
    setFiltroAtivo('pendente');
  }

  return (
    <S.Header>
        
    <S.Header1>
      <S.Icone>
        <Link to='/'><img src={logo}/></Link>
      </S.Icone>
    </S.Header1>

    <S.Header2>
      {/* <Link to='/financeiro'>Financeiro</Link>
      <span className='divisao' /> */}
      
      <Link to='/eventos'>Adicionar</Link>
      {/* <span className='divisao' /> */}
     
      {/* <Link to='/revisao'>Revisão</Link>
      <span className='divisao' /> */}
      
      <button onClick={clickNotific} id='notification'>
        <img src={notif} alt='Notificação'/>
          <span>{pendente}</span> 
      </button>
      
    </S.Header2>

  </S.Header>
     
)
}

export default Header;