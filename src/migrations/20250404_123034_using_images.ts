import { MigrateDownArgs, MigrateUpArgs, sql } from "@payloadcms/db-postgres";

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "home_blocks_panels_panels" DROP CONSTRAINT "home_blocks_panels_panels_asset_id_images_id_fk";
  
  ALTER TABLE "portfolio_blocks_panels_panels" DROP CONSTRAINT "portfolio_blocks_panels_panels_asset_id_images_id_fk";
  
  DROP INDEX IF EXISTS "home_blocks_panels_panels_asset_idx";
  DROP INDEX IF EXISTS "portfolio_blocks_panels_panels_asset_idx";
  ALTER TABLE "home_blocks_panels_panels" DROP COLUMN IF EXISTS "asset_id";
  ALTER TABLE "portfolio_blocks_panels_panels" DROP COLUMN IF EXISTS "asset_id";`);
}

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "home_blocks_panels_panels" ADD COLUMN "asset_id" integer NOT NULL;
  ALTER TABLE "portfolio_blocks_panels_panels" ADD COLUMN "asset_id" integer NOT NULL;
  DO $$ BEGIN
   ALTER TABLE "home_blocks_panels_panels" ADD CONSTRAINT "home_blocks_panels_panels_asset_id_images_id_fk" FOREIGN KEY ("asset_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_panels_panels" ADD CONSTRAINT "portfolio_blocks_panels_panels_asset_id_images_id_fk" FOREIGN KEY ("asset_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "home_blocks_panels_panels_asset_idx" ON "home_blocks_panels_panels" USING btree ("asset_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_panels_panels_asset_idx" ON "portfolio_blocks_panels_panels" USING btree ("asset_id");`);
}
