-- DropForeignKey
ALTER TABLE "comments" DROP CONSTRAINT "comments_PostId_fkey";

-- DropForeignKey
ALTER TABLE "comments" DROP CONSTRAINT "comments_parentId_fkey";

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_PostId_fkey" FOREIGN KEY ("PostId") REFERENCES "posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "comments"("id") ON DELETE CASCADE ON UPDATE CASCADE;
