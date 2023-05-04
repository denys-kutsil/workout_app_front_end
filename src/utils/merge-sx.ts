import type { SxProps } from '@mui/material';
import type { SystemStyleObject } from '@mui/system';

export const mergeSx = <Theme extends object = {}>(
  ...args: (SxProps<Theme> | undefined)[]
): Array<boolean | SystemStyleObject<Theme> | ((theme: Theme) => SystemStyleObject<Theme>)> => {
  return args.reduce<
    Array<boolean | SystemStyleObject<Theme> | ((theme: Theme) => SystemStyleObject<Theme>)>
  >((acc, param) => {
    if (typeof param === 'undefined') {
      return acc;
    }
    // unwrap array parameters if passed
    return Array.isArray(param) ? [...acc, ...param] : [...acc, param];
  }, []);
};
