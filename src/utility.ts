export const titleCase = (data: string) => {
  const dt = data.toLowerCase();
  return dt.charAt(0).toUpperCase() + dt.slice(1);
}