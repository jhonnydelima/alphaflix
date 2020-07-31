import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  align-items: flex-end;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border: 2px solid;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  display: flex;
  flex: 0 0 298px;
  height: 197px;
  overflow: hidden;
  padding: 16px;
  position: relative;
  text-decoration: none;
  transition: opacity .3s;
  width: 298px;

  &:hover,
  &:focus {
    opacity: .5;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
