import React from 'react'

interface Person {
    firstName: string
    lastName: string
}

interface Props {
    text?: string
    ok?: boolean;
    i?: number;
    fn?: (bob: string) => void;
    person?: Person;
}

export const TextField: React.FC<Props> = ({person, text}) => {
    return (
        <div>
            <input/>
            {person?.firstName}
            {person?.lastName}
            {text}
        </div>
    )
}

