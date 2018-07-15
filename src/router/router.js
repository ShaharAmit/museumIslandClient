import React from "react";
import { Route } from "react-router-dom";
import newGalleries from "../Components/new_galleries";
import news from "../Components/news";
import forYou from "../Components/for_you";
import galleryByName from "../Components/gallery_by_name";
import ArtistByGal from "../Components/get_artist_by_gallery";
import museum from "../Components/museum";
import museumGalleries from "../Components/museumGalleries";
import museumArticles from "../Components/museumArticles";
import Header from "../Header";

const ReactRouter =()=>{
    return (
        <React.Fragment>
            <Header />
            <Route exact path="/" component={newGalleries} />
            <Route  path="/news" component={news} />
            <Route  path="/for_you" component={forYou} />
            <Route  path="/gallery_by_name/:gallery_name" component={galleryByName} />
            <Route  path="/all_pictures_by_gallery/:gallery_name" component={galleryByName} />
            <Route  path="/get_artist_by_gallery/:gallery_name" component={ArtistByGal} />
            <Route  path="/museum/:gallery" component={museum} />
        </React.Fragment>
    );}

export default ReactRouter;
