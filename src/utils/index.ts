export const isNumber = (value: string | number) =>  {
    return !isNaN(Number(value));
}