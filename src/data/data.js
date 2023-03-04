import { v4 as uuidv4} from 'uuid'


export const data = {

    games: [
        {
            id: uuidv4(),
            title: "¿Quién es Quién?",
            state: true,
        },
        {
            id: uuidv4(),
            title: "Memo Test",
            state: false,
        },
        {
            id: uuidv4(),
            title: "Preguntas y repuestas",
            state: false,
        },
        {
            id: uuidv4(),
            title: "Randomzise",
            state: false,
        }
    ]
}