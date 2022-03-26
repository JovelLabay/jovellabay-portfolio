import styled from "styled-components";

import Image from "next/image";

export const TheEvents = styled.div`
  padding-bottom: 2rem;
`;

export const RoundImage = styled(Image)`
  border-radius: 50%;
  background-color: #f1f5f9;
`;

export const TheThinBorder = styled.div`
  width: 100%;
  margin: 2rem 0;
  border-bottom: 1px solid #fff;
`;
