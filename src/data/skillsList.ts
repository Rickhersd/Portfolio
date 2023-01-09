import { frontendSkillsData } from "./skillsData";
import { backendSkillsData } from "./skillsData";
import SkillClass from "../models/skills";

export const frontendSkillsList = frontendSkillsData.map(
    (skill) => new SkillClass(skill.name, skill.width, skill.height, skill.path, skill.svgFill, skill.description)
);

export const backendSkillsList = backendSkillsData.map(
    (skill) => new SkillClass(skill.name, skill.width, skill.height, skill.path, skill.svgFill, skill.description) 
)
