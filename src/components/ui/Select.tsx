import { SelectHTMLAttributes } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
}

export function Select({ label, id, children, ...rest }: SelectProps) {
  return (
    <div className="input-wrapper">
      {label && <label htmlFor={id}>{label}</label>}
      <select id={id} {...rest}>
        {children}
      </select>
    </div>
  );
}