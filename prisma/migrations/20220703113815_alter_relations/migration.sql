/*
  Warnings:

  - A unique constraint covering the columns `[postId]` on the table `Vote` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Vote_postId_key" ON "Vote"("postId");
