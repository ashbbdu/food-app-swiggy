import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Body from "../components/Body";
import store from "../store/store";
import "@testing-library/jest-dom";
import restaurantListMockData from "./mocks/restaurantListMock.json";
import { act } from "react-dom/test-utils";
// mock function to mock fetch

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(restaurantListMockData);
    },
  });
});

it("should render the body component with search button", async () => {
  await act(async () =>
    render(

      <BrowserRouter>
        <Provider store={store}>
          
          <Body />
         
        </Provider>
      </BrowserRouter>
    )
  );
  const searchBtn = screen.getByRole("button", { name : "Search" })
  expect(searchBtn).toBeInTheDocument()
  const searchInput = screen.getByTestId("search-input")
  expect(searchInput).toBeInTheDocument()
  fireEvent.change(searchInput , {target : {value : "burger"}})  //faking e.target.value
  fireEvent.click(searchBtn)
  expect(screen.getByText("Burger King")).toBeInTheDocument()
});

