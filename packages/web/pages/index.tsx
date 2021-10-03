import { ReactNode } from "react";

export default function Home(): ReactNode {
  return (
    <div className="h-auto 2xl:h-screen bg-main bg-cover bg-no-repeat bg-left-top bg-fixed">
      <div className="md:w-3/5 lg:w-2/4 m-auto pt-28 bg-transparent ">
        <header className="z-0 md:mt-12 fixed h-screen left-2/4 -translate-x-1/2 text-white text-center">
          <h1 className="font-cursive font-bold text-6xl">
            <span className="block md:inline-block">Carson</span>
            <span className="block md:inline-block">&nbsp;&&nbsp;</span>
            <span className="block md:inline-block">Tatianna</span>
          </h1>
          <h2 className=" mt-8 font-serif font-normal md:text-3xl">
            <span className="block md:inline-block text-2xl">
              June 12, 2022
            </span>
            <span className="hidden md:inline-block text-2xl">
              &nbsp;·&nbsp;
            </span>
            <span className="block text-1xl md:inline-block md:text-2xl">
              Shippensburg, PA
            </span>
          </h2>
        </header>

        <main className="relative mt-96 bg-white rounded-t-3xl md:rounded-3xl md:drop-shadow-2xl font-serif text-lg leading-8 p-4">
          <h3 className="font-cursive font-bold text-2xl md:text-4xl text-center">
            RSVP
          </h3>
          <p className="mb-6">This is the RSVP form</p>
          <h3 className="font-cursive font-bold text-3xl md:text-4xl text-center">
            Schedule
          </h3>
          <p className="mb-6">This is the schedule</p>
          <h3 className="font-cursive font-bold text-3xl md:text-4xl text-center">
            Location
          </h3>
          <p className="mb-6">This is the map</p>
          This is placeholder text and will be replaced when the website goes
          live. The eye is often drawn to the meaning of text used as a
          placeholder, but it has no meaning and is simply there to take up
          space. Placeholder text is important so that elements that display
          text have something relatively realistic to display. This placeholder
          text will be removed and replaced with real content. Placeholder text
          is important so that elements that display text have something
          relatively realistic to display. Using placeholder text is common in
          the industry and means that the site is being built to realistic
          standards. This text is here to test that text can be displayed
          correctly on the page and doesn't hold any meaning. Placeholder text
          isn't supposed to hold any meaning, but is there to pad out the space
          where text would usually be. The eye is often drawn to the meaning of
          text used as a placeholder, but it has no meaning and is simply there
          to take up space. This is placeholder text. This is placeholder text
          and will be replaced when the website goes live. The eye is often
          drawn to the meaning of text used as a placeholder, but it has no
          meaning and is simply there to take up space. This is placeholder text
          and will be replaced when the website goes live. Placeholder text is
          important so that elements that display text have something relatively
          realistic to display. Using placeholder text is common in the industry
          and means that the site is being built to realistic standards.
          Placeholder text isn't supposed to hold any meaning, but is there to
          pad out the space where text would usually be. This is placeholder
          text. Placeholder text will be swapped out before development of the
          site is complete. This is placeholder text. Placeholder text fills the
          space before the real content has been input. This placeholder text
          will be swapped out before the website is complete. This is dummy
          text. This text is here to test that text can be displayed correctly
          on the page and doesn't hold any meaning. This is dummy text.
        </main>
        <footer className="bg-white md:bg-transparent md:text-white font-semibold py-5 text-center">
          <span className="block md:inline-block">
            Made with ❤️ by Carson,&nbsp;
          </span>
          <span className="block md:inline-block">
            powered by Cloudflare ⛅ Workers and Pages.
          </span>
        </footer>
      </div>
    </div>
  );
}
