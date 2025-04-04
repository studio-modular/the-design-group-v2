import { MigrateDownArgs, MigrateUpArgs, sql } from "@payloadcms/db-postgres";

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "users" CASCADE;
  DROP TABLE "images" CASCADE;
  DROP TABLE "files" CASCADE;
  DROP TABLE "mux_video_playback_options" CASCADE;
  DROP TABLE "mux_video" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "home_blocks_section_carousel_slides" CASCADE;
  DROP TABLE "home_blocks_section_carousel" CASCADE;
  DROP TABLE "home_blocks_section_media" CASCADE;
  DROP TABLE "home_blocks_section_01_block" CASCADE;
  DROP TABLE "home_blocks_section_02_block" CASCADE;
  DROP TABLE "home_blocks_section_03_block" CASCADE;
  DROP TABLE "home_blocks_section_04_block" CASCADE;
  DROP TABLE "home_blocks_section_05_block" CASCADE;
  DROP TABLE "home_blocks_section_06_block" CASCADE;
  DROP TABLE "home_blocks_section_07_block" CASCADE;
  DROP TABLE "home_blocks_section_08_block" CASCADE;
  DROP TABLE "home_blocks_section_09_block" CASCADE;
  DROP TABLE "home_blocks_section_10_block" CASCADE;
  DROP TABLE "home_blocks_section_11_block_slides" CASCADE;
  DROP TABLE "home_blocks_section_11_block" CASCADE;
  DROP TABLE "home_blocks_section_12_block" CASCADE;
  DROP TABLE "home_blocks_section_13_block_panels_items" CASCADE;
  DROP TABLE "home_blocks_section_13_block_panels" CASCADE;
  DROP TABLE "home_blocks_section_13_block" CASCADE;
  DROP TABLE "home_blocks_section_14_block_slides" CASCADE;
  DROP TABLE "home_blocks_section_14_block" CASCADE;
  DROP TABLE "home_blocks_section_15_block_slides" CASCADE;
  DROP TABLE "home_blocks_section_15_block" CASCADE;
  DROP TABLE "home_blocks_section_16_block" CASCADE;
  DROP TABLE "home_blocks_section_17_block_milestones" CASCADE;
  DROP TABLE "home_blocks_section_17_block" CASCADE;
  DROP TABLE "home_blocks_section_18_block_panels_slides" CASCADE;
  DROP TABLE "home_blocks_section_18_block_panels" CASCADE;
  DROP TABLE "home_blocks_section_18_block" CASCADE;
  DROP TABLE "home_blocks_section_19_block" CASCADE;
  DROP TABLE "home_blocks_section_20_block" CASCADE;
  DROP TABLE "home_blocks_section_21_block" CASCADE;
  DROP TABLE "home_blocks_section_22_block" CASCADE;
  DROP TABLE "home_blocks_section_23_block" CASCADE;
  DROP TABLE "home_blocks_section_24_block_slides" CASCADE;
  DROP TABLE "home_blocks_section_24_block" CASCADE;
  DROP TABLE "home_blocks_section_separator_block" CASCADE;
  DROP TABLE "home_blocks_full_screen_block" CASCADE;
  DROP TABLE "home_blocks_carousel_block_slides" CASCADE;
  DROP TABLE "home_blocks_carousel_block" CASCADE;
  DROP TABLE "home_blocks_questions_block_questions" CASCADE;
  DROP TABLE "home_blocks_questions_block" CASCADE;
  DROP TABLE "home_blocks_testimonial_block_testimonials" CASCADE;
  DROP TABLE "home_blocks_testimonial_block" CASCADE;
  DROP TABLE "home_blocks_highlights_highlights" CASCADE;
  DROP TABLE "home_blocks_highlights" CASCADE;
  DROP TABLE "home_blocks_section_carousel_with_thumbnail_slides" CASCADE;
  DROP TABLE "home_blocks_section_carousel_with_thumbnail" CASCADE;
  DROP TABLE "home_blocks_quote" CASCADE;
  DROP TABLE "home_blocks_property_block" CASCADE;
  DROP TABLE "home" CASCADE;
  DROP TABLE "home_rels" CASCADE;
  DROP TABLE "contact" CASCADE;
  DROP TABLE "contact_rels" CASCADE;
  DROP TABLE "portfolio_blocks_section_carousel_slides" CASCADE;
  DROP TABLE "portfolio_blocks_section_carousel" CASCADE;
  DROP TABLE "portfolio_blocks_section_media" CASCADE;
  DROP TABLE "portfolio_blocks_section_01_block" CASCADE;
  DROP TABLE "portfolio_blocks_section_02_block" CASCADE;
  DROP TABLE "portfolio_blocks_section_03_block" CASCADE;
  DROP TABLE "portfolio_blocks_section_04_block" CASCADE;
  DROP TABLE "portfolio_blocks_section_05_block" CASCADE;
  DROP TABLE "portfolio_blocks_section_06_block" CASCADE;
  DROP TABLE "portfolio_blocks_section_07_block" CASCADE;
  DROP TABLE "portfolio_blocks_section_08_block" CASCADE;
  DROP TABLE "portfolio_blocks_section_09_block" CASCADE;
  DROP TABLE "portfolio_blocks_section_10_block" CASCADE;
  DROP TABLE "portfolio_blocks_section_11_block_slides" CASCADE;
  DROP TABLE "portfolio_blocks_section_11_block" CASCADE;
  DROP TABLE "portfolio_blocks_section_12_block" CASCADE;
  DROP TABLE "portfolio_blocks_section_13_block_panels_items" CASCADE;
  DROP TABLE "portfolio_blocks_section_13_block_panels" CASCADE;
  DROP TABLE "portfolio_blocks_section_13_block" CASCADE;
  DROP TABLE "portfolio_blocks_section_14_block_slides" CASCADE;
  DROP TABLE "portfolio_blocks_section_14_block" CASCADE;
  DROP TABLE "portfolio_blocks_section_15_block_slides" CASCADE;
  DROP TABLE "portfolio_blocks_section_15_block" CASCADE;
  DROP TABLE "portfolio_blocks_section_16_block" CASCADE;
  DROP TABLE "portfolio_blocks_section_17_block_milestones" CASCADE;
  DROP TABLE "portfolio_blocks_section_17_block" CASCADE;
  DROP TABLE "portfolio_blocks_section_18_block_panels_slides" CASCADE;
  DROP TABLE "portfolio_blocks_section_18_block_panels" CASCADE;
  DROP TABLE "portfolio_blocks_section_18_block" CASCADE;
  DROP TABLE "portfolio_blocks_section_19_block" CASCADE;
  DROP TABLE "portfolio_blocks_section_20_block" CASCADE;
  DROP TABLE "portfolio_blocks_section_21_block" CASCADE;
  DROP TABLE "portfolio_blocks_section_22_block" CASCADE;
  DROP TABLE "portfolio_blocks_section_23_block" CASCADE;
  DROP TABLE "portfolio_blocks_section_24_block_slides" CASCADE;
  DROP TABLE "portfolio_blocks_section_24_block" CASCADE;
  DROP TABLE "portfolio_blocks_section_separator_block" CASCADE;
  DROP TABLE "portfolio_blocks_full_screen_block" CASCADE;
  DROP TABLE "portfolio_blocks_carousel_block_slides" CASCADE;
  DROP TABLE "portfolio_blocks_carousel_block" CASCADE;
  DROP TABLE "portfolio_blocks_questions_block_questions" CASCADE;
  DROP TABLE "portfolio_blocks_questions_block" CASCADE;
  DROP TABLE "portfolio_blocks_testimonial_block_testimonials" CASCADE;
  DROP TABLE "portfolio_blocks_testimonial_block" CASCADE;
  DROP TABLE "portfolio_blocks_highlights_highlights" CASCADE;
  DROP TABLE "portfolio_blocks_highlights" CASCADE;
  DROP TABLE "portfolio_blocks_section_carousel_with_thumbnail_slides" CASCADE;
  DROP TABLE "portfolio_blocks_section_carousel_with_thumbnail" CASCADE;
  DROP TABLE "portfolio_blocks_quote" CASCADE;
  DROP TABLE "portfolio_blocks_property_block" CASCADE;
  DROP TABLE "portfolio" CASCADE;
  DROP TABLE "portfolio_rels" CASCADE;
  DROP TABLE "work" CASCADE;
  DROP TABLE "work_rels" CASCADE;
  DROP TYPE "public"."enum_mux_video_playback_options_playback_policy";`);
}

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_mux_video_playback_options_playback_policy" AS ENUM('signed', 'public');
  CREATE TABLE IF NOT EXISTS "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );

  CREATE TABLE IF NOT EXISTS "images" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alternative_text" varchar NOT NULL,
  	"caption" varchar,
  	"blurhash" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
    "prefix" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_thumbnail_url" varchar,
  	"sizes_thumbnail_width" numeric,
  	"sizes_thumbnail_height" numeric,
  	"sizes_thumbnail_mime_type" varchar,
  	"sizes_thumbnail_filesize" numeric,
  	"sizes_thumbnail_filename" varchar,
  	"sizes_small_url" varchar,
  	"sizes_small_width" numeric,
  	"sizes_small_height" numeric,
  	"sizes_small_mime_type" varchar,
  	"sizes_small_filesize" numeric,
  	"sizes_small_filename" varchar,
  	"sizes_medium_url" varchar,
  	"sizes_medium_width" numeric,
  	"sizes_medium_height" numeric,
  	"sizes_medium_mime_type" varchar,
  	"sizes_medium_filesize" numeric,
  	"sizes_medium_filename" varchar,
  	"sizes_large_url" varchar,
  	"sizes_large_width" numeric,
  	"sizes_large_height" numeric,
  	"sizes_large_mime_type" varchar,
  	"sizes_large_filesize" numeric,
  	"sizes_large_filename" varchar,
  	"sizes_extra_large_url" varchar,
  	"sizes_extra_large_width" numeric,
  	"sizes_extra_large_height" numeric,
  	"sizes_extra_large_mime_type" varchar,
  	"sizes_extra_large_filesize" numeric,
  	"sizes_extra_large_filename" varchar
  );

  CREATE TABLE IF NOT EXISTS "files" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"description" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
    "prefix" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar NOT NULL,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );

  CREATE TABLE IF NOT EXISTS "mux_video_playback_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"playback_id" varchar,
  	"playback_policy" "enum_mux_video_playback_options_playback_policy"
  );

  CREATE TABLE IF NOT EXISTS "mux_video" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"asset_id" varchar,
  	"duration" numeric,
  	"poster_timestamp" numeric,
  	"aspect_ratio" varchar,
  	"max_width" numeric,
  	"max_height" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );

  CREATE TABLE IF NOT EXISTS "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );

  CREATE TABLE IF NOT EXISTS "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer,
  	"images_id" integer,
  	"files_id" integer,
  	"mux_video_id" integer
  );

  CREATE TABLE IF NOT EXISTS "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );

  CREATE TABLE IF NOT EXISTS "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );

  CREATE TABLE IF NOT EXISTS "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );

  CREATE TABLE IF NOT EXISTS "home_blocks_section_carousel_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar,
  	"is_full_width" boolean DEFAULT true,
  	"link" varchar,
  	"link_text" varchar
  );

  CREATE TABLE IF NOT EXISTS "home_blocks_section_carousel" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "home_blocks_section_media" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar,
  	"is_full_width" boolean DEFAULT true,
  	"link" varchar,
  	"link_text" varchar,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "home_blocks_section_01_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"subheading" varchar NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "home_blocks_section_02_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "home_blocks_section_03_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "home_blocks_section_04_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"copy_two" jsonb NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "home_blocks_section_05_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"copy_two" jsonb NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "home_blocks_section_06_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"copy_two" jsonb NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "home_blocks_section_07_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"copy_two" jsonb NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "home_blocks_section_08_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"copy_two" jsonb NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "home_blocks_section_09_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "home_blocks_section_10_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"copy_two" jsonb NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "home_blocks_section_11_block_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar,
  	"is_full_width" boolean DEFAULT true,
  	"link" varchar,
  	"link_text" varchar
  );

  CREATE TABLE IF NOT EXISTS "home_blocks_section_11_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "home_blocks_section_12_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "home_blocks_section_13_block_panels_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"description" varchar
  );

  CREATE TABLE IF NOT EXISTS "home_blocks_section_13_block_panels" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"link" varchar,
  	"title" varchar,
  	"next_to_title" varchar,
  	"byline" varchar,
  	"more_details" jsonb
  );

  CREATE TABLE IF NOT EXISTS "home_blocks_section_13_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "home_blocks_section_14_block_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar,
  	"is_full_width" boolean DEFAULT true,
  	"link" varchar,
  	"link_text" varchar
  );

  CREATE TABLE IF NOT EXISTS "home_blocks_section_14_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "home_blocks_section_15_block_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar,
  	"is_full_width" boolean DEFAULT true,
  	"link" varchar,
  	"link_text" varchar
  );

  CREATE TABLE IF NOT EXISTS "home_blocks_section_15_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"copy_two" jsonb NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "home_blocks_section_16_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "home_blocks_section_17_block_milestones" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"content" jsonb NOT NULL
  );

  CREATE TABLE IF NOT EXISTS "home_blocks_section_17_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"link" varchar NOT NULL,
  	"link_text" varchar NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "home_blocks_section_18_block_panels_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar,
  	"is_full_width" boolean DEFAULT true,
  	"link" varchar,
  	"link_text" varchar
  );

  CREATE TABLE IF NOT EXISTS "home_blocks_section_18_block_panels" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"subtitle" varchar NOT NULL,
  	"starting_price" varchar NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"explore_link" varchar NOT NULL,
  	"booking_link" varchar NOT NULL
  );

  CREATE TABLE IF NOT EXISTS "home_blocks_section_18_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "home_blocks_section_19_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"content" varchar NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "home_blocks_section_20_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "home_blocks_section_21_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"copy_two" jsonb NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "home_blocks_section_22_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"copy_two" jsonb NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "home_blocks_section_23_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"copy_two" jsonb NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "home_blocks_section_24_block_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar,
  	"is_full_width" boolean DEFAULT true,
  	"link" varchar,
  	"link_text" varchar
  );

  CREATE TABLE IF NOT EXISTS "home_blocks_section_24_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "home_blocks_section_separator_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"is_full_width" boolean DEFAULT false,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "home_blocks_full_screen_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "home_blocks_carousel_block_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar,
  	"is_full_width" boolean DEFAULT true,
  	"link" varchar,
  	"link_text" varchar
  );

  CREATE TABLE IF NOT EXISTS "home_blocks_carousel_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "home_blocks_questions_block_questions" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar NOT NULL,
  	"answer" jsonb NOT NULL
  );

  CREATE TABLE IF NOT EXISTS "home_blocks_questions_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "home_blocks_testimonial_block_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"content" varchar NOT NULL,
  	"author" varchar,
  	"link" varchar
  );

  CREATE TABLE IF NOT EXISTS "home_blocks_testimonial_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "home_blocks_highlights_highlights" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"highlight" varchar NOT NULL,
  	"description" jsonb NOT NULL
  );

  CREATE TABLE IF NOT EXISTS "home_blocks_highlights" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "home_blocks_section_carousel_with_thumbnail_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar,
  	"is_full_width" boolean DEFAULT true,
  	"link" varchar,
  	"link_text" varchar
  );

  CREATE TABLE IF NOT EXISTS "home_blocks_section_carousel_with_thumbnail" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "home_blocks_quote" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"quote" jsonb,
  	"author" jsonb,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "home_blocks_property_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"logo_id" integer NOT NULL,
  	"description" jsonb,
  	"features" jsonb,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "home" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"arrow_text" varchar,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );

  CREATE TABLE IF NOT EXISTS "home_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"images_id" integer,
  	"mux_video_id" integer
  );

  CREATE TABLE IF NOT EXISTS "contact" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"header_copy" jsonb,
  	"before_copy" jsonb,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );

  CREATE TABLE IF NOT EXISTS "contact_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"images_id" integer,
  	"mux_video_id" integer
  );

  CREATE TABLE IF NOT EXISTS "portfolio_blocks_section_carousel_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar,
  	"is_full_width" boolean DEFAULT true,
  	"link" varchar,
  	"link_text" varchar
  );

  CREATE TABLE IF NOT EXISTS "portfolio_blocks_section_carousel" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "portfolio_blocks_section_media" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar,
  	"is_full_width" boolean DEFAULT true,
  	"link" varchar,
  	"link_text" varchar,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "portfolio_blocks_section_01_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"subheading" varchar NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "portfolio_blocks_section_02_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "portfolio_blocks_section_03_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "portfolio_blocks_section_04_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"copy_two" jsonb NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "portfolio_blocks_section_05_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"copy_two" jsonb NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "portfolio_blocks_section_06_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"copy_two" jsonb NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "portfolio_blocks_section_07_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"copy_two" jsonb NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "portfolio_blocks_section_08_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"copy_two" jsonb NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "portfolio_blocks_section_09_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "portfolio_blocks_section_10_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"copy_two" jsonb NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "portfolio_blocks_section_11_block_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar,
  	"is_full_width" boolean DEFAULT true,
  	"link" varchar,
  	"link_text" varchar
  );

  CREATE TABLE IF NOT EXISTS "portfolio_blocks_section_11_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "portfolio_blocks_section_12_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "portfolio_blocks_section_13_block_panels_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"description" varchar
  );

  CREATE TABLE IF NOT EXISTS "portfolio_blocks_section_13_block_panels" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"link" varchar,
  	"title" varchar,
  	"next_to_title" varchar,
  	"byline" varchar,
  	"more_details" jsonb
  );

  CREATE TABLE IF NOT EXISTS "portfolio_blocks_section_13_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "portfolio_blocks_section_14_block_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar,
  	"is_full_width" boolean DEFAULT true,
  	"link" varchar,
  	"link_text" varchar
  );

  CREATE TABLE IF NOT EXISTS "portfolio_blocks_section_14_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "portfolio_blocks_section_15_block_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar,
  	"is_full_width" boolean DEFAULT true,
  	"link" varchar,
  	"link_text" varchar
  );

  CREATE TABLE IF NOT EXISTS "portfolio_blocks_section_15_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"copy_two" jsonb NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "portfolio_blocks_section_16_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "portfolio_blocks_section_17_block_milestones" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"content" jsonb NOT NULL
  );

  CREATE TABLE IF NOT EXISTS "portfolio_blocks_section_17_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"link" varchar NOT NULL,
  	"link_text" varchar NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "portfolio_blocks_section_18_block_panels_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar,
  	"is_full_width" boolean DEFAULT true,
  	"link" varchar,
  	"link_text" varchar
  );

  CREATE TABLE IF NOT EXISTS "portfolio_blocks_section_18_block_panels" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"subtitle" varchar NOT NULL,
  	"starting_price" varchar NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"explore_link" varchar NOT NULL,
  	"booking_link" varchar NOT NULL
  );

  CREATE TABLE IF NOT EXISTS "portfolio_blocks_section_18_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "portfolio_blocks_section_19_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"content" varchar NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "portfolio_blocks_section_20_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "portfolio_blocks_section_21_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"copy_two" jsonb NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "portfolio_blocks_section_22_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"copy_two" jsonb NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "portfolio_blocks_section_23_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"copy_one" jsonb NOT NULL,
  	"copy_two" jsonb NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "portfolio_blocks_section_24_block_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar,
  	"is_full_width" boolean DEFAULT true,
  	"link" varchar,
  	"link_text" varchar
  );

  CREATE TABLE IF NOT EXISTS "portfolio_blocks_section_24_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "portfolio_blocks_section_separator_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"is_full_width" boolean DEFAULT false,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "portfolio_blocks_full_screen_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "portfolio_blocks_carousel_block_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar,
  	"is_full_width" boolean DEFAULT true,
  	"link" varchar,
  	"link_text" varchar
  );

  CREATE TABLE IF NOT EXISTS "portfolio_blocks_carousel_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "portfolio_blocks_questions_block_questions" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar NOT NULL,
  	"answer" jsonb NOT NULL
  );

  CREATE TABLE IF NOT EXISTS "portfolio_blocks_questions_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "portfolio_blocks_testimonial_block_testimonials" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"content" varchar NOT NULL,
  	"author" varchar,
  	"link" varchar
  );

  CREATE TABLE IF NOT EXISTS "portfolio_blocks_testimonial_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "portfolio_blocks_highlights_highlights" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"highlight" varchar NOT NULL,
  	"description" jsonb NOT NULL
  );

  CREATE TABLE IF NOT EXISTS "portfolio_blocks_highlights" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "portfolio_blocks_section_carousel_with_thumbnail_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar,
  	"is_full_width" boolean DEFAULT true,
  	"link" varchar,
  	"link_text" varchar
  );

  CREATE TABLE IF NOT EXISTS "portfolio_blocks_section_carousel_with_thumbnail" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "portfolio_blocks_quote" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"quote" jsonb,
  	"author" jsonb,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "portfolio_blocks_property_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"logo_id" integer NOT NULL,
  	"description" jsonb,
  	"features" jsonb,
  	"block_name" varchar
  );

  CREATE TABLE IF NOT EXISTS "portfolio" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"marker_text" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );

  CREATE TABLE IF NOT EXISTS "portfolio_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"images_id" integer,
  	"mux_video_id" integer
  );

  CREATE TABLE IF NOT EXISTS "work" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"header_copy" jsonb,
  	"before_copy" jsonb,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );

  CREATE TABLE IF NOT EXISTS "work_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"images_id" integer,
  	"mux_video_id" integer
  );

  DO $$ BEGIN
   ALTER TABLE "mux_video_playback_options" ADD CONSTRAINT "mux_video_playback_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."mux_video"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_images_fk" FOREIGN KEY ("images_id") REFERENCES "public"."images"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_files_fk" FOREIGN KEY ("files_id") REFERENCES "public"."files"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_mux_video_fk" FOREIGN KEY ("mux_video_id") REFERENCES "public"."mux_video"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "home_blocks_section_carousel_slides" ADD CONSTRAINT "home_blocks_section_carousel_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_blocks_section_carousel"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "home_blocks_section_carousel" ADD CONSTRAINT "home_blocks_section_carousel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "home_blocks_section_media" ADD CONSTRAINT "home_blocks_section_media_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "home_blocks_section_01_block" ADD CONSTRAINT "home_blocks_section_01_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "home_blocks_section_02_block" ADD CONSTRAINT "home_blocks_section_02_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "home_blocks_section_03_block" ADD CONSTRAINT "home_blocks_section_03_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "home_blocks_section_04_block" ADD CONSTRAINT "home_blocks_section_04_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "home_blocks_section_05_block" ADD CONSTRAINT "home_blocks_section_05_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "home_blocks_section_06_block" ADD CONSTRAINT "home_blocks_section_06_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "home_blocks_section_07_block" ADD CONSTRAINT "home_blocks_section_07_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "home_blocks_section_08_block" ADD CONSTRAINT "home_blocks_section_08_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "home_blocks_section_09_block" ADD CONSTRAINT "home_blocks_section_09_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "home_blocks_section_10_block" ADD CONSTRAINT "home_blocks_section_10_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "home_blocks_section_11_block_slides" ADD CONSTRAINT "home_blocks_section_11_block_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_blocks_section_11_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "home_blocks_section_11_block" ADD CONSTRAINT "home_blocks_section_11_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "home_blocks_section_12_block" ADD CONSTRAINT "home_blocks_section_12_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "home_blocks_section_13_block_panels_items" ADD CONSTRAINT "home_blocks_section_13_block_panels_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_blocks_section_13_block_panels"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "home_blocks_section_13_block_panels" ADD CONSTRAINT "home_blocks_section_13_block_panels_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_blocks_section_13_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "home_blocks_section_13_block" ADD CONSTRAINT "home_blocks_section_13_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "home_blocks_section_14_block_slides" ADD CONSTRAINT "home_blocks_section_14_block_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_blocks_section_14_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "home_blocks_section_14_block" ADD CONSTRAINT "home_blocks_section_14_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "home_blocks_section_15_block_slides" ADD CONSTRAINT "home_blocks_section_15_block_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_blocks_section_15_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "home_blocks_section_15_block" ADD CONSTRAINT "home_blocks_section_15_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "home_blocks_section_16_block" ADD CONSTRAINT "home_blocks_section_16_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "home_blocks_section_17_block_milestones" ADD CONSTRAINT "home_blocks_section_17_block_milestones_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_blocks_section_17_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "home_blocks_section_17_block" ADD CONSTRAINT "home_blocks_section_17_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "home_blocks_section_18_block_panels_slides" ADD CONSTRAINT "home_blocks_section_18_block_panels_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_blocks_section_18_block_panels"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "home_blocks_section_18_block_panels" ADD CONSTRAINT "home_blocks_section_18_block_panels_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_blocks_section_18_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "home_blocks_section_18_block" ADD CONSTRAINT "home_blocks_section_18_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "home_blocks_section_19_block" ADD CONSTRAINT "home_blocks_section_19_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "home_blocks_section_20_block" ADD CONSTRAINT "home_blocks_section_20_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "home_blocks_section_21_block" ADD CONSTRAINT "home_blocks_section_21_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "home_blocks_section_22_block" ADD CONSTRAINT "home_blocks_section_22_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "home_blocks_section_23_block" ADD CONSTRAINT "home_blocks_section_23_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "home_blocks_section_24_block_slides" ADD CONSTRAINT "home_blocks_section_24_block_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_blocks_section_24_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "home_blocks_section_24_block" ADD CONSTRAINT "home_blocks_section_24_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "home_blocks_section_separator_block" ADD CONSTRAINT "home_blocks_section_separator_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "home_blocks_full_screen_block" ADD CONSTRAINT "home_blocks_full_screen_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "home_blocks_carousel_block_slides" ADD CONSTRAINT "home_blocks_carousel_block_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_blocks_carousel_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "home_blocks_carousel_block" ADD CONSTRAINT "home_blocks_carousel_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "home_blocks_questions_block_questions" ADD CONSTRAINT "home_blocks_questions_block_questions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_blocks_questions_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "home_blocks_questions_block" ADD CONSTRAINT "home_blocks_questions_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "home_blocks_testimonial_block_testimonials" ADD CONSTRAINT "home_blocks_testimonial_block_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_blocks_testimonial_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "home_blocks_testimonial_block" ADD CONSTRAINT "home_blocks_testimonial_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "home_blocks_highlights_highlights" ADD CONSTRAINT "home_blocks_highlights_highlights_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_blocks_highlights"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "home_blocks_highlights" ADD CONSTRAINT "home_blocks_highlights_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "home_blocks_section_carousel_with_thumbnail_slides" ADD CONSTRAINT "home_blocks_section_carousel_with_thumbnail_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_blocks_section_carousel_with_thumbnail"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "home_blocks_section_carousel_with_thumbnail" ADD CONSTRAINT "home_blocks_section_carousel_with_thumbnail_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "home_blocks_quote" ADD CONSTRAINT "home_blocks_quote_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "home_blocks_property_block" ADD CONSTRAINT "home_blocks_property_block_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "home_blocks_property_block" ADD CONSTRAINT "home_blocks_property_block_logo_id_images_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "home_blocks_property_block" ADD CONSTRAINT "home_blocks_property_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "home" ADD CONSTRAINT "home_meta_image_id_images_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "home_rels" ADD CONSTRAINT "home_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "home_rels" ADD CONSTRAINT "home_rels_images_fk" FOREIGN KEY ("images_id") REFERENCES "public"."images"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "home_rels" ADD CONSTRAINT "home_rels_mux_video_fk" FOREIGN KEY ("mux_video_id") REFERENCES "public"."mux_video"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "contact_rels" ADD CONSTRAINT "contact_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."contact"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "contact_rels" ADD CONSTRAINT "contact_rels_images_fk" FOREIGN KEY ("images_id") REFERENCES "public"."images"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "contact_rels" ADD CONSTRAINT "contact_rels_mux_video_fk" FOREIGN KEY ("mux_video_id") REFERENCES "public"."mux_video"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_section_carousel_slides" ADD CONSTRAINT "portfolio_blocks_section_carousel_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolio_blocks_section_carousel"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_section_carousel" ADD CONSTRAINT "portfolio_blocks_section_carousel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolio"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_section_media" ADD CONSTRAINT "portfolio_blocks_section_media_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolio"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_section_01_block" ADD CONSTRAINT "portfolio_blocks_section_01_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolio"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_section_02_block" ADD CONSTRAINT "portfolio_blocks_section_02_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolio"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_section_03_block" ADD CONSTRAINT "portfolio_blocks_section_03_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolio"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_section_04_block" ADD CONSTRAINT "portfolio_blocks_section_04_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolio"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_section_05_block" ADD CONSTRAINT "portfolio_blocks_section_05_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolio"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_section_06_block" ADD CONSTRAINT "portfolio_blocks_section_06_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolio"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_section_07_block" ADD CONSTRAINT "portfolio_blocks_section_07_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolio"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_section_08_block" ADD CONSTRAINT "portfolio_blocks_section_08_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolio"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_section_09_block" ADD CONSTRAINT "portfolio_blocks_section_09_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolio"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_section_10_block" ADD CONSTRAINT "portfolio_blocks_section_10_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolio"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_section_11_block_slides" ADD CONSTRAINT "portfolio_blocks_section_11_block_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolio_blocks_section_11_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_section_11_block" ADD CONSTRAINT "portfolio_blocks_section_11_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolio"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_section_12_block" ADD CONSTRAINT "portfolio_blocks_section_12_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolio"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_section_13_block_panels_items" ADD CONSTRAINT "portfolio_blocks_section_13_block_panels_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolio_blocks_section_13_block_panels"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_section_13_block_panels" ADD CONSTRAINT "portfolio_blocks_section_13_block_panels_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolio_blocks_section_13_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_section_13_block" ADD CONSTRAINT "portfolio_blocks_section_13_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolio"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_section_14_block_slides" ADD CONSTRAINT "portfolio_blocks_section_14_block_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolio_blocks_section_14_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_section_14_block" ADD CONSTRAINT "portfolio_blocks_section_14_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolio"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_section_15_block_slides" ADD CONSTRAINT "portfolio_blocks_section_15_block_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolio_blocks_section_15_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_section_15_block" ADD CONSTRAINT "portfolio_blocks_section_15_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolio"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_section_16_block" ADD CONSTRAINT "portfolio_blocks_section_16_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolio"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_section_17_block_milestones" ADD CONSTRAINT "portfolio_blocks_section_17_block_milestones_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolio_blocks_section_17_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_section_17_block" ADD CONSTRAINT "portfolio_blocks_section_17_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolio"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_section_18_block_panels_slides" ADD CONSTRAINT "portfolio_blocks_section_18_block_panels_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolio_blocks_section_18_block_panels"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_section_18_block_panels" ADD CONSTRAINT "portfolio_blocks_section_18_block_panels_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolio_blocks_section_18_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_section_18_block" ADD CONSTRAINT "portfolio_blocks_section_18_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolio"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_section_19_block" ADD CONSTRAINT "portfolio_blocks_section_19_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolio"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_section_20_block" ADD CONSTRAINT "portfolio_blocks_section_20_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolio"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_section_21_block" ADD CONSTRAINT "portfolio_blocks_section_21_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolio"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_section_22_block" ADD CONSTRAINT "portfolio_blocks_section_22_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolio"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_section_23_block" ADD CONSTRAINT "portfolio_blocks_section_23_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolio"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_section_24_block_slides" ADD CONSTRAINT "portfolio_blocks_section_24_block_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolio_blocks_section_24_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_section_24_block" ADD CONSTRAINT "portfolio_blocks_section_24_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolio"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_section_separator_block" ADD CONSTRAINT "portfolio_blocks_section_separator_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolio"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_full_screen_block" ADD CONSTRAINT "portfolio_blocks_full_screen_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolio"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_carousel_block_slides" ADD CONSTRAINT "portfolio_blocks_carousel_block_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolio_blocks_carousel_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_carousel_block" ADD CONSTRAINT "portfolio_blocks_carousel_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolio"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_questions_block_questions" ADD CONSTRAINT "portfolio_blocks_questions_block_questions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolio_blocks_questions_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_questions_block" ADD CONSTRAINT "portfolio_blocks_questions_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolio"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_testimonial_block_testimonials" ADD CONSTRAINT "portfolio_blocks_testimonial_block_testimonials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolio_blocks_testimonial_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_testimonial_block" ADD CONSTRAINT "portfolio_blocks_testimonial_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolio"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_highlights_highlights" ADD CONSTRAINT "portfolio_blocks_highlights_highlights_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolio_blocks_highlights"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_highlights" ADD CONSTRAINT "portfolio_blocks_highlights_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolio"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_section_carousel_with_thumbnail_slides" ADD CONSTRAINT "portfolio_blocks_section_carousel_with_thumbnail_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolio_blocks_section_carousel_with_thumbnail"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_section_carousel_with_thumbnail" ADD CONSTRAINT "portfolio_blocks_section_carousel_with_thumbnail_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolio"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_quote" ADD CONSTRAINT "portfolio_blocks_quote_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolio"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_property_block" ADD CONSTRAINT "portfolio_blocks_property_block_image_id_images_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_property_block" ADD CONSTRAINT "portfolio_blocks_property_block_logo_id_images_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."images"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "portfolio_blocks_property_block" ADD CONSTRAINT "portfolio_blocks_property_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."portfolio"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "portfolio_rels" ADD CONSTRAINT "portfolio_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."portfolio"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "portfolio_rels" ADD CONSTRAINT "portfolio_rels_images_fk" FOREIGN KEY ("images_id") REFERENCES "public"."images"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "portfolio_rels" ADD CONSTRAINT "portfolio_rels_mux_video_fk" FOREIGN KEY ("mux_video_id") REFERENCES "public"."mux_video"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "work_rels" ADD CONSTRAINT "work_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."work"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "work_rels" ADD CONSTRAINT "work_rels_images_fk" FOREIGN KEY ("images_id") REFERENCES "public"."images"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  DO $$ BEGIN
   ALTER TABLE "work_rels" ADD CONSTRAINT "work_rels_mux_video_fk" FOREIGN KEY ("mux_video_id") REFERENCES "public"."mux_video"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;

  CREATE INDEX IF NOT EXISTS "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX IF NOT EXISTS "images_updated_at_idx" ON "images" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "images_created_at_idx" ON "images" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "images_filename_idx" ON "images" USING btree ("filename");
  CREATE INDEX IF NOT EXISTS "images_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "images" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX IF NOT EXISTS "images_sizes_small_sizes_small_filename_idx" ON "images" USING btree ("sizes_small_filename");
  CREATE INDEX IF NOT EXISTS "images_sizes_medium_sizes_medium_filename_idx" ON "images" USING btree ("sizes_medium_filename");
  CREATE INDEX IF NOT EXISTS "images_sizes_large_sizes_large_filename_idx" ON "images" USING btree ("sizes_large_filename");
  CREATE INDEX IF NOT EXISTS "images_sizes_extra_large_sizes_extra_large_filename_idx" ON "images" USING btree ("sizes_extra_large_filename");
  CREATE INDEX IF NOT EXISTS "files_updated_at_idx" ON "files" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "files_created_at_idx" ON "files" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "files_filename_idx" ON "files" USING btree ("filename");
  CREATE INDEX IF NOT EXISTS "mux_video_playback_options_order_idx" ON "mux_video_playback_options" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "mux_video_playback_options_parent_id_idx" ON "mux_video_playback_options" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "mux_video_title_idx" ON "mux_video" USING btree ("title");
  CREATE INDEX IF NOT EXISTS "mux_video_updated_at_idx" ON "mux_video" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "mux_video_created_at_idx" ON "mux_video" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_images_id_idx" ON "payload_locked_documents_rels" USING btree ("images_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_files_id_idx" ON "payload_locked_documents_rels" USING btree ("files_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_mux_video_id_idx" ON "payload_locked_documents_rels" USING btree ("mux_video_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX IF NOT EXISTS "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_carousel_slides_order_idx" ON "home_blocks_section_carousel_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_carousel_slides_parent_id_idx" ON "home_blocks_section_carousel_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_carousel_order_idx" ON "home_blocks_section_carousel" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_carousel_parent_id_idx" ON "home_blocks_section_carousel" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_carousel_path_idx" ON "home_blocks_section_carousel" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_media_order_idx" ON "home_blocks_section_media" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_media_parent_id_idx" ON "home_blocks_section_media" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_media_path_idx" ON "home_blocks_section_media" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_01_block_order_idx" ON "home_blocks_section_01_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_01_block_parent_id_idx" ON "home_blocks_section_01_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_01_block_path_idx" ON "home_blocks_section_01_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_02_block_order_idx" ON "home_blocks_section_02_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_02_block_parent_id_idx" ON "home_blocks_section_02_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_02_block_path_idx" ON "home_blocks_section_02_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_03_block_order_idx" ON "home_blocks_section_03_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_03_block_parent_id_idx" ON "home_blocks_section_03_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_03_block_path_idx" ON "home_blocks_section_03_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_04_block_order_idx" ON "home_blocks_section_04_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_04_block_parent_id_idx" ON "home_blocks_section_04_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_04_block_path_idx" ON "home_blocks_section_04_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_05_block_order_idx" ON "home_blocks_section_05_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_05_block_parent_id_idx" ON "home_blocks_section_05_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_05_block_path_idx" ON "home_blocks_section_05_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_06_block_order_idx" ON "home_blocks_section_06_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_06_block_parent_id_idx" ON "home_blocks_section_06_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_06_block_path_idx" ON "home_blocks_section_06_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_07_block_order_idx" ON "home_blocks_section_07_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_07_block_parent_id_idx" ON "home_blocks_section_07_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_07_block_path_idx" ON "home_blocks_section_07_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_08_block_order_idx" ON "home_blocks_section_08_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_08_block_parent_id_idx" ON "home_blocks_section_08_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_08_block_path_idx" ON "home_blocks_section_08_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_09_block_order_idx" ON "home_blocks_section_09_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_09_block_parent_id_idx" ON "home_blocks_section_09_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_09_block_path_idx" ON "home_blocks_section_09_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_10_block_order_idx" ON "home_blocks_section_10_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_10_block_parent_id_idx" ON "home_blocks_section_10_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_10_block_path_idx" ON "home_blocks_section_10_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_11_block_slides_order_idx" ON "home_blocks_section_11_block_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_11_block_slides_parent_id_idx" ON "home_blocks_section_11_block_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_11_block_order_idx" ON "home_blocks_section_11_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_11_block_parent_id_idx" ON "home_blocks_section_11_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_11_block_path_idx" ON "home_blocks_section_11_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_12_block_order_idx" ON "home_blocks_section_12_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_12_block_parent_id_idx" ON "home_blocks_section_12_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_12_block_path_idx" ON "home_blocks_section_12_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_13_block_panels_items_order_idx" ON "home_blocks_section_13_block_panels_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_13_block_panels_items_parent_id_idx" ON "home_blocks_section_13_block_panels_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_13_block_panels_order_idx" ON "home_blocks_section_13_block_panels" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_13_block_panels_parent_id_idx" ON "home_blocks_section_13_block_panels" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_13_block_order_idx" ON "home_blocks_section_13_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_13_block_parent_id_idx" ON "home_blocks_section_13_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_13_block_path_idx" ON "home_blocks_section_13_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_14_block_slides_order_idx" ON "home_blocks_section_14_block_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_14_block_slides_parent_id_idx" ON "home_blocks_section_14_block_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_14_block_order_idx" ON "home_blocks_section_14_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_14_block_parent_id_idx" ON "home_blocks_section_14_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_14_block_path_idx" ON "home_blocks_section_14_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_15_block_slides_order_idx" ON "home_blocks_section_15_block_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_15_block_slides_parent_id_idx" ON "home_blocks_section_15_block_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_15_block_order_idx" ON "home_blocks_section_15_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_15_block_parent_id_idx" ON "home_blocks_section_15_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_15_block_path_idx" ON "home_blocks_section_15_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_16_block_order_idx" ON "home_blocks_section_16_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_16_block_parent_id_idx" ON "home_blocks_section_16_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_16_block_path_idx" ON "home_blocks_section_16_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_17_block_milestones_order_idx" ON "home_blocks_section_17_block_milestones" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_17_block_milestones_parent_id_idx" ON "home_blocks_section_17_block_milestones" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_17_block_order_idx" ON "home_blocks_section_17_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_17_block_parent_id_idx" ON "home_blocks_section_17_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_17_block_path_idx" ON "home_blocks_section_17_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_18_block_panels_slides_order_idx" ON "home_blocks_section_18_block_panels_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_18_block_panels_slides_parent_id_idx" ON "home_blocks_section_18_block_panels_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_18_block_panels_order_idx" ON "home_blocks_section_18_block_panels" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_18_block_panels_parent_id_idx" ON "home_blocks_section_18_block_panels" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_18_block_order_idx" ON "home_blocks_section_18_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_18_block_parent_id_idx" ON "home_blocks_section_18_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_18_block_path_idx" ON "home_blocks_section_18_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_19_block_order_idx" ON "home_blocks_section_19_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_19_block_parent_id_idx" ON "home_blocks_section_19_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_19_block_path_idx" ON "home_blocks_section_19_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_20_block_order_idx" ON "home_blocks_section_20_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_20_block_parent_id_idx" ON "home_blocks_section_20_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_20_block_path_idx" ON "home_blocks_section_20_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_21_block_order_idx" ON "home_blocks_section_21_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_21_block_parent_id_idx" ON "home_blocks_section_21_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_21_block_path_idx" ON "home_blocks_section_21_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_22_block_order_idx" ON "home_blocks_section_22_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_22_block_parent_id_idx" ON "home_blocks_section_22_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_22_block_path_idx" ON "home_blocks_section_22_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_23_block_order_idx" ON "home_blocks_section_23_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_23_block_parent_id_idx" ON "home_blocks_section_23_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_23_block_path_idx" ON "home_blocks_section_23_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_24_block_slides_order_idx" ON "home_blocks_section_24_block_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_24_block_slides_parent_id_idx" ON "home_blocks_section_24_block_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_24_block_order_idx" ON "home_blocks_section_24_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_24_block_parent_id_idx" ON "home_blocks_section_24_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_24_block_path_idx" ON "home_blocks_section_24_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_separator_block_order_idx" ON "home_blocks_section_separator_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_separator_block_parent_id_idx" ON "home_blocks_section_separator_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_separator_block_path_idx" ON "home_blocks_section_separator_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_blocks_full_screen_block_order_idx" ON "home_blocks_full_screen_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_full_screen_block_parent_id_idx" ON "home_blocks_full_screen_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_full_screen_block_path_idx" ON "home_blocks_full_screen_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_blocks_carousel_block_slides_order_idx" ON "home_blocks_carousel_block_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_carousel_block_slides_parent_id_idx" ON "home_blocks_carousel_block_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_carousel_block_order_idx" ON "home_blocks_carousel_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_carousel_block_parent_id_idx" ON "home_blocks_carousel_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_carousel_block_path_idx" ON "home_blocks_carousel_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_blocks_questions_block_questions_order_idx" ON "home_blocks_questions_block_questions" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_questions_block_questions_parent_id_idx" ON "home_blocks_questions_block_questions" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_questions_block_order_idx" ON "home_blocks_questions_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_questions_block_parent_id_idx" ON "home_blocks_questions_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_questions_block_path_idx" ON "home_blocks_questions_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_blocks_testimonial_block_testimonials_order_idx" ON "home_blocks_testimonial_block_testimonials" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_testimonial_block_testimonials_parent_id_idx" ON "home_blocks_testimonial_block_testimonials" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_testimonial_block_order_idx" ON "home_blocks_testimonial_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_testimonial_block_parent_id_idx" ON "home_blocks_testimonial_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_testimonial_block_path_idx" ON "home_blocks_testimonial_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_blocks_highlights_highlights_order_idx" ON "home_blocks_highlights_highlights" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_highlights_highlights_parent_id_idx" ON "home_blocks_highlights_highlights" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_highlights_order_idx" ON "home_blocks_highlights" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_highlights_parent_id_idx" ON "home_blocks_highlights" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_highlights_path_idx" ON "home_blocks_highlights" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_carousel_with_thumbnail_slides_order_idx" ON "home_blocks_section_carousel_with_thumbnail_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_carousel_with_thumbnail_slides_parent_id_idx" ON "home_blocks_section_carousel_with_thumbnail_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_carousel_with_thumbnail_order_idx" ON "home_blocks_section_carousel_with_thumbnail" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_carousel_with_thumbnail_parent_id_idx" ON "home_blocks_section_carousel_with_thumbnail" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_section_carousel_with_thumbnail_path_idx" ON "home_blocks_section_carousel_with_thumbnail" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_blocks_quote_order_idx" ON "home_blocks_quote" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_quote_parent_id_idx" ON "home_blocks_quote" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_quote_path_idx" ON "home_blocks_quote" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_blocks_property_block_order_idx" ON "home_blocks_property_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_property_block_parent_id_idx" ON "home_blocks_property_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_property_block_path_idx" ON "home_blocks_property_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_blocks_property_block_image_idx" ON "home_blocks_property_block" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_property_block_logo_idx" ON "home_blocks_property_block" USING btree ("logo_id");
  CREATE INDEX IF NOT EXISTS "home_meta_meta_image_idx" ON "home" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "home_rels_order_idx" ON "home_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "home_rels_parent_idx" ON "home_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "home_rels_path_idx" ON "home_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "home_rels_images_id_idx" ON "home_rels" USING btree ("images_id");
  CREATE INDEX IF NOT EXISTS "home_rels_mux_video_id_idx" ON "home_rels" USING btree ("mux_video_id");
  CREATE INDEX IF NOT EXISTS "contact_rels_order_idx" ON "contact_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "contact_rels_parent_idx" ON "contact_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "contact_rels_path_idx" ON "contact_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "contact_rels_images_id_idx" ON "contact_rels" USING btree ("images_id");
  CREATE INDEX IF NOT EXISTS "contact_rels_mux_video_id_idx" ON "contact_rels" USING btree ("mux_video_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_carousel_slides_order_idx" ON "portfolio_blocks_section_carousel_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_carousel_slides_parent_id_idx" ON "portfolio_blocks_section_carousel_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_carousel_order_idx" ON "portfolio_blocks_section_carousel" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_carousel_parent_id_idx" ON "portfolio_blocks_section_carousel" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_carousel_path_idx" ON "portfolio_blocks_section_carousel" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_media_order_idx" ON "portfolio_blocks_section_media" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_media_parent_id_idx" ON "portfolio_blocks_section_media" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_media_path_idx" ON "portfolio_blocks_section_media" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_01_block_order_idx" ON "portfolio_blocks_section_01_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_01_block_parent_id_idx" ON "portfolio_blocks_section_01_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_01_block_path_idx" ON "portfolio_blocks_section_01_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_02_block_order_idx" ON "portfolio_blocks_section_02_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_02_block_parent_id_idx" ON "portfolio_blocks_section_02_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_02_block_path_idx" ON "portfolio_blocks_section_02_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_03_block_order_idx" ON "portfolio_blocks_section_03_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_03_block_parent_id_idx" ON "portfolio_blocks_section_03_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_03_block_path_idx" ON "portfolio_blocks_section_03_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_04_block_order_idx" ON "portfolio_blocks_section_04_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_04_block_parent_id_idx" ON "portfolio_blocks_section_04_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_04_block_path_idx" ON "portfolio_blocks_section_04_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_05_block_order_idx" ON "portfolio_blocks_section_05_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_05_block_parent_id_idx" ON "portfolio_blocks_section_05_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_05_block_path_idx" ON "portfolio_blocks_section_05_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_06_block_order_idx" ON "portfolio_blocks_section_06_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_06_block_parent_id_idx" ON "portfolio_blocks_section_06_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_06_block_path_idx" ON "portfolio_blocks_section_06_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_07_block_order_idx" ON "portfolio_blocks_section_07_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_07_block_parent_id_idx" ON "portfolio_blocks_section_07_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_07_block_path_idx" ON "portfolio_blocks_section_07_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_08_block_order_idx" ON "portfolio_blocks_section_08_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_08_block_parent_id_idx" ON "portfolio_blocks_section_08_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_08_block_path_idx" ON "portfolio_blocks_section_08_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_09_block_order_idx" ON "portfolio_blocks_section_09_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_09_block_parent_id_idx" ON "portfolio_blocks_section_09_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_09_block_path_idx" ON "portfolio_blocks_section_09_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_10_block_order_idx" ON "portfolio_blocks_section_10_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_10_block_parent_id_idx" ON "portfolio_blocks_section_10_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_10_block_path_idx" ON "portfolio_blocks_section_10_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_11_block_slides_order_idx" ON "portfolio_blocks_section_11_block_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_11_block_slides_parent_id_idx" ON "portfolio_blocks_section_11_block_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_11_block_order_idx" ON "portfolio_blocks_section_11_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_11_block_parent_id_idx" ON "portfolio_blocks_section_11_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_11_block_path_idx" ON "portfolio_blocks_section_11_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_12_block_order_idx" ON "portfolio_blocks_section_12_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_12_block_parent_id_idx" ON "portfolio_blocks_section_12_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_12_block_path_idx" ON "portfolio_blocks_section_12_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_13_block_panels_items_order_idx" ON "portfolio_blocks_section_13_block_panels_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_13_block_panels_items_parent_id_idx" ON "portfolio_blocks_section_13_block_panels_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_13_block_panels_order_idx" ON "portfolio_blocks_section_13_block_panels" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_13_block_panels_parent_id_idx" ON "portfolio_blocks_section_13_block_panels" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_13_block_order_idx" ON "portfolio_blocks_section_13_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_13_block_parent_id_idx" ON "portfolio_blocks_section_13_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_13_block_path_idx" ON "portfolio_blocks_section_13_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_14_block_slides_order_idx" ON "portfolio_blocks_section_14_block_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_14_block_slides_parent_id_idx" ON "portfolio_blocks_section_14_block_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_14_block_order_idx" ON "portfolio_blocks_section_14_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_14_block_parent_id_idx" ON "portfolio_blocks_section_14_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_14_block_path_idx" ON "portfolio_blocks_section_14_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_15_block_slides_order_idx" ON "portfolio_blocks_section_15_block_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_15_block_slides_parent_id_idx" ON "portfolio_blocks_section_15_block_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_15_block_order_idx" ON "portfolio_blocks_section_15_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_15_block_parent_id_idx" ON "portfolio_blocks_section_15_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_15_block_path_idx" ON "portfolio_blocks_section_15_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_16_block_order_idx" ON "portfolio_blocks_section_16_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_16_block_parent_id_idx" ON "portfolio_blocks_section_16_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_16_block_path_idx" ON "portfolio_blocks_section_16_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_17_block_milestones_order_idx" ON "portfolio_blocks_section_17_block_milestones" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_17_block_milestones_parent_id_idx" ON "portfolio_blocks_section_17_block_milestones" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_17_block_order_idx" ON "portfolio_blocks_section_17_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_17_block_parent_id_idx" ON "portfolio_blocks_section_17_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_17_block_path_idx" ON "portfolio_blocks_section_17_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_18_block_panels_slides_order_idx" ON "portfolio_blocks_section_18_block_panels_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_18_block_panels_slides_parent_id_idx" ON "portfolio_blocks_section_18_block_panels_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_18_block_panels_order_idx" ON "portfolio_blocks_section_18_block_panels" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_18_block_panels_parent_id_idx" ON "portfolio_blocks_section_18_block_panels" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_18_block_order_idx" ON "portfolio_blocks_section_18_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_18_block_parent_id_idx" ON "portfolio_blocks_section_18_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_18_block_path_idx" ON "portfolio_blocks_section_18_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_19_block_order_idx" ON "portfolio_blocks_section_19_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_19_block_parent_id_idx" ON "portfolio_blocks_section_19_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_19_block_path_idx" ON "portfolio_blocks_section_19_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_20_block_order_idx" ON "portfolio_blocks_section_20_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_20_block_parent_id_idx" ON "portfolio_blocks_section_20_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_20_block_path_idx" ON "portfolio_blocks_section_20_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_21_block_order_idx" ON "portfolio_blocks_section_21_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_21_block_parent_id_idx" ON "portfolio_blocks_section_21_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_21_block_path_idx" ON "portfolio_blocks_section_21_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_22_block_order_idx" ON "portfolio_blocks_section_22_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_22_block_parent_id_idx" ON "portfolio_blocks_section_22_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_22_block_path_idx" ON "portfolio_blocks_section_22_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_23_block_order_idx" ON "portfolio_blocks_section_23_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_23_block_parent_id_idx" ON "portfolio_blocks_section_23_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_23_block_path_idx" ON "portfolio_blocks_section_23_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_24_block_slides_order_idx" ON "portfolio_blocks_section_24_block_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_24_block_slides_parent_id_idx" ON "portfolio_blocks_section_24_block_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_24_block_order_idx" ON "portfolio_blocks_section_24_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_24_block_parent_id_idx" ON "portfolio_blocks_section_24_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_24_block_path_idx" ON "portfolio_blocks_section_24_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_separator_block_order_idx" ON "portfolio_blocks_section_separator_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_separator_block_parent_id_idx" ON "portfolio_blocks_section_separator_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_separator_block_path_idx" ON "portfolio_blocks_section_separator_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_full_screen_block_order_idx" ON "portfolio_blocks_full_screen_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_full_screen_block_parent_id_idx" ON "portfolio_blocks_full_screen_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_full_screen_block_path_idx" ON "portfolio_blocks_full_screen_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_carousel_block_slides_order_idx" ON "portfolio_blocks_carousel_block_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_carousel_block_slides_parent_id_idx" ON "portfolio_blocks_carousel_block_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_carousel_block_order_idx" ON "portfolio_blocks_carousel_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_carousel_block_parent_id_idx" ON "portfolio_blocks_carousel_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_carousel_block_path_idx" ON "portfolio_blocks_carousel_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_questions_block_questions_order_idx" ON "portfolio_blocks_questions_block_questions" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_questions_block_questions_parent_id_idx" ON "portfolio_blocks_questions_block_questions" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_questions_block_order_idx" ON "portfolio_blocks_questions_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_questions_block_parent_id_idx" ON "portfolio_blocks_questions_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_questions_block_path_idx" ON "portfolio_blocks_questions_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_testimonial_block_testimonials_order_idx" ON "portfolio_blocks_testimonial_block_testimonials" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_testimonial_block_testimonials_parent_id_idx" ON "portfolio_blocks_testimonial_block_testimonials" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_testimonial_block_order_idx" ON "portfolio_blocks_testimonial_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_testimonial_block_parent_id_idx" ON "portfolio_blocks_testimonial_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_testimonial_block_path_idx" ON "portfolio_blocks_testimonial_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_highlights_highlights_order_idx" ON "portfolio_blocks_highlights_highlights" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_highlights_highlights_parent_id_idx" ON "portfolio_blocks_highlights_highlights" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_highlights_order_idx" ON "portfolio_blocks_highlights" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_highlights_parent_id_idx" ON "portfolio_blocks_highlights" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_highlights_path_idx" ON "portfolio_blocks_highlights" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_carousel_with_thumbnail_slides_order_idx" ON "portfolio_blocks_section_carousel_with_thumbnail_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_carousel_with_thumbnail_slides_parent_id_idx" ON "portfolio_blocks_section_carousel_with_thumbnail_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_carousel_with_thumbnail_order_idx" ON "portfolio_blocks_section_carousel_with_thumbnail" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_carousel_with_thumbnail_parent_id_idx" ON "portfolio_blocks_section_carousel_with_thumbnail" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_section_carousel_with_thumbnail_path_idx" ON "portfolio_blocks_section_carousel_with_thumbnail" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_quote_order_idx" ON "portfolio_blocks_quote" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_quote_parent_id_idx" ON "portfolio_blocks_quote" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_quote_path_idx" ON "portfolio_blocks_quote" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_property_block_order_idx" ON "portfolio_blocks_property_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_property_block_parent_id_idx" ON "portfolio_blocks_property_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_property_block_path_idx" ON "portfolio_blocks_property_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_property_block_image_idx" ON "portfolio_blocks_property_block" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "portfolio_blocks_property_block_logo_idx" ON "portfolio_blocks_property_block" USING btree ("logo_id");
  CREATE INDEX IF NOT EXISTS "portfolio_rels_order_idx" ON "portfolio_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "portfolio_rels_parent_idx" ON "portfolio_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "portfolio_rels_path_idx" ON "portfolio_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "portfolio_rels_images_id_idx" ON "portfolio_rels" USING btree ("images_id");
  CREATE INDEX IF NOT EXISTS "portfolio_rels_mux_video_id_idx" ON "portfolio_rels" USING btree ("mux_video_id");
  CREATE INDEX IF NOT EXISTS "work_rels_order_idx" ON "work_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "work_rels_parent_idx" ON "work_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "work_rels_path_idx" ON "work_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "work_rels_images_id_idx" ON "work_rels" USING btree ("images_id");
  CREATE INDEX IF NOT EXISTS "work_rels_mux_video_id_idx" ON "work_rels" USING btree ("mux_video_id");`);
}
