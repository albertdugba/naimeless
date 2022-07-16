-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "commentId" INTEGER;

-- CreateTable
CREATE TABLE "Reply" (
    "id" SERIAL NOT NULL,
    "body" TEXT NOT NULL,
    "commentId" INTEGER NOT NULL,

    CONSTRAINT "Reply_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Reply" ADD CONSTRAINT "Reply_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Comment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
