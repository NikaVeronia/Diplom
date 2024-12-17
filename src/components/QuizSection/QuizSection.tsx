import React, { useState, useEffect } from "react";
import "./QuizSection.modules.css";

type QuizSectionProps = {
  className?: string;
};

type QuizStep = {
  type: "image" | "size" | "textarea" | "form";
  question: string;
};

type Sneaker = {
  id: number;
  vendorСode: string;
  inStock: number;
  title: string;
  description: string;
  imgUrl: string;
  sizes: number[];
  price: number;
  oldPrice: number;
  gender: string;
  color: string;
  compound: string;
  country: string;
};

const quizData: QuizStep[] = [
  {
    type: "image",
    question: "Какой тип кроссовок рассматриваете?",
  },
  {
    type: "size",
    question: "Какой размер вам подходит?",
  },
  {
    type: "textarea",
    question: "Уточните ваши требования к кроссовкам",
  },
  {
    type: "form",
    question: "Ваша подборка готова!",
  },
];

const QuizSection: React.FC<QuizSectionProps> = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [sneakers, setSneakers] = useState<Sneaker[]>([]);

  // Загрузка данных из sneakers.json
  useEffect(() => {
    fetch("https://87c4e51ebc337641.mokky.dev/sneackers")
      .then((response) => response.json())
      .then((data) => setSneakers(data))
      .catch((error) => console.error("Ошибка загрузки данных:", error));
  }, []);
  const sizeRanges = [
    { label: 'менее 36', range: [0, 35] },
    { label: '36–38', range: [36, 38] },
    { label: '39–41', range: [39, 41] },
    { label: '42–44', range: [42, 44] },
    { label: '45 и больше', range: [45, Infinity] },
  ];

// Генерируем группы и определяем выбранные диапазоны
const groupedSizes = sizeRanges.map((group) => ({
  label: group.label,
  sizes: sneakers.flatMap((sneaker) => sneaker.sizes).filter(
    (size) => size >= group.range[0] && size <= group.range[1]
  ),
}));
  const handleNextStep = () => {
    console.log(`Шаг ${currentStep + 1}:`, answers[currentStep] || "Ответ не заполнен");
    if (currentStep < quizData.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSelect = (step: number, answer: string) => {
    setAnswers({ ...answers, [step]: answer });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setAnswers({ ...answers, [currentStep]: e.target.value });
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Ответы на вопросы:", answers);
    console.log("Данные формы:", formData);
    alert("Ваши данные отправлены!");
  };

  const currentQuiz = quizData[currentStep];

  return (
    <div className="quiz-section" id="quiz">
      <h2 className="quiz-title">
        {currentQuiz.type === "form" ? "Ваша подборка готова!" : "Мы подберем идеальную пару для вас"}
      </h2>
      {currentQuiz.type !== "form" && (
        <p className="quiz-subtitle">
          Ответьте на три вопроса, и мы вышлем каталог с самыми подходящими для вас моделями
        </p>
      )}
      <hr />
      <div className="quiz-content">
        {currentQuiz.type === "image" && (
          <>
            <p className="quiz-question">{currentQuiz.question}</p>
            <div className="quiz-options">
              {sneakers.slice(0, 8).map((sneaker) => (
                <div
                  key={sneaker.id}
                  className={`quiz-option ${
                    answers[currentStep] === sneaker.imgUrl ? "selected" : ""
                  }`}
                  onClick={() => handleSelect(currentStep, sneaker.imgUrl)}
                >
                  <img src={sneaker.imgUrl} alt={sneaker.title} className="quiz-image" />
                  <p className="quiz-option-title">{sneaker.title}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {currentQuiz.type === "size" && (
          <>
            <p className="quiz-question">{currentQuiz.question}</p>
            <div className="quiz-sizes">
    {groupedSizes.map((group, index) => (
      <label key={index} className="quiz-size">
        <input
          type="checkbox"
          name="size-range"
          value={group.label}
          checked={answers[currentStep] === group.label}
          onChange={() => handleSelect(currentStep, group.label)}
        />
        {group.label}
      </label>
    ))}
  </div>
            <div className="imgRectangle">
               <img className="imgRect" src="../../../src/image/Rectangle 45.jpg" alt="" />
              </div>
          </>
        )}

        {currentQuiz.type === "textarea" && (
          <>
            <p className="quiz-question">{currentQuiz.question}</p>
            <textarea
              className="quiz-textarea"
              placeholder="Напишите, что для вас важно..."
              value={answers[currentStep] || ""}
              onChange={handleInputChange}
            />
          </>
        )}

        {currentQuiz.type === "form" && (
          <>
            <p>Оставьте свои контактные данные, чтобы бы мы могли отправить подготовленный для вас каталог</p>
            <div className="quiz-form">
              <input
                type="text"
                name="name"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={handleFormChange}
                className="quiz-input"
              />
              <input
                type="email"
                name="email"
                placeholder="Ваш email"
                value={formData.email}
                onChange={handleFormChange}
                className="quiz-input"
              />
              <button onClick={handleSubmit} className="quiz-submit-button">
                Получить
              </button>
            </div>
          </>
        )}
      </div>

      {currentQuiz.type !== "form" && (
        <div className="quiz-footer">
          <p className="quiz-progress">
            {currentStep + 1} из {quizData.length}
          </p>
          <button className="quiz-next-button" onClick={handleNextStep}>
            Следующий шаг
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizSection;
