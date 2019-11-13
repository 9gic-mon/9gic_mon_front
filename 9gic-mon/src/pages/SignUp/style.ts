import styled from "styled-components";

import {
  KeepSafeLineContainer,
  KeepSafeLineContent
} from "../../style/default";

export const ContentContainer = styled(KeepSafeLineContent)`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ContentWrapper = styled(KeepSafeLineContainer)`
  height: calc(100vh - 75px);
`;
