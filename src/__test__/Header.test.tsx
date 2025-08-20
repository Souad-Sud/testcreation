import { render, screen, within } from "@testing-library/react";
import Header from ".";

describe("Header", () => {
  it("renders an h1 with the correct text", () => {
    render(<Header />);

    const title = screen.getByRole("heading", {
      level: 1,
      name: "Welcom to my website",
    });

    expect(title).toBeInTheDocument();
  });
});

// describe("That the header exists", () => {
//   it("test that the header shows the content in the screen", () => {
//     render(<Header />);
//     const HeaderElement = screen.getByText(/Welcom to my website/i);
//     expect(HeaderElement).toBeInTheDocument();
//   });

//   it("Test that h1 is located inside the header", () => {
//     render(<Header />);

//     const header = screen.getByRole("banner");
//     const headerTitle = within(header).getByRole("heading", { level: 1 });
//     expect(headerTitle).toHaveTextContent("Welcom to my website");
//     expect(headerTitle).toBeInTheDocument();
//   });

//   it("Test that the h1 renders the exact content", () => {
//     render(<Header />);
//     const title = screen.getByRole("heading", {
//       level: 1,
//       name: /Welcom to my website/i,
//     });
//     expect(title).toBeInTheDocument();
//   });
// });
