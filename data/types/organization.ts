/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Organization is a group of people, for example a political party, a movement, etc.
 */
export type Organization = Organization1 & Organization2;
export type Organization1 = {
  [k: string]: unknown;
};
/**
 * Unique identifier of an organization in the format of UUID
 */
export type ID = string;
/**
 * Organization's preferred full name
 */
export type Name = string;
/**
 * Organization's official name with an unlimited length
 */
export type ShortName = string;
/**
 * Organization's short name with max. 25 characters
 */
export type ShortName1 = string;
/**
 * Organization's abbreviation with max. 15 characters
 */
export type Abbreviation = string;
/**
 * List of members of an organization
 *
 * @minItems 1
 */
export type Members = [Person | Organization3, ...(Person | Organization3)[]];
/**
 * Unique identifier of a person in the format of UUID
 */
export type ID1 = string;
/**
 * Unique identifier of an organization in the format of UUID
 */
export type ID2 = string;

export interface Organization2 {
  id: ID;
  name: Name;
  officialName?: ShortName;
  shortName?: ShortName1;
  abbreviation?: Abbreviation;
  /**
   * A name to use in a lexicographically ordered list
   */
  sortName?: string;
  /**
   * Alternate names to use for example in search
   */
  alternateNames?: string[];
  members?: Members;
  [k: string]: unknown;
}
/**
 * Reference to a person
 */
export interface Person {
  id: ID1;
  type: "person";
  [k: string]: unknown;
}
/**
 * Reference to an organization
 */
export interface Organization3 {
  id: ID2;
  type: "organization";
  [k: string]: unknown;
}
