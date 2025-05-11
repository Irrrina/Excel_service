import React from "react";

export default function ExcelServicesPage() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "2rem", textAlign: "center" }}>
        Улучшите бизнес с Excel
      </h1>
      <p style={{ textAlign: "center", color: "#666", marginBottom: "2rem" }}>
        Помогаем малым предприятиям автоматизировать учёт, отчётность и аналитику с помощью Excel
      </p>

      <div style={{ display: "flex", gap: "1rem", justifyContent: "space-around", flexWrap: "wrap", marginBottom: "2rem" }}>
        <div style={{ border: "1px solid #ccc", borderRadius: "10px", padding: "1rem", width: "300px" }}>
          <h2>Автоматизация Excel</h2>
          <p>Создание управленческих таблиц, финансовых моделей, умных складов и отчётов под ключ.</p>
        </div>
        <div style={{ border: "1px solid #ccc", borderRadius: "10px", padding: "1rem", width: "300px" }}>
          <h2>Дашборды и аналитика</h2>
          <p>Визуализация ключевых показателей, графики и отчёты, понятные собственнику и команде.</p>
        </div>
        <div style={{ border: "1px solid #ccc", borderRadius: "10px", padding: "1rem", width: "300px" }}>
          <h2>Консультации и обучение</h2>
          <p>Индивидуальные консультации и обучение Excel для собственников и сотрудников.</p>
        </div>
      </div>

      <div style={{ maxWidth: "400px", margin: "0 auto", padding: "1rem", border: "1px solid #ccc", borderRadius: "10px" }}>
        <h2>Оставьте заявку</h2>
        <form
          action="https://formsubmit.co/arielsea900@gmail.com"
          method="POST"
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          <input type="hidden" name="_captcha" value="false" />
          <input name="name" placeholder="Ваше имя" required />
          <input name="contact" placeholder="Email или телефон" required />
          <input name="message" placeholder="Кратко опишите задачу" required />
          <button type="submit">Отправить заявку</button>
        </form>
      </div>
    </div>
  );
}

