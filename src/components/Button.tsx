// External Dependencies
import { tv } from 'tailwind-variants';
import classNames from 'classnames';

const button = tv({
    base: 'font-normal rounded-[4px] py-3 px-8',
    variants: {
      color: {
        white: 'font-semibold bg-white text-darkGreen',
        primary: 'font-semibold bg-darkGreen text-white',
        secondary: 'font-semibold bg-lightGray text-darkGreen',
        plain: "bg-transparent text-darkGreen"
      },
      size: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg'
      },
    },
});

type ButtonProps = {
    text: string,
    size: 'sm' | 'md' | 'lg',
    color: 'white' | 'primary' | 'secondary' | 'plain',
    className?: string,
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'],
    disabled?: boolean
}

const Button = ({ type = 'button', text, size, color, disabled = false, className }: ButtonProps) => {
    return (
        <button className={classNames(button({ size, color }), className)} type={type} disabled={disabled}>
          {text}
        </button>
    )
}

export default Button;