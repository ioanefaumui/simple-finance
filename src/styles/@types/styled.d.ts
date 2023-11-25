import "styled-components";

type ThemeType = typeof defaultTheme;

declare module "style-components" {
  export interface DefaultTheme extends ThemeType {}
}
