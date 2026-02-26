import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { Aa3dToolbar, Aa3dToolbarButton, Aa3dToolbarWidgetGroup } from './toolbar';
import { provideAngularAria3d } from '@angular-aria-3d/core';

@Component({
  standalone: true,
  imports: [Aa3dToolbar, Aa3dToolbarButton, Aa3dToolbarWidgetGroup],
  template: `
    <aa3d-toolbar>
      <aa3d-toolbar-button [value]="'save'">Save</aa3d-toolbar-button>
      <aa3d-toolbar-button [value]="'print'">Print</aa3d-toolbar-button>
      <aa3d-toolbar-widget-group>
        <aa3d-toolbar-button [value]="'left'">Left</aa3d-toolbar-button>
        <aa3d-toolbar-button [value]="'center'">Center</aa3d-toolbar-button>
      </aa3d-toolbar-widget-group>
    </aa3d-toolbar>
  `,
})
class TestHost {}

describe('Aa3dToolbar', () => {
  let fixture: ComponentFixture<TestHost>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestHost],
      providers: [provideAngularAria3d()],
    });
    fixture = TestBed.createComponent(TestHost);
    fixture.detectChanges();
  });

  it('should render toolbar container', () => {
    const toolbar = fixture.nativeElement.querySelector('aa3d-toolbar');
    expect(toolbar).toBeTruthy();
  });

  it('should render toolbar buttons with 3D surface', () => {
    const button = fixture.nativeElement.querySelector('aa3d-toolbar-button');
    expect(button.querySelector('.aa3d-shadow')).toBeTruthy();
    expect(button.querySelector('.aa3d-edge')).toBeTruthy();
    expect(button.querySelector('.aa3d-front')).toBeTruthy();
  });

  it('should apply medium depth to toolbar buttons by default', () => {
    const surface = fixture.nativeElement.querySelector('aa3d-toolbar-button .aa3d-pushable');
    expect(surface).toBeTruthy();
    expect(surface.style.getPropertyValue('--aa3d-depth-front')).toBe('-3px');
  });

  it('should project button text into front layer', () => {
    const front = fixture.nativeElement.querySelector('aa3d-toolbar-button .aa3d-front');
    expect(front.textContent.trim()).toBe('Save');
  });

  it('should render widget group', () => {
    const group = fixture.nativeElement.querySelector('aa3d-toolbar-widget-group');
    expect(group).toBeTruthy();
    const groupButtons = group.querySelectorAll('aa3d-toolbar-button');
    expect(groupButtons.length).toBe(2);
  });
});
