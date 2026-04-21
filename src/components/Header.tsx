import { LinkGroup } from "./LinkGroup"


export const Header = () => {
    return(
        <header>
            <LinkGroup options={[
                {label: "Movies", to: "movies"},
                {label: "TV", to: "television"}
            ]}/>
        </header>
    )
}