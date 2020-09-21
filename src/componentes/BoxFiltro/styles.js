import styled from 'styled-components';

export const Container = styled.div`
width:100%;
display:flex;
border-radius:3px;
background-color: ${props => props.concluido ? 'rgb(217, 255, 168)' : '#F2F2F2'};
margin:2px 0px;
min-height:25px;

a{
    width:100%;
    display:flex;
    text-decoration:none;
    cursor:pointer;
    
}

`
export const box = styled.div`
display:flex;
align-items:center;
margin-left:5px;


`
export const boxF = styled.div`
display:flex;
flex:1;
text-align:center;
align-items:center;
justify-content:center;
color:#262626;
font-size:14px;


`
