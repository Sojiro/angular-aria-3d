import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { Aa3dGrid, Aa3dGridRow, Aa3dGridCell } from './grid';
import { provideAngularAria3d } from '@angular-aria-3d/core';

@Component({
  standalone: true,
  imports: [Aa3dGrid, Aa3dGridRow, Aa3dGridCell],
  template: `
    <aa3d-grid>
      <aa3d-grid-row>
        <aa3d-grid-cell>Cell 1</aa3d-grid-cell>
        <aa3d-grid-cell>Cell 2</aa3d-grid-cell>
      </aa3d-grid-row>
      <aa3d-grid-row>
        <aa3d-grid-cell>Cell 3</aa3d-grid-cell>
        <aa3d-grid-cell>Cell 4</aa3d-grid-cell>
      </aa3d-grid-row>
    </aa3d-grid>
  `,
})
class TestHost {}

describe('Aa3dGrid', () => {
  let fixture: ComponentFixture<TestHost>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestHost],
      providers: [provideAngularAria3d()],
    });
    fixture = TestBed.createComponent(TestHost);
    fixture.detectChanges();
  });

  it('should render grid cells with 3D surface', () => {
    const cell = fixture.nativeElement.querySelector('aa3d-grid-cell');
    expect(cell.querySelector('.aa3d-shadow')).toBeTruthy();
    expect(cell.querySelector('.aa3d-edge')).toBeTruthy();
    expect(cell.querySelector('.aa3d-front')).toBeTruthy();
  });

  it('should apply subtle depth to cells by default', () => {
    const surface = fixture.nativeElement.querySelector('aa3d-grid-cell .aa3d-pushable');
    expect(surface).toBeTruthy();
    expect(surface.style.getPropertyValue('--aa3d-depth-front')).toBe('-2px');
  });

  it('should project cell content into front layer', () => {
    const front = fixture.nativeElement.querySelector('aa3d-grid-cell .aa3d-front');
    expect(front.textContent.trim()).toBe('Cell 1');
  });

  it('should render grid structure with rows and cells', () => {
    const rows = fixture.nativeElement.querySelectorAll('aa3d-grid-row');
    expect(rows.length).toBe(2);
    const cells = fixture.nativeElement.querySelectorAll('aa3d-grid-cell');
    expect(cells.length).toBe(4);
  });
});
