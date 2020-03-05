import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsDescripPage } from './news-descrip.page';

describe('NewsDescripPage', () => {
  let component: NewsDescripPage;
  let fixture: ComponentFixture<NewsDescripPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsDescripPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsDescripPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
