import styled from 'styled-components';


export const Filtro = styled.div`
height:25px;
min-width:150px;
padding:10px;
display:flex;
flex: 1;
flex-direction:column;
margin:10px;
justify-content:space-around;
background-color:${props=>props.ativo ? '#6D39FF' : '#F2F2F2'};
border-radius:8px;
font-size:13px;
font-weight:bold;
color:${props=>props.ativo ? '#F2F2F2':'#262626'};
border:none;
cursor: pointer;

span{
    align-self:flex-end;
}
img{
    width:20px;
}

&:hover{
    background-color:#6D39FF;
    color: #F2F2F2;

}

`