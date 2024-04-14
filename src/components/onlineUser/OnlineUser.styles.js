import styled from 'styled-components'

export const StyledOnlineUser = styled.li`
  margin-top: 5px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  padding: 5px;
  transition: 0.3s ease-out;
  display: flex;
  flex-direction: row;
  justify-content: ${(props) =>
    props.sty.chatting ? 'space-between' : 'flex-end'};
  align-items: center;
  background-color: ${(props) => (props.sty.chatting ? 'aliceblue' : '')};
  &:hover {
    background-color: aliceblue;
  }
  & > div {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    order: 0;
  }
  & span {
    order: -1;
    background-color: blue;
    border-radius: 20px;
    padding: 4px;
    font-size: 12px;
    color: white;
  }
`
