import {Header} from "../../components/Header";
import {Greetings} from "./componenets/Greetings";
import {Examples} from "./componenets/Examples";

export const Welcome = () => {
    return (
        <>
            <Header/>
            <Greetings/>
            <Examples/>
        </>
    )
}