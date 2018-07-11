import React from "react";
import { Route } from "react-router-dom";
import newGalleries from "../Components/new_galleries";
import newsByGenre from "../Components/news_by_genre";
import search from "../Components/search";
import Header from "../Header";

const ReactRouter =()=>{
    return (
        <React.Fragment>
            <Header />
            <Route exact path="/" component={newGalleries} />
            <Route  path="/news_by_genre" component={newsByGenre} />
            <Route  path="/search" component={search} />
        </React.Fragment>
    );}

export default ReactRouter;
