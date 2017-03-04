import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StartComponent } from './start.component';


describe('StartComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StartComponent
      ],
      imports: [ RouterTestingModule ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(StartComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title including 'Welcome to'`, async(() => {
    const fixture = TestBed.createComponent(StartComponent);
    const app = fixture.debugElement.componentInstance;
    //expect(app.title).toEqual('app works!');
    expect(app.title).toContain('Welcome to');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(StartComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    //expect(compiled.querySelector('h1').textContent).toContain('app works!');
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to');
  }));
});
