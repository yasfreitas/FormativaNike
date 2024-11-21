import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'LojaNike' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('LojaNike');
  });

  

  it('4. Deve verificar a cor do botão.', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const buttonElement: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    const buttonStyle = window.getComputedStyle(buttonElement);
    expect(buttonStyle.backgroundColor).toBe('rgb(255, 100, 82)');
  });

  it('5. Deve verificar o H1 do título', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Popular');
  });

  it('6. Deve verificar o H5 do título', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h5')?.textContent).toContain('The insole are confortable so you can wear everyday.');
  });
});
