import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { Aa3dListbox, Aa3dOption } from './listbox';
import { provideAngularAria3d } from '@angular-aria-3d/core';

@Component({
  standalone: true,
  imports: [Aa3dListbox, Aa3dOption],
  template: `
    <aa3d-listbox>
      <aa3d-option [value]="'apple'" label="Apple">Apple</aa3d-option>
      <aa3d-option [value]="'banana'" label="Banana">Banana</aa3d-option>
      <aa3d-option [value]="'cherry'" label="Cherry">Cherry</aa3d-option>
    </aa3d-listbox>
  `,
})
class TestHost {}

describe('Aa3dListbox', () => {
  let fixture: ComponentFixture<TestHost>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestHost],
      providers: [provideAngularAria3d()],
    });
    fixture = TestBed.createComponent(TestHost);
    fixture.detectChanges();
  });

  it('should render listbox container', () => {
    const listbox = fixture.nativeElement.querySelector('aa3d-listbox');
    expect(listbox).toBeTruthy();
  });

  it('should render options with 3D surface', () => {
    const option = fixture.nativeElement.querySelector('aa3d-option');
    expect(option.querySelector('.aa3d-shadow')).toBeTruthy();
    expect(option.querySelector('.aa3d-edge')).toBeTruthy();
    expect(option.querySelector('.aa3d-front')).toBeTruthy();
  });

  it('should apply subtle depth to options by default', () => {
    const surface = fixture.nativeElement.querySelector('aa3d-option .aa3d-pushable');
    expect(surface).toBeTruthy();
    expect(surface.style.getPropertyValue('--aa3d-depth-front')).toBe('-2px');
  });

  it('should project option content into front layer', () => {
    const front = fixture.nativeElement.querySelector('aa3d-option .aa3d-front');
    expect(front.textContent.trim()).toBe('Apple');
  });

  it('should render all options', () => {
    const options = fixture.nativeElement.querySelectorAll('aa3d-option');
    expect(options.length).toBe(3);
  });
});
