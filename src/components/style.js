import styled, { keyframes } from 'styled-components';

export const Default = styled.div`
  position: relative;
  overflow: ${props => props.overflowHidden ? 'hidden' : 'none'};
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 -1px 1px -1px rgba(0,0,0,.12);
  padding: ${props => props.noPadding ? '0' : '20px'};
  margin: ${props => props.noMargin ? '0' : '20px'};
  @media (max-width: 576px) {
    margin: ${props => props.noMargin ? '0' : '10px'};
    border-radius: ${props => props.full ? '0' : '2px'};
    box-shadow: ${props => props.full ? 'none' : '0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 -1px 1px -1px rgba(0,0,0,.12);'};
  }
`;
