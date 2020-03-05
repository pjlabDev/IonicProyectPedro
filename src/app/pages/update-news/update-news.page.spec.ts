import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateNewsPage } from './update-news.page';

describe('UpdateNewsPage', () => {
  let component: UpdateNewsPage;
  let fixture: ComponentFixture<UpdateNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateNewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
