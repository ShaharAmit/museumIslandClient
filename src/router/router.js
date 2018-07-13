import React from "react";
import { Route } from "react-router-dom";
import newGalleries from "../Components/new_galleries";
import news from "../Components/news";
import forYou from "../Components/for_you";
import Header from "../Header";

const ReactRouter =()=>{
    return (
        <React.Fragment>
            <Header />
            <Route exact path="/" component={newGalleries} />
            <Route  path="/news" component={news} />
            <Route  path="/for_you" component={forYou} />
        </React.Fragment>
    );}

export default ReactRouter;
