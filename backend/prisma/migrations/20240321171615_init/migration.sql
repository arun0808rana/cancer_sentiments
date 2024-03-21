-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gift" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "gift_user_relId" INTEGER,

    CONSTRAINT "Gift_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gift_user_rel" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "gift_user_rel_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Gift" ADD CONSTRAINT "Gift_gift_user_relId_fkey" FOREIGN KEY ("gift_user_relId") REFERENCES "gift_user_rel"("id") ON DELETE SET NULL ON UPDATE CASCADE;
