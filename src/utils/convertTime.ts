import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(customParseFormat);
dayjs.extend(utc);
dayjs.extend(timezone);
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

export const convertDate = ({ dateString }: IDate) => {
  console.log("dateString", dateString);

  const dateObject = new Date(dateString);
  const formattedDate = dayjs(dateObject).format("YYYY/MM/DD");

  return formattedDate;
};
