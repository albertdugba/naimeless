/*
  Warnings:

  - Added the required column `author` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "author" TEXT NOT NULL;
