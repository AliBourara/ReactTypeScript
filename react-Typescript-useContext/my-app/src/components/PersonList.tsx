import { Name } from "./Person.Types";
type PersonsListProps = {
  names: Name[];
};

export const PersonList = (props: PersonsListProps) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h1 key={name.first}>
            {name.first} {name.last}
          </h1>
        );
      })}
    </div>
  );
};
