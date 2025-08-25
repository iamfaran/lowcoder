import styled from "styled-components";

export const TableContainer = styled.div<{
  $style: any;
}>`
  /* Small size */
  .ant-table-small .ant-table-tbody > tr > td {
    padding: 8px 8px !important;
  }
  
  /* Middle size */
  .ant-table-middle .ant-table-tbody > tr > td {
    padding: 12px 8px !important;
  }
  
  /* Default size */
  .ant-table:not(.ant-table-small):not(.ant-table-middle) .ant-table-tbody > tr > td {
    padding: 16px 16px !important;
  }
  
  /* Your existing TableContainer styles */
  ${props => props.$style?.customCSS || ''}
`;