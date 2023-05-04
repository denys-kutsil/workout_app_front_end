export const splitStrToArrayByTitle = (txt: string) => txt.split(/\d\. /).filter((i) => i.length);
