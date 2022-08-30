/*
  Warnings:

  - You are about to drop the column `numberOfVotes` on the `Vote` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "numberOfVotes" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Vote" DROP COLUMN "numberOfVotes";
