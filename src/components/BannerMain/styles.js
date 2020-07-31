import styled from 'styled-components';

export const BannerMainContainer = styled.section`
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`}; 
  background-position: center;
  background-size: cover;
  color: var(--white);
  height: 80vh;
  position: relative;
  
  @media (max-width: 800px) {
    height: auto;
    min-height: 50vh;
  }

  &:after,
  &:before {
    content: "";
    display: block;
    height: 20%;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
  }

  &:before {
    background: rgba(0,0,0,0.5);
    height: 100%;
    top: 0;
  }

  &:after {
    background: linear-gradient(0deg, var(--grayDark) 0%, transparent 100%);
    bottom: 0;
  }
`;

export const ContentAreaContainer = styled.section`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  margin-left: 5%;
  margin-right: 5%;
  position: relative;
  z-index: 10;
  
  @media (max-width: 800px) {
    flex-direction: column;
    padding-top: 100px;
  }
`;

ContentAreaContainer.Item = styled.div`
  display: inline-block;
  margin-bottom: 50px;
  width: 50%;
  
  @media (max-width: 800px) {
    width: 100%;
  }
`;

// ContentAreaContainer.Category = styled.h1`
//    align-items: center;
//    border-radius: 4px;
//    display: flex;
//    display: inline-block;
//    font-size: 60px;
//    font-style: normal;
//    font-weight: normal;
//    line-height: 70px;
//    line-height: 1;
//    padding: 25px;
//    text-align: center;

//    @media (max-width: 800px) {
//      display: none;
//      font-size: 18px;
//      padding: 10px;
//    }
// `;

ContentAreaContainer.Title = styled.h2`
  font-size: 40px;
  font-style: normal;
  font-weight: 300;
  line-height: 1;
  margin-bottom: 32px;
  margin-top: 0;

  @media (max-width: 800px) {
    font-size: 32px;
    text-align: center;
  }
`;

ContentAreaContainer.Description = styled.p`
  @media (max-width: 800px) {
    display: none;
  }
`;

export const WatchButton = styled.button`
  background: var(--white);
  border: 0;
  /* border: 1px solid transparent; */
  /* border-color: var(--black); */
  border-radius: 5px;
  /* box-sizing: border-box; */
  color: var(--black);
  cursor: pointer;
  display: none;
  /* display: inline-block; */
  font-size: 16px;
  font-weight: bold;
  margin-left: auto;
  margin-right: auto;
  outline: none;
  padding: 16px 24px;
  /* text-decoration: none; */
  /* transition: opacity .3s; */
  
  @media (max-width: 800px) {
    display: block;
  }
`;