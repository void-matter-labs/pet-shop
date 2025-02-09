import { ReactNode, ElementType, InputHTMLAttributes, LabelHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    as?: ElementType;
    label?: string;
    forId?: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    labelProps?: LabelHTMLAttributes<HTMLLabelElement>
    inputWrapperProps?: LabelHTMLAttributes<HTMLLabelElement>
    
}
const centerClasses = 'justify-self-center self-center';

export default function Input ({
    label,
    forId,
    leftIcon,
    rightIcon,
    labelProps,
    inputWrapperProps,
    as: Component = 'div',
    ...rest
}: InputProps) {
    return (
        <Component>
            {label && <label htmlFor={forId} {...labelProps}>{label}</label>}
            <label className={`grid grid-cols-10 border-b border-black pb-1`} htmlFor={forId} {...inputWrapperProps}>
                <div className={`col-start-1 col-end-3 md:col-end-2 ${centerClasses}`}>
                    {leftIcon}
                </div>
                <input className={`col-start-3 col-end-9 md:col-start-2 md:col-end-10 outline-none`} type="text" id={forId} {...rest}/>
                <div className={`col-start-9 col-end-11 md:col-start-10 md:col-end-11 ${centerClasses}`}>
                    {rightIcon}
                </div>
            </label>
        </Component>
    );
};