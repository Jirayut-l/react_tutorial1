import {
    useLocation
} from "react-router-dom";


export default function FooterBar () {
    const  url  = useLocation()

    return (
        <div>
            <a href={url.pathname}>{url.pathname}</a>
        </div>
    )
}
