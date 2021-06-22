import styled from 'styled-components'

export const Container = styled.div`
  background-color: #121214;
  table{
    border-top: 1px solid lightgray;
    color: white;
    width: 100%;
    text-align: center;

    th{
      font-size: 18px;

    }
    th,td{
      padding:10px;

    button{

      height: 35px;

    }
    }
  }

`
export const Button = styled.button`

`
export const Form = styled.form`

`
export const ContainerMain = styled.div`
  height: 100vh;


  display: flex;
  justify-content: space-evenly;
  align-items: center;
`
export const  ContainerLeft = styled.div`
  background-color: green;
  width: 30%;
  height: 60vh;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: #202024;
  border-radius: 7px;

  padding-top: 70px;

  span{
    color: white;
    font-size: 26px;
    text-align: start;
    margin-bottom: 20px;
  }

  input, button{
    display:block;
    height: 45px;
    width: 250px;
    border: none;
    border-radius: 7px;
    margin-top: 10px;
    color:white;

  }
  input{
    padding-left: 15px;
    background-color: #121214;
    
  }
  button{
    margin-top: 40px;
    background-color: #8257E5;
    color: white;
  }

`

export const ContainerRight = styled.div`
  color: #E1E1E6;
  width: 30%;
  text-align:start;

  p{
    font-size: 36px;
    font-weight: 600;
  }
  div{
   margin-top: 35px;
   margin-bottom: 25px;
  }
  span{
    color:#8257E5;
    :hover{
     filter: brightness(90%);
     cursor: pointer;
    }
  }
`

