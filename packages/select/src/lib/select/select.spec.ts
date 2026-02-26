import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { Aa3dSelect, Aa3dSelectTrigger, Aa3dSelectListbox, Aa3dSelectOption } from './select';
import { provideAngularAria3d } from '@angular-aria-3d/core';

@Component({
  standalone: true,
  imports: [Aa3dSelect, Aa3dSelectTrigger, Aa3dSelectListbox, Aa3dSelectOption],
  template: `
    <aa3d-select>
      <aa3d-select-trigger>Pick a fruit</aa3d-select-trigger>
      <aa3d-select-listbox>
        <aa3d-select-option [value]="'apple'" label="Apple">Apple</aa3d-select-option>
        <aa3d-select-option [value]="'banana'" label="Banana">Banana</aa3d-select-option>
      </aa3d-select-listbox>
    </aa3d-select>
  `,
})
class TestHost {}

describe('Aa3dSelect', () => {
  let fixture: ComponentFixture<TestHost>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestHost],
      providers: [provideAngularAria3d()],
    });
    fixture = TestBed.createComponent(TestHost);
    fixture.detectChanges();
  });

  it('should render trigger with 3D surface', () => {
    const trigger = fixture.nativeElement.querySelector('aa3d-select-trigger');
    expect(trigger.querySelector('.aa3d-shadow')).toBeTruthy();
    expect(trigger.querySelector('.aa3d-edge')).toBeTruthy();
    expect(trigger.querySelector('.aa3d-front')).toBeTruthy();
  });

  it('should apply medium depth to trigger by default', () => {
    const surface = fixture.nativeElement.querySelector('aa3d-select-trigger .aa3d-pushable');
    expect(surface).toBeTruthy();
    expect(surface.style.getPropertyValue('--aa3d-depth-front')).toBe('-3px');
  });

  it('should project trigger content', () => {
    const front = fixture.nativeElement.querySelector('aa3d-select-trigger .aa3d-front');
    expect(front.textContent.trim()).toBe('Pick a fruit');
  });

  it('should render options with 3D surface at subtle depth', () => {
    const surface = fixture.nativeElement.querySelector('aa3d-select-option .aa3d-pushable');
    expect(surface).toBeTruthy();
    expect(surface.style.getPropertyValue('--aa3d-depth-front')).toBe('-2px');
  });
});
