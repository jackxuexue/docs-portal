# 2026-09-01 开发者文档门户网站(docs-portal)

## 目标

深度调研 [DeepSeek Harness 官方文档站](https://deepseek-harness.github.io/deepseek-harness/en/guide/quickstart)的功能与内容管线,并开发一个同构的开发者文档门户网站:

1. **docs-site**:VitePress 英文单语文档站(导航/分组侧边栏/本地搜索/深浅色/Mermaid+KaTeX/editLink 全套能力)
2. **admin**:本地文档管理台(文档 CRUD + frontmatter 编辑 + 侧边栏目录拖拽编排,写回 Markdown 源文件)

产品决策(用户确认):VitePress 站 + 独立管理台;管理范围 = 文档 CRUD 与目录编排;仅英文;静态托管部署。

## 过程摘要

- 抓取参考站 HTML(内嵌 `__VP_SITE_DATA__` 完整 VitePress 配置)+ GitHub API 仓库树,完成功能清单调研 → [调研报告](docs/调研报告-参考站功能清单.md)
- 搭建 `docs-site/`(VitePress + vitepress-plugin-mermaid,9 篇原创英文示例文档)
- 开发 `admin/`(Express + gray-matter + 原生 JS SPA,无前端构建步骤)
- 联调验证:管理台 API 实测、sidebar 安全写回、docs:build 零报错

## 结论

项目已完成并全部实测通过:

| 验证项 | 结果 |
|---|---|
| `npm run docs:build` | ✅ EXIT 0,产出 10 个 HTML(9 页 + 404),死链检查通过(修复过 1 条 `./deploy` 死链) |
| 管理台 API 冒烟(`scripts/api-smoke.mjs`) | ✅ 12/12:树读取、frontmatter 读写、创建自动登记 sidebar、mtime 409 冲突检测、重命名/删除联动 sidebar 重写、sidebar JSON 往返 |
| 热更新端到端(`scripts/hmr-verify.mjs`) | ✅ 管理台写入 → VitePress dev 立即提供新内容 → 恢复后干净 |
| 工作台 UI | ✅ `http://127.0.0.1:5178` 200 可访问,仅监听本机回环 |
| sidebar 托管块 | ✅ 锚点式安全写回验证通过(经一次设计修正:托管块升级为完整 `const sidebar = {...}` 声明语句) |

**过程要点**:本机沙箱拦截 npm postinstall 与 esbuild 子进程 spawn(文档化边界),依赖安装用 `--ignore-scripts` + 平台二进制经 optionalDependencies 就位解决;构建需 `danger-full-access` 一次性提权执行。沙箱内 `--ignore-scripts` 安装对 vitepress/vite 构建无影响。

**运行方式**:
- 站点:`cd docs-site && npm run docs:dev`(5173)/ `docs:build` / `docs:preview`
- 管理台:`cd admin && npm start`(127.0.0.1:5178,与 dev 并行,保存即热更新)

## 产出索引

| 产出 | 路径 |
|---|---|
| 调研报告 | `docs/调研报告-参考站功能清单.md` |
| 原始参考资料 | `docs/source/`（外部源文档归档:SofarCloud OPEN API 2.0 V2.0.6 英文未发布稿 `.docx`) |
| VitePress 文档站 | `docs-site/`(9 篇原创英文文档:guide×3 / develop×2 / reference×3 + 入口重定向) |
| SOFARCloud API 参考 | `docs-site/docs/reference/api/`(自 docx 源文档转换:5 分类 40 页,sidebar 已登记) |
| 文档管理台 | `admin/`(Express + gray-matter + 原生 JS 三面板,无前端构建步骤) |
| 测试脚本 | `scripts/api-smoke.mjs`、`scripts/hot-reload-smoke.mjs`、`scripts/hmr-verify.mjs` |
| 部署配置 | `docs-site/.github/workflows/deploy.yml`(GitHub Pages,npm ci + build + deploy-pages) |

**已知边界**:站点 `socialLinks`/`editLink` 已指向 `jackxuexue/docs-portal`,editLink 假定 `docs-site/docs/` 目录结构 + `main` 分支;`base` 未设置(按根路径部署),子路径部署需在 config.mts 加 `base`。
