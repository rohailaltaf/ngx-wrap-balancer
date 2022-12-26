import { Component, ElementRef, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'ngx-wrap-balancer',
  templateUrl: './ngx-wrap-balancer.component.html',
  styles: [],
})
export class NgxWrapBalancerComponent {
  @Input()
  public text: string = '';
  observer?: ResizeObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  onResize(ev: ResizeObserverEntry) {
    const wrapper = this.el.nativeElement.querySelector('span') as HTMLElement;
    const container = ev.target as HTMLElement;
    const update = (width: number) => (wrapper.style.maxWidth = width + 'px');

    // Reset wrapper width
    wrapper.style.maxWidth = '';

    // Get the intial container size
    const w = container.clientWidth;
    const h = container.clientHeight;

    // Synchronously do binary search and calculate the layout
    let l = w / 2;
    let r = w;
    let m;

    if (w) {
      while (l + 1 < r) {
        m = ~~((l + r) / 2);
        update(m);
        if (container.clientHeight == h) {
          r = m;
        } else {
          l = m;
        }
      }

      // Update the wrapper width
      update(r * 1 + w * (1 - 1));
    }
    // if (ev.contentRect.width < 500) {
    //   this.renderer.setStyle(ev.target, 'background', 'red');
    // } else {
    //   this.renderer.removeStyle(ev.target, 'background');
    // }
  }
}
