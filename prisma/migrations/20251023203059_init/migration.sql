/*
  Warnings:

  - You are about to drop the `Projects_Rates` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Rates` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tasks` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `rateId` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Projects_Rates" DROP CONSTRAINT "Projects_Rates_project_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."Projects_Rates" DROP CONSTRAINT "Projects_Rates_rate_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."Tasks" DROP CONSTRAINT "Tasks_project_id_fkey";

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "rateId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "public"."Projects_Rates";

-- DropTable
DROP TABLE "public"."Rates";

-- DropTable
DROP TABLE "public"."Tasks";

-- CreateTable
CREATE TABLE "Rate" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "currency" VARCHAR(6) NOT NULL DEFAULT 'USD',

    CONSTRAINT "Rate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(200) NOT NULL,
    "overview" TEXT,
    "status" "StatusActivity" NOT NULL DEFAULT 'IDLE',
    "position" INTEGER DEFAULT 0,
    "project_id" INTEGER NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_rateId_fkey" FOREIGN KEY ("rateId") REFERENCES "Rate"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
