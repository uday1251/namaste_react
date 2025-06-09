import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
beforeAll(() => {
  jest.spyOn(console, "warn").mockImplementation((msg) => {
    if (
      msg.includes("React Router Future Flag Warning")
    ) return; // suppress only React Router warnings
    console.warn(msg);
  });
});

afterAll(() => {
  console.warn.mockRestore();
});
it("should load Header component login buton", () => {
  render(
  <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
   </BrowserRouter>
  );
  const loginBtn = screen.getByRole("button", { name: "Login" });

 
  expect(loginBtn).toBeInTheDocument();
});

it("should change the login btton to logot btn", () => {
  render(<BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginBtn = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginBtn);

  const logoutBtn = screen.getByRole("button", { name: "Logout" });
  expect(logoutBtn).toBeInTheDocument();
});

