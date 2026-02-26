import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { Aa3dMenubar, Aa3dMenubarTrigger, Aa3dMenubarItem } from './menubar';
import { Aa3dMenu, Aa3dMenuItem } from '@angular-aria-3d/menu';
import { provideAngularAria3d } from '@angular-aria-3d/core';

@Component({
  standalone: true,
  imports: [Aa3dMenubar, Aa3dMenubarTrigger, Aa3dMenubarItem, Aa3dMenu, Aa3dMenuItem],
  template: `
    <aa3d-menubar>
      <aa3d-menubar-trigger [value]="'file'" [submenu]="fileMenu">File</aa3d-menubar-trigger>
      <aa3d-menubar-item [value]="'help'">Help</aa3d-menubar-item>
    </aa3d-menubar>
    <aa3d-menu #fileMenu="ngMenu">
      <aa3d-menu-item [value]="'new'">New</aa3d-menu-item>
    </aa3d-menu>
  `,
})
class TestHost {}

describe('Aa3dMenubar', () => {
  let fixture: ComponentFixture<TestHost>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestHost],
      providers: [provideAngularAria3d()],
    });
    fixture = TestBed.createComponent(TestHost);
    fixture.detectChanges();
  });

  it('should render menubar container', () => {
    const menubar = fixture.nativeElement.querySelector('aa3d-menubar');
    expect(menubar).toBeTruthy();
  });

  it('should render menubar trigger with 3D surface', () => {
    const trigger = fixture.nativeElement.querySelector('aa3d-menubar-trigger');
    expect(trigger.querySelector('.aa3d-shadow')).toBeTruthy();
    expect(trigger.querySelector('.aa3d-edge')).toBeTruthy();
    expect(trigger.querySelector('.aa3d-front')).toBeTruthy();
  });

  it('should apply medium depth to trigger by default', () => {
    const surface = fixture.nativeElement.querySelector('aa3d-menubar-trigger .aa3d-pushable');
    expect(surface).toBeTruthy();
    expect(surface.style.getPropertyValue('--aa3d-depth-front')).toBe('-3px');
  });

  it('should project trigger text into front layer', () => {
    const front = fixture.nativeElement.querySelector('aa3d-menubar-trigger .aa3d-front');
    expect(front.textContent.trim()).toBe('File');
  });

  it('should render menubar items with 3D surface', () => {
    const item = fixture.nativeElement.querySelector('aa3d-menubar-item');
    expect(item.querySelector('.aa3d-shadow')).toBeTruthy();
    expect(item.querySelector('.aa3d-edge')).toBeTruthy();
    expect(item.querySelector('.aa3d-front')).toBeTruthy();
  });
});
