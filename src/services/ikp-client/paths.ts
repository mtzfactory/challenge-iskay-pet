type PathName = 'checkin' | 'stores';

export const paths: Record<PathName, `/${string}`> = Object.freeze({
  checkin: '/checkin',
  stores: '/stores',
} as const);
