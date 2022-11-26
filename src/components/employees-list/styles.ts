import styled from '@emotion/styled';
import { ColorPalette } from '../../global-styles/colors';

export const STableHead = styled.thead`
  color: ${ColorPalette.WHITE};
  background-color: ${ColorPalette.TEAL_800};
`;

export const STableHeadCell = styled.th`
  position: relative;
  padding-left: 18px;
  padding-right: 18px;
  height: 70px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: start;
  border-right: 1px solid white;

  @media (max-width: 940px) {
    font-size: 14px;
    padding: 8px;
  }
`;

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

  @media (max-width: 940px) {
    padding: 8px;
    font-size: 14px;
  }
`;
