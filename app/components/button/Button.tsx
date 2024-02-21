import classNames from 'classnames';

type IButtonProps = {
  xl?: boolean;
  children: React.ReactNode;
  onClick?: () => void | Promise<string>;
  type?: "submit" | "button" | "reset"; // Add type prop
};

const Button = ({ xl, children, onClick, type = "button" }: IButtonProps) => {
  const btnClass = classNames(
    'mt-6 w-full inline-block rounded-md text-center text-white bg-primary-500 hover:bg-primary-600',
    {
      'text-lg font-semibold py-2 px-4': !xl,
      'font-extrabold text-xl py-4 px-6': xl,
    }
  );

  return (
    // Change to button element and pass the type prop
    <button type={type} className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
};

export { Button };
