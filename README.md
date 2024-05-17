# Movie Search Interface

This project is a web interface that allows users to search for movies using the OMDB API. The UI is built with TailwindCSS and DaisyUI components, and end-to-end testing is implemented using Cypress.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Testing](#testing)
- [Technologies Used](#technologies-used)

## Installation

First, clone the repository:

```bash
git  clone  https://github.com/yourusername/moviesearch-interface.git
cd  moviesearch-interface
```

Install the dependencies:

```bash
npm install
```

## Configuration

Copy `.env.example` file in the root of your project and rename it to .env.
Replace `<your_api_key` for your OMDB api key.

```env
NEXT_PUBLIC_OMDB_API_URL=https://www.omdbapi.com/
NEXT_PUBLIC_OMDB_API_KEY=<your_api_key>
```

## Usage

To start the development server, run:

```bash
npm  run  dev
```

Open http://localhost:3000 with your browser to see the result.

## Testing

End-to-end testing is done using Cypress. To run the tests, use the following command:

```bash
npm  run  cypress:open
```

## Technologies Used

- [Next.js](https://nextjs.org/) for the React framework
- [OMDB API](http://www.omdbapi.com/) for movie data
- [TailwindCSS](https://tailwindcss.com/) for utility-first CSS framework
- [DaisyUI](https://daisyui.com/) for Tailwind CSS components
- [Cypress](https://www.cypress.io/) for end-to-end testing
