import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { Aa3dMultiselect, Aa3dMultiselectTrigger, Aa3dMultiselectListbox, Aa3dMultiselectOption } from './multiselect';
import { provideAngularAria3d } from '@angular-aria-3d/core';

@Component({
  standalone: true,
  imports: [Aa3dMultiselect, Aa3dMultiselectTrigger, Aa3dMultiselectListbox, Aa3dMultiselectOption],
  template: `
    <aa3d-multiselect>
      <aa3d-multiselect-trigger>Pick fruits</aa3d-multiselect-trigger>
      <aa3d-multiselect-listbox>
        <aa3d-multiselect-option [value]="'apple'" label="Apple">Apple</aa3d-multiselect-option>
        <aa3d-multiselect-option [value]="'banana'" label="Banana">Banana</aa3d-multiselect-option>
      </aa3d-multiselect-listbox>
    </aa3d-multiselect>
  `,
})
class TestHost {}

describe('Aa3dMultiselect', () => {
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
    const trigger = fixture.nativeElement.querySelector('aa3d-multiselect-trigger');
    expect(trigger.querySelector('.aa3d-shadow')).toBeTruthy();
    expect(trigger.querySelector('.aa3d-edge')).toBeTruthy();
    expect(trigger.querySelector('.aa3d-front')).toBeTruthy();
  });

  it('should apply medium depth to trigger by default', () => {
    const surface = fixture.nativeElement.querySelector('aa3d-multiselect-trigger .aa3d-pushable');
    expect(surface).toBeTruthy();
    expect(surface.style.getPropertyValue('--aa3d-depth-front')).toBe('-3px');
  });

  it('should project trigger content', () => {
    const front = fixture.nativeElement.querySelector('aa3d-multiselect-trigger .aa3d-front');
    expect(front.textContent.trim()).toContain('Pick fruits');
  });

  it('should render options with 3D surface at subtle depth', () => {
    const surface = fixture.nativeElement.querySelector('aa3d-multiselect-option .aa3d-pushable');
    expect(surface).toBeTruthy();
    expect(surface.style.getPropertyValue('--aa3d-depth-front')).toBe('-2px');
  });
});
