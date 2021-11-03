import{c as a,e as t,o as l,a as e,t as i,m as s,O as d,y as n,F as r,d as o,b as c,f,z as v,A as h,g as u}from"./vendor.6f924201.js";import{_ as y}from"./index.c2d568a1.js";import{_ as p}from"./ChartCircleBox.be2cc5e7.js";const b={key:0,class:"bg-green-500"},m={key:1,class:"bg-green-300"},x={key:2,class:"bg-yellow-400"},g={key:3,class:"bg-yellow-300 bg-opacity-70"},C={key:4,class:"bg-yellow-400"},k={key:5,class:"bg-yellow-700 bg-opacity-60"},S={key:6,class:"bg-red-400"},_={props:{process_percent:Number},setup(s){const d=s,n=a((()=>d.process_percent));return(a,s)=>100==t(n)?(l(),e("span",b,i(t(n))+"%",1)):t(n)>=90?(l(),e("span",m,i(t(n))+"%",1)):t(n)>=80?(l(),e("span",x,i(t(n))+"%",1)):t(n)>=70?(l(),e("span",g,i(t(n))+"%",1)):t(n)>=60?(l(),e("span",C,i(t(n))+"%",1)):t(n)>=50?(l(),e("span",k,i(t(n))+"%",1)):(l(),e("span",S,i(t(n))+"%",1))}},L={key:0,id:"myChart",width:"1030",height:"240"},w={key:1,id:"myChart2",width:"515",height:"80"},P={key:2,id:"myChart3",width:"515",height:"80"},T={key:3,id:"myChart4",width:"515",height:"160"};var A=y({props:{mychart_id:String},setup(){const a=[1e3,1200,500,700,925,752,123,456,985,,,],t=[500,500,500,500,500,500,500,500,500,500,500,500],l=[22,100,75,444,477,333,85,103,42,99],e=[0,84,36,2,-2,0,0,0,0,0],i=[0,200,400,500,660,730,844,977,1080,1230,1446,1800],n=[0,600,800,1100,1200,1400,1700,1800],r=["08:00","09:00","10:00","11:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00"],o=s(2e3);return d((()=>{var s=(c=document.getElementById("myChart").getContext("2d")).createLinearGradient(0,0,0,150);s.addColorStop(0,"#00FFFF"),s.addColorStop(1,"#75d1b8");var d={labels:[["1(P1)","-"],["2(P2)","-"],["3(P3)","-"],["4(P4)","-"],["5(P4)","-"],["6(P4)","-"],["7(P5)","-"],["8(P5)","-"],["9(P5)","-"],["-","-"],["-","-"],["-","-"]],datasets:[{label:"",backgroundColor:s,barPercentage:.8,data:a,borderColor:"#75d1b8",borderTopWidth:1,yAxisID:"y-axis-bar",pointStyle:"line"}]};new Chart(c,{type:"bar",data:d,options:{responsive:!0,maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!0,position:"nearest"},legend:{display:!1},animation:{duration:1,onComplete:function(){var a=this.chart,t=a.ctx;t.font=Chart.helpers.fontString(Chart.defaults.global.defaultFontSize,Chart.defaults.global.defaultFontStyle,Chart.defaults.global.defaultFontFamily),t.fillStyle="#fff",t.textAlign="center",t.textBaseline="bottom",this.data.datasets.forEach((function(l,e){a.controller.getDatasetMeta(e).data.forEach((function(a,e){var i=l.data[e];t.fillText(i,a._model.x,a._model.y-5)}))}))}},hover:{animationDuration:0},scales:{yAxes:[{id:"y-axis-bar",stacked:!1,gridLines:{display:!0,zeroLineColor:"rgba(230, 230, 230, 0.7)",zeroLineWidth:2},scaleLabel:{display:!1},ticks:{fontColor:"#ccc",reverse:!1,max:3e3,min:0,stepSize:1e3,callback:function(a,t,l){if(Math.floor(a)===a)return a}}},{id:"y-axis-2",type:"linear",display:!1,gridLines:{display:!1},ticks:{reverse:!1,max:1800,min:0,stepSize:500,callback:function(a,t,l){if(Math.floor(a)===a)return a}}}],xAxes:[{stacked:!0,labelString:"Labels",gridLines:{display:!0,zeroLineColor:"rgba(230, 230, 230, 0.7)",zeroLineWidth:2,offsetGridLines:!0,color:"rgba(230, 230, 230, 0.7)"},ticks:{fontColor:"#ccc",display:!0}}]}}});var c=document.getElementById("myChart2").getContext("2d");d={labels:["OP1","OP2","OP3","OP4","OP5","","","","","","",""],datasets:[{label:"",barPercentage:.8,data:t,borderWidth:2,type:"line",fill:!1,borderColor:"#f68944",pointRadius:0,yAxisID:"y-axis-2",borderSkipped:"showOnlyTop",pointStyle:"line"},{label:"",backgroundColor:s,data:l,borderColor:"#75d1b8",borderTopWidth:1,yAxisID:"y-axis-bar",pointStyle:"line"}]};new Chart(c,{type:"bar",data:d,options:{responsive:!0,maintainAspectRatio:!1,legend:{display:!1},animation:{duration:1,onComplete:function(){var a=this.chart,t=a.ctx;t.font=Chart.helpers.fontString(Chart.defaults.global.defaultFontSize,Chart.defaults.global.defaultFontStyle,Chart.defaults.global.defaultFontFamily),t.fillStyle="rgb(0, 0, 0)",t.textAlign="center",t.textBaseline="bottom";const l=a.data.datasets[0];l.data[11];const e=l._meta[Object.keys(l._meta)[0]].data[11]._model,i=l._meta[Object.keys(l._meta)[0]].data[11]._yScale.maxHeight,s=(i-e.y)/i>=.93?e.y+20:e.y-5;t.fillStyle="rgb(246, 137, 68, 1)",t.fillRect(e.x-15,s-25,30,20);const d=a.data.datasets[0];for(let r=0;r<d.data.length;r++){const a=d._meta[Object.keys(d._meta)[0]].data[r]._model,l=d._meta[Object.keys(d._meta)[0]].data[r]._yScale.maxHeight,e=(l-a.y)/l>=.93?a.y+20:a.y-5;r<11?(t.fillStyle="rgb(255, 255, 255, 0)",t.fillText(d.data[r],a.x,e-8)):(t.fillStyle="rgb(255, 255, 255, 1)",t.fillText(d.data[r],a.x,e-8))}const n=a.data.datasets[1];for(let r=0;r<n.data.length;r++){t.fillStyle="#fff";const a=n._meta[Object.keys(n._meta)[0]].data[r]._model,l=n._meta[Object.keys(n._meta)[0]].data[r]._yScale.maxHeight,e=(l-a.y)/l>=.93?a.y+20:a.y-5;t.fillText(n.data[r],a.x,e)}}},hover:{animationDuration:0},scales:{yAxes:[{id:"y-axis-bar",stacked:!1,gridLines:{zeroLineColor:"rgba(230, 230, 230, 0.7)",zeroLineWidth:2},scaleLabel:{display:!1},ticks:{fontColor:"#ccc",reverse:!1,max:o.value,min:0,stepSize:500,callback:function(a,t,l){if(Math.floor(a)===a)return a}}},{id:"y-axis-2",type:"linear",display:!1,gridLines:{display:!1},ticks:{reverse:!1,max:o.value,min:0,stepSize:500,callback:function(a,t,l){if(Math.floor(a)===a)return a}}}],xAxes:[{stacked:!0,labelString:"Labels",gridLines:{zeroLineColor:"rgba(230, 230, 230, 0.7)",zeroLineWidth:2,offsetGridLines:!0,color:"rgba(230, 230, 230, 0.7)"},ticks:{fontColor:"#ccc",display:!0}}]}}});c=document.getElementById("myChart3").getContext("2d"),d={labels:["OP1","OP2","OP3","OP4","OP5","","","","","","",""],datasets:[{label:"",backgroundColor:"#f68944",barPercentage:.8,data:e,borderTopWidth:1,yAxisID:"y-axis-bar",pointStyle:"line"}]};new Chart(c,{type:"bar",data:d,options:{responsive:!0,maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!0},legend:{display:!1},animation:{duration:1,onComplete:function(){var a=this.chart,t=a.ctx;t.font=Chart.helpers.fontString(Chart.defaults.global.defaultFontSize,Chart.defaults.global.defaultFontStyle,Chart.defaults.global.defaultFontFamily),t.fillStyle="#fff",t.textAlign="center",t.textBaseline="bottom",this.data.datasets.forEach((function(l,e){a.controller.getDatasetMeta(e).data.forEach((function(a,e){var i=l.data[e];t.fillText(i,a._model.x,a._model.y-5)}))}))}},hover:{animationDuration:0},scales:{yAxes:[{id:"y-axis-bar",stacked:!1,gridLines:{zeroLineColor:"rgba(230,230,230,0.7)",zeroLineWidth:2},scaleLabel:{display:!1},ticks:{fontColor:"#ccc",reverse:!1,max:500,min:0,stepSize:500,callback:function(a,t,l){if(Math.floor(a)===a)return a}}},{id:"y-axis-2",type:"linear",display:!1,gridLines:{display:!1},ticks:{reverse:!1,max:1800,min:0,stepSize:500,callback:function(a,t,l){if(Math.floor(a)===a)return a}}}],xAxes:[{stacked:!0,labelString:"Labels",gridLines:{zeroLineColor:"rgba(230, 230, 230, 0.7)",zeroLineWidth:2,offsetGridLines:!0,color:"rgba(230, 230, 230, 0.7)"},ticks:{fontColor:"#ccc",display:!0}}]}}});c=document.getElementById("myChart4").getContext("2d"),d={labels:r,datasets:[{label:"Chart 1",data:i,borderTopWidth:1,yAxisID:"y-axis-bar",pointStyle:"line",fill:!1,borderWidth:2,borderColor:"#f68944",pointRadius:0},{label:"Chart 2",data:[{x:1,y:0},{x:2,y:1},{x:3,y:4},{x:4,y:5},{x:5,y:6},{x:6,y:7},{x:7,y:8},{x:8,y:9},{x:9,y:10},{x:10,y:10},{x:11,y:11},{x:12,y:12},{x:13,y:13},{x:14,y:14},{x:15,y:16},{x:16,y:17},{x:17,y:18},{x:18,y:20},{x:19,y:22},{x:20,y:23},{x:21,y:24},{x:22,y:26},{x:23,y:28},{x:24,y:30},{x:25,y:32},{x:26,y:35},{x:27,y:36},{x:28,y:39},{x:29,y:40},{x:30,y:42},{x:31,y:45},{x:32,y:46},{x:33,y:47},{x:34,y:48},{x:35,y:49},{x:36,y:50}],data:n,borderTopWidth:1,yAxisID:"y-axis-bar",pointStyle:"line",fill:!1,borderWidth:2,borderColor:"rgba(117,209,184)",pointRadius:0}]};new Chart(c,{type:"line",data:d,options:{responsive:!0,maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!0},legend:{display:!1},animation:{duration:1,onComplete:function(){var a=this.chart,t=a.ctx;t.font=Chart.helpers.fontString(Chart.defaults.global.defaultFontSize,Chart.defaults.global.defaultFontStyle,Chart.defaults.global.defaultFontFamily),t.fillStyle="#fff",t.textAlign="center",t.textBaseline="bottom",this.data.datasets.forEach((function(l,e){a.controller.getDatasetMeta(e).data.forEach((function(a,e){var i=l.data[e];t.fillText(i,a._model.x,a._model.y-5)}))}))}},hover:{animationDuration:0},scales:{yAxes:[{id:"y-axis-bar",stacked:!1,gridLines:{zeroLineColor:"rgba(230, 230, 230, 0.5)",zeroLineWidth:2},scaleLabel:{display:!1},ticks:{fontColor:"#ccc",reverse:!1,max:1800,min:0,stepSize:500,callback:function(a,t,l){if(Math.floor(a)===a)return a}}}],xAxes:[{gridLines:{color:"rgba(230, 230, 230, 0.5)",zeroLineColor:"rgba(230, 230, 230, 0.7)",zeroLineWidth:2},ticks:{fontColor:"#ccc"}},{id:"x-axis-2",type:"linear",position:"bottom",display:!1,ticks:{min:0,max:24}}]}}})})),{process2_max:o}}},[["render",function(a,t,i,s,d,o){return l(),e(r,null,["myChart"==i.mychart_id?(l(),e("canvas",L)):n("",!0),"myChart2"==i.mychart_id?(l(),e("canvas",w)):n("",!0),"myChart3"==i.mychart_id?(l(),e("canvas",P)):n("",!0),"myChart4"==i.mychart_id?(l(),e("canvas",T)):n("",!0)],64)}]]);const M=a=>(v("data-v-35f795fa"),a=a(),h(),a),O={class:"dark"},H={class:"body"},V={class:"header"},z=f('<div class="items" data-v-35f795fa><div class="mainlogo width75" data-v-35f795fa><svg viewBox="0 0 251.97 41.54" fill="#fa461e" data-v-35f795fa><path class="cls-1" d="M243.77,1.79H214.6c-7.75.61-8.34,8-8.38,9.52L206.17,40H215V25h28.08V40h8.83L252,11.31C251.71,2,244.66,1.78,243.77,1.79Zm-.68,14.53H215V11.39a2.33,2.33,0,0,1,1.22-1.54h26a2.39,2.39,0,0,1,.85,1.63Zm-45,4.38s2.81-2.08,2.56-9.76c-.29-8.63-8.54-9.7-11.89-9.78l-31.11-.09v9.2H187.8c1,.16,3.29.73,3.29,2.59,0,2.69-1.58,3.26-2.51,3.36v-.06h-31.1V40.45l31.1-.08c2.56,0,11,0,12.15-10C201.52,23.33,198.1,20.7,198.1,20.7Zm-9.59,10.55H166.13V25.4H188s2.83-.29,2.83,3.13A2.73,2.73,0,0,1,188.51,31.25ZM35,16.93,9.26,16.78s-1.57-1-1.41-3.77a3.35,3.35,0,0,1,2-3.13H39.67V1.17H7.37S.36,1.87,0,13.64C-.31,24.3,6.28,25.08,6.28,25.08H28.54s3.76-.78,3.6,3.45c-.12,3.29-2.66,3.29-2.66,3.29H.32v8.94h31S42.1,42.09,42.1,27.66C42.1,18.89,35,16.93,35,16.93ZM46.56,40.44h8.79V15.83H46.56ZM51.43,0a5.65,5.65,0,1,0,5.64,5.64A5.65,5.65,0,0,0,51.43,0Zm45.3,1.74v0h-35V10.5H93.22a2.81,2.81,0,0,1,1.79,3,3,3,0,0,1-2.83,2.82H61.93V40.13h8.31V25.08H92.41c.83,0,3.21,1.64,3.21,4.73V40.13h9.11V27.27c0-3.28-3.61-5.79-3.61-5.79s4-2,4.23-8.15C105.72,2.8,99.35,1.69,96.73,1.74Zm45.46,28.15c-.84,1.22-3.76,2.53-12.54,2.4-8.37-.12-10.26-.6-10.66-2V1.57h-9.07V30.41c.5,10.87,12,11.13,12,11.13s6.58-.16,17.09-.16c10.26,0,12-7.52,12.21-11V1.57h-9.08Z" data-v-35f795fa></path></svg></div><div data-v-35f795fa><div class="title datk" data-v-35f795fa> date<div class="titleline width75" data-v-35f795fa></div></div><div class="subtitle" data-v-35f795fa>Wed <span class="breakline" data-v-35f795fa>12:57:30</span></div></div></div><div class="items" data-v-35f795fa><div data-v-35f795fa><div class="title datk" data-v-35f795fa>site<div class="titleline width75" data-v-35f795fa></div></div><div class="subtitle" data-v-35f795fa>Taiwan</div></div><div data-v-35f795fa><div class="title datk" data-v-35f795fa>location<div class="titleline" data-v-35f795fa></div></div><div class="subtitle" data-v-35f795fa>宏遠興業台南廠</div></div></div><div class="items" data-v-35f795fa><div data-v-35f795fa><div class="title datk" data-v-35f795fa>no. of labors<div class="titleline width45" data-v-35f795fa></div></div><div class="subtitle" data-v-35f795fa>9</div></div><div data-v-35f795fa><div class="title datk" data-v-35f795fa>work hours<div class="titleline width50" data-v-35f795fa></div></div><div class="subtitle" data-v-35f795fa>8</div></div></div><div class="items" data-v-35f795fa><div data-v-35f795fa><div class="title datk" data-v-35f795fa>line<div class="titleline width70" data-v-35f795fa></div></div><div class="subtitle" data-v-35f795fa>口罩 IoT 生產線 A</div></div><div data-v-35f795fa><div class="title datk" data-v-35f795fa>PO<div class="titleline width75" data-v-35f795fa></div></div><div class="subtitle" data-v-35f795fa>SS20A5007</div></div></div><div class="items" data-v-35f795fa><div data-v-35f795fa><div class="title datk" data-v-35f795fa>supervisor<div class="titleline width45" data-v-35f795fa></div></div><div class="subtitle" data-v-35f795fa>Chris Lin</div></div><div data-v-35f795fa><div class="title datk" data-v-35f795fa>depulty supervisor<div class="titleline width20" data-v-35f795fa></div></div><div class="subtitle" data-v-35f795fa>Jack Chou</div></div></div>',5),F={class:"items items2"},E=M((()=>o("div",{class:"width50"},[o("div",{class:"title datk"},"shift target"),o("div",{class:"impnb"},"1500")],-1))),I={class:"width50"},W=M((()=>o("div",{class:"title datk"},"completed",-1))),D={class:"single-chart"},Z={viewBox:"0 0 36 36",class:"circular-chart color"},R=M((()=>o("path",{class:"circle-bg",d:"M18 2.0845\r\n                                    a 15.9155 15.9155 0 0 1 0 31.831\r\n                                    a 15.9155 15.9155 0 0 1 0 -31.831"},null,-1))),B=["stroke-dasharray"],j={x:"18",y:"15",class:"percentage"},G={x:"18",y:"26",class:"percentage"},N={class:"ctblock"},U={class:"block width74"},Y={class:""},J=f('<div class="mb20 labels" data-v-35f795fa><span class="fontarial fontwt" data-v-35f795fa>COMPLETE 產 出</span><div class="line gn" data-v-35f795fa></div><span class="fontarial fontwt" data-v-35f795fa>TARGET</span><div class="line org" data-v-35f795fa></div><span class="float-right" data-v-35f795fa><span class="title datk" data-v-35f795fa>STYLE</span><span class="fontarial fontwt" data-v-35f795fa>SS20C51057</span></span></div>',1),K={class:"canvas_box"},q=M((()=>o("div",null,"OP COUNT 各工序產出",-1))),Q={class:"chartCircleBox"},X={class:"chart-block"},$=M((()=>o("div",{class:""},"PROCESS COUNT 製程合計產出",-1))),aa={class:"canvas_box_2"},ta=M((()=>o("div",{class:""},"WIP 製程在製",-1))),la={class:"canvas_box_2"},ea={class:"chart-block"},ia=f('<div class="mb20 labels" data-v-35f795fa><span class="fontarial fontwt" data-v-35f795fa>COMPLETE 產出</span><div class="line gn" data-v-35f795fa></div><span class="fontarial fontwt" data-v-35f795fa>TARGET 目標</span><div class="line org" data-v-35f795fa></div><span class="float-right" data-v-35f795fa><span class="title datk" data-v-35f795fa>STYLE</span><span class="fontarial fontwt" data-v-35f795fa>SS20C51057</span></span></div><div class="" data-v-35f795fa>Shift Target Trace 班別生產達成趨勢</div>',2),sa={class:"canvas_box_3"},da={class:"block width25"},na={class:""},ra={class:"table"},oa=M((()=>o("caption",null,"PRODUCTIVITY @NOW 即時目標達成",-1))),ca=M((()=>o("thead",null,[o("tr",null,[o("th",null,"PROC"),o("th",null,"TARGET"),o("th",null,"@STD"),o("th",null,"ACT"),o("th",null,"P %")])],-1))),fa=M((()=>o("td",null,"P1",-1))),va=M((()=>o("td",null,"1500",-1))),ha=M((()=>o("td",null,"P2",-1))),ua=M((()=>o("td",null,"1500",-1))),ya=M((()=>o("td",null,"P3",-1))),pa=M((()=>o("td",null,"1500",-1))),ba=M((()=>o("td",null,"P4",-1))),ma=M((()=>o("td",null,"1500",-1))),xa=M((()=>o("td",null,"P5",-1))),ga=M((()=>o("td",null,"1500",-1))),Ca=M((()=>o("tr",null,[o("td",null,"-"),o("td",null,"-"),o("td",null,"-"),o("td",null,"-"),o("td",null,"-")],-1))),ka={class:"ctblock borderbtm1 pdb20"},Sa=M((()=>o("div",{class:"fontarial eff width40"},[u("PRODUCTIVITY "),o("br"),u(" @NOW 產線即時目標達成")],-1))),_a={class:"width30 impnb"},La={class:"width30 single-chart"},wa={viewBox:"0 0 36 36",class:"circular-chart color"},Pa=M((()=>o("path",{class:"circle-bg",d:"M18 2.0845\r\n                                                                        a 15.9155 15.9155 0 0 1 0 31.831\r\n                                                                        a 15.9155 15.9155 0 0 1 0 -31.831"},null,-1))),Ta=["stroke-dasharray"],Aa=f('<div data-v-35f795fa><table class="table align-left" data-v-35f795fa><tbody data-v-35f795fa><tr data-v-35f795fa><td colspan="2" data-v-35f795fa>PROCESS ID &amp; DESCRIPTION</td></tr><tr data-v-35f795fa><td data-v-35f795fa>P1</td><td data-v-35f795fa>刀車裁口罩一圈(弧19+18+19+18cm)*1 <br data-v-35f795fa> Cutting a circle of mask</td></tr><tr data-v-35f795fa><td data-v-35f795fa>P2</td><td data-v-35f795fa>固定3摺子兩邊(直10cm)2*1 <br data-v-35f795fa> Fixing 3-fold on both sides </td></tr><tr data-v-35f795fa><td data-v-35f795fa>P3</td><td data-v-35f795fa>喇叭滾口罩上下(直19cm)*1 <br data-v-35f795fa> Horn-rolling mask up and down </td></tr><tr data-v-35f795fa><td data-v-35f795fa>P4</td><td data-v-35f795fa>車滾條於口罩兩邊(直10cm)2*1 <br data-v-35f795fa> Sewing roll-slip on both sides </td></tr><tr data-v-35f795fa><td data-v-35f795fa>P5</td><td data-v-35f795fa>三折光車口罩兩邊(直10cm)2*1(夾車鬆緊帶) <br data-v-35f795fa> Trifold &amp; sewing mask on both sides </td></tr></tbody></table></div><div data-v-35f795fa><div class="width30 mtb20 inline" data-v-35f795fa><svg viewBox="0 0 251.97 41.54" fill="#fa461e" data-v-35f795fa><path class="cls-1" d="M243.77,1.79H214.6c-7.75.61-8.34,8-8.38,9.52L206.17,40H215V25h28.08V40h8.83L252,11.31C251.71,2,244.66,1.78,243.77,1.79Zm-.68,14.53H215V11.39a2.33,2.33,0,0,1,1.22-1.54h26a2.39,2.39,0,0,1,.85,1.63Zm-45,4.38s2.81-2.08,2.56-9.76c-.29-8.63-8.54-9.7-11.89-9.78l-31.11-.09v9.2H187.8c1,.16,3.29.73,3.29,2.59,0,2.69-1.58,3.26-2.51,3.36v-.06h-31.1V40.45l31.1-.08c2.56,0,11,0,12.15-10C201.52,23.33,198.1,20.7,198.1,20.7Zm-9.59,10.55H166.13V25.4H188s2.83-.29,2.83,3.13A2.73,2.73,0,0,1,188.51,31.25ZM35,16.93,9.26,16.78s-1.57-1-1.41-3.77a3.35,3.35,0,0,1,2-3.13H39.67V1.17H7.37S.36,1.87,0,13.64C-.31,24.3,6.28,25.08,6.28,25.08H28.54s3.76-.78,3.6,3.45c-.12,3.29-2.66,3.29-2.66,3.29H.32v8.94h31S42.1,42.09,42.1,27.66C42.1,18.89,35,16.93,35,16.93ZM46.56,40.44h8.79V15.83H46.56ZM51.43,0a5.65,5.65,0,1,0,5.64,5.64A5.65,5.65,0,0,0,51.43,0Zm45.3,1.74v0h-35V10.5H93.22a2.81,2.81,0,0,1,1.79,3,3,3,0,0,1-2.83,2.82H61.93V40.13h8.31V25.08H92.41c.83,0,3.21,1.64,3.21,4.73V40.13h9.11V27.27c0-3.28-3.61-5.79-3.61-5.79s4-2,4.23-8.15C105.72,2.8,99.35,1.69,96.73,1.74Zm45.46,28.15c-.84,1.22-3.76,2.53-12.54,2.4-8.37-.12-10.26-.6-10.66-2V1.57h-9.07V30.41c.5,10.87,12,11.13,12,11.13s6.58-.16,17.09-.16c10.26,0,12-7.52,12.21-11V1.57h-9.08Z" data-v-35f795fa></path></svg></div><span class="sublogotext" data-v-35f795fa>KAULIN MFG. CO., LTD.</span></div>',2);var Ma=y({setup(a){const t=s(850),d=s(Math.round(t.value/1500*100,1)),n=s([750,480,556,768,450]),r=s([556,470,520,300,280]),f=s([1,1,1,1,1,1,3,2,1,0,0,0]);return(a,s)=>(l(),e("body",O,[o("div",H,[o("div",V,[z,o("div",F,[E,o("div",I,[W,o("div",D,[(l(),e("svg",Z,[R,o("path",{class:"circle","stroke-dasharray":d.value,d:"M18 2.0845\r\n                                    a 15.9155 15.9155 0 0 1 0 31.831\r\n                                    a 15.9155 15.9155 0 0 1 0 -31.831"},null,8,B),o("text",j,i(t.value),1),o("text",G,i(d.value)+"%",1)]))])])])]),o("div",N,[o("div",U,[o("div",Y,[J,o("div",K,[q,c(A,{mychart_id:"myChart"})]),o("span",Q,[c(p,{itemState:f.value},null,8,["itemState"])])]),o("div",X,[$,o("div",aa,[c(A,{mychart_id:"myChart2"})]),ta,o("div",la,[c(A,{mychart_id:"myChart3"})])]),o("div",ea,[ia,o("div",sa,[c(A,{mychart_id:"myChart4"})])])]),o("div",da,[o("div",na,[o("table",ra,[oa,ca,o("tbody",null,[o("tr",null,[fa,va,o("td",null,i(n.value[0]),1),o("td",null,i(r.value[0]),1),o("td",null,[c(_,{process_percent:Math.round(r.value[0]/n.value[0]*100)},null,8,["process_percent"])])]),o("tr",null,[ha,ua,o("td",null,i(n.value[1]),1),o("td",null,i(r.value[1]),1),o("td",null,[c(_,{process_percent:Math.round(r.value[1]/n.value[1]*100)},null,8,["process_percent"])])]),o("tr",null,[ya,pa,o("td",null,i(n.value[2]),1),o("td",null,i(r.value[2]),1),o("td",null,[c(_,{process_percent:Math.round(r.value[2]/n.value[2]*100)},null,8,["process_percent"])])]),o("tr",null,[ba,ma,o("td",null,i(n.value[3]),1),o("td",null,i(r.value[3]),1),o("td",null,[c(_,{process_percent:Math.round(r.value[3]/n.value[3]*100)},null,8,["process_percent"])])]),o("tr",null,[xa,ga,o("td",null,i(n.value[4]),1),o("td",null,i(r.value[4]),1),o("td",null,[c(_,{process_percent:Math.round(r.value[4]/n.value[4]*100)},null,8,["process_percent"])])]),Ca])]),o("div",ka,[Sa,o("div",_a,i(Math.round(r.value[4]/n.value[4]*100))+"%",1),o("div",La,[(l(),e("svg",wa,[Pa,o("path",{class:"circle","stroke-dasharray":Math.round(r.value[4]/n.value[4]*100),d:"M18 2.0845\r\n                                                                        a 15.9155 15.9155 0 0 1 0 31.831\r\n                                                                        a 15.9155 15.9155 0 0 1 0 -31.831"},null,8,Ta)]))])]),Aa])])])])]))}},[["__scopeId","data-v-35f795fa"]]);export{Ma as default};