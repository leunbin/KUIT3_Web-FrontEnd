import { createGlobalStyle } from "styled-components";
import PretendardMedium from "./Pretendard-Medium.woff";
import PretendardSemiBold from "./Pretendard-SemiBold.woff";
import PretendardBold from "./Pretendard-Bold.woff";
import GlobalFontStyle from "./fonts/fonts";

const GlobalFontStyle = createGlobalStyle`
  @font-face {
    font-family: 'PretendardMedium';
    font-weight: 500;
    font-display: swap;
    src: url(${PretendardMedium}) format('woff');
  }
  @font-face {
    font-family: 'PretendardSemiBold';
    font-weight: 600;
    font-display: swap;
    src: url(${PretendardSemiBold}) format('woff');
  }
  @font-face {
    font-family: 'PretendardBold';
    font-weight: 700;
    font-display: swap;
    src: url(${PretendardBold}) format('woff');
  }
`;

export default GlobalFontStyle;
