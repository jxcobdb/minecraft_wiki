interface Props {
  onClick: () => void;
  children: string;
  type?: "default" | "animated";
}

const Button: React.FC<Props> = ({ type = "default", onClick, children }) => {
  return (() => {
    switch (type) {
      case "animated": {
        return (
          <button
            onClick={onClick}
            className="group relative ml-0 mt-5 flex h-14 w-auto items-center justify-center px-8 text-base font-medium leading-snug text-white sm:ml-4 sm:mt-0">
            <span className="duration-250 absolute left-0 top-0 z-10 block h-full w-full rounded-full bg-gradient-to-r from-dark-800 to-dark-900 transition-all ease-in-out md:w-14 md:group-hover:w-full"></span>
            <span className="relative z-20">{children}</span>
          </button>
        );
      }
      default: {
        return (
          <button
            className="duration-250 flex h-14 w-auto items-center justify-center rounded-full bg-custom-orange-100  px-8 py-4 text-base font-semibold leading-snug text-custom-black transition ease-in-out hover:bg-custom-yellow hover:text-custom-black focus:outline-none"
            onClick={onClick}>
            {children}
          </button>
        );
      }
    }
  })();
};
export default Button;
