import React from 'react';
import * as S from './styles';
import filter from '../../midia/filter.svg';


function Filtro({title, ativo}) {

  return (
    
      <S.Filtro ativo={ativo}>
        
          <img src={filter}></img>
          <span>{title}</span>
        
      </S.Filtro>
     
     
)
}

export default Filtro;