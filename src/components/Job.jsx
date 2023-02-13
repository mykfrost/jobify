import React from "react";
import { useState } from "react";
export default function Job(props){
  const {job} =  props;
  const {title , description} = job;
  const [isDetail , setDetail] = useState(false);

  function handleClick(){
    setDetail(true);
  }
    return(
        <li>
            <article onClick={handleClick} className="media job">
                <div className="media-content">
                    <h4>{title}</h4>
                    {isDetail ? <p> {description} </p> : null }
                </div>
            </article>
        </li>
    );

}