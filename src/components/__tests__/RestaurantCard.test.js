import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import MockTest from "../mocks/resCardMockData.json";
import { OfferCard } from "../RestaurantCard";

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
it("should render RestaurantCard component with props Data", () => {
  render(
    <MemoryRouter>
      <RestaurantCard resData={MockTest} />
    </MemoryRouter>
  );

  const name = screen.getByText("Chinese Wok");

  expect(name).toBeInTheDocument();
});


it("should render RestaurantCard component with Promoted Label", () => {
  // Home Work - test HOC : withPromtedLabel()
 <MemoryRouter>
      <OfferCard RestaurantCard={RestaurantCard} />
    </MemoryRouter>
  
});