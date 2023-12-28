import { render, screen } from "@testing-library/react"
import ErrorPage from "../components/ErrorPage"
import '@testing-library/jest-dom'

it("should load the error page with correct details" , () => {
    render(<ErrorPage />);
    const errorMessage = screen.getByText("404 Page Not Found")
    expect(errorMessage).toBeInTheDocument() 
})