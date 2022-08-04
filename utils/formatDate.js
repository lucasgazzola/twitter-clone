const formatDate = (createdAt) => {
  const formatNumber = (number) => {
    return number < 10 ? `0${number}` : number;
  };

  const creationDate = new Date(createdAt);
  const minutes = creationDate.getMinutes();
  const hours = creationDate.getHours();
  const day = creationDate.getDate();
  const month = creationDate.getMonth();
  const year = creationDate.getFullYear();
  return `${formatNumber(hours)}:${formatNumber(minutes)} - ${formatNumber(
    day
  )}/${formatNumber(month)}/${formatNumber(year)}`;
};

export default formatDate;
