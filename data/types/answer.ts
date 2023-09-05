/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Unique identifier of an answered question in the format of UUID
 */
export type QuestionID = string;
/**
 * Yes (`true`), no (`false`) or neutral (`null`) answer to a question
 */
export type Answer1 = boolean | null;
/**
 * Whether a question was marked as important
 */
export type Answer2 = boolean;
/**
 * Who answered a question
 */
export type Responded = "user" | "candidate" | "expert";
/**
 * Respondent's comment to an answer
 */
export type Comment = string;
/**
 * Ordered list of sources for an answer
 *
 * @minItems 1
 */
export type Sources = [Source, ...Source[]];
/**
 * URL of a source
 */
export type URL = string;
/**
 * Title of a source
 */
export type Title = string;

/**
 * Answer to a question of a calculator
 */
export interface Answer {
  questionId: QuestionID;
  answer?: Answer1;
  isImportant?: Answer2;
  respondent?: Responded;
  comment?: Comment;
  sources?: Sources;
  [k: string]: unknown;
}
/**
 * Source of an answer
 */
export interface Source {
  url: URL;
  title?: Title;
  [k: string]: unknown;
}
