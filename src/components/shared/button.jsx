export default function Button({
  className = "",
  onClick,
  href,
  download,
  children,
}) {
  const Component = href ? "a" : "button";

  const props = href ? { href, download } : { onClick, type: "button" };

  return (
    <Component {...props} className={`${className} pf-button`}>
      {children}
    </Component>
  );
}
