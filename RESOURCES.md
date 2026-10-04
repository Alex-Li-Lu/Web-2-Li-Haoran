# A2-1 Emergency Response — 资源清单

> 方向：应急响应（Emergency Response）
> 端口：3205
> 数据库：charityevents_c

## 一、品牌素材

| 资源 | 文件 | 用途 | 尺寸 |
|------|------|------|------|
| Logo | `/assets/swift-aid-logo.svg` | header 品牌标识 | 32 × 32 |
| Favicon | `/assets/favicon.svg` | 浏览器 tab | 32 × 32 |
| OG 分享图 | `/assets/og-swift-aid.png` | 社交分享预览 | 1200 × 630 |
| 空状态插图 | `/assets/empty-state.svg` | 搜索无结果状态 | 320 × 240 |

## 二、页面图片分配

所有图片必须是真实、尊重的救灾与应急公益照片，避免刻意悲情化与血腥画面。每张图片需有描述性 `alt`。

| 编号 | 文件 | 用途页面 | 画面关键词 | alt 文本（英文） | 尺寸 |
|------|------|----------|-----------|-----------------|------|
| R-01 | `/images/r-01-emergency-command.webp` | index Hero | emergency supply hub, rescue command point | Emergency supply distribution point with volunteers | 1600 × 900 |
| R-02 | `/images/r-02-emergency-broadcast.webp` | index EventCard、event 详情 | sign language broadcast, multilingual announcement | Emergency information broadcast with sign language | 1200 × 675 |
| R-03 | `/images/r-03-shelter-quiet-zone.webp` | index EventCard | quiet zone in shelter, low-stimulation space | Quiet, low-stimulation zone in an emergency shelter | 1200 × 675 |
| R-04 | `/images/r-04-community-drill.webp` | index EventCard、BS-1 故事区 | community emergency drill, diverse participants | Community emergency drill with diverse participants | 1200 × 675 |
| R-05 | `/images/r-05-relief-supplies.webp` | index EventCard、search 空状态 | relief supply packages, distribution to residents | Relief supply package distribution to residents | 1200 × 675 |
| R-06 | `/images/r-06-accessible-evacuation-drill.webp` | index EventCard | accessible evacuation drill, wheelchair evacuation | Accessible evacuation drill with a wheelchair user | 1200 × 675 |
| R-07 | `/images/r-07-rebuild-volunteers.webp` | registration-placeholder 支持清单 | post-disaster rebuilding, psychological support | Post-disaster rebuilding volunteer service and support | 1200 × 675 |
| R-08 | `/images/r-08-rescue-worker-portrait.webp` | index Mission 区 | rescue worker portrait, natural light | Portrait of a Swift Aid rescue worker in natural light | 1200 × 900 |

> Hero 图（R-01）需保留左右至少 35% 安全区域，保证文字覆盖可读。

## 三、第三方库

| 库 | 版本 | 文件 | 用途 |
|----|------|------|------|
| GSAP | 3.12.x | `/vendor/gsap.min.js` | 动画引擎 |
| ScrollTrigger | 3.12.x | `/vendor/ScrollTrigger.min.js` | 滚动触发动画 |

约束：
- 物理拷贝到 `client/vendor/`，不使用 CDN
- 触屏设备（`pointer: coarse`）禁用磁吸按钮效果
- 遵守 `prefers-reduced-motion: reduce` 降级

## 四、字体

```css
:root {
  --font-body: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "PingFang SC", "Microsoft YaHei", sans-serif;
  --font-heading: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}
```

- 正文最小 16px，关键文案 18px+
- 行高 1.5 以上，不使用小于 14px 的文字

## 五、配色（CSS 变量）

```css
:root {
  --color-primary: #1a73a8;
  --color-primary-dark: #15557a;
  --color-bg: #f5f9fc;
  --color-text: #1a2b38;
  --color-accent: #b8d8f0;
}
```

WCAG AA 对比验证：

| 前景 | 背景 | 比值 | 用途 | 达标 |
|------|------|------|------|------|
| --color-text (#1a2b38) | --color-bg (#f5f9fc) | ~12.6:1 | 正文 | ✓ AA |
| --color-primary (#1a73a8) | --color-bg (#f5f9fc) | ~5.0:1 | 链接/主按钮文字 | ✓ AA |
| #ffffff | --color-primary (#1a73a8) | ~5.0:1 | 主按钮白字 | ✓ AA |
| #ffffff | --color-primary-dark (#15557a) | ~8.4:1 | hover 白字 | ✓ AAA |

## 六、无障碍标注

| 组件 | aria 属性 | 示例 |
|------|----------|------|
| Navbar | `role="navigation"` `aria-label="Main"` | `<nav aria-label="Main navigation">` |
| 跳转链接 | `aria-label` | `<a href="#main" class="skip-link">Skip to main content</a>` |
| 活动卡片 | `aria-label` 含活动名 | `<article aria-label="...">` |
| 搜索表单 | `role="search"` | `<form role="search">` |
| 加载状态 | `aria-live="polite"` | `<div aria-live="polite">Loading...</div>` |
| 错误提示 | `role="alert"` `aria-live="assertive"` | `<div role="alert">...</div>` |
| 表单字段 | `<label for>` + `aria-describedby` | `<input aria-describedby="date-error">` |

- 键盘导航：Tab 顺序符合视觉顺序，focus-visible 可见（outline ≥ 2px）
- 交互目标尺寸 ≥ 44px
- 内容图片使用描述性 alt，装饰图片 `alt=""`

## 七、缺失资源 TODO

- [x] R-01 ~ R-08 图片、swift-aid-logo.svg、favicon.svg/ico、og-swift-aid.jpg、empty-state.svg 已放入 `source/assets/`
- [ ] MySQL 连接信息（DB_HOST / DB_USER / DB_PASSWORD）
