export const comma = (text: string | number) => {
  const commaText = String(text).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return commaText;
};
