import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { Aa3dAutocomplete, Aa3dAutocompleteInput, Aa3dAutocompleteListbox, Aa3dAutocompleteOption } from './autocomplete';
import { provideAngularAria3d } from '@angular-aria-3d/core';

@Component({
  standalone: true,
  imports: [Aa3dAutocomplete, Aa3dAutocompleteInput, Aa3dAutocompleteListbox, Aa3dAutocompleteOption],
  template: `
    <aa3d-autocomplete>
      <aa3d-autocomplete-input></aa3d-autocomplete-input>
      <aa3d-autocomplete-listbox>
        <aa3d-autocomplete-option [value]="'apple'" label="Apple">Apple</aa3d-autocomplete-option>
        <aa3d-autocomplete-option [value]="'banana'" label="Banana">Banana</aa3d-autocomplete-option>
      </aa3d-autocomplete-listbox>
    </aa3d-autocomplete>
  `,
})
class TestHost {}

describe('Aa3dAutocomplete', () => {
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
    const input = fixture.nativeElement.querySelector('aa3d-autocomplete-input');
    expect(input.querySelector('.aa3d-shadow')).toBeTruthy();
    expect(input.querySelector('.aa3d-edge')).toBeTruthy();
    expect(input.querySelector('.aa3d-front')).toBeTruthy();
  });

  it('should apply medium depth to input wrapper by default', () => {
    const surface = fixture.nativeElement.querySelector('aa3d-autocomplete-input .aa3d-pushable');
    expect(surface).toBeTruthy();
    expect(surface.style.getPropertyValue('--aa3d-depth-front')).toBe('-3px');
  });

  it('should contain an input element', () => {
    const input = fixture.nativeElement.querySelector('aa3d-autocomplete-input input');
    expect(input).toBeTruthy();
  });

  it('should render options with 3D surface at subtle depth', () => {
    const surface = fixture.nativeElement.querySelector('aa3d-autocomplete-option .aa3d-pushable');
    expect(surface).toBeTruthy();
    expect(surface.style.getPropertyValue('--aa3d-depth-front')).toBe('-2px');
  });
});
