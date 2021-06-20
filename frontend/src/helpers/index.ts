export const baseUrl = 'http://84.252.131.194:1883/api'
export const enumToArray = (enumme: any) => Object.keys(enumme).map((key) => enumme[key]);
export const parseDate = (stringDate: string) => {
    const newData = new Date(stringDate);
    return `${newData.getDate()}.${newData.getMonth() + 1}.${newData.getFullYear()} - ${newData.getHours()}:${newData.getMinutes()}`;
  };