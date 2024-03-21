/*
  Warnings:

  - You are about to drop the column `gift_user_relId` on the `Gift` table. All the data in the column will be lost.
  - Added the required column `giftId` to the `gift_user_rel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `gift_user_rel` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Gift" DROP CONSTRAINT "Gift_gift_user_relId_fkey";

-- AlterTable
ALTER TABLE "Gift" DROP COLUMN "gift_user_relId";

-- AlterTable
ALTER TABLE "gift_user_rel" ADD COLUMN     "giftId" INTEGER NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "gift_user_rel" ADD CONSTRAINT "gift_user_rel_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "gift_user_rel" ADD CONSTRAINT "gift_user_rel_giftId_fkey" FOREIGN KEY ("giftId") REFERENCES "Gift"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
