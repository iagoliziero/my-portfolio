export interface CardProjectsInterface {
    id: number,
    img: string,
    title: string,
    description: string,
    techChallenge: string,
    techStack: string[],
    navigationGithub: string,
    navigationDemo?: string,
    navigateDemoExist: boolean,
    area: string
}