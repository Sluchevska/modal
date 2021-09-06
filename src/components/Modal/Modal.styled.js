import styled from "@emotion/styled";

export const ModalContent = styled.div`
position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 300px;
  max-width: 600px;
  width: 100%;
  padding: 12px;
  background: linear-gradient(45deg, rgb(240, 160, 199), rgb(87, 66, 100));
  border-radius: 5px;
  box-shadow: 0px 6px 8px 10px rgba(0, 0, 0, 0.2),
    4px 6px 8px 10px rgba(0, 0, 0, 0.14), 4px 8px 10px 12px rgba(0, 0, 0, 0.12);
`
export const ModalBackdrop = styled.div`
 position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

`