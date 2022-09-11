/*
  Warnings:

  - You are about to drop the column `type` on the `Site` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Site" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "featured" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Site" ("featured", "id", "name", "password", "url", "username") SELECT "featured", "id", "name", "password", "url", "username" FROM "Site";
DROP TABLE "Site";
ALTER TABLE "new_Site" RENAME TO "Site";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
