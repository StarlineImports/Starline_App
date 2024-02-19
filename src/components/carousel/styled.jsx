import styled from "styled-components";

export const AreaComponentImage = styled.div`
  overflow-x: hidden;
  width: 100%;
  height: 400px;

  .component_image {
    width: 100%;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: all 0.8s ease;
    left: 100%;

    img {
      min-width: 100%;
      object-fit: cover;
      height: 400px;
    }
  }
  @media (max-width: 576px) {
    .component_image img {
      clip-path: inset(17% 0 18% 0);
    }
  }
`;
