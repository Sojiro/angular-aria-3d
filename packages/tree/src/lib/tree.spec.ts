import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { Aa3dTree, Aa3dTreeItem } from './tree';
import { provideAngularAria3d } from '@angular-aria-3d/core';

@Component({
  standalone: true,
  imports: [Aa3dTree, Aa3dTreeItem],
  template: `
    <aa3d-tree #tree="aa3dTree">
      <aa3d-tree-item [value]="'item1'" [parent]="tree.treeDirective" label="Item 1">
        Item 1
      </aa3d-tree-item>
      <aa3d-tree-item [value]="'item2'" [parent]="tree.treeDirective" label="Item 2">
        Item 2
      </aa3d-tree-item>
      <aa3d-tree-item [value]="'item3'" [parent]="tree.treeDirective" label="Item 3">
        Item 3
      </aa3d-tree-item>
    </aa3d-tree>
  `,
})
class TestHost {}

describe('Aa3dTree', () => {
  let fixture: ComponentFixture<TestHost>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TestHost],
      providers: [provideAngularAria3d()],
    });
    fixture = TestBed.createComponent(TestHost);
    fixture.detectChanges();
  });

  it('should render tree items with 3D surface', () => {
    const item = fixture.nativeElement.querySelector('aa3d-tree-item');
    expect(item.querySelector('.aa3d-shadow')).toBeTruthy();
    expect(item.querySelector('.aa3d-edge')).toBeTruthy();
    expect(item.querySelector('.aa3d-front')).toBeTruthy();
  });

  it('should apply subtle depth to tree items by default', () => {
    const surface = fixture.nativeElement.querySelector('aa3d-tree-item .aa3d-pushable');
    expect(surface).toBeTruthy();
    expect(surface.style.getPropertyValue('--aa3d-depth-front')).toBe('-2px');
  });

  it('should project tree item content into front layer', () => {
    const front = fixture.nativeElement.querySelector('aa3d-tree-item .aa3d-front');
    expect(front.textContent.trim()).toBe('Item 1');
  });

  it('should render multiple tree items', () => {
    const items = fixture.nativeElement.querySelectorAll('aa3d-tree-item');
    expect(items.length).toBe(3);
  });
});
