interface IDate {
  dateString: string;
}

export const convertTime = ({ dateString }: IDate) => {
  const date = new Date(dateString);
  const formattedDate = `${date.getFullYear()}/${
    date.getMonth() + 1
  }/${date.getDate()}`;
  return formattedDate;
};
