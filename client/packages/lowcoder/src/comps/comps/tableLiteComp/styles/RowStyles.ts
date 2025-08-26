import styled from "styled-components";

export const RowStyleProvider = styled.div<{
 $rowStyle: any;
 $showHRowGridBorder: boolean;
}>`
 ${props => {
   console.log("RowStyleProvider props:", props);
   console.log("Row style object:", props.$rowStyle);
   console.log("Show horizontal grid border:", props.$showHRowGridBorder);
   return "";
 }}

 /* Hide the measure row to avoid the extra space */
 tr.ant-table-measure-row{
       visibility: collapse;
 } 
 
 /* Only apply row styles if explicitly set by user */
 .ant-table-tbody > tr {
   ${props => props.$rowStyle?.background && `background: ${props.$rowStyle.background};`}
   ${props => props.$rowStyle?.borderColor && `border-color: ${props.$rowStyle.borderColor};`}
   ${props => props.$rowStyle?.height && `height: ${props.$rowStyle.height};`}
   ${props => props.$rowStyle?.minHeight && `min-height: ${props.$rowStyle.minHeight};`}
 }
 
 /* Row hover effects - only if explicitly set */
 ${props => props.$rowStyle?.hoverRowBackground && `
   .ant-table-tbody > tr:hover {
     background: ${props.$rowStyle.hoverRowBackground} !important;
   }
 `}
 
 /* Alternating row colors - only if explicitly set */
 ${props => props.$rowStyle?.alternatingBackground && `
   .ant-table-tbody > tr:nth-child(even) {
     background: ${props.$rowStyle.alternatingBackground};
   }
 `}
 
 /* Selected row styling - only if explicitly set */
 ${props => props.$rowStyle?.selectedRowBackground && `
   .ant-table-wrapper .ant-table-tbody .ant-table-row.ant-table-row-selected >.ant-table-cell {
      background: ${props.$rowStyle.selectedRowBackground};
   }
 `}
 
 /* Horizontal grid borders */
 ${props => props.$showHRowGridBorder && `
   .ant-table-tbody > tr > td {
     border-bottom: 1px solid ${props.$rowStyle?.borderColor || '#f0f0f0'};
   }
 `}
 
 /* Custom row CSS */
 ${props => props.$rowStyle?.customCSS || ''}
`;