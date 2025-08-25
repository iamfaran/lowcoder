import styled from "styled-components";

export const ScrollbarStyleProvider = styled.div<{
  $showVerticalScrollbar: boolean;
  $showHorizontalScrollbar: boolean;
}>`
  /* Debug console logs */
  ${props => {
    console.log('ScrollbarStyleProvider received:', {
      showVerticalScrollbar: props.$showVerticalScrollbar,
      showHorizontalScrollbar: props.$showHorizontalScrollbar
    });
    return '';
  }}

  ${props => !props.$showVerticalScrollbar && `
    .ant-table-body::-webkit-scrollbar:vertical {
      display: none;
    }
    .ant-table-body {
      scrollbar-width: none; /* Firefox */
      -ms-overflow-style: none; /* IE */
    }
  `}
  
  ${props => !props.$showHorizontalScrollbar && `
    /* Hide horizontal scrollbar but keep scrolling */
    .ant-table-content::-webkit-scrollbar:horizontal {
      display: none;
    }
    .ant-table-body::-webkit-scrollbar:horizontal {
      display: none;
    }
    .ant-table-content {
      scrollbar-width: none; /* Firefox */
      -ms-overflow-style: none; /* IE */
    }
    .ant-table-body {
      scrollbar-width: none; /* Firefox */
      -ms-overflow-style: none; /* IE */
    }
  `}
  
  /* Hide ANTD's virtual scrollbars when disabled */
  ${props => !props.$showHorizontalScrollbar && `
    .ant-table-tbody-virtual-scrollbar-horizontal {
      display: none !important;
      height: 0 !important;
    }
  `}
`;