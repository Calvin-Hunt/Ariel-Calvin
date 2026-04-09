const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const compression = require('compression');
const path = require('path');
const app = express();

// 中间件配置
app.use(compression());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 静态文件服务 - 适配你的项目结构（index.html在根目录）
app.use(express.static(__dirname, {
  maxAge: '1d',
  etag: true,
  lastModified: true
}));

// 图片缓存优化（你的images文件夹在根目录）
app.use('/images', express.static(path.join(__dirname, 'images'), {
  maxAge: '7d',
  etag: true
}));

// Vercel 服务端渲染 - 直接返回 index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 邮件发送接口
app.post('/send-email', async (req, res) => {
  console.log('Received form data:', req.body);
  const { name, email, message } = req.body;

  const mailOptions = {
    from: '"个人网站" <ariel_zsttt@163.com>',
    to: 'ariel_zsttt@163.com', // 接收邮件的邮箱（与发件邮箱相同）
    replyTo: req.body.email, // 允许直接回复到访客邮箱
    subject: `来自${name}的网站留言`, // 添加邮件主题
    text: `发件人: ${name} <${email}>

留言内容:
${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: '邮件发送成功' });
  } catch (error) {
    console.error('邮件发送失败:', error);
    res.status(500).json({ success: false, message: '邮件发送失败' });
  }
});

// Vercel 导出
module.exports = app;