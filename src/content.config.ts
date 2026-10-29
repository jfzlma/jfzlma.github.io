import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { yamlDocument } from "./lib/yaml-loader";

/** Year-month string, e.g. 2024-02. Quote it in YAML if your editor complains. */
const yearMonth = z
  .string()
  .regex(/^\d{4}-(0[1-9]|1[0-2])$/, "Use a YYYY-MM date, e.g. 2024-02");

const link = z.object({
  label: z.string().min(1),
  url: z.url(),
});

const profile = defineCollection({
  loader: yamlDocument("content/profile.yml"),
  schema: z.object({
    name: z.string().min(1),
    headline: z.string().min(1),
    location: z.string().min(1),
    handle: z.string().regex(/^[a-z0-9-]+$/, "Lowercase letters, digits and dashes only"),
    email: z.email(),
    summary: z.string().min(1),
    links: z.array(link).default([]),
    resume: z.string().startsWith("/").optional(),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: "*.md", base: "./content/experience" }),
  schema: z
    .object({
      company: z.string().min(1),
      role: z.string().min(1),
      location: z.string().optional(),
      start: yearMonth,
      end: yearMonth.optional(),
    })
    .refine((job) => !job.end || job.end >= job.start, {
      message: "`end` must not be before `start`",
      path: ["end"],
    }),
});

const projects = defineCollection({
  loader: glob({ pattern: "*.md", base: "./content/projects" }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    stack: z.array(z.string().min(1)).default([]),
    links: z.array(link).default([]),
    status: z.enum(["active", "maintained", "completed", "archived"]).optional(),
    featured: z.boolean().default(false),
    date: yearMonth.optional(),
  }),
});

const skill = z.union([
  z.string().min(1).transform((name) => ({ name })),
  z.object({
    name: z.string().min(1),
    level: z.string().optional(),
    years: z.number().positive().optional(),
  }),
]);

const skills = defineCollection({
  loader: yamlDocument("content/skills.yml"),
  schema: z.object({
    categories: z
      .array(
        z.object({
          name: z.string().min(1),
          note: z.string().optional(),
          skills: z.array(skill).min(1),
        }),
      )
      .min(1),
  }),
});

const education = defineCollection({
  loader: yamlDocument("content/education.yml"),
  schema: z.object({
    degrees: z.array(
      z.object({
        degree: z.string().min(1),
        institution: z.string().min(1),
        location: z.string().optional(),
        start: yearMonth.optional(),
        end: yearMonth,
      }),
    ),
    publications: z
      .array(
        z.object({
          title: z.string().min(1),
          publisher: z.string().min(1),
          date: yearMonth,
          url: z.url().optional(),
        }),
      )
      .default([]),
  }),
});

export const collections = { profile, experience, projects, skills, education };
