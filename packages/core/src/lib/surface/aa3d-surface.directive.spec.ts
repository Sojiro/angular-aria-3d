import { Component } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Aa3dSurface } from './aa3d-surface.directive';
import { provideAngularAria3d } from '../theme/aa3d-theme-provider';

@Component({
  standalone: true,
  imports: [Aa3dSurface],
  template: `
    <button aa3dSurface [depth]="depth">
      <span class="aa3d-shadow"></span>
      <span class="aa3d-edge"></span>
      <span class="aa3d-front">Click me</span>
    </button>
  `,
})
class TestHost {
  depth: 'deep' | 'medium' | 'subtle' = 'deep';
}

function flushAndDetect(fixture: ComponentFixture<TestHost>): void {
  fixture.detectChanges();
  TestBed.flushEffects();
  fixture.detectChanges();
}

describe('Aa3dSurface', () => {
  let fixture: ComponentFixture<TestHost>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [TestHost],
      providers: [provideAngularAria3d()],
    });
    fixture = TestBed.createComponent(TestHost);
    flushAndDetect(fixture);
    await fixture.whenStable();
  });

  it('should apply pushable class to host', () => {
    const button = fixture.nativeElement.querySelector('button');
    expect(button.classList).toContain('aa3d-pushable');
  });

  it('should set depth CSS custom properties for deep preset', () => {
    const button = fixture.nativeElement.querySelector('button');
    const style = button.style;
    expect(style.getPropertyValue('--aa3d-depth-front')).toBe('-4px');
    expect(style.getPropertyValue('--aa3d-depth-shadow')).toBe('2px');
    expect(style.getPropertyValue('--aa3d-depth-hover-front')).toBe('-6px');
    expect(style.getPropertyValue('--aa3d-depth-hover-shadow')).toBe('4px');
    expect(style.getPropertyValue('--aa3d-depth-press-front')).toBe('-2px');
    expect(style.getPropertyValue('--aa3d-depth-press-shadow')).toBe('1px');
  });

  it('should set theme CSS custom properties', () => {
    const button = fixture.nativeElement.querySelector('button');
    const style = button.style;
    expect(style.getPropertyValue('--aa3d-hue')).toBe('345');
    expect(style.getPropertyValue('--aa3d-radius')).toBe('12px');
  });

  it('should update properties when depth changes', () => {
    fixture.componentInstance.depth = 'subtle';
    flushAndDetect(fixture);
    const button = fixture.nativeElement.querySelector('button');
    expect(button.style.getPropertyValue('--aa3d-depth-front')).toBe('-2px');
  });
});
