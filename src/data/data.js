import { v4 as uuidv4} from 'uuid'


export const data = {

    games: [
        {
            id: uuidv4(),
            title: "¿Quién es Quién?",
            to: '/whoiswho',
            state: true,
        },
        {
            id: uuidv4(),
            title: "Memo Test",
            to: '/memotest',
            state: false,
        },
        {
            id: uuidv4(),
            title: "Preguntas y repuestas",
            to: '/questions',
            state: false,
        },
        {
            id: uuidv4(),
            title: "Randomzise",
            to: '/randomzise',
            state: false,
        }
    ]
}