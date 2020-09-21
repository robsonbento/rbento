import styled from 'styled-components';

export const Header = styled.div`
display:flex;
width:100%;
position:fixed;
top:0 ;


`
export const Header1 = styled.div`
height:60px;
display:flex;
flex:1;
align-items:center;
justify-content:flex-start;
background-color:#262626;
font-size:20px;
color: #F2F2F2;
border-bottom: 10px solid #00D594;
`
export const Header2 = styled.div`
height:60px;
display:flex;
flex:1;
align-items:center;
justify-content:space-evenly;
background-color:#262626;
font-size:17px;
color: #F2F2F2;
border-bottom: 10px solid #00D594;

a{
  text-decoration:none;
  color: white;

  &:hover{
    color:#5656F7;
}}

#notification{
    background:none;
    border:none;
    cursor:pointer;

    img{
        width:30px;
        height:30px;
    }
    span{
        background:#fff;
        color:#6D39FF;
        font-weight:bold;
        font-size:15px;
        padding:1px 7px;
        border-radius:50%;
        position:relative;
        top:-15px;
        right:10px;
    }
    &:hover{
        opacity: 0.5;
    }
}

    .divisao::after{
        content:'|';
        margin: 0 10px;
        color: #fff;
    }
`
export const Icone = styled.div`
display:flex;
align-items:center;
margin-left:80px;

img{
width:50px;
height:50px;
}
`