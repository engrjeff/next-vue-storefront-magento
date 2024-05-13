import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'aria-[invalid=true]:focus:ring-transparent aria-[invalid=true]:border-inputError h-10 w-full border border-[#666] px-3 py-1.5 outline-none focus:ring-1 focus:bg-[#f7f8f9] focus:ring-transparent focus-visible:border-black',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
