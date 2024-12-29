import NavBar from "./NavBar"
import PrimaryArticle from "./PrimaryArticle"
import Info from "./Info"
import ScrollBar from "./ScrollBar"
import LeftArticles from "./LeftArticles"
import RightArticles from "./RightArticles"
import SmallPrimaryArticle from "./SmallPrimaryArticle"

function App() {
    return (
        <div>
            <div>
                <NavBar />
                <ScrollBar />
            </div>
            <div className="row">

                <div className="columnleft">
                    <h1 className="article-title">Featured </h1>
                    <hr/>
                    <LeftArticles/>
                </div>

                <div className="column">
                    <h1 className="article-title">Top Stories </h1>
                    <hr/>
                        <PrimaryArticle />
                    <hr className="articlesplit" />
                        <SmallPrimaryArticle />
                </div>
                
                <div className="columnright">
                    <h1 className="article-title">Latest </h1>
                        <hr/>
                    <RightArticles/>
                </div>
            </div>
        </div>

    )
}
export default App
