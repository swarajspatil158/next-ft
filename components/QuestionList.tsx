import React from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import FormattedDateInput from "./ui/formatted-date-input";

type QuestionType = 'input' | 'textarea' | 'number' | 'url' | 'date';

interface Question {
  id: string;
  type: QuestionType;
  question?: string;
  helpText?: string;
}

interface QuestionListProps {
  onQuestionAdd?: () => void;
}

const QuestionInputMap: Record<QuestionType, React.FC<{ className?: string }>> = {
  input: ({ className }) => (
    <Input
      type="text"
      placeholder="Type your response here."
      className={className}
    />
  ),
  textarea: ({ className }) => (
    <Textarea
      placeholder="Type your response here."
      className={`resize-none ${className}`}
    />
  ),
  number: ({ className }) => (
    <Input
      type="number"
      placeholder="Enter a number"
      className={className}
    />
  ),
  url: ({ className }) => (
    <Input
      type="text"
      placeholder="https://www.example.com"
      className={className}
    />
  ),
  date: ({ className }) => (
    <FormattedDateInput
      type="text"
      placeholder="DD-MM-YY"
      className={className}
    />
  ),
};

const QuestionList: React.FC<QuestionListProps> = () => {
  const [questions, setQuestions] = React.useState<Question[]>([
    {
      id: '1',
      type: 'input',
      question: 'What is your name?',
    },
    {
      id: '2',
      type: 'textarea',
      question: 'Tell us about yourself',
    },
    {
      id: '3',
      type: 'number',
      question: 'How old are you?',
    },
    {
      id: '4',
      type: 'url',
      question: 'What is your favorite website?',
    },
    {
      id: '5',
      type: 'date',
      question: 'When is your birthday?',
    },
  ]);

  return (
    <div className="space-y-6 flex flex-col align-start mb-[40vh] my-4 mx-auto max-w-[592px]">
      {questions.map((question) => (
        <div key={question.id} className="relative group border border-gray-200 rounded-md p-4 hover:border-gray-300 transition-all">
          <div className="mb-2">
            <h3 className="text-lg font-medium text-gray-800">{question.question}</h3>
            {question.helpText && (
              <p className="text-sm text-gray-500 mt-1">{question.helpText}</p>
            )}
          </div>
          
          {QuestionInputMap[question.type]({ className: "w-full" })}
        </div>
      ))}
    </div>
  );
};

export default QuestionList;