import { frontendSkillsData } from "./skillsData.js";
import { backendSkillsData } from "./skillsData.js";
import { Skill } from "../models/Skills.js";

export const frontendSkills = frontendSkillsData.map(
    (skill) => new Skill(skill.id, skill.width, skill.height, skill.path, skill.svgFill, skill.description)
);

export const backendSkills = backendSkillsData.map(
    (skill) => new Skill(skill.id, skill.width, skill.height, skill.path, skill.svgFill, skill.description) 
)
