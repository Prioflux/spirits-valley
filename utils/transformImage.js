export default (image, option) => {
  if (!image) return '';
  if (!option) return '';

  const path = `${image}/m/${option}`;
  return path;
};
