import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { Aa3dCombobox, Aa3dComboboxInput, Aa3dComboboxListbox, Aa3dComboboxOption } from './combobox';
import { provideAngularAria3d } from '@angular-aria-3d/core';

@Component({
  standalone: true,
  imports: [Aa3dCombobox, Aa3dComboboxInput, Aa3dComboboxListbox, Aa3dComboboxOption],
  template: `
    <aa3d-combobox>
      <aa3d-combobox-input></aa3d-combobox-input>
      <aa3d-combobox-listbox>
        <aa3d-combobox-option [value]="'apple'" label="Apple">Apple</aa3d-combobox-option>
        <aa3d-combobox-option [value]="'banana'" label="Banana">Banana</aa3d-combobox-option>
      </aa3d-combobox-listbox>
    </aa3d-combobox>
  `,
})
class TestHost {}

describe('Aa3dCombobox', () => {
  let fixture: ComponentFixture<TestHost>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestHost],
      providers: [provideAngularAria3d()],
    });
    fixture = TestBed.createComponent(TestHost);
    fixture.detectChanges();
  });

  it('should render input wrapper with 3D surface', () => {
    const input = fixture.nativeElement.querySelector('aa3d-combobox-input');
    expect(input.querySelector('.aa3d-shadow')).toBeTruthy();
    expect(input.querySelector('.aa3d-edge')).toBeTruthy();
    expect(input.querySelector('.aa3d-front')).toBeTruthy();
  });

  it('should apply medium depth to input wrapper by default', () => {
    const surface = fixture.nativeElement.querySelector('aa3d-combobox-input .aa3d-pushable');
    expect(surface).toBeTruthy();
    expect(surface.style.getPropertyValue('--aa3d-depth-front')).toBe('-3px');
  });

  it('should contain an input element', () => {
    const input = fixture.nativeElement.querySelector('aa3d-combobox-input input');
    expect(input).toBeTruthy();
  });

  it('should render options with 3D surface at subtle depth', () => {
    const surface = fixture.nativeElement.querySelector('aa3d-combobox-option .aa3d-pushable');
    expect(surface).toBeTruthy();
    expect(surface.style.getPropertyValue('--aa3d-depth-front')).toBe('-2px');
  });
});
