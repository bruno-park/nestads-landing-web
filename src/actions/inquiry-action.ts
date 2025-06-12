"use server";

import nodemailer from "nodemailer";

export interface InquiryForm {
  name: string;
  company: string;
  service: string;
  email: string;
  agree: boolean;
}

export async function sendInquiryMail(data: InquiryForm) {
  if (!data.agree) {
    throw new Error("약관 동의가 필요합니다.");
  }

  const htmlContent = `
  <!DOCTYPE html>
  <html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>문의 내용</title>
    <style>
      /* Reset */
      body, html {
        margin: 0; padding: 0; background-color: #f5f7fa; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
          Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: #333;
      }
      .container {
        max-width: 480px;
        background: #fff;
        margin: 30px auto;
        border-radius: 12px;
        box-shadow: 0 12px 24px rgba(0,0,0,0.12);
        padding: 32px 40px;
      }
      h1 {
        margin-bottom: 24px;
        font-size: 28px;
        font-weight: 700;
        color: #2a66f7;
        border-bottom: 3px solid #2a66f7;
        padding-bottom: 8px;
      }
      table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 16px;
      }
      th, td {
        text-align: left;
        padding: 12px 8px;
        border-bottom: 1px solid #eee;
        font-size: 16px;
      }
      th {
        color: #555;
        width: 35%;
        font-weight: 600;
      }
      td {
        color: #222;
        font-weight: 500;
      }
      .footer {
        margin-top: 40px;
        font-size: 13px;
        color: #999;
        text-align: center;
        font-style: italic;
      }
      @media screen and (max-width: 520px) {
        .container {
          padding: 24px 20px;
          margin: 20px 10px;
        }
        h1 {
          font-size: 24px;
        }
        th, td {
          font-size: 14px;
          padding: 10px 6px;
        }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>신규 문의가 도착했습니다</h1>
      <table role="presentation">
        <tr>
          <th>담당자명</th>
          <td>${data.name}</td>
        </tr>
        <tr>
          <th>회사명</th>
          <td>${data.company}</td>
        </tr>
        <tr>
          <th>서비스명</th>
          <td>${data.service}</td>
        </tr>
        <tr>
          <th>이메일</th>
          <td><a href="mailto:${data.email}" style="color:#2a66f7; text-decoration:none;">${data.email}</a></td>
        </tr>
      </table>
    </div>
  </body>
  </html>
  `;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "bruno.park@wisebirds.com",
      pass: "tzocavmsjmamnbpe",
    },
  });

  const mailOptions = {
    to: "qktmzlf@naver.com",
    subject: "[Nest Ads Manager 문의] 신규 문의가 도착했습니다",
    html: htmlContent,
    replyTo: data?.email,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Email send error:", error);
    throw new Error("문의 전송 중 오류가 발생했습니다.");
  }
}
