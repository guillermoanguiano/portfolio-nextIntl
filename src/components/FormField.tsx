import React, { forwardRef } from "react";
import { FieldError } from "react-hook-form";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;
type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

type FormFieldProps =
  | (InputProps & { isTextarea?: false; error?: FieldError | undefined; label?: string })
  | (TextareaProps & { isTextarea: true; error?: FieldError | undefined; label?: string });

const FormField = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  FormFieldProps
>(({ label, isTextarea = false, error, ...props }, ref) => {
  const className = `
        bg-transparent
        border
        border-gray-600
        px-3
        rounded-lg
        text-gray-400
        placeholder:text-gray-400
        focus:outline-none
        focus:ring-0
        focus:placeholder:text-gray-400 
        focus:text-gray-400
        py-2
    `;

  return (
    <div className="flex flex-col w-full">
      {label && <label className="mb-2 text-sm font-semibold">{label}</label>}
      {isTextarea ? (
        <textarea
          ref={ref as React.Ref<HTMLTextAreaElement>}
          className={`${className} resize-none h-40`}
          {...(props as TextareaProps)}
          aria-invalid={error ? "true" : "false"}
        />
      ) : (
        <input
          ref={ref as React.Ref<HTMLInputElement>}
          className={className}
          {...(props as InputProps)}
          aria-invalid={error ? "true" : "false"}
        />
      )}
      {error && <span className="text-red-500 text-xs">{error.message}</span>}
    </div>
  );
});

FormField.displayName = "FormField";

export default FormField;
