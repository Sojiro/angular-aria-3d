import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { Aa3dMenu, Aa3dMenuTrigger, Aa3dMenuItem } from './menu';
import { provideAngularAria3d } from '@angular-aria-3d/core';

@Component({
  standalone: true,
  imports: [Aa3dMenu, Aa3dMenuTrigger, Aa3dMenuItem],
  template: `
    <aa3d-menu-trigger [menu]="myMenu">Open Menu</aa3d-menu-trigger>
    <aa3d-menu #myMenu="ngMenu">
      <aa3d-menu-item [value]="'cut'">Cut</aa3d-menu-item>
      <aa3d-menu-item [value]="'copy'">Copy</aa3d-menu-item>
    </aa3d-menu>
  `,
})
class TestHost {}

describe('Aa3dMenu', () => {
  let fixture: ComponentFixture<TestHost>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestHost],
      providers: [provideAngularAria3d()],
    });
    fixture = TestBed.createComponent(TestHost);
    fixture.detectChanges();
  });

  it('should render menu trigger with 3D surface', () => {
    const trigger = fixture.nativeElement.querySelector('aa3d-menu-trigger');
    expect(trigger.querySelector('.aa3d-shadow')).toBeTruthy();
    expect(trigger.querySelector('.aa3d-edge')).toBeTruthy();
    expect(trigger.querySelector('.aa3d-front')).toBeTruthy();
  });

  it('should apply medium depth to trigger by default', () => {
    const surface = fixture.nativeElement.querySelector('.aa3d-pushable');
    expect(surface.style.getPropertyValue('--aa3d-depth-front')).toBe('-3px');
  });

  it('should project trigger text', () => {
    const front = fixture.nativeElement.querySelector('aa3d-menu-trigger .aa3d-front');
    expect(front.textContent.trim()).toBe('Open Menu');
  });

  it('should render menu items', () => {
    const items = fixture.nativeElement.querySelectorAll('aa3d-menu-item');
    expect(items.length).toBe(2);
  });
});
