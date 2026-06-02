export default function Button({
  className = "",
  onClick,
  href,
  download,
  children,
  target = "_blank",
  rel = "noopener noreferer",
  ariaLabel,
}) {
  const Component = href ? "a" : "button";

  const props = href
    ? { href, download, rel, target, onClick }
    : { onClick, type: "button" };

  return (
    <Component
      {...props}
      className={`${className} pf-button`}
      aria-label={ariaLabel}
    >
      {children}
    </Component>
  );
}
