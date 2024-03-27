/*
  Warnings:

  - A unique constraint covering the columns `[user_id,gift_id]` on the table `gift_user_rel` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "gift_user_rel_user_id_gift_id_key" ON "gift_user_rel"("user_id", "gift_id");
