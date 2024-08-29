UPDATE MenuItemVariants
SET IsUnavailable = true
WHERE Id IN (
    SELECT miv.Id
    FROM MenuItemVariants miv
    INNER JOIN MenuItems mi ON miv.MenuItem_Id = mi.Id
    INNER JOIN ItemCategories ic ON mi.Category_Id = ic.Id
    WHERE ic.Id IN (2, 3, 5, 6, 7, 8, 9, 10, 11, 15)
);