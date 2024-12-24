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

  .header .left-side .upload-image {
    width: 36%;
    height: 10vh;
    border-radius: 20px;
  }

  .header .left-side .upload-image label {
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

  .header .left-side .upload-image label:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  .header .left-side .upload-image label img {
    margin: 0 10px;
    width: 25px;
  }

  .header .right-side {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
  }

  .header .right-side img {
    width: 90%;
    height: 90%;
    background-size: cover;
    background-position: right;
  }
`;

export const TitleWrapper = styled.div`
  .title {
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5vh 0;
  }

  .title .top {
    width: 100%;
    height: auto;
    text-align: center;
    padding: 5vh 10vw;
  }

  .title .top p {
    font-size: 50px;
    line-height: 63px;
    background: linear-gradient(90.21deg, #353535 -18.76%, #9b9b9b 118.86%);
    color: transparent;
    background-clip: text;
  }
`;

export const FeatureWrapper = styled.div`
  .feature {
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5vh;
    margin-bottom: 10vh;
  }

  .feature .bottom {
    width: 100%;
    height: auto;
    text-align: center;
    padding: 0 10vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 2vh;
  }

  .feature .bottom .box {
    width: 20vw;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 0 4px #5328b0;
    padding: 30px 20px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  .feature .bottom .box:hover {
    transform: scale(1.1);
  }

  .feature .bottom .box h1 {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
  }

  .feature .bottom .box h1 img {
    width: 12%;
  }

  .feature .bottom .box h1 span {
    font-size: 20px;
    margin-left: 5px;
  }

  .feature .bottom .box p {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
`;

export const TestemonialsWrapper = styled.div`
  .textimonial-wrapper {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 5vh 10vw;
    margin-bottom: 5vh;
  }
  .card {
    /* background-color: #f9f9f9; */
    border-radius: 8px;
    padding: 30px 20px;
    max-width: 400px;
    box-shadow: 0 2px 10px rgba(0, 0, 20, 0.1);
  }

  .quote {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 20px;
    color: #333;
  }

  .userInfo {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .avatar {
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }

  .name {
    font-size: 14px;
    font-weight: bold;
    margin: 0;
  }

  .title {
    font-size: 12px;
    color: #666;
    margin: 0;
  }
`;

export const UploadWrapper = styled.div`
  .upload-wrapper {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2vh;
  }
  .upload-image {
    width: 15%;
    height: 9vh;
    border-radius: 50px;
  }

  .upload-image label {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 5px;
    border-radius: 50px;
    background: linear-gradient(92.53deg, #7649ff 4.01%, #ff4cf6 73.1%);
    transition: all 0.2s ease-in-out;
    color: white;
  }

  .upload-image label:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  .upload-image label img {
    margin: 0 10px;
    width: 25px;
  }
`;


// Styled Component for the Main Container
export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10vw;
  width: 100%;
  margin-top: 25vh;

  .logo-section {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .logo-icon {
    width: 24px;
    height: 24px;
    border-radius: 4px;
  }

  .logo-text {
    font-size: 30px;
    font-weight: bold;
    color: #000;
  }

  .line {
    width: 1px;
    height: 30px;
    background-color: #666;
    margin: 0 10px;
  }

  .copyright {
    font-size: 16px;
    color: #666;
    font-weight: 600;
  }

  .social-media {
    display: flex;
    gap: 16px;
  }

  .social-icon {
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }

    svg {
      color: #333;
      font-size: 16px;
    }
  }
`;
