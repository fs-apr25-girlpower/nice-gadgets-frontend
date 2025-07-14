import type React from 'react';
import './UnicornAssistant.css';
import { useCallback, useEffect, useRef, useState } from 'react';

import unicornImage from '../../images/unicorn/unicorn-assistant-2.png';

interface UnicornAssistantProps {
  messages: {
    en: string[];
    ua: string[];
  };
  interval?: number;
  currentLanguage: 'ua' | 'en'; //прибрати потім, коли буде перемикання через контекст
}

export const UnicornAssistant: React.FC<UnicornAssistantProps> = ({
  messages,
  interval = 5000,
  currentLanguage,
}) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  //стани для перетягування
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ bottom: 20, right: 20 });
  const offset = useRef({ x: 0, y: 0 }); // Для зберігання зсуву миші відносно елемента
  const assistantRef = useRef<HTMLDivElement>(null); // Референс на сам елемент-контейнер

  // Вибираємо правильний масив повідомлень на основі поточної мови
  // Використовуємо фоллбек на англійську, якщо для поточної мови немає перекладів
  const currentLanguageMessages = messages[currentLanguage] || messages.en;

  useEffect(() => {
    if (currentLanguageMessages.length === 0) {
      return;
    }

    const timer = setInterval(() => {
      setCurrentMessageIndex(
        prevIndex => (prevIndex + 1) % currentLanguageMessages.length,
      );
    }, interval);

    return () => clearInterval(timer);
  }, [currentLanguageMessages, interval]);

  // --- Нова логіка для перетягування ---

  // Обробник початку перетягування (натискання кнопки миші)
  const onMouseDown = useCallback((event: React.MouseEvent) => {
    if (assistantRef.current) {
      setIsDragging(true);

      // Визначаємо зсув між курсором миші та верхнім лівим кутом елемента
      const rect = assistantRef.current.getBoundingClientRect();
      offset.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };

      // Змінюємо z-index, щоб перетягуваний елемент був над іншими
      assistantRef.current.style.zIndex = '1001';
      assistantRef.current.style.cursor = 'grabbing'; // Змінюємо курсор
    }
  }, []);

  // Обробник переміщення миші (під час перетягування)
  const onMouseMove = useCallback(
    (event: MouseEvent) => {
      if (!isDragging || !assistantRef.current) return;

      // Отримуємо розміри вікна
      const clientWidth = document.documentElement.clientWidth;
      const clientHeight = document.documentElement.clientHeight;

      // Отримуємо розміри елемента
      const rect = assistantRef.current.getBoundingClientRect();
      const elementWidth = rect.width;
      const elementHeight = rect.height;

      // Обчислюємо нові top/left позиції
      let newLeft = event.clientX - offset.current.x;
      let newTop = event.clientY - offset.current.y;

      // Обмежуємо позицію, щоб елемент не виходив за межі екрану
      newLeft = Math.max(0, Math.min(newLeft, clientWidth - elementWidth));
      newTop = Math.max(0, Math.min(newTop, clientHeight - elementHeight));

      // Перераховуємо в bottom/right, якщо елемент позиціонований відносно них
      const newRight = clientWidth - (newLeft + elementWidth);
      const newBottom = clientHeight - (newTop + elementHeight);

      setPosition({
        bottom: newBottom,
        right: newRight,
      });
    },
    [isDragging],
  );

  // Обробник закінчення перетягування (відпускання кнопки миші)
  const onMouseUp = useCallback(() => {
    setIsDragging(false);
    if (assistantRef.current) {
      assistantRef.current.style.zIndex = '1000'; // Повертаємо звичайний z-index
      assistantRef.current.style.cursor = 'grab'; // Повертаємо курсор
    }
  }, []);

  // Додаємо/видаляємо глобальні слухачі подій миші
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    } else {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, [isDragging, onMouseMove, onMouseUp]);

  if (currentLanguageMessages.length === 0) {
    return null;
  }

  return (
    <div
      ref={assistantRef} // Прив'язуємо референс до контейнера
      className="unicorn-assistant"
      // Динамічно встановлюємо стилі позиції
      style={{
        bottom: position.bottom,
        right: position.right,
        cursor: isDragging ? 'grabbing' : 'grab', // Змінюємо курсор
      }}
      onMouseDown={onMouseDown} // Обробник початку перетягування
    >
      <div className="message-bubble">
        <p className="message-text">
          {currentLanguageMessages[currentMessageIndex]}
        </p>
      </div>
      <img
        src={unicornImage}
        alt="Friendly Unicorn Assistant"
        className="unicorn-image"
        draggable="false"
      />
    </div>
  );
};
