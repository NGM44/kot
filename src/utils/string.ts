export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function globalFilter<T>(
  arr: T[],
  globalFilterText: string,
  fields?: Array<keyof T>
): T[] {
  const data = arr.filter((i) => {
    const item = i as any;
    fields = fields || (Object.keys(item) as Array<keyof T>);
    for (const field of fields) {
      if (field === "optionHolderState") {
        const replacedString = item?.[field]
          .toString()
          .toLowerCase()
          .replace("_", " ");
        if (replacedString?.includes(globalFilterText.toLowerCase().trim())) {
          return true;
        }
      }
      if (
        item?.[field]
          .toString()
          .toLowerCase()
          .includes(globalFilterText.toLowerCase().trim())
      ) {
        return true;
      }
    }
    return false;
  });
  arr = data;
  return data;
}