import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EtherHackerComponent } from './app.component';

describe('EtherHackerComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [EtherHackerComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(EtherHackerComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-course'`, () => {
    const fixture = TestBed.createComponent(EtherHackerComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-course');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(EtherHackerComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('angular-course app is running!');
  });
});
