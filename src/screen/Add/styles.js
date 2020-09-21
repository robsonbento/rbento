import styled from 'styled-components';

export const App = styled.div`
  display: flex;
  background-color: rgb(36, 36, 36);
  align-items: center;
  justify-content: center;
  flex-direction: column;
  

`

export const body = styled.div`
display: flex;
width: 90%;
padding-top: 10px;
min-height: 100vh;
font-size: 16px;
color: white;
background-color: #282c34;
margin-top:70px;


`
export const div2 = styled.div` 
flex: 1;
display: flex;
flex-direction: column;
align-items: center;


`  
export const div3 = styled.div` 
display:flex;
flex-direction: column;
align-items: center;
width:50%;

input{
width:100%;
border:none;
background:none;
font-size:14px;
color: white;
border-bottom:1px solid #00D594;
}

textarea{
  width:100%;
  margin: 5px 0px;
  background:none;
  color: white;
  border:1px solid #00D594;
  border-radius:5px;
}
`
export const box = styled.div`
flex: 1;
display: flex;
justify-content: center;
width:100%;
flex-direction:column;
margin:5px;
padding:5px;
font-size:14px;

span{
  color: #00D594;
}
`
export const div4 = styled.div` 
display:flex;
width:50%;
justify-content:space-between;
`
export const div5 = styled.div` 
display:flex;
padding:3px;
border-radius:5px;
align-items:center;
font-size:14px;
`
export const Exc = styled.div`
display:flex;
width:70px;
background-color:#f0433d;
padding:3px;
border-radius:5px;
font-size:14px;
justify-content:center;
`

export const Salvar = styled.div`
height:25px;
margin:5px;
display:flex;
justify-content:center;

button{
  background-color:#00D594;
  width:80px;
  border:none;
  border-radius:5px;
  color:white;

  &:hover{
    background-color:#5656F7;
}


}

`
