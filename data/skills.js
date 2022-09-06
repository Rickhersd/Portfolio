import { skillsData } from "./skillsData.js";
import { Skill } from "../models/Skills.js";

export const skills = skillsData.map(
    (skill) => new Skill(skill.id, skill.width, skill.height, skill.svgElements, skill.description)
);
