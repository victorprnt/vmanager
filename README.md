<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
-->

[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<!--[![MIT License][license-shield]][license-url]-->

[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <!-- <a href="https://github.com/victorprnt/vmanager">
    <img src="./src/assets/images/tmdb-logo.png" alt="Logo" width="90">
  </a> -->

  <h1 align="center">V-Manager</h1>

  <p align="center">
    !
    <br />
    <a href="https://github.com/victorprnt/vmanager"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    ·
    <a href="https://github.com/victorprnt/vmanager/issues">Report Bug</a>
    ·
    <a href="https://github.com/victorprnt/vmanager/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <!-- <li><a href="#license">License</a></li> -->
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

Using an API containing hosts and vulnerabilities, and also some other details, this project has the objective to automate the process of taking actions given the criticalness that can be inferred

### Built With

This project was built using:

- [React](https://reactjs.org/)
- [Styled Components](https://styled-components.com/)
- [Recharts](https://recharts.org/en-US/)
- [Typescript](https://www.typescriptlang.org/)

<!-- GETTING STARTED -->

## Getting Started

The following steps are the description of how you can set up the project locally.

### Prerequisites

You'll need to have yarn installed to install the required packages.

[yarn](https://classic.yarnpkg.com/en/docs/install)

You'll also need Node.js installed. Download it from the link below.

[Node.js](https://nodejs.org/en/)

### Installation

1. Clone the repository
   ```sh
    git clone https://github.com/victorprnt/vmanager.git
   ```
2. Install yarn packages
   ```sh
    yarn
   ```
3. To execute the project locally, run the following command:
   ```sh
    yarn start
   ```
4. A file .env.local must be created at the root project folder and the cookie token must be provided. The format of the local variable is the one following:
```
REACT_APP_CSRF=csrftoken={the value of the cookie must be provided here}
```

5. You should access the app through

   [http://localhost:3000](http://localhost:3000)

<!-- USAGE EXAMPLES -->

## Usage

### Login
The users must provide a username and password to authenticate themselves and start using the V-Manager.
### Dashboard

Using the Dashboard, the user is able to find three cards where is possible to infer: 
- The vulnerable assets amount / total amount of assets;
- The quantity of active vulnerabilities / total vulnerabilities;
- The average risk according to the vulnerable hosts;
- A graph containing the 10 most vulnerable hosts and
- The distribution of vulnerabilities by severity.

### Hosts table

In the hosts table, the user is able to read the table of hosts containing infos about the vulnerable hosts. Infos like, ID, name and amount of vulnerabilities.

### Host details

Page yet to be implemented.

### Vulnerability table

In the vulnerabilities table, the user is able to read the vulnerabilty name, its severity, the CVSS, the publishing date and how many hosts it affects.

### Vulnerabily detail

Page yet to be implemented.

<!--_For more examples, please refer to the [Documentation](https://example.com)_ -->

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/victorprnt/vmanager/issues) for a list of proposed features (and known issues).

Go to the [project tracker](https://parvic.notion.site/V-Manager-840495542afd477aba47b3e2649847a0) on Notion

<!-- CONTRIBUTING -->

## Contributing

Any contributions you would like to do are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/NewFeature`)
3. Commit your Changes (`git commit -m 'Comment about the NewFeature created'`)
4. Push to the Branch (`git push origin feature/NewFeature`)
5. Open a Pull Request

<!-- LICENSE -->

<!--
## License

Distributed under the MIT License. See `LICENSE` for more information.
-->

<!-- CONTACT -->

## Contact

Victor Parente - [LinkedIn](https://www.linkedin.com/in/victorprnt/) - victorprnt@gmail.com

Project Link: [https://github.com/victorprnt/vmanager](https://github.com/victorprnt/vmanager)

<!-- ACKNOWLEDGEMENTS -->

<!-- ## Acknowledgements

- [react-responsive](https://github.com/contra/react-responsive)
- [React Icons](https://react-icons.github.io/react-icons) -->

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[forks-shield]: https://img.shields.io/github/forks/victorprnt/tmdb-app.svg?style=for-the-badge
[forks-url]: https://github.com/victorprnt/vmanager/network/members
[stars-shield]: https://img.shields.io/github/stars/victorprnt/tmdb-app.svg?style=for-the-badge
[stars-url]: https://github.com/victorprnt/vmanager/stargazers
[issues-shield]: https://img.shields.io/github/issues/victorprnt/tmdb-app.svg?style=for-the-badge
[issues-url]: https://github.com/victorprnt/vmanager/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/victorprnt
[product-screenshot]: https://i.imgur.com/r58J2V8.gif
[notion-project]: https://www.notion.so/parvic/TMDB-App-cc07184ba65649408eec9fa35d8f44e4
