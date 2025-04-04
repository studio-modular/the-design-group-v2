import { MigrateDownArgs, MigrateUpArgs, sql } from "@payloadcms/db-postgres";

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "contact" DROP CONSTRAINT "contact_meta_image_id_images_id_fk";

  ALTER TABLE "portfolio" DROP CONSTRAINT "portfolio_meta_image_id_images_id_fk";

  ALTER TABLE "work" DROP CONSTRAINT "work_meta_image_id_images_id_fk";

  DROP INDEX IF EXISTS "contact_meta_meta_image_idx";
  DROP INDEX IF EXISTS "portfolio_meta_meta_image_idx";
  DROP INDEX IF EXISTS "work_meta_meta_image_idx";
  ALTER TABLE "contact" DROP COLUMN IF EXISTS "meta_title";
  ALTER TABLE "contact" DROP COLUMN IF EXISTS "meta_description";
  ALTER TABLE "contact" DROP COLUMN IF EXISTS "meta_image_id";
  ALTER TABLE "portfolio" DROP COLUMN IF EXISTS "meta_title";
  ALTER TABLE "portfolio" DROP COLUMN IF EXISTS "meta_description";
  ALTER TABLE "portfolio" DROP COLUMN IF EXISTS "meta_image_id";
  ALTER TABLE "work" DROP COLUMN IF EXISTS "meta_title";
  ALTER TABLE "work" DROP COLUMN IF EXISTS "meta_description";
  ALTER TABLE "work" DROP COLUMN IF EXISTS "meta_image_id";`);
}

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "contact" ADD COLUMN "meta_title" varchar;
  ALTER TABLE "contact" ADD COLUMN "meta_description" varchar;
  ALTER TABLE "contact" ADD COLUMN "meta_image_id" integer;
  ALTER TABLE "portfolio" ADD COLUMN "meta_title" varchar;
  ALTER TABLE "portfolio" ADD COLUMN "meta_description" varchar;
  ALTER TABLE "portfolio" ADD COLUMN "meta_image_id" integer;
  ALTER TABLE "work" ADD COLUMN "meta_title" varchar;
  ALTER TABLE "work" ADD COLUMN "meta_description" varchar;
  ALTER TABLE "work" ADD COLUMN "meta_image_id" integer;
  DO $$ BEGIN
   ALTER TABLE "contact" ADD CONSTRAINT "contact_meta_image_id_images_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "portfolio" ADD CONSTRAINT "portfolio_meta_image_id_images_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "work" ADD CONSTRAINT "work_meta_image_id_images_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  CREATE INDEX IF NOT EXISTS "contact_meta_meta_image_idx" ON "contact" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "portfolio_meta_meta_image_idx" ON "portfolio" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "work_meta_meta_image_idx" ON "work" USING btree ("meta_image_id");`);
}
