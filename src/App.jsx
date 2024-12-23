import NavBar from "./NavBar"
import PrimaryArticle from "./PrimaryArticle"
import Info from "./Info"
import ScrollBar from "./ScrollBar"

function App() {
    return (
        <div>
            <div>
                <NavBar />
                <ScrollBar />
            </div>
            <div className="row">
                <div className="columnleft">
                    <PrimaryArticle />
                </div>
                <div className="columnmiddle">
                    <PrimaryArticle />
                </div>
                <div className="columnright">
                    <Info/>
                </div>
            </div>
        </div>

    )
}
export default App
