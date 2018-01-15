import { NzMessageService } from 'ng-zorro-antd';
import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { yuan } from '@delon/abc';

@Component({
    selector: 'app-dashboard-v1',
    templateUrl: './home.component.html'
})
export class Dashboardv1Component implements OnInit {
    percent = 87;
    total: string;
    constructor(private http: _HttpClient, public msg: NzMessageService) {
        setInterval(() => this.percent = parseInt((Math.random() * 100).toString(), 10), 1000);
     }

    // todoData: any[] = [
    //     { completed: true, avatar: '1', name: '苏先生', content: `请告诉我，我应该说点什么好？` },
    //     { completed: false, avatar: '2', name: 'はなさき', content: `ハルカソラトキヘダツヒカリ` },
    //     { completed: false, avatar: '3', name: 'cipchk', content: `this world was never meant for one as beautiful as you.` },
    //     { completed: false, avatar: '4', name: 'Kent', content: `my heart is beating with hers` },
    //     { completed: false, avatar: '5', name: 'Are you', content: `They always said that I love beautiful girl than my friends` },
    //     { completed: false, avatar: '6', name: 'Forever', content: `Walking through green fields ，sunshine in my eyes.` }
    // ];

    quickMenu = false;

    // webSite: any[] = [ ];
    salesData: any[] =  [ ];
    offlineChartData: any[] = [];
    salesPieData: any[] = [];
    visitData: any[] = [];
    
    ngOnInit() {
        this.http.get('/chart').subscribe((res: any) => {
            // this.webSite = res.visitData.slice(0, 10);
            this.salesData = res.salesData;
            this.offlineChartData = res.offlineChartData;
            this.salesPieData = res.salesPieData;
            this.total = yuan(res.salesPieData.reduce((pre, now) => now.y + pre, 0));
            this.visitData = res.visitData;
        });
    }
    format(val: number) {
        return yuan(val);
    }
}
