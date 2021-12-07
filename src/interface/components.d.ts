import { InputHTMLAttributes } from "react";

export interface DashboardProps {
  children: JSX.Element;
}
/**
 * atoms
 */

export interface ButtonProps extends InputHTMLAttributes<HTMLButtonElement>  {
  title?: string;
}

export interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  upload?: boolean;
}

export interface TextAreaTextProps
  extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

/**
 * Organisms
 */
export interface FormProps extends InputHTMLAttributes<HTMLFormElement> {
  children: JSX.Element;
  title: string;
  desc?: string;
  save?: boolean;
  redirect?: {
    title: string;
    route: string;
  };
  remove?: boolean;
  cancel?: boolean;
  onSave?: (e) => void;
  onDelete?: (e) => void;
  onCancel?: (e) => void;
}

interface ColumnType {
  name: string;
  key: string | number;
  type: "image" | "none";
}

export interface TableProps extends InputHTMLAttributes<HTMLTableElement> {
  readonly data: [];
  readonly columns: ColumnType[];
  onClickElement: (e) => void;
  redirectTo?: string;
}
