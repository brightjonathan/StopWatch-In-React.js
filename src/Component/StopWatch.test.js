import React from "react";
import {render, fireEvent} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import Stopwatch from './Stopwatch'

//using the RENDERING MeTHOD to TEST

//testing the h3 tag
test("headerRenders", ()=>{
    const Compound = render(<Stopwatch/>)
    const headerid = Compound.getByTestId("heade_one")

    expect(headerid.textContent).toBe("Stopwatch Program")
})

//testing the start btn
// test("headerRenders", ()=>{
//     const Compound = render(<Stopwatch/>)
//     const headerid = Compound.getByTestId("start_btn")

//     expect(headerid.textContent).toBe("start")
// })

//testing for the stop btn
// test("headerRenders", ()=>{
//     const Compound = render(<Stopwatch/>)
//     const headerid = Compound.getByTestId("stop_btn")

//     expect(headerid.textContent).toBe("stop")
// })

//testing for the re-start button
// test("headerRenders", ()=>{
//     const Compound = render(<Stopwatch/>)
//     const headerid = Compound.getByTestId("restart_btn")

//     expect(headerid.textContent).toBe("Re-start")
// })


//using the FIREeVENT MeTHOD to TEST

//start button 
test("start btn", ()=>{
    const Compound = render(<Stopwatch/>)
    const headerid = Compound.getByTestId("start_btn")
    const counter1 = Compound.getByTestId("milisec")
    const counter2 = Compound.getByTestId("second")
    const counter3 = Compound.getByTestId("mins")
    const counter4 = Compound.getByTestId("hour")
   

    expect(counter1.textContent).toBe("0")
    expect(counter2.textContent).toBe("0")
    expect(counter3.textContent).toBe("0")
    expect(counter4.textContent).toBe("0")

    fireEvent.click(headerid)

   expect(counter1.textContent).toBe("0")
   expect(counter2.textContent).toBe("0")
   expect(counter3.textContent).toBe("0")
   expect(counter4.textContent).toBe("0")
})

//stop button
test("stop btn", ()=>{
    const Compound = render(<Stopwatch/>)
    const headerid = Compound.getByTestId("stop_btn")
    const counter1 = Compound.getByTestId("milisec")
    const counter2 = Compound.getByTestId("second")
    const counter3 = Compound.getByTestId("mins")
    const counter4 = Compound.getByTestId("hour")
   

    expect(counter1.textContent).toBe("0")
    expect(counter2.textContent).toBe("0")
    expect(counter3.textContent).toBe("0")
    expect(counter4.textContent).toBe("0")

    fireEvent.click(headerid)

   expect(counter1.textContent).toBe("0")
   expect(counter2.textContent).toBe("0")
   expect(counter3.textContent).toBe("0")
   expect(counter4.textContent).toBe("0")
})

//re-start button
test("re-start btn", ()=>{
    const Compound = render(<Stopwatch/>)
    const headerid = Compound.getByTestId("restart_btn")
    const counter1 = Compound.getByTestId("milisec")
    const counter2 = Compound.getByTestId("second")
    const counter3 = Compound.getByTestId("mins")
    const counter4 = Compound.getByTestId("hour")
   

    expect(counter1.textContent).toBe("0")
    expect(counter2.textContent).toBe("0")
    expect(counter3.textContent).toBe("0")
    expect(counter4.textContent).toBe("0")

    fireEvent.click(headerid)

   expect(counter1.textContent).toBe("0")
   expect(counter2.textContent).toBe("0")
   expect(counter3.textContent).toBe("0")
   expect(counter4.textContent).toBe("0")
})
