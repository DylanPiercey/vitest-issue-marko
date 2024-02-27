import { fireEvent, render, screen } from "@marko/testing-library";
import Counter from "./index.marko";

test("Default", async () => {
  await render(Counter);
  const $btn = screen.getByRole("button");

  expect($btn).toHaveProperty("textContent", "0");

  await fireEvent.click($btn);

  expect($btn).toHaveProperty("textContent", "1");
});
