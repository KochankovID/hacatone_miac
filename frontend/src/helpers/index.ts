export const baseUrl = 'http://127.0.0.1:1883/api'
export const enumToArray = (enumme: any) => Object.keys(enumme).map((key) => enumme[key]);
export const parseDate = (stringDate: string) => {
    const newData = new Date(stringDate);
    return `${newData.getDate()}.${newData.getMonth()}.${newData.getFullYear()} - ${newData.getHours()}:${newData.getMinutes()}`;
  };