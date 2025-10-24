/*
  Warnings:

  - Made the column `dateEnd` on table `Project` required. This step will fail if there are existing NULL values in that column.
  - Made the column `dateFinished` on table `Project` required. This step will fail if there are existing NULL values in that column.
  - Made the column `dateStart` on table `Project` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Project" ALTER COLUMN "dateEnd" SET NOT NULL,
ALTER COLUMN "dateFinished" SET NOT NULL,
ALTER COLUMN "dateStart" SET NOT NULL;
