import { render } from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve();
        }
    })
})
it("Should Search Res List for burger text input ", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

});