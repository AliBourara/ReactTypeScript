type InputProps = {
  value: string;
  handelChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: InputProps) => {
  const handelInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  return <input type="text" value={props.value} onChange={handelInputChange} />;
};

export default Input;
