import { screen, render } from "@testing-library/react";
import HomePresentation from ".";

describe("the content of the component", () => {
    it("Test the rendering of the header with the correct text", () => {
        render(<HomePresentation />)
        const homepageHeader = screen.getByRole('heading', {name: /10 Biggest Movies of 2025 Ranked by Box Office Earnings Projections/i})
        expect(homepageHeader).toBeInTheDocument()
        expect(homepageHeader).toHaveTextContent(/10 Biggest Movies of 2025 Ranked by Box Office Earnings Projections/i)
    })

        it("Test the rendering of the span with the correct text", () => {
        render(<HomePresentation />)
        const homepageSpan = screen.getByText(/2025 is set up to be the biggest box office year since 2019, but which films will lead the way ?/i)
        expect(homepageSpan).toBeInTheDocument()
        expect(homepageSpan).toHaveTextContent(/2025 is set up to be the biggest box office year since 2019, but which films will lead the way ?/i)
    })
            it("Test the rendering of the img with the correct text", () => {
        render(<HomePresentation />)
        const homepageImage = screen.getByRole('img', {name: /movie image/i})
        expect(homepageImage).toBeInTheDocument()
        expect(homepageImage).toHaveAttribute('src', '/images/movies-2025-box-office.jpg')
        expect(homepageImage).toHaveAttribute('alt', 'movie image' )
    })
    it("Test if the p renders the correct paragraph", () => {
        render(<HomePresentation />)
        const homepageParagraph = screen.getByText(/The box office has the potential to fully bounce back in 2025, reaching new heights beyond anything seen in the 2020s thus far. This is primarily due to some of the big hitters from studios like Disney, Warner Bros., Paramount, and Universal. While Marvel and DC's presence will be greatly felt in the coming year, it'd be unfair to expect those superhero flicks to lead the way./i)
        expect(homepageParagraph).toBeInTheDocument()
        expect(homepageParagraph).toHaveTextContent(/The box office has the potential to fully bounce back in 2025, reaching new heights beyond anything seen in the 2020s thus far. This is primarily due to some of the big hitters from studios like Disney, Warner Bros., Paramount, and Universal. While Marvel and DC's presence will be greatly felt in the coming year, it'd be unfair to expect those superhero flicks to lead the way./i)
    })
})