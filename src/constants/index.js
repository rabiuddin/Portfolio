import { html, c, css, bootstrap, javascript, python, react, sql, Tailwind, HooBank, Gericht, gpt_3 } from "../assets";

export const techs = [
    {
        id: 0,
        name: "C++",
        img: c,
        
    },
    {
        id: 1,
        name: "Python",
        img: python,
    },
    {
        id: 2,
        name: "Javascript",
        img: javascript,
    },
    {
        id: 3,
        name: "React",
        img: react,
    },
    {
        id: 4,
        name: "HTML",
        img: html,
    },
    {
        id: 5,
        name: "CSS",
        img: css,
    },
    {
        id: 6,
        name: "Bootstrap",
        img: bootstrap,
    },
    {
        id: 7,
        name: "Tailwind",
        img: Tailwind,
    },
    {
        id: 8,
        name: "SQL",
        img: sql,
    },
];

export const projects = [
    {
        id: "project_1",
        name: "Gericht",
        img: Gericht,
        tech: [techs[3], techs[5]],
        description: "Behold an exquisite and sophisticated landing page for a beautiful fine dining restaurant.",
        git: 'https://github.com/rabiuddin/Gericht-Restaurant-FrontEnd',
        live: 'https://gericht-restaurant-wine.vercel.app/',
    },
    {
        id: "project_2",
        name: "HooBank",
        img: HooBank,
        tech: [techs[3], techs[7]],
        description: "Experience the dynamic and modern introductory page for a banking institution.",
        git: 'https://github.com/rabiuddin/Modern_Bank_App',
        live: 'https://modern-bank-app-rho.vercel.app/',
    },
    {
        id: "project_3",
        name: "GPT-3",
        img: gpt_3,
        tech: [techs[3], techs[5]],
        description: "Discover the vibrant and contemporary homepage for GPT-3, the cutting-edge language model.",
        git: 'https://github.com/rabiuddin/GPT-3_FrontEnd_React',
        live: 'https://gpt-3-front-end-react.vercel.app/',
    },
]