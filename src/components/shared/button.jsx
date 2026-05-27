export default function Button({
  className = "",
  onClick,
  href,
  download,
  children,
  target = "_blank",
  rel = "noopener noreferer",
}) {
  const Component = href ? "a" : "button";

  const props = href
    ? { href, download, rel, target }
    : { onClick, type: "button" };

  return (
    <Component {...props} className={`${className} pf-button`}>
      {children}
    </Component>
  );
}
