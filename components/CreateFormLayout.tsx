'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import ArrowUpRightIcon from './Icons/ArrowUpRightIcon';
import FormActions from './FormActions';
interface Question {
  id: string;
  type: 'input' | 'textarea' | 'radio' | 'number' | 'url' | 'date';
  question?: string;
  helpText?: string;
  options?: string[];
}
interface Form {
  id?: string;
  title: string;
  questions: Question[];
  isDraft?: boolean;
  isPublished?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
interface CreateFormLayoutProps {
  children: React.ReactNode;
}

const CreateFormLayout: React.FC<CreateFormLayoutProps> = ({ children }) => {
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState<Form>({
    title: 'Untitled form',
    questions: [],
    isDraft: true,
    isPublished: false
  });
  const updateTitle = (title: string) => {
    setForm(prev => ({ ...prev, title }));
  };
  const handleTitleBlur = () => setIsEditingTitle(false);
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      setIsEditingTitle(false);
    }
  };

  const handleTitleClick = () => setIsEditingTitle(true);

  return (
    <div className="flex flex-col relative min-h-screen max-w-[640px] mx-auto bg-background border-x">
      <header className="sticky top-0 z-10 flex items-center justify-between p-4 bg-background border-b">
        <div className="flex items-center gap-2">
          {isEditingTitle ? (
            <Input
              type="text"
              value={form.title}
              onChange={(e) => updateTitle(e.target.value)}
              onBlur={handleTitleBlur}
              onKeyDown={handleKeyDown}
              className="h-8 px-2 py-1 max-w-[200px]"
              autoFocus
            />
          ) : (
            <Button
              variant='ghost'
              size='sm'
              className="flex items-center px-2 mx-0 text-muted-foreground"
              onClick={handleTitleClick}
            >
              <span className="text-base font-semibold">{form.title}</span>
            </Button>
          )}
        </div>
        <Button variant="outline" size="sm">
          Preview
          <ArrowUpRightIcon />
        </Button>
      </header>

      <main className="flex-1 mb-20 rounded-lg">
        {children}
      </main>

      <FormActions
        formId={form.id}
        isLoading={isLoading}
        onSaveDraft={async () => {
        }}
        onPublish={async () => {
        }}
      />
    </div>
  );
};

export default CreateFormLayout;