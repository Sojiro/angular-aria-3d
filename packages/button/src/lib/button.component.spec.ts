import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { Aa3dButton } from './button.component';
import { provideAngularAria3d } from '@angular-aria-3d/core';

@Component({
  standalone: true,
  imports: [Aa3dButton],
  template: `<aa3d-button [depth]="'deep'" [theme]="{ hue: 220 }">Save</aa3d-button>`,
})
class TestHost {}

describe('Aa3dButton', () => {
  let fixture: ComponentFixture<TestHost>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestHost],
      providers: [provideAngularAria3d()],
    });
    fixture = TestBed.createComponent(TestHost);
    fixture.detectChanges();
  });

  it('should render with 3D layer structure', () => {
    const el = fixture.nativeElement;
    expect(el.querySelector('.aa3d-shadow')).toBeTruthy();
    expect(el.querySelector('.aa3d-edge')).toBeTruthy();
    expect(el.querySelector('.aa3d-front')).toBeTruthy();
  });

  it('should project content into front layer', () => {
    const front = fixture.nativeElement.querySelector('.aa3d-front');
    expect(front.textContent.trim()).toBe('Save');
  });

  it('should apply aa3d-pushable class', () => {
    const button = fixture.nativeElement.querySelector('button');
    expect(button.classList).toContain('aa3d-pushable');
  });

  it('should apply depth custom property', () => {
    const button = fixture.nativeElement.querySelector('button');
    expect(button.style.getPropertyValue('--aa3d-depth-front')).toBe('-4px');
  });

  it('should apply per-instance theme override', () => {
    const button = fixture.nativeElement.querySelector('button');
    expect(button.style.getPropertyValue('--aa3d-hue')).toBe('220');
  });
});
