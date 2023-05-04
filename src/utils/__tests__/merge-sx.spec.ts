import { mergeSx } from '@/utils';

describe('mergeSx', () => {
  it('returns an empty array when no arguments are passed', () => {
    const result = mergeSx();

    expect(result).toEqual([]);
  });

  it('returns an array with a single item when passed a single SxProps object', () => {
    const sxProps = { color: 'primary.main', fontWeight: 'bold' };
    const result = mergeSx(sxProps);

    expect(result).toEqual([sxProps]);
  });

  it('returns an array with multiple items when passed multiple SxProps objects', () => {
    const sxProps1 = { color: 'primary.main', fontWeight: 'bold' };
    const sxProps2 = { padding: '1rem' };
    const result = mergeSx(sxProps1, sxProps2);

    expect(result).toEqual([sxProps1, sxProps2]);
  });

  it('unwraps array parameters and merges them into the result array', () => {
    const sxProps1 = { color: 'primary.main', fontWeight: 'bold' };
    const sxProps2 = { padding: '1rem' };
    const result = mergeSx(sxProps1, [sxProps2]);

    expect(result).toEqual([sxProps1, sxProps2]);
  });

  it('filters out undefined parameters', () => {
    const sxProps1 = { color: 'primary.main', fontWeight: 'bold' };
    const result = mergeSx(undefined, sxProps1, undefined);

    expect(result).toEqual([sxProps1]);
  });
});
