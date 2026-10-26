# 百姬馆 · 纸间纪事

百姫抄非官方、非商业粉丝向网站。包含新观众入坑路线、博主档案、角色关系、衣装、作品与幕后、周边记录和来源索引。原生 HTML / CSS / JavaScript，无运行时第三方依赖、追踪脚本或外部字体。文字封面和装饰不是官方角色立绘。结构参考栗妮亚_nini百科的公开资料组织方式，未复制参考站的文字、图片或代码。

## 本地查看

直接打开 `index.html`，或在此目录运行 `node server.cjs`，访问 http://localhost:4173 。筛选、导航和 FAQ 均可离线使用，来源链接需要联网。

## 免费发布到 GitHub Pages

1. 在你自己的 GitHub 账户创建公开仓库，例如 `hyakkisho-guide`。
2. 将全部 `.html` 页面、`style.css`、`app.js`、`fan.js`、`search-data.js` 和 `.nojekyll` 上传到仓库主分支根目录。
3. 仓库 Settings → Pages → Build and deployment → Deploy from a branch，选择 `main` 与 `/ (root)` 后保存。
4. 等待 Pages 部署完成，地址通常为 `https://你的用户名.github.io/hyakkisho-guide/`。

GitHub Free 支持公开仓库的 Pages，参见 https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages 。没有使用付费服务，也不需要自定义域名。

项目远程仓库：https://github.com/Fishermanykx/hyakkisho-guide 。本地分支为 `main`。GitHub Pages 已启用，站点地址：https://fishermanykx.github.io/hyakkisho-guide/ 。推送到 `main` 后会自动部署。

## 内容维护

- 页面：`index.html`（粉丝站首页）、`about.html`（博主档案与活动足迹）、`characters.html`（角色世界与关系）、`editions.html`（衣装档案）、`works.html`（作品与制作署名）、`gifts.html`（周边手记）、`start.html`（入坑指南）、`sources.html`（参考资料与本站说明）。
- 各章节使用独立 URL，可直接打开、刷新或收藏；顶部图标标签栏直接切换页面并标出当前栏目，不再显示底部章节翻页。旧首页章节锚点自动转到对应新页面。
- 角色、周边与来源：修改对应章节 HTML；共用导航和页脚修改时需同步各页。
- 外观卡片：修改 `app.js` 中的 `editions`，分类为 `story`、`season`、`plan`。
- 站内搜索：`fan.js`，数据为本地加载的 `search-data.js`，不发送搜索内容。编辑 HTML 或外观记录后运行 `node rebuild-search.cjs` 更新索引。支持 Ctrl/Cmd+K 或顶部搜索按钮。
- 首页专题和搜索结果通过 `editions.html?look=名称` 把对应衣装置于首卡，不采用向下滚动定位。
- 主题与响应式布局：修改 `style.css`。
- 发布前更新整理日期，检查旧计划与周边状态。不要把“纪念回馈”改写为“现货在售”。

## 资料范围与准确性

整理日期为 2026-10-24。阅读账号公告、置顶 V7、自介和三套外观专栏，以及动态列表加载出的 2026-09-05 至 2026-10-24 内容。没有宣称穷尽所有历史动态。来源索引在网页末尾；近期动态尚未获取独立永久链接，所以提供列表入口、标题和日期方便回查。

旧自介中“大正”与世纪年代不一致，网页仅整理事件顺序；夜樱名字采用较新的春夜剪樱专栏「夜错黑樱」。对计划中外观、延期状态、AI 绘制和领取条件作明确区分。页面仅以自主摘要介绍公开信息，不复制整篇文章或角色画稿。

## Skill 与安全选择

无需下载第三方前端 skill。已检查本地技能目录提供的能力，没有为静态站引入陌生脚本、npm 包、账号授权或付费服务。网站不收集个人资料、不发送请求获取 B 站数据、不包含动态 HTML 来源输入；外链均显式指向 B 站并隔离新窗口 opener。`server.cjs` 仅监听本机，限定可服务的文件。
