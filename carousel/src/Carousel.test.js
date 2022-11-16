import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";


it("renders without crashing", function () {
  render(
  <Carousel
    photos={TEST_IMAGES}
    title="images for testing"
  />);
})

it("matches snapshot", function () {
  const {container, debug } = render(
    <Carousel
    photos={TEST_IMAGES}
    title="images for testing"
  />);
  expect(container).toMatchSnapshot();
});

it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

it("works when you click on the left arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );

  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  fireEvent.click(rightArrow);

  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();

  fireEvent.click(leftArrow);

  //expect to see the second image
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();

  //don't expect to see the first image

  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

});