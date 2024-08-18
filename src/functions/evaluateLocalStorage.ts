type LocalStorageItemType = "string" | "number" | "boolean";

function getTypedItem(item: string, type: LocalStorageItemType) {
  if (type === "string") {
    return item.toString();
  } else if (type === "number") {
    return Number(item);
  } else if (type === "boolean") {
    return Boolean(item);
  }
}

export function evaluateLocalStorage<T>(key: string, defaultValue: T): T {
  const localStorageItem = localStorage.getItem(key);

  if (localStorageItem === null) {
    return defaultValue;
  } else {
    return getTypedItem(
      localStorageItem,
      typeof defaultValue as LocalStorageItemType,
    ) as T;
  }
}
