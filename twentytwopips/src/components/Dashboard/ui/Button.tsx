import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'outline' | 'subtle' | 'danger' | 'ghost';
type Size = 'sm' | 'md' | 'lg' | 'icon';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    variant?: Variant;
    size?: Size;
    isLoading?: boolean;
    icon?: ReactNode;
    className?: string;
}

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    isLoading = false,
    icon,
    className = '',
    ...props
}: ButtonProps) {
    const base =
        "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants: Record<Variant, string> = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800',
        outline: 'border border-gray-300 text-gray-700 hover:bg-gray-100 active:bg-gray-200',
        subtle: 'bg-gray-100 text-gray-700 hover:bg-gray-200 active:bg-gray-300',
        danger: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800',
        ghost: 'text-gray-700 hover:bg-gray-100 active:bg-gray-200',
    };

    const sizes: Record<Size, string> = {
        sm: 'px-3 py-1 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-5 py-3 text-lg',
        icon: 'p-2',
    };

    return (
        <button
            className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
            disabled={isLoading}
            {...props}
        >
            {isLoading && (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
            )}

            {icon && <span className="mr-2">{icon}</span>}

            {children}
        </button>
    );
}
