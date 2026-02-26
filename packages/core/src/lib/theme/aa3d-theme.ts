export interface Aa3dTransition {
  hover: number;
  rest: number;
  press: number;
}

export interface Aa3dTheme {
  hue: number;
  saturation: number;
  depth: 'deep' | 'medium' | 'subtle';
  radius: number;
  transition: Aa3dTransition;
}

export type Aa3dThemeConfig = Partial<Omit<Aa3dTheme, 'transition'> & {
  transition: Partial<Aa3dTransition>;
}>;
