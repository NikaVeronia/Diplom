import React, { useState } from 'react';
import './FAQ.modules.css'; 

type FAQProps = {
  className?: string;
};

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "Вопрос 1",
    answer:
      "А это ответ 1: в комплексе функционируют 6 детских садов с площадками, воспитателями и всякими другими людьми.",
  },
  {
    question: "Вопрос 2",
    answer: "Это ответ 2: Здесь приведен пример того, как работают функции.",
  },
  {
    question: "Вопрос 3",
    answer: "Это ответ 3: Мы можем добавить столько вопросов, сколько нужно.",
  },
];

const FAQ: React.FC<FAQProps> = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    // Если уже открыт, закрыть; если закрыт, открыть
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq">
      <h2 className="faq-title">Часто задаваемые вопросы</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <span>{item.question}</span>
              <span className="faq-icon">{activeIndex === index ? "×" : "+"}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
