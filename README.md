# 曾圣婷个人品牌网站 | Personal Brand Website

> 一个集成了专业简历展示与现代化Web技术的个人品牌网站 | A personal brand website integrating professional resume display with modern web technologies

![Website Status](https://img.shields.io/badge/Status-Online-success?style=flat&logo=vercel)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwind-css)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express)

---

## 📋 项目概述 | Project Overview

这是一个专为天津大学工商管理专业学生**曾圣婷**打造的个性化品牌展示网站。该网站集成了完整的个人简历信息，包括教育背景、实践经历、技能展示和联系方式，同时采用了现代化的Web技术实现响应式设计和丰富的交互效果。

This is a personalized brand showcase website designed for **Zeng Shengting**, a Business Administration student at Tianjin University. The website integrates complete personal resume information, including educational background, practical experience, skills showcase, and contact information, while using modern web technologies to achieve responsive design and rich interactive effects.

---

## 🌟 为什么这个网站的主人很厉害 | Why This Website Stands Out

### 🎓 学术背景 | Academic Background

| 项目 | 详情 |
|------|------|
| **学校** | 天津大学（985/211高校） |
| **专业** | 工商管理 · 市场营销方向 |
| **GPA** | 3.8/4.0（专业排名前20%） |

核心课程：市场营销学、消费者行为学、市场调研、人力资源管理、财务管理等

### 🏆 核心荣誉 | Core Honors

- **第五届全国助农营销赛 - 优秀奖** | 5th National Agricultural Marketing Competition - Excellence Award
- **乡村振兴实践证书** | Rural Revitalization Practice Certificate
- **天津大学先进集体成员** | Tianjin University Advanced Collective Member
- **CET-4: 605/710 | CET-6: 522/710** - 英语能力出众
- **普通话二级甲等** | Mandarin Level 2A

### 💼 实践经验 | Practical Experience

#### 1. 富邦华一银行天津分行 - 市场部实习生
**Fubon China Bank Tianjin Branch - Marketing Department Intern**

- 完成5份深度金融市场竞品分析报告，覆盖理财产品、基金、保险等领域
- 参与策划"新春财富节"营销活动，活动期间新增高净值客户增长**32%**，管理资产规模提升**28%**
- 建立客户分层服务体系，协助优化VIP客户服务流程，客户满意度提升**18%**
- 运用数据分析工具，识别潜在客户群体，为精准营销提供数据支持，转化率提升**22%**

#### 2. 沪上阿姨 - 门店运营实习
**Hushang Aunt - Store Operations Intern**

- 优化库存流程，使材料损耗率降低**15%**
- 处理客户投诉30余起，客户满意度达到**98%**
- 协助门店完成促销活动策划，活动期间销售额增长**20%**

#### 3. 天津大学管理与经济学部素质拓展中心 - 秘书部部长 & 主席
**Tianjin University Management and Economics Department Quality Development Center - Secretary Minister & President**

- 带领社团完成3次大型活动，参与人数超500人
- 优化社团管理流程，提高工作效率**30%**
- 成功组织招新活动，招纳新成员30余人

### 🎯 核心能力 | Core Competencies

| 能力 | 水平 | 实际应用 |
|------|------|----------|
| 营销策划 | ★★★★★ | 全国助农营销赛获奖，负责制定满减优惠券策略 |
| 团队管理 | ★★★★★ | 带领班级获"优秀班集体"，组织500+人活动 |
| 沟通能力 | ★★★★★ | 心理委员，处理30+投诉，满意度98% |
| 数据分析 | ★★★★☆ | Excel销售统计，竞品分析报告 |
| 客户服务 | ★★★★★ | 高净值客户服务，客户满意度提升18% |
| 创新思维 | ★★★★★ | 设计季节性促销方案，销售额提升20% |

---

## 🛠️ 技术实现 | Technical Implementation

### 技术栈 | Tech Stack

| 类别 | 技术 | 版本 |
|------|------|------|
| **前端框架** | Tailwind CSS | 3.x (CDN) |
| **图标库** | Font Awesome | 4.7.0 |
| **图表库** | Chart.js | 4.4.8 |
| **字体** | Google Fonts (Inter) | - |
| **后端服务** | Express.js | 4.x |
| **邮件服务** | Nodemailer | 6.x |
| **部署平台** | Vercel | - |

### 核心功能 | Core Features

#### 1. 响应式设计 | Responsive Design
- 移动端优先设计理念
- 支持从320px到1920px的全尺寸适配
- 采用 `clamp()` 实现流体排版

```css
/* 响应式字体示例 */
font-size: clamp(1rem, 2vw, 1.25rem);
```

#### 2. 动态交互效果 | Dynamic Interactions
- 平滑滚动导航（Smooth Scroll）
- 导航栏滚动透明度变化
- 卡片悬停阴影增强
- 浮动动画效果
- 返回顶部按钮（滚动超过300px显示）

#### 3. 数据可视化 | Data Visualization
- Chart.js 甜甜圈图展示核心能力分布
- 气泡图展示软实力矩阵
- 交互式技能标签云

```javascript
// 技能图表配置
const skillsChart = new Chart(document.getElementById('skillsChart'), {
    type: 'doughnut',
    data: {
        labels: ['营销策划', '团队管理', '沟通能力', '数据分析', '客户服务', '活动策划'],
        datasets: [{
            data: [30, 25, 20, 15, 10, 20],
            // ...
        }]
    },
    options: { cutout: '70%' }
});
```

#### 4. 表单系统 | Contact Form
- 使用 Google Apps Script 作为后端表单处理
- 支持跨域表单提交（no-cors 模式）
- 实时提交状态反馈（加载、成功、失败）
- 表单验证

```javascript
fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    mode: 'no-cors'
})
```

#### 5. Vercel 部署配置 | Vercel Deployment

```json
// vercel.json
{
  "version": 2,
  "builds": [
    {
      "src": "server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/server.js"
    }
  ]
}
```

#### 6. 性能优化 | Performance Optimization
- 静态资源 gzip 压缩（compression 中间件）
- 浏览器缓存策略（maxAge 配置）
- 内容可见性优化（content-visibility）
- 图片懒加载

### 项目结构 | Project Structure

```
personal-website-marketing/
├── index.html              # 主页面（HTML + CSS + JS）
├── server.js               # Express 服务器
├── package.json            # 项目配置
├── vercel.json            # Vercel 部署配置
├── images/
│   ├── profile.jpg         # 个人头像
│   └── zhunong-flowchart.svg  # 项目流程图
├── resume.pdf              # 可下载简历
└── README.md               # 项目说明
```

---

## 🚀 部署 | Deployment

### Vercel 部署步骤 | Vercel Deployment Steps

1. **推送代码到 GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/repo-name.git
   git push -u origin main
   ```

2. **在 Vercel 导入项目**
   - 访问 [vercel.com](https://vercel.com)
   - 点击 "New Project"
   - 选择 GitHub 仓库
   - 配置构建命令（无需修改，使用默认设置）
   - 点击 "Deploy"

3. **访问网站**
   - 部署完成后，访问 Vercel 分配的域名
   - 例如：`your-project.vercel.app`

### 本地开发 | Local Development

```bash
# 1. 安装依赖
npm install

# 2. 启动开发服务器
node server.js

# 3. 访问 http://localhost:3000
```

---

## 📱 页面结构 | Page Structure

1. **首页 (Hero)** - 全屏渐变背景，个人头像，核心标签
2. **关于我 (About)** - 教育背景，核心荣誉，能力优势卡片
3. **经历 (Experience)** - 时间轴展示，实习经历，项目经历
4. **技能 (Skills)** - 语言工具技能，软实力矩阵，交互式图表
5. **联系 (Contact)** - 联系表单，联系方式，社交媒体链接

---

## ✨ 特色亮点 | Special Features

1. **单文件架构** - 所有代码集成在一个 HTML 文件中，便于部署和维护
2. **中英双语支持** - 完整的英文简历内容展示
3. **交互式设计** - 图表、模态框、动画效果增强用户体验
4. **无障碍访问** - 支持键盘导航
5. **SEO 优化** - 完整的 meta 标签配置

---

## 📄 许可证 | License

MIT License

---

## 📬 联系方式 | Contact

- **邮箱**: ariel_zsttt@163.com
- **电话**: 19921393930
- **地址**: 天津市南开区天津大学
- **微信**: （请通过网站联系表单获取）

---
