import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { Aa3dAccordion, Aa3dAccordionItem, Aa3dAccordionHeader, Aa3dAccordionPanel } from './accordion';
import { provideAngularAria3d } from '@angular-aria-3d/core';

@Component({
  standalone: true,
  imports: [Aa3dAccordion, Aa3dAccordionItem, Aa3dAccordionHeader, Aa3dAccordionPanel],
  template: `
    <aa3d-accordion>
      <aa3d-accordion-item>
        <aa3d-accordion-header panelId="test-1">Section 1</aa3d-accordion-header>
        <aa3d-accordion-panel panelId="test-1">Content 1</aa3d-accordion-panel>
      </aa3d-accordion-item>
    </aa3d-accordion>
  `,
})
class TestHost {}

describe('Aa3dAccordion', () => {
  let fixture: ComponentFixture<TestHost>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestHost],
      providers: [provideAngularAria3d()],
    });
    fixture = TestBed.createComponent(TestHost);
    fixture.detectChanges();
  });

  it('should render accordion with 3D header', () => {
    const header = fixture.nativeElement.querySelector('aa3d-accordion-header');
    expect(header.querySelector('.aa3d-shadow')).toBeTruthy();
    expect(header.querySelector('.aa3d-edge')).toBeTruthy();
    expect(header.querySelector('.aa3d-front')).toBeTruthy();
  });

  it('should apply medium depth to header by default', () => {
    const header = fixture.nativeElement.querySelector('aa3d-accordion-header');
    expect(header).toBeTruthy();
    expect(header.classList.contains('aa3d-pushable')).toBe(true);
    expect(header.style.getPropertyValue('--aa3d-depth-front')).toBe('-3px');
  });

  it('should project header text into front layer', () => {
    const front = fixture.nativeElement.querySelector('.aa3d-front');
    expect(front.textContent.trim()).toBe('Section 1');
  });

  it('should render panel content', () => {
    const panel = fixture.nativeElement.querySelector('aa3d-accordion-panel');
    expect(panel).toBeTruthy();
  });
});
