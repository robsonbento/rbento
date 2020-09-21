import styled from 'styled-components';

export const App = styled.div `
  display: flex;
  background-color: rgb(36, 36, 36);
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top:70px;
  

`
export const FiltroArea = styled.div`
width: 100%;
display:flex;
flex-wrap:wrap;
justify-content: center;

button{
background:none;
border:none;
}

`
export const tituloBody = styled.div`
display:flex;
width:100%;
border-bottom:1px solid white; 
justify-content:center;
margin-bottom:15px;


span{
    color: white;
    font-size:14px;
    position:relative;
    top:10px;
    background-color: rgb(36, 36, 36);
    padding:0px 20px ;

}

`

export const body = styled.div`
  display: flex;
  width: 97%;
  min-height: 100vh;
  font-size: 14px;
  color: white;
  background-color: #282c34;
  flex-direction:column;
  align-items:center;
  margin-bottom:70px;
  `

export const Container = styled.div`
width:100%;
color:#262626;
display:flex;
background-color:#b7b7b7;
border-radius:5px;
min-height:25px;
margin-bottom:5px;

`
export const Titulo = styled.div`
display:flex;
align-items:center;
margin-left:5px;

`
export const Titulo1 = styled.div`
flex:1;
display:flex;
font-weight:bold;
font-size:12px;
align-items:center;
justify-content:center;
border-radius:3px;

`


export const ddd = styled.div`
display:flex;
justify-content:center;
position:fixed;
bottom:60px ;
width:100%;

`
export const Select = styled.div`
display:flex;
height:40px;
width:100% ;
border-radius:5px;
justify-content:flex-end;
background: rgb(40, 44, 52, 0.5);
`
export const Icone = styled.div`
display:flex;
align-items:center;
margin:0px 15px;
cursor:pointer;

&:hover{
  opacity: 0.5;
}

img{
width:25px;
height:25px;
}

`