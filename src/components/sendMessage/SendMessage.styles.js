import styled from 'styled-components'

export const StyledSendMessage = styled.form`
  position: absolute;
  bottom: 0;
  direction: rtl;
  background-color: aliceblue;
  display: flex;
  width: calc(100% - 40px);
  padding: 20px;
  border-radius: 10px;
  & input {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: none;
  }
  & input:focus,
  button:focus {
    outline: none;
  }
  & button {
    padding: 10px 20px;
    margin-right: 20px;
    color: white;
    background-color: blue;
    border: none;
    border-radius: 5px;
  }
`
