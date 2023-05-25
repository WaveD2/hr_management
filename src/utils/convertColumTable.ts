export const convertColumTable = (cols) => {
  const newObj = Object?.keys(cols[0]);
  const filteredKeys = newObj.filter((key) =>
    cols.some((obj) => obj[key] !== null)
  );

  const result = cols.map((obj) =>
    Object.fromEntries(
      Object.entries(obj)
        .filter(
          ([key]) =>
            filteredKeys.includes(key) &&
            key !== "old_staff_id" &&
            key !== "updated_at" &&
            key !== "created_at" &&
            key !== "deleted_at" &&
            key !== "contracts" &&
            key !== "users"
        )
        .map(([key, value]) => [key, value === null ? "" : value])
    )
  );
  const newArray = result.map((obj) => {
    const newObj = {};
    for (const key in obj) {
      newObj[key] = String(obj[key]);
    }
    return newObj;
  });
  return newArray;
};
