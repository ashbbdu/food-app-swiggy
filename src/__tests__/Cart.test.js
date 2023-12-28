import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantDetails from "../pages/RestaurantDetails";
import restaurantDetailsMock from "./mocks/restaurantDetailsMock.json"
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store/store";
import Cart from "../pages/Cart";
import Header from "../components/Header";
global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve(restaurantDetailsMock);
      },
    });
  });

it("should load Restaurant menu component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <RestaurantDetails />
        </Provider>
      </BrowserRouter>
    );
  });
  const recommended = screen.getByText("Recommended (20)")
  expect(recommended).toBeInTheDocument()
  fireEvent.click(recommended)
  expect(screen.getByText("Paneer Butter Masala + Baby Naan 2 Pc")).toBeInTheDocument()
});



it("should find add to cart button and add item to cart", async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Header />
            <RestaurantDetails />
          </Provider>
        </BrowserRouter>
      );
    });

    const recommended = screen.getByText("Recommended (20)")
    expect(recommended).toBeInTheDocument()
    fireEvent.click(recommended)
    expect(screen.getByText("Paneer Butter Masala + Baby Naan 2 Pc")).toBeInTheDocument()

    const addButton = screen.getAllByText("Add +")
    expect(addButton).toHaveLength(20)
    fireEvent.click(addButton[0])
    expect(screen.getByText("Cart 1 items")).toBeInTheDocument()
  });


  it("should remove item from the cart" , () => {
    render(
        <BrowserRouter>
          <Provider store={store}>
            <Header />
            <Cart />
          </Provider>
        </BrowserRouter>
      )
      const removeBtn = screen.getByText("Remove From Cart")
      expect(removeBtn).toBeInTheDocument()
      fireEvent.click(removeBtn)
      expect(screen.getByText("Cart 0 items")).toBeInTheDocument()
  })



  it("should clear the cart" , () => {
    render(
        <BrowserRouter>
          <Provider store={store}>
            <Cart />
          </Provider>
        </BrowserRouter>
      )
      const clearBtn = screen.getByText("Clear Cart")
      expect(clearBtn).toBeInTheDocument()
      fireEvent.click(clearBtn)
  })