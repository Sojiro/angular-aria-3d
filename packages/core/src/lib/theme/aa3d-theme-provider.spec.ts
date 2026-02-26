import { TestBed } from '@angular/core/testing';
import { AA3D_THEME, provideAngularAria3d } from './aa3d-theme-provider';

describe('Theme Provider', () => {
  it('should provide default theme when no config given', () => {
    TestBed.configureTestingModule({
      providers: [provideAngularAria3d()],
    });
    const theme = TestBed.inject(AA3D_THEME);
    expect(theme.hue).toBe(345);
    expect(theme.saturation).toBe(100);
    expect(theme.depth).toBe('medium');
    expect(theme.radius).toBe(12);
    expect(theme.transition.hover).toBe(250);
    expect(theme.transition.rest).toBe(600);
    expect(theme.transition.press).toBe(34);
  });

  it('should merge partial config with defaults', () => {
    TestBed.configureTestingModule({
      providers: [provideAngularAria3d({ hue: 220, depth: 'deep' })],
    });
    const theme = TestBed.inject(AA3D_THEME);
    expect(theme.hue).toBe(220);
    expect(theme.depth).toBe('deep');
    expect(theme.saturation).toBe(100);
    expect(theme.radius).toBe(12);
  });

  it('should merge partial transition config', () => {
    TestBed.configureTestingModule({
      providers: [provideAngularAria3d({ transition: { hover: 300 } })],
    });
    const theme = TestBed.inject(AA3D_THEME);
    expect(theme.transition.hover).toBe(300);
    expect(theme.transition.rest).toBe(600);
    expect(theme.transition.press).toBe(34);
  });
});
