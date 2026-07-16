:root{
  --paper:#F7F5EF;
  --ink:#14171F;
  --ink-soft:#4B5160;
  --panel:#10131D;
  --panel-line:#262B3A;
  --teal:#1E7C74;
  --teal-bright:#2FBFAE;
  --rose:#C4536F;
  --line:#DEDACD;
  --card:#FFFFFF;
  --radius:14px;
  --display: 'Space Grotesk', sans-serif;
  --mono: 'IBM Plex Mono', monospace;
  --body: 'Inter', sans-serif;
}
*{box-sizing:border-box; margin:0; padding:0;}
html{scroll-behavior:smooth;}
body{
  background:var(--paper);
  color:var(--ink);
  font-family:var(--body);
  line-height:1.6;
  -webkit-font-smoothing:antialiased;
}
a{color:inherit;}
.wrap{max-width:960px; margin:0 auto; padding:0 28px;}

/* ---------- Nav ---------- */
nav{
  position:sticky; top:0; z-index:50;
  background:rgba(247,245,239,0.88);
  backdrop-filter:blur(8px);
  border-bottom:1px solid var(--line);
}
nav .navbar{
  display:flex; align-items:center; justify-content:space-between;
  height:60px;
}
.brand{
  font-family:var(--mono); font-size:14px; font-weight:600;
  letter-spacing:-0.02em;
}
.brand .tag{color:var(--teal);}
nav ul{list-style:none; display:flex; gap:28px;}
nav a{
  font-family:var(--mono); font-size:13px; text-decoration:none;
  color:var(--ink-soft); transition:color .15s ease;
}
nav a:hover, nav a:focus-visible{color:var(--teal);}

