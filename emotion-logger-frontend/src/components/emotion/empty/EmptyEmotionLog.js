import {Link} from "react-router-dom";

export const EmptyEmotionLog = () => {
    return (
        <div className="block pt-6 mt-6">
            <p className="has-text-weight-bold has-text-centered">Oops! You don't have any logged emotions on that
                day</p>
            <hr className="my-4"/>
            <section>
                <Link to="/log-emotion">
                    <button className="button blue-button is-fullwidth">Log emotion +</button>
                </Link>
            </section>
        </div>
    )
}