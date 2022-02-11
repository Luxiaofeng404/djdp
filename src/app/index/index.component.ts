import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {

  id = 1;
  courses = [
    { type: 1, path: 'hy1', title: '环氧树脂滚涂地坪'},
    { type: 1, path: 'hy2', title: '环氧自流平地坪'},
    { type: 1, path: 'hy3', title: '环氧树脂玻纤防腐地坪'},
    { type: 1, path: 'hy4', title: '车间环氧防静电地坪'},
    { type: 2, path: 'nm1', title: '厂房金刚砂耐磨地坪'},
    { type: 2, path: 'nm2', title: '混凝土密封固化地坪'},
    { type: 3, path: 'pvc1', title: 'PVC塑胶地板'},
    { type: 3, path: 'pvc2', title: 'PVC防静电地板'},
  ];
  nodes = [
    { type: 3, path: 'pvc3', title: '全钢高架防静电地板'},
    { type: 3, path: 'pvc4', title: '水泥自流平'},
    { type: 4, path: 'yd1', title: '丙烯酸球场'},
    { type: 4, path: 'yd2', title: '硅PU运动场'},
    { type: 4, path: 'yd3', title: '悬浮拼装地板'},
    { type: 4, path: 'yd4', title: '塑胶跑道'},
    { type: 5, path: 'tcc1', title: '地下停车场耐磨地坪'},
    { type: 5, path: 'tcc2', title: '无震动防滑坡道'},
  ];
  items = [
    { type: 5, path: 'tcc3', title: '停车场划线和交通设施安装'},
    { type: 6, path: 'ys1', title: '压膜艺术地坪'},
    { type: 6, path: 'ys2', title: '复古艺术地坪'},
    { type: 6, path: 'ys3', title: '环氧彩砂地坪'},
    { type: 6, path: 'ys4', title: '陶瓷颗粒防滑路面'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
