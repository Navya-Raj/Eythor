import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, black }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-0 ${
    px || "px-7"
  } ${black ? "text-n-1" : "text-n-8"} ${className || ""}`;
  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(black)}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(black)}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
