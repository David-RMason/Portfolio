export default function Card({ className, children, as: Component = "div" }) {
  return (
    <Component className={className ? className + " -card" : "-card"}>
      {children}
    </Component>
  );
}
