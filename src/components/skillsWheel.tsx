import React, { useState, useEffect, WheelEvent, WheelEventHandler, useCallback, TouchEvent } from 'react'
import Skill from './skill'
import SkillClass from '../models/skills';

import '../sass/_skills.scss'
import { frontendSkillsList } from '../data/skillsList';
import { backendSkillsList } from '../data/skillsList';

import * as skillWheelUtil from '../js/skillWheel';

interface skillWheelOptionInterface{
  maxWidth: number,
  circleRadioInPx: number,
  numberOfSkillsToShow: number,
  className: string,
  circleCenter: circleCenterInterface,
  autoRotationAmount: number,
}

interface circleCenterInterface{ 
  x: number,
  y: number,
}

interface skillWheelInterface{
  skillsType: string,
  options: skillWheelOptionInterface
}

const SkillsWheel = ({skillsType, options}:skillWheelInterface) => {

  const [rotationAmount, setRotationAmount] = useState(0);
  const [renderOptions, setRenderOptions] = useState(options);

  let isRotable: boolean = true;
  let circleRadio: number;
  let circleParts: number;
  let fractionWidth: number;
  let circleCenter =  {x: 250, y: 250}
  const deceleration = 0.10;
  const clockDirection = 1; 
  const parts:Array<number> = [];

  const angle = -90;
  const radian = skillWheelUtil.toRadian(angle);

  const right = {x: 350, y: 350};
  const left = {x: 0, y: 350};
  let previousTouchY = 0;

  circleRadio = renderOptions.circleRadioInPx;
  fractionWidth =  360 / renderOptions.numberOfSkillsToShow;  
  for (let i = 0; i < frontendSkillsList.length; i++){
    parts.push(i * fractionWidth);
  }  
  circleCenter =  {
    x: (skillsType === "frontend")? options.circleCenter.x: 0,
    y: options.circleCenter.x, 
  }

  const calcMinRotation = ():number => {
    return angle + fractionWidth/2;
  }

  const calcMaxRotation = ():number => {
    return frontendSkillsList.length * fractionWidth + angle - fractionWidth/2;
  }

  let mixRotable:number = calcMinRotation();
  let mxnRotable: number = calcMaxRotation();

  useEffect(() => {
    const autoRotationId = setInterval(() => autoRotation(), 25);
    return function cleanup() {
      clearInterval(autoRotationId);
    };
  }, []);

  function calcPosition(fraction:number){
    return {
      x: circleCenter.x + Math.sin(radian + skillWheelUtil.toRadian(fraction) - skillWheelUtil.toRadian(rotationAmount)) * circleRadio * clockDirection,
      y: circleCenter.y - Math.cos(radian + skillWheelUtil.toRadian(fraction) - skillWheelUtil.toRadian(rotationAmount)) * circleRadio,
    }
  }

  const rotateByWheel = (e:WheelEvent) => {      
    return setRotationAmount(rotationAmount + e.deltaY * deceleration);
  }

  const rotateByTouch = (e:TouchEvent) => {
    return setRotationAmount(rotationAmount + checkTouchScroll(e));
  }

  const autoRotation = ():void =>{
    if (!isRotable) return; 
    let autoRotationAmount = options.autoRotationAmount;
    return setRotationAmount(prevRotationAmount =>  prevRotationAmount + autoRotationAmount)
  }

  function checkTouchScroll(e:TouchEvent){
    let currentTouch = e.touches[0].clientY;
    let scrollDirection = 0;

    if (previousTouchY == 0) previousTouchY = currentTouch;
    if (previousTouchY != currentTouch) scrollDirection = -(previousTouchY - currentTouch);

    previousTouchY = currentTouch;
    return scrollDirection / 2;
  }

  const checkDisplay = (fraction:number) => {
    let actualAngle = (radian + skillWheelUtil.toRadian(fraction) - skillWheelUtil.toRadian(rotationAmount)) * 180/Math.PI;
    return actualAngle < -235 || actualAngle > 150 ? "none" : "block";
  }

  const onMouseEnterHandler = useCallback(() => {
    isRotable = false;
    window.addEventListener("wheel", skillWheelUtil.preventDefaultWheel,  { passive: false })
  },[])

  const onMouseOutHandler = useCallback(() => {
    isRotable = true;
    window.removeEventListener("wheel", skillWheelUtil.preventDefaultWheel)
  },[])

  return (
    <div className={`skills__${skillsType}`} >
      <div className={`skills__${skillsType}-radial ${renderOptions.className}-${skillsType}`}
        onWheel={(e) => rotateByWheel(e)}
        onTouchMove={(e) => rotateByTouch(e)}
        onMouseEnter={() => onMouseEnterHandler()}
        onMouseLeave={() => onMouseOutHandler()}
        >
        <div className={`skills__circle-path-${skillsType}`}
        ></div>
        {frontendSkillsList.map((skillsProps, index) => (
            <Skill
              key={index}
              properties={{
                name: skillsProps.name,
                path: skillsProps.path,
                height: skillsProps.height,
                width: skillsProps.width,
              }}
              isDisplay={true}
              position={calcPosition(parts[index])}
            ></Skill>
          ))
        }
      </div>
    </div>
  )
}

export default SkillsWheel;