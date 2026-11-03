let servers=2,hist=[],cool=0;const ctx=c.getContext('2d');
load.oninput=()=>lv.textContent=load.value;
function tick(){const capacity=servers*20;const cp=Math.min(100,(+load.value*1.6/capacity*100)+Math.random()*4);
 hist.push({cpu:cp,s:servers});if(hist.length>60)hist.shift();
 if(cool>0)cool--;else if(cp>+hi.value&&servers<8){servers++;act.textContent='Scale OUT +1';cool=3}
 else if(cp<+lo.value&&servers>1){servers--;act.textContent='Scale IN -1';cool=3}
 n.textContent=servers;cpu.textContent=cp.toFixed(0);draw()}
function draw(){ctx.clearRect(0,0,900,260);ctx.strokeStyle='#334155';for(let y=0;y<=100;y+=25){const Y=250-y*2.4;ctx.beginPath();ctx.moveTo(30,Y);ctx.lineTo(900,Y);ctx.stroke();ctx.fillStyle='#94a3b8';ctx.fillText(y+'%',2,Y+4)}
 ctx.strokeStyle='#38bdf8';ctx.lineWidth=2;ctx.beginPath();hist.forEach((h,i)=>{const x=30+i*14.5,y=250-h.cpu*2.4;i?ctx.lineTo(x,y):ctx.moveTo(x,y)});ctx.stroke();
 ctx.strokeStyle='#facc15';ctx.beginPath();hist.forEach((h,i)=>{const x=30+i*14.5,y=250-h.s*25;i?ctx.lineTo(x,y):ctx.moveTo(x,y)});ctx.stroke();
 ctx.fillStyle='#38bdf8';ctx.fillText('CPU %',40,14);ctx.fillStyle='#facc15';ctx.fillText('Server count (scaled)',90,14)}
setInterval(tick,1000);
