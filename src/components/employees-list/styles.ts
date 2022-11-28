import styled from '@emotion/styled';
import { ColorPalette } from '../../global-styles/colors';

export const STableRow = styled.tr`
  :hover {
    background-color: ${ColorPalette.GRAY_50};
    cursor: pointer;
  }
`;

export const STableBodyCell = styled.td`
  padding: 18px;
  color: ${ColorPalette.TEAL_900};
  border-bottom: 1px solid ${ColorPalette.TEAL_200};
`;
