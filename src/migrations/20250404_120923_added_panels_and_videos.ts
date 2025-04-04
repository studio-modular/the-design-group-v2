import { MigrateDownArgs, MigrateUpArgs, sql } from "@payloadcms/db-postgres";

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "home_blocks_videos_videos" CASCADE;
  DROP TABLE "home_blocks_videos" CASCADE;
  DROP TABLE "home_blocks_panels_panels" CASCADE;
  DROP TABLE "home_blocks_panels" CASCADE;
  DROP TABLE "portfolio_blocks_videos_videos" CASCADE;
  DROP TABLE "portfolio_blocks_videos" CASCADE;
  DROP TABLE "portfolio_blocks_panels_panels" CASCADE;
  DROP TABLE "portfolio_blocks_panels" CASCADE;`);
}

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "home_blocks_videos_videos" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "home_blocks_videos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "home_blocks_panels_panels" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "home_blocks_panels" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "portfolio_blocks_videos_videos" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "portfolio_blocks_videos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "portfolio_blocks_panels_panels" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "portfolio_blocks_panels" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  DO $$ BEGIN
   ALTER TABLE "home_blocks_videos_videos" ADD CONSTRAINT "home_blocks_videos_videos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_blocks_videos"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_blocks_videos" ADD CONSTRAINT "home_blocks_videos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_blocks_panels_panels" ADD CONSTRAINT "home_blocks_panels_panels_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_blocks_panels"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_blocks_panels" ADD CONSTRAINT "home_blocks_panels_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_videos_videos" ADD CONSTRAINT "portfolio_blocks_videos_videos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolio_blocks_videos"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_videos" ADD CONSTRAINT "portfolio_blocks_videos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolio"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_panels_panels" ADD CONSTRAINT "portfolio_blocks_panels_panels_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolio_blocks_panels"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_panels" ADD CONSTRAINT "portfolio_blocks_panels_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolio"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "home_blocks_videos_videos_order_idx" ON "home_blocks_videos_videos" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_videos_videos_parent_id_idx" ON "home_blocks_videos_videos" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_videos_order_idx" ON "home_blocks_videos" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_videos_parent_id_idx" ON "home_blocks_videos" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_videos_path_idx" ON "home_blocks_videos" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_blocks_panels_panels_order_idx" ON "home_blocks_panels_panels" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_panels_panels_parent_id_idx" ON "home_blocks_panels_panels" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_panels_order_idx" ON "home_blocks_panels" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_panels_parent_id_idx" ON "home_blocks_panels" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_panels_path_idx" ON "home_blocks_panels" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_videos_videos_order_idx" ON "portfolio_blocks_videos_videos" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_videos_videos_parent_id_idx" ON "portfolio_blocks_videos_videos" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_videos_order_idx" ON "portfolio_blocks_videos" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_videos_parent_id_idx" ON "portfolio_blocks_videos" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_videos_path_idx" ON "portfolio_blocks_videos" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_panels_panels_order_idx" ON "portfolio_blocks_panels_panels" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_panels_panels_parent_id_idx" ON "portfolio_blocks_panels_panels" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_panels_order_idx" ON "portfolio_blocks_panels" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_panels_parent_id_idx" ON "portfolio_blocks_panels" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_panels_path_idx" ON "portfolio_blocks_panels" USING btree ("_path");`);
}
