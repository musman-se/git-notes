// External Dependencies
import { tv } from 'tailwind-variants';
import classNames from 'classnames';

const button = tv({
    base: 'font-normal rounded-[4px] py-3 px-8',
    variants: {
      color: {
        white: 'font-semibold bg-white text-darkGreen',
        primary: 'font-semibold bg-darkGreen text-white',
        secondary: 'bg-purple-500 text-white',
        plain: "bg-transparent text-darkGreen"
      },
      size: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg'
      }
    },
});

type ButtonProps = {
    text: string,
    size: 'sm' | 'md' | 'lg',
    color: 'white' | 'primary' | 'secondary' | 'plain',
    className?: string
}

const Button = ({ text, size, color, className }: ButtonProps) => {
    return (
        <button className={classNames(button({ size, color }), className)}>
          {text}
        </button>
    )
}

export default Button;