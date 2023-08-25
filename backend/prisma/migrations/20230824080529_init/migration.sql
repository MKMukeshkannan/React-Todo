-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "checked" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);
