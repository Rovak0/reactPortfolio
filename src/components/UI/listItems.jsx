//takes in props (I don't know what the expanded props is doing)
//children is the thing being displayed 
//it gets called, and I'm not sure if props is even fed into the function

export default function ListItem({ children, ...props }) {
    return (
      <li
        className="list-group-item pt-4 d-flex justify-content-center align-items-center"
        {...props}
      >
        {children}
      </li>
    );
  }