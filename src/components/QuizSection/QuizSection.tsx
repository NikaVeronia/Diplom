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

  const handleNextStep = () => {
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

  const currentQuiz = quizData[currentStep];

  return (
    <div className="quiz-section" id="quiz">
      {currentQuiz.type === "image" &&(
      <h2 className="quiz-title">Мы подберем идеальную пару для вас</h2>
    )}
    {currentQuiz.type === "size" &&(
      <h2 className="quiz-title">Мы подберем идеальную пару для вас</h2>
    )}
    {currentQuiz.type === "textarea" &&(
      <h2 className="quiz-title">Мы подберем идеальную пару для вас</h2>
    )}
     {currentQuiz.type === "form" &&(
      <h2 className="quiz-title">Ваша подборка готова!</h2>
    )}
      {currentQuiz.type !== "form" && (
        <p className="quiz-subtitle">
          Ответьте на три вопроса, и мы вышлем каталог с самыми подходящими для вас моделями
        </p>
      )}
<hr />
      <div className="quiz-content">
        {currentQuiz.type === "image" &&(
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
              {Array.from(new Set(sneakers.flatMap((sneaker) => sneaker.sizes))).map((size, index) => (
                <label key={index} className="quiz-size">
                  <input className="quiz-size"
                    type="checkbox"
                    name="size"
                    value={size}
                    checked={answers[currentStep] === size.toString()}
                    onChange={() => handleSelect(currentStep, size.toString())}
                  />
                  {size}
                </label>
              ))}
              
            </div>
            <div className="imgRect"><img className="imgRect" src="../../../src/image/Rectangle 45.png" alt="" /></div>
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
            <hr />
          </>
        )}

        {currentQuiz.type === "form" && (
          <>
          <p>Оставьте свои контактные данные, чтобы бы мы могли отправить  подготовленный для вас каталог</p>
            <div className="quiz-form">
            <h2 className="quiz-h2">Получить предложение</h2>
            <p className="quiz-p">Получите подборку подходящих для вас моделей на почту</p>
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
              <button className="quiz-submit-button">Получить</button>
            </div>
          </>
        )}
      </div>

      {currentQuiz.type !== "form" && (
        <div className="quiz-footer">
          <p className="quiz-progress">
            {currentStep + 1} из {quizData.length}
          </p>
          <button
            className="quiz-next-button"
            onClick={handleNextStep}
            disabled={!answers[currentStep]}
          >
            Следующий шаг
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizSection;
