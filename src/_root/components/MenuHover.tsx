type Props = {
  text: string;
};

const MenuHover = ({ text }: Props) => {
  return (
    <div
      className={`menuHover w-full max-w-fit ml-auto h-full group overflow-hidden relative group hover:text-white transition-all ease-in-out duration-200 tracking-[1px]`}
    >
      <span className="inline-block margin-0">{text}</span>
      <span className="line group-hover:w-full group-hover:left-0 w-0 h-[1px] bg-accent-500 inline-block absolute right-0 bottom-0 transition-all duration-300 ease-in-out"></span>
    </div>
  );
};

export default MenuHover;
