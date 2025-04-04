import { MigrateDownArgs, MigrateUpArgs, sql } from "@payloadcms/db-postgres";

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "home_blocks_panels_panels" ALTER COLUMN "asset_id" SET NOT NULL;
  ALTER TABLE "portfolio_blocks_panels_panels" ALTER COLUMN "asset_id" SET NOT NULL;`);
}

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "home_blocks_panels_panels" ALTER COLUMN "asset_id" DROP NOT NULL;
  ALTER TABLE "portfolio_blocks_panels_panels" ALTER COLUMN "asset_id" DROP NOT NULL;`);
}
