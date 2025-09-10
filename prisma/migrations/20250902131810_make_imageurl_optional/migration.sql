-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "stock" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "unit" TEXT NOT NULL,
    "package" TEXT NOT NULL,
    "imageUrl" TEXT
);
INSERT INTO "new_Product" ("category", "id", "imageUrl", "name", "package", "price", "stock", "unit") SELECT "category", "id", "imageUrl", "name", "package", "price", "stock", "unit" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
