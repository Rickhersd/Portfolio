import React from 'react'

interface PropertiesSkillsInterface{
  name: string,
  path: string,
  width: number,
  height: number,
}

interface PositionSkillsInterface{
  x: number,
  y: number,
}

interface SkillInterface{
  properties:PropertiesSkillsInterface,
  position:PositionSkillsInterface,
  isDisplay: boolean,
}

export default function Skill({properties, position, isDisplay}:SkillInterface) {

  let style = {
    top:`${position.y}px`,
    left:`${position.x}px`,
    display: isDisplay? 'block' : 'none',
  }

  return (
    <div className="skillElement" style={style}>
      <svg
        role='img'
        width={properties.width + "px"}
        height={properties.height + "px"}
        viewBox={`0 0 ${properties.width} ${properties.height}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>{properties.name + " icon"}</title>
        <path
          d={properties.path}
        ></path>
      </svg>
    </div>
  )
}
