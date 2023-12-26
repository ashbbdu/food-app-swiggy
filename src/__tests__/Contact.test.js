import { render, screen } from "@testing-library/react"
import ContactUs from "../pages/ContactUs"
import '@testing-library/jest-dom'


describe("contact us page test cases" , () => {
    // test or it both can be used
    it("should load contact us componenet" , () => {
        render(<ContactUs />)
      const heading = screen.getByText("ContactUs");
      expect(heading).toBeInTheDocument()
    
    })
    
    it("should load button inside the contact component" , () => {
        render(<ContactUs />)
        const btn = screen.getByRole('button')
        expect(btn).toBeInTheDocument()
    })
    
    it("should load 2 input boxes on contact component" , () => {
        render(<ContactUs />)
        // textbox not input
        const inputBoxes = screen.getAllByRole("textbox");
        expect(inputBoxes).toHaveLength(2)
    })
})

