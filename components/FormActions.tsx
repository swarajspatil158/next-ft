import React from 'react';
import { Button } from '@/components/ui/button';
import DraftIcon from './Icons/DraftIcon';
import CheckIcon from './Icons/CheckIcon';

interface FormActionsProps {
  formId?: string;
  isLoading: boolean;
  onSaveDraft: () => Promise<void>;
  onPublish: () => Promise<void>;
}

const FormActions: React.FC<FormActionsProps> = ({
  formId,
  isLoading,
  onSaveDraft,
  onPublish,
}) => {




  return (
    <div className="flex justify-between items-center p-4 sticky bottom-0 z-10 bg-background border-t">
      <Button
        variant="outline"
        size="sm"
        disabled={true || isLoading}
        className="flex items-center gap-2"
      >
        <DraftIcon />
        <span>Save as Draft</span>
      </Button>
      <Button
        variant="default"
        size="sm"
        disabled={isLoading || !formId}
        className="flex items-center gap-2"
      >
        <CheckIcon />
        <span>Publish form</span>
      </Button>
    </div>
  );
};

export default FormActions;