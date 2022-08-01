import { TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { HelperService } from './helper.service';

describe('moveSelectedOnTop', () => {
  let service: HelperService;
  let list: any[];
  let selected: number[] = [];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [HelperService]
    });
    service = TestBed.inject(HelperService);
   
    list =  Array(10).fill(0).map((_, index) => ({
        id: index + 1, 
        label: `Label ${index + 1}`
    }));;

    selected = [2, 3, 4];
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should move selected items on top', () => {
    const newList =  service.moveSelectedOnTop(list, selected);
    expect(newList[0].id).toBe(selected[0]);
    expect(newList[1].id).toBe(selected[1]);
    expect(newList[2].id).toBe(selected[2]);
  });
});
