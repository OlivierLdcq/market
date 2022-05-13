import styled from "styled-components";
import Namaste from "./namaste.png";

export const NavigationWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 8%;
  padding-right: 8%;
  align-items: center;
  height: 50px;
  span {
    transition: ease-in-out 0.1s all;
    cursor: pointer;
    padding: 0px;
    margin-left: 30px;
    &:hover {
      transition: ease-in-out 0.2s all;
      color: grey;
      position: relative;
      top: -1px;
    }
  }
`;

export const Logo = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 20px;
  background-image: url(${Namaste});
  background-size: cover;
`;
