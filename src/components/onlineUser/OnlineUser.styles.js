import styled from 'styled-components'

export const StyledOnlineUser = styled.li.withConfig({
  shouldForwardProp: (props) => props !== 'sty',
})`
  margin-top: 5px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  padding: 5px;
  transition: 0.3s ease-out;
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: ${(props) =>
    props.sty.chatting ? 'space-between' : 'flex-end'};
  align-items: center;
  background-color: ${(props) => (props.sty.chatting ? 'aliceblue' : 'white')};
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
    padding: ${(props) => (props.sty.chatting?.number ? '4px 7px' : '4px')};
    font-size: 12px;
    font-weight: bold;
    color: white;
  }
`
