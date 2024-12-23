import styled from "styled-components";

export const Navwarpper = styled.div`
  .nav-bar {
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2vh 10vw;
  }

  .nav-bar .icon img {
    width: 40vh;
    height: 10vh;
  }

  .nav-bar button {
    background-color: #2b2c49;
    display: flex;
    align-items: center;
    padding: 2vh;
    border-radius: 15px;
    font-weight: 400;
    color: whitesmoke;
    transition: all 0.2s ease-in-out;
  }

  .nav-bar button img {
    margin-left: 10px;
    transition: all 0.2s ease-in-out;
  }

  .nav-bar button:hover {
    transform: scale(1.1);
  }
`;

export const HeaderWrapepr = styled.div`
  /* Home code */

  .header {
    width: 100vw;
    height: 86vh;
    display: flex;
    padding: 0 10vw;
  }

  .header .left-side {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .header .left-side h1 {
    font-size: 74px;
    width: 600;
    line-height: 88.2px;
  }

  .header .left-side h1 span {
    font-size: 74px;
    width: 800;
    line-height: 88.2px;
    color: transparent;
    background-image: linear-gradient(92.53deg, #7649ff 4.01%, #ff4cf6 73.1%);
    background-clip: text;
  }

  .header .left-side p {
    font-size: 18px;
    line-height: 28px;
    font-weight: 400;
    margin: 4vh 0;
  }

  .header .left-side .upload-image{
    width: 36%;
    height: 10vh;
    border-radius: 20px;
  }

  .header .left-side .upload-image label{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 6px;
    border-radius: 20px;
    background: linear-gradient(92.53deg, #7649ff 4.01%, #ff4cf6 73.1%);
    transition: all 0.2s ease-in-out;
    color: white;
  }


  .header .left-side .upload-image label:hover{
    transform: scale(1.1);
    cursor: pointer;
  }

  .header .left-side .upload-image label img{
    margin:0 10px;
    width: 25px;
  }

  .header .right-side {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .header .right-side img{
    width: 90%;
    height: 90%;
  }
`;
