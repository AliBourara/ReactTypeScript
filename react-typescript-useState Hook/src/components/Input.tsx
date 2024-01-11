type InputProps = {
  value: string;
  handelChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ value, handelChange }: InputProps) => {
  return <input type="text" value={value} onChange={handelChange} />;
};

export default Input;
