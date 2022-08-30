/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Vote` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Vote` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `Vote` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Vote" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
DROP COLUMN "value",
ADD COLUMN     "numberOfVotes" INTEGER NOT NULL DEFAULT 0;
