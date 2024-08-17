type LocalStorageItemType = "string" | "number";

function getTypedItem(item: string, type: LocalStorageItemType) {
  if (type === "string") {
    return item.toString();
  } else {
    return Number(item);
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
