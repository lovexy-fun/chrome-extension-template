import styled from "styled-components";

const hello = chrome.i18n.getMessage("optionsHello");

const HelloDiv = styled.div`
  color: red;
  text-align: center;
  font-size: 20px;
`

function Options() {
    return (
        <HelloDiv>{hello}</HelloDiv>
    )
}

export default Options