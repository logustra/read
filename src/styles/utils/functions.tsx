export const rem = (size: string) => {
  const remSize = Number(size.replace('px', '')) / 16
  return `${remSize}rem`
} 
