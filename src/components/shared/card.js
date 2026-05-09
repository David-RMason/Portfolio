export default function Card({ classes, children }) {
  return (
    <div className={classes ? classes + " -card" : "-card"}>{children}</div>
  );
}
