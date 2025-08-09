import { clsx } from 'clsx';

export function combineClass(...inputs: Parameters<typeof clsx>) {
  return clsx(inputs);
}
