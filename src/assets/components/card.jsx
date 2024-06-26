import React from "react";
import avt from '../images/guts.jpg'
import { useState } from "react";



function Card() {
    const [name, setName] = useState("MinhDepTrai");
    const [age, setAge] = useState(21);
    const [color, setColor] = useState("#464962")

    function handleColorChange(event) {
        setColor(event.target.value);
    }

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleAgeChange(event) {
        setAge(event.target.value);
    }


    return (
        <div className="flex flex-col gap-5 items-center">
            <div className="flex flex-col items-start p-5 gap-5 font-medium shadow-lg shadow-black" style={{ backgroundColor: color }} >
                <img className="h-[240px] w-[240px] object-cover object-top rounded-full border-4 border-black" src={avt} alt="" />
                <div className="w-full text-center">
                    <p className="text-white text-lg">{name}</p>
                </div>
                <p className="text-white text-sm">Major: Software Engineer</p>
                <p className="text-white text-sm">University: Hutech</p>
                <p className="text-white text-sm">Age: {age}</p>
            </div>
            <div className="flex gap-3 items-center w-full">
                <label className="font-medium">Name: </label>
                <input className="p-3 border-2 border-black rounded-lg bg-slate-200 font-normal" value={name} onChange={handleNameChange} />
            </div>
            <div className="flex gap-6 items-center w-full">
                <label className="font-medium">Age: </label>
                <input className="p-3 border-2 border-black rounded-lg bg-slate-200 font-normal" value={age} onChange={handleAgeChange} />
            </div>
            <div className="flex w-full items-center gap-3">
                <p className="font-medium">Color: </p>
                <div className="flex items-center justify-center w-full h-24 bg-local relative" style={{ backgroundColor: color }} >
                    <p className="absolute font-medium font-sans text-xl text-white">{color}</p>
                    <input className="bg-transparent border-none w-full h-full" type="color" value={color} onChange={handleColorChange} />
                </div>
            </div>
        </div >
    );

}

export default Card