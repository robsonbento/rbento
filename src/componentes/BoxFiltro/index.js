import React, {useMemo} from 'react';
import {format} from 'date-fns';
import * as S from './styles';
import {Link} from 'react-router-dom';


function BoxFiltro({id, data, placa, nome, pedido, valor_pedido, concluido}) {
  
  const dataForm = useMemo(() => format(new Date(data), 'dd/MM/yyyy'));
  const hora = useMemo(() => format(new Date(data), 'HH:mm'));

  return (
    
      <S.Container concluido={concluido}>
        <Link to={`/eventos/${id}`}>
        <S.box>
            <input type='checkbox'/>
        </S.box>

        <S.boxF>
          {dataForm}
        </S.boxF>

        <S.boxF>
          {placa}
        </S.boxF>

        <S.boxF>
          {nome}
        </S.boxF>

        <S.boxF>
          {pedido}
        </S.boxF>
        
        <S.boxF>
          {valor_pedido}
        </S.boxF>
        </Link>
      </S.Container>
      
     )
}

export default BoxFiltro;