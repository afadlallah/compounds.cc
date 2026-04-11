import {
  pgTable,
  uuid,
  text,
  integer,
  boolean,
  timestamp,
  jsonb,
  primaryKey,
  index,
  pgEnum,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// ---------- Enums ----------

export const compoundCategoryEnum = pgEnum("compound_category", [
  "peptide",
  "supplement",
  "nootropic",
  "sarm",
  "adaptogen",
  "glp",
  "racetam",
  "amino_acid",
  "medicine",
  "herb",
  "growth_hormone",
]);

export const userRoleEnum = pgEnum("user_role", ["user", "admin"]);

export const suggestionStatusEnum = pgEnum("suggestion_status", [
  "pending",
  "accepted",
  "rejected",
]);

export const aiMessageRoleEnum = pgEnum("ai_message_role", [
  "user",
  "assistant",
  "system",
  "tool",
]);

// ---------- Core tables ----------

export const categories = pgTable("categories", {
  id: uuid("id").defaultRandom().primaryKey(),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  description: text("description"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export const useCases = pgTable("use_cases", {
  id: uuid("id").defaultRandom().primaryKey(),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  description: text("description"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export const tags = pgTable("tags", {
  id: uuid("id").defaultRandom().primaryKey(),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const compounds = pgTable(
  "compounds",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    slug: text("slug").notNull().unique(),
    name: text("name").notNull(),
    category: compoundCategoryEnum("category").notNull(),
    summary: text("summary").notNull(),
    quickVerdict: text("quick_verdict"),
    evidenceScore: integer("evidence_score").default(0).notNull(),
    researchNotes: text("research_notes"),
    cautions: text("cautions"),
    caveats: text("caveats"),
    benefits: text("benefits").array(),
    dosageNotes: text("dosage_notes"),
    sideEffects: text("side_effects").array(),
    structureImageUrl: text("structure_image_url"),
    published: boolean("published").default(false).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [
    index("compounds_slug_idx").on(t.slug),
    index("compounds_category_idx").on(t.category),
    index("compounds_published_idx").on(t.published),
  ],
);

export const compoundUseCaseScores = pgTable(
  "compound_use_case_scores",
  {
    compoundId: uuid("compound_id")
      .notNull()
      .references(() => compounds.id, { onDelete: "cascade" }),
    useCaseId: uuid("use_case_id")
      .notNull()
      .references(() => useCases.id, { onDelete: "cascade" }),
    score: integer("score").notNull(),
    rationale: text("rationale"),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [
    primaryKey({ columns: [t.compoundId, t.useCaseId] }),
    index("scores_use_case_score_idx").on(t.useCaseId, t.score),
  ],
);

export const compoundRelations = pgTable(
  "compound_relations",
  {
    compoundId: uuid("compound_id")
      .notNull()
      .references(() => compounds.id, { onDelete: "cascade" }),
    relatedCompoundId: uuid("related_compound_id")
      .notNull()
      .references(() => compounds.id, { onDelete: "cascade" }),
    relationType: text("relation_type").default("related").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [primaryKey({ columns: [t.compoundId, t.relatedCompoundId] })],
);

export const compoundTags = pgTable(
  "compound_tags",
  {
    compoundId: uuid("compound_id")
      .notNull()
      .references(() => compounds.id, { onDelete: "cascade" }),
    tagId: uuid("tag_id")
      .notNull()
      .references(() => tags.id, { onDelete: "cascade" }),
  },
  (t) => [primaryKey({ columns: [t.compoundId, t.tagId] })],
);

export const protocols = pgTable(
  "protocols",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    slug: text("slug").notNull().unique(),
    name: text("name").notNull(),
    description: text("description").notNull(),
    goal: text("goal"),
    published: boolean("published").default(false).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [index("protocols_slug_idx").on(t.slug)],
);

export const protocolCompounds = pgTable(
  "protocol_compounds",
  {
    protocolId: uuid("protocol_id")
      .notNull()
      .references(() => protocols.id, { onDelete: "cascade" }),
    compoundId: uuid("compound_id")
      .notNull()
      .references(() => compounds.id, { onDelete: "cascade" }),
    role: text("role").default("core").notNull(),
    dosageNotes: text("dosage_notes"),
    orderIndex: integer("order_index").default(0).notNull(),
  },
  (t) => [primaryKey({ columns: [t.protocolId, t.compoundId] })],
);

export const expertQuotes = pgTable("expert_quotes", {
  id: uuid("id").defaultRandom().primaryKey(),
  compoundId: uuid("compound_id")
    .notNull()
    .references(() => compounds.id, { onDelete: "cascade" }),
  expertName: text("expert_name").notNull(),
  sourceUrl: text("source_url"),
  quoteText: text("quote_text").notNull(),
  postedAt: timestamp("posted_at", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

// ---------- User tables ----------

// NOTE: profiles.id should FK to auth.users.id at the SQL level — added in migration
export const profiles = pgTable("profiles", {
  id: uuid("id").primaryKey(),
  handle: text("handle").unique(),
  displayName: text("display_name"),
  avatarUrl: text("avatar_url"),
  bio: text("bio"),
  role: userRoleEnum("role").default("user").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export const reviews = pgTable(
  "reviews",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: uuid("user_id")
      .notNull()
      .references(() => profiles.id, { onDelete: "cascade" }),
    compoundId: uuid("compound_id")
      .notNull()
      .references(() => compounds.id, { onDelete: "cascade" }),
    title: text("title").notNull(),
    body: text("body").notNull(),
    rating: integer("rating").notNull(),
    published: boolean("published").default(true).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [index("reviews_compound_idx").on(t.compoundId)],
);

export const bookmarks = pgTable(
  "bookmarks",
  {
    userId: uuid("user_id")
      .notNull()
      .references(() => profiles.id, { onDelete: "cascade" }),
    compoundId: uuid("compound_id")
      .notNull()
      .references(() => compounds.id, { onDelete: "cascade" }),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [primaryKey({ columns: [t.userId, t.compoundId] })],
);

export const subscribers = pgTable("subscribers", {
  id: uuid("id").defaultRandom().primaryKey(),
  email: text("email").notNull().unique(),
  confirmed: boolean("confirmed").default(false).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export const suggestions = pgTable("suggestions", {
  id: uuid("id").defaultRandom().primaryKey(),
  compoundName: text("compound_name").notNull(),
  status: suggestionStatusEnum("status").default("pending").notNull(),
  submittedIp: text("submitted_ip"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

// ---------- AI chat ----------

export const aiSessions = pgTable("ai_sessions", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id")
    .notNull()
    .references(() => profiles.id, { onDelete: "cascade" }),
  title: text("title").default("New conversation").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});

export const aiMessages = pgTable(
  "ai_messages",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    sessionId: uuid("session_id")
      .notNull()
      .references(() => aiSessions.id, { onDelete: "cascade" }),
    role: aiMessageRoleEnum("role").notNull(),
    content: jsonb("content").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [index("ai_messages_session_idx").on(t.sessionId, t.createdAt)],
);

// ---------- Admin / audit ----------

export const compoundRevisions = pgTable(
  "compound_revisions",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    compoundId: uuid("compound_id")
      .notNull()
      .references(() => compounds.id, { onDelete: "cascade" }),
    editorId: uuid("editor_id").references(() => profiles.id, {
      onDelete: "set null",
    }),
    diff: jsonb("diff").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [index("compound_revisions_compound_idx").on(t.compoundId)],
);

export const adminAuditLog = pgTable("admin_audit_log", {
  id: uuid("id").defaultRandom().primaryKey(),
  actorId: uuid("actor_id").references(() => profiles.id, {
    onDelete: "set null",
  }),
  action: text("action").notNull(),
  targetTable: text("target_table").notNull(),
  targetId: text("target_id"),
  payload: jsonb("payload"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

// ---------- Relations ----------

export const compoundsRelationsDef = relations(compounds, ({ many }) => ({
  useCaseScores: many(compoundUseCaseScores),
  tags: many(compoundTags),
  reviews: many(reviews),
  bookmarks: many(bookmarks),
  expertQuotes: many(expertQuotes),
  protocolCompounds: many(protocolCompounds),
  revisions: many(compoundRevisions),
}));

export const useCasesRelationsDef = relations(useCases, ({ many }) => ({
  scores: many(compoundUseCaseScores),
}));

export const protocolsRelationsDef = relations(protocols, ({ many }) => ({
  compounds: many(protocolCompounds),
}));

export const tagsRelationsDef = relations(tags, ({ many }) => ({
  compounds: many(compoundTags),
}));

export const profilesRelationsDef = relations(profiles, ({ many }) => ({
  reviews: many(reviews),
  bookmarks: many(bookmarks),
  aiSessions: many(aiSessions),
}));
