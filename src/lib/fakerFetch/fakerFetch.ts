export const getOneData = async (_dataClass: string) => {
  const data = await fetch(`/api/${_dataClass}?length=1`);
  return data.json();
};

export const getData = async (_dataClass: string, _length: number) => {
  const data = await fetch(`/api/${_dataClass}?length=${_length}`);
  return data.json();
};
