/*
  Warnings:

  - You are about to drop the column `giftId` on the `gift_user_rel` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `gift_user_rel` table. All the data in the column will be lost.
  - Added the required column `gift_id` to the `gift_user_rel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `gift_user_rel` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "gift_user_rel" DROP CONSTRAINT "gift_user_rel_giftId_fkey";

-- DropForeignKey
ALTER TABLE "gift_user_rel" DROP CONSTRAINT "gift_user_rel_userId_fkey";

-- AlterTable
ALTER TABLE "gift_user_rel" DROP COLUMN "giftId",
DROP COLUMN "userId",
ADD COLUMN     "gift_id" INTEGER NOT NULL,
ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "gift_user_rel" ADD CONSTRAINT "gift_user_rel_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "gift_user_rel" ADD CONSTRAINT "gift_user_rel_gift_id_fkey" FOREIGN KEY ("gift_id") REFERENCES "Gift"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
