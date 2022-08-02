const formatDate = (createdAt) => {
  const creationDate = new Date(createdAt);
  const minutes = creationDate.getMinutes();
  const hours = creationDate.getHours();
  const day = creationDate.getDate();
  const month = creationDate.getMonth();
  const year = creationDate.getFullYear();
  return `${hours}:${minutes} - ${day}/${month}/${year}`;
};

export default formatDate;
