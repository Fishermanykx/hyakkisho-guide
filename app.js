const intro = 'https://www.bilibili.com/opus/1005208701635657733';
const feed = 'https://space.bilibili.com/3494368858081709/dynamic';
const editions = [
 {name:'椿落残骸',kind:'story',label:'初代服设 / 赤 · 黑',symbol:'椿',desc:'诞生时的模样与双子的配对外观。山茶、骷髅与彼岸花，将葬礼与新生放进同一册书；可在素色、上衣与外套三种组合间呈现。',note:'服设：HAKUhana（抄）／电电DD（章）；完整署名见原文。',url:'https://www.bilibili.com/opus/973294887045693443'},
 {name:'大正抄 → 大正寻踪',kind:'season',label:'寻找主人 / 旧称与近况',symbol:'踪',desc:'对应离开主人书房后在人世漂泊、寻找主人的阶段。2026 年动态说明「大正寻踪」从约稿服设经 AI 调整细节，补成完整外观，用于读后感插画。',note:'AI 调整经服设画师许可；依据 2026.10.09 动态。',url:feed},
 {name:'圣白之书',kind:'story',label:'主线阶段 / 表 · 里',symbol:'白',desc:'无法割舍被侵蚀的回忆，又执着于纯白，百姬抄由此向往神明。尚未分离的黑暗之心呈现相对的「里」形态。',note:'2024 自介称百日回已展示主线。',url:intro},
 {name:'禁忌之章',kind:'story',label:'双子诞生 / 椿落残骸·黑',symbol:'章',desc:'通过契约分离出附属传记，黑暗之心获得百忌章之名，成为独立妖怪。这是角色诞生的剧情阶段，也对应初代黑色外观。',note:'2024 自介称半年庆已展示主线。',url:intro},
 {name:'终焉月宴',kind:'story',label:'概念服设 / 月下茶会',symbol:'月',desc:'京都阴阳术经历凝成一场时间尽头的茶会。大裙摆、悬浮花边盘与仿佛凝固的茶水表现虚假之月；书尾鬼常在此篇登场。',note:'服设：莫夜寻川／全麦煎餅；模型：璃向Rikou。',url:'https://www.bilibili.com/opus/1005554914639740935'},
 {name:'春夜剪樱',kind:'story',label:'周年概念 / 春 · 夜',symbol:'樱',desc:'关于表达与等待、失去与告别的双樱故事。半片折纸樱花与巨大的金属武器构成核心对比，大正学生装与军装元素成对出现。',note:'服设／立绘：二円円；双子模型：-代号M-。',url:'https://www.bilibili.com/opus/1107276409017991169'},
 {name:'焚香筑梦',kind:'story',label:'概念版本 / 公开记录',symbol:'梦',desc:'2024 自介曾预告立绘及二周年计划；置顶 V7 已以此版本命名。2026 夏季公告提及其累计九百天纪念周边，主线发布进度不据此推定。',note:'区分旧计划与目前能够核实的记录。',url:feed},
 {name:'四季人偶',kind:'season',label:'季节系列 / 染枫 · 傲松',symbol:'季',desc:'2026 周边公告提到染枫与冬季版傲松，四季周边采用成套思路；置顶说明完整季节外观会在相关活动后公开。',note:'本页不补写尚未核实的其他季节名称或剧情。',url:feed},
 {name:'十五夜 · 月命／星武',kind:'season',label:'中秋双子服设 / AI',symbol:'夜',desc:'2026 中秋公开的双子外观，以平安时代服装与高饱和浮世绘表现。服设从零由 AI 绘制；相关剧情视频在 10.09 动态中仍为后续计划。',note:'关联中秋可选回馈礼，不能等同已公开主线。',url:feed},
 {name:'古书造花',kind:'season',label:'日常服设 / 预告 · AI',symbol:'花',desc:'2026.10.09 预告的百姬抄日常服装，用于彼岸与人间的常规装扮。计划于当年十一月三周年剧情首次正式登场。',note:'AI 从零绘制；截至整理时属于预告。',url:feed},
 {name:'流椿时计 · 羽书百合',kind:'plan',label:'2024 年旧文预告',symbol:'时',desc:'自介将两者列在故事早期阶段。流椿时计曾多次调整外观；羽书百合涉及七重凛相关剧情。原文当时均未确定上线时间。',note:'未核实最新公开进度，不标为已发布。',url:intro},
 {name:'雪椿葬',kind:'plan',label:'2024 年旧文预告',symbol:'雪',desc:'旧自介列为现代阶段外观，当时处于重置中。仅保留公开名称与当时状态，不补写未公开剧情。',note:'当前制作与发布进度未核实。',url:intro}
];
const grid=document.getElementById('edition-grid');
function render(filter){const items=editions.filter(x=>filter==='all'||x.kind===filter);grid.innerHTML=items.map((x,i)=>`<article class="edition"><div class="edition-art art-${x.kind}" aria-hidden="true"><span>${x.symbol}</span><i></i><small>百姬馆 / 藏卷</small></div><div class="edition-copy"><p class="eyebrow">${x.label}</p><h3>${x.name}</h3><p>${x.desc}</p><small class="edition-note">${x.note}</small><a class="text-link" href="${x.url}" target="_blank" rel="noopener noreferrer">查阅原始资料 ↗</a></div></article>`).join('');document.getElementById('result-count').textContent=`显示 ${items.length} 条外观与剧情记录`;}
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});render(button.dataset.filter);}));
if (grid) render('all');
// Preserve links shared before the site was split into separate pages.
function openLegacyChapter() {
if (/\/(?:index\.html)?$/.test(location.pathname)) {
 const legacyPages = ['about','characters','editions','gifts','start','sources'];
 const section = location.hash.slice(1);
 if (legacyPages.includes(section)) location.replace(section + '.html');
 else if (/^source-[15]$/.test(section)) location.replace('sources.html#' + section);
}
}
openLegacyChapter();
window.addEventListener("hashchange", openLegacyChapter);
