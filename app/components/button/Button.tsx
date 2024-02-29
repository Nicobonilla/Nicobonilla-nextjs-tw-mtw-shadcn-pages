
type IButtonProps = {
  children: React.ReactNode;
  onClick?: () => void | Promise<string>;
  type?: "submit" | "button" | "reset"; // Add type prop
  banner?:boolean;
  form?:boolean;
};

const Button = ({ banner, form, children, onClick, type = "button" }: IButtonProps) => {
  const banner_button = banner ? 'md:py-6 mx-2':'';
  const form_button = form ? 'w-full':'max-w-sm ';
  return (
<>
    <button type={type} 
    className={`inline-block rounded-md text-center text-white bg-primary-500 hover:bg-primary-600 text-xl my-2 py-2 px-6 cursor-pointer ${banner_button}  ${form_button}`}
    onClick={onClick}>
      {children}
    </button>
  </>);
};
export { Button };
