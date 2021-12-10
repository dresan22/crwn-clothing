import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const OptionContainersStyles = css`
  padding: 10px 15px;
  cursor: pointer;
  transition: all 0.1s;
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  // margin: 25px 0;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  display: flex;
  // padding: 25px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  ${OptionContainersStyles}
`;
export const OptionDiv = styled.div`
  ${OptionContainersStyles}
`;
