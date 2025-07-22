const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

// 中间件配置
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 163邮箱SMTP配置
const transporter = nodemailer.createTransport({
  host: 'smtp.163.com',
  port: 465,
  secure: true,
  auth: {
    user: 'ariel_zsttt@163.com', // 替换为你的163邮箱
    pass: 'GYnEL7gHRgeeZmXH' // 替换为你的客户端授权码
  }
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

// 启动服务器
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:${PORT}`);
});