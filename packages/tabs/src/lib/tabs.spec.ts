import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { Aa3dTabs, Aa3dTabList, Aa3dTab, Aa3dTabPanel } from './tabs';
import { provideAngularAria3d } from '@angular-aria-3d/core';

@Component({
  standalone: true,
  imports: [Aa3dTabs, Aa3dTabList, Aa3dTab, Aa3dTabPanel],
  template: `
    <aa3d-tabs>
      <aa3d-tab-list>
        <aa3d-tab value="one">Tab 1</aa3d-tab>
        <aa3d-tab value="two">Tab 2</aa3d-tab>
      </aa3d-tab-list>
      <aa3d-tab-panel value="one">Panel 1</aa3d-tab-panel>
      <aa3d-tab-panel value="two">Panel 2</aa3d-tab-panel>
    </aa3d-tabs>
  `,
})
class TestHost {}

describe('Aa3dTabs', () => {
  let fixture: ComponentFixture<TestHost>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestHost],
      providers: [provideAngularAria3d()],
    });
    fixture = TestBed.createComponent(TestHost);
    fixture.detectChanges();
  });

  it('should render tabs with 3D surface on each tab', () => {
    const tabs = fixture.nativeElement.querySelectorAll('aa3d-tab');
    expect(tabs.length).toBe(2);
    tabs.forEach((tab: HTMLElement) => {
      expect(tab.querySelector('.aa3d-shadow')).toBeTruthy();
      expect(tab.querySelector('.aa3d-front')).toBeTruthy();
    });
  });

  it('should apply subtle depth to tabs by default', () => {
    const surface = fixture.nativeElement.querySelector('.aa3d-pushable');
    expect(surface.style.getPropertyValue('--aa3d-depth-front')).toBe('-2px');
  });

  it('should project tab text into front layer', () => {
    const fronts = fixture.nativeElement.querySelectorAll('.aa3d-front');
    expect(fronts[0].textContent.trim()).toBe('Tab 1');
    expect(fronts[1].textContent.trim()).toBe('Tab 2');
  });

  it('should render tab panels', () => {
    const panels = fixture.nativeElement.querySelectorAll('aa3d-tab-panel');
    expect(panels.length).toBe(2);
  });
});
