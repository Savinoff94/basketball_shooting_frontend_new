import { ReactNode } from "react"

type UsersListProps = {
    children: ReactNode,
    header?:string
}

export default function UsersList({children, header = ''} : UsersListProps) {
    return (
    <div>
        <h3>{header}</h3>
        <ul>
            {children}
        </ul>
    </div>
    )
}