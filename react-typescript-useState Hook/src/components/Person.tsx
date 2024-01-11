import { PersonProps } from "./Person.Types";
export default function Person(props: PersonProps) {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  );
}
