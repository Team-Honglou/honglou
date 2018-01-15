import { TestBed, TestModuleMetadata } from '@angular/core/testing';
import { setUpTestBed } from '../../../../testing/common.spec';

import { Dashboardv1Component } from './home.component';

describe('Comoponent: Dashboardv1', () => {
    setUpTestBed(<TestModuleMetadata>{
        declarations: [ Dashboardv1Component ]
    });

    it('should create an instance', () => {
        const fixture = TestBed.createComponent(Dashboardv1Component);
        const comp = fixture.debugElement.componentInstance;
        expect(comp).toBeTruthy();
    });
});
