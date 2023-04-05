import styled from "styled-components";

const hello = chrome.i18n.getMessage("popupHello");

const HelloDiv = styled.div`
  color: red;
  text-align: center;
  font-size: 20px;
`

function Popup() {
    return (
        <HelloDiv>{hello}</HelloDiv>
    )
}

export default Popup