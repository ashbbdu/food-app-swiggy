import {  fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import store from "../store/store";
import '@testing-library/jest-dom'

it("should load Header with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
//   const loginButton = screen.getByRole('button')
// const loginButton = screen.getByText("Login")
const loginButton = screen.getByRole("button" , {name : "Login"})
  expect(loginButton).toBeInTheDocument()
});

it("should load Header with a Home Link", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  //   const loginButton = screen.getByRole('button')
  // const loginButton = screen.getByText("Login")
  const home = screen.getByText("Home")
    expect(home).toBeInTheDocument()
  });

  it("should click on logout button", () => {
    render( 
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  //   const loginButton = screen.getByRole('button')
  // const loginButton = screen.getByText("Login")
  const home = screen.getByRole("button" , {name : "Login"})
    expect(home).toBeInTheDocument()
    fireEvent.click(home)
    expect(screen.getByText("Logout")).toBeInTheDocument()
    // expect(screen.getByRole("Button" , {name : "Logout"})).toBeInTheDocument()
  });
