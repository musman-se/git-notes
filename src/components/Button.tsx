// External Dependencies
import { tv } from 'tailwind-variants';

const button = tv({
    base: 'font-normal rounded-[4px] py-3 px-8',
    variants: {
      color: {
        white: 'font-semibold bg-white text-[#003B44]',
        primary: 'bg-blue-500 text-white',
        secondary: 'bg-purple-500 text-white'
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
    color: 'white' | 'primary' | 'secondary'
}

const Button = ({ text, size, color }: ButtonProps) => {
    return (
        <button className={button({ size, color })}>
          {text}
        </button>
    )
}

export default Button;