import styled, { keyframes } from 'styled-components';

const Default = styled.div`
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 -1px 1px -1px rgba(0,0,0,.12);
  padding: 20px;
  margin: 20px;
  @media (max-width: 576px) {
    margin: 10px;
  }
`;

const Full = styled.div`
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 -1px 1px -1px rgba(0,0,0,.12);
  padding: 20px;
  margin: 20px;
  @media (max-width: 576px) {
    margin: 0;
    border-radius: 0;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
	}
`;

export { Default, Full };