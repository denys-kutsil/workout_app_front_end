import { string, bool, number as yupNumber, mixed, date } from 'yup';

export const email = string().email().trim().required();

export const name = string().trim().required('full name is a required field');

export const text = string().trim().required();

export const number = yupNumber().required();

export const acceptPolicy = bool().oneOf([true], 'You must accept the terms and conditions');

export const scheduleStart = date()
  .typeError('Date must be in the format mm/dd/yyyy hh:mm (a|p)m')
  .required()
  .test('Schedule Start', 'Start date must be in the future.', (value) =>
    value ? value > new Date() : false,
  );

export const scheduleEnd = date()
  .typeError('Date must be in the format mm/dd/yyyy hh:mm (a|p)m')
  .nullable()
  .test('scheduleEnd', 'End Date must be after Start Date', (value, context) =>
    value ? value > context.parent?.scheduleStart : true,
  );

export const state = string().when('country', {
  is: (value: string) => value !== 'US',
  then: (rule) => rule.length(0),
  otherwise: (rule) => rule.required(),
});

export const password = string()
  .trim()
  .required()
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
    'Password must contain at least 8 characters, at least one number and both lower and uppercase letters',
  );

export const fileExt = (allowedFileTypes: string[]) =>
  mixed().test('fileType', 'This type of file is not allowed', (value: File) => {
    const type = value?.type ?? '';

    const regexList = allowedFileTypes.map(
      (x) => new RegExp(x.replace('.', '\\.').replace('*', '.*')),
    );

    return regexList.some((regex) => regex.test(type));
  });

export function enumValue<T extends string | number>(enumType: { [s: string]: T }) {
  return yupNumber().oneOf(
    Object.values<T>(enumType).reduce<number[]>(
      (acc, val) => (typeof val === 'number' ? [...acc, val] : acc),
      [],
    ),
  );
}

export const fileArrayMaxSize = (maxSizeKb: number) => (arr: unknown) => {
  if (!Array.isArray(arr)) {
    return false;
  }
  const totalSize = arr.reduce((acc, file) => acc + (file?.size ?? 0), 0);
  return totalSize <= maxSizeKb;
};