/* ---------- Hero ---------- */
header.hero{
  background:var(--panel);
  color:#EDEEF2;
  padding:88px 0 76px;
  position:relative;
  overflow:hidden;
}
header.hero::before{
  content:"";
  position:absolute; inset:0;
  background-image:
    linear-gradient(var(--panel-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--panel-line) 1px, transparent 1px);
  background-size:40px 40px;
  opacity:0.35;
  mask-image:radial-gradient(ellipse 70% 60% at 30% 20%, black, transparent);
}
.hero-inner{position:relative; z-index:1;}
.jsx-line{
  font-family:var(--mono); font-size:14px; color:#7C8494;
  margin-bottom:18px;
}
.jsx-line .b{color:var(--teal-bright);}
.jsx-line .s{color:#E7B96A;}
h1.name{
  font-family:var(--display);
  font-weight:700;
  font-size:clamp(38px, 6vw, 64px);
  letter-spacing:-0.02em;
  line-height:1.05;
  color:#fff;
}
.cursor{
  display:inline-block; width:3px; height:0.85em;
  background:var(--teal-bright);
  margin-left:6px; vertical-align:-0.1em;
  animation:blink 1s steps(1) infinite;
}
@keyframes blink{50%{opacity:0;}}
.roles{
  margin-top:20px;
  display:flex; flex-wrap:wrap; gap:8px;
}
.roles span{
  font-family:var(--mono); font-size:12.5px;
  border:1px solid var(--panel-line);
  color:#B9BFCC;
  padding:5px 11px;
  border-radius:999px;
}
.hero-meta{
  margin-top:32px;
  display:flex; flex-wrap:wrap; gap:20px;
  font-family:var(--mono); font-size:13px;
  color:#9BA2B2;
}
.hero-meta a{text-decoration:none; border-bottom:1px solid transparent;}
.hero-meta a:hover{color:var(--teal-bright); border-color:var(--teal-bright);}

/* ---------- Sections ---------- */
section{padding:64px 0;}
section + section{border-top:1px solid var(--line);}
.eyebrow{
  font-family:var(--mono); font-size:12.5px;
  color:var(--teal);
  margin-bottom:10px;
}
.eyebrow::before{content:"// "; color:#B7C9C6;}
h2{
  font-family:var(--display); font-weight:600;
  font-size:clamp(22px, 3vw, 30px);
  letter-spacing:-0.01em;
  margin-bottom:24px;
}
.summary p{
  max-width:680px; font-size:17px; color:var(--ink-soft);
}
.summary strong{color:var(--ink); font-weight:600;}

/* skills */
.skill-group{margin-bottom:22px;}
.skill-group h3{
  font-family:var(--mono); font-size:12.5px; font-weight:600;
  color:var(--ink-soft); text-transform:uppercase; letter-spacing:.04em;
  margin-bottom:10px;
}
.chips{display:flex; flex-wrap:wrap; gap:8px;}
.chip{
  font-family:var(--mono); font-size:13px;
  background:var(--card);
  border:1px solid var(--line);
  padding:6px 12px;
  border-radius:8px;
}

/* projects */
.projects{display:grid; grid-template-columns:1fr 1fr; gap:18px;}
@media(max-width:680px){.projects{grid-template-columns:1fr;}}
.proj-card{
  background:var(--card);
  border:1px solid var(--line);
  border-radius:var(--radius);
  padding:22px;
  display:flex; flex-direction:column; gap:10px;
  transition:transform .15s ease, box-shadow .15s ease;
}
.proj-card:hover{transform:translateY(-3px); box-shadow:0 10px 24px -14px rgba(20,23,31,0.25);}
.proj-card.wide{grid-column:1 / -1;}
.proj-tag{
  font-family:var(--mono); font-size:11px; color:var(--rose);
  text-transform:uppercase; letter-spacing:.05em;
}
.proj-card h3{font-family:var(--display); font-size:19px; font-weight:600;}
.proj-card p{color:var(--ink-soft); font-size:14.5px;}
.proj-links{display:flex; gap:14px; margin-top:auto; flex-wrap:wrap;}
.proj-links a{
  font-family:var(--mono); font-size:12.5px; color:var(--teal);
  text-decoration:none; border-bottom:1px solid var(--teal-bright);
  padding-bottom:1px;
}
.proj-links a:hover{color:var(--teal-bright);}

/* experience timeline */
.timeline{border-left:2px solid var(--line); padding-left:26px; display:flex; flex-direction:column; gap:28px;}
.t-item{position:relative;}
.t-item::before{
  content:""; position:absolute; left:-32px; top:4px;
  width:10px; height:10px; border-radius:50%;
  background:var(--teal-bright);
  box-shadow:0 0 0 4px var(--paper), 0 0 0 5px var(--line);
}
.t-item .role{font-family:var(--display); font-weight:600; font-size:17px;}
.t-item .org{color:var(--teal); font-family:var(--mono); font-size:13px;}
.t-item .dates{font-family:var(--mono); font-size:12.5px; color:var(--ink-soft); margin-bottom:6px;}
.t-item p{color:var(--ink-soft); font-size:14.5px; max-width:600px;}

/* education + training */
.grid-two{display:grid; grid-template-columns:1fr 1fr; gap:36px;}
@media(max-width:680px){.grid-two{grid-template-columns:1fr;}}
.edu-item{margin-bottom:16px;}
.edu-item .role{font-weight:600; font-family:var(--display); font-size:16px;}
.edu-item .dates{font-family:var(--mono); font-size:12.5px; color:var(--ink-soft);}
ul.plain{list-style:none; display:flex; flex-direction:column; gap:10px;}
ul.plain li{
  font-size:14.5px; color:var(--ink-soft);
  padding-left:18px; position:relative;
}
ul.plain li::before{
  content:"›"; position:absolute; left:0; color:var(--rose); font-family:var(--mono);
}

/* footer */
footer{
  background:var(--panel); color:#9BA2B2;
  padding:40px 0; text-align:center;
  font-family:var(--mono); font-size:12.5px;
}
footer a{color:var(--teal-bright); text-decoration:none;}

/* reveal animation */
.reveal{opacity:0; transform:translateY(14px); transition:opacity .5s ease, transform .5s ease;}
.reveal.in{opacity:1; transform:none;}
@media (prefers-reduced-motion: reduce){
  .reveal{opacity:1; transform:none; transition:none;}
  .cursor{animation:none;}
}

a:focus-visible, .chip:focus-visible{outline:2px solid var(--teal-bright); outline-offset:2px;}
