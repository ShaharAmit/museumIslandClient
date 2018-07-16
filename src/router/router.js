import React from "react";
import { Route } from "react-router-dom";
import newGalleries from "../Components/new_galleries";
import forYou from "../Components/for_you";
import galleryByName from "../Components/gallery_by_name";
import ArtistByGal from "../Components/get_artist_by_gallery";
import museum from "../Components/museum";
import museumArtists from "../Components/museum_artists";
import getItems from "../Components/get_items_by_gallery";
import login from "../Components/login";
import newsByGenre from '../Components/news_by_genre';
import ArticleByNA from '../Components/article_by_na';
import Profile from '../Components/profile';
import Header from "../Header";

const ReactRouter =()=>{
    return (
        <React.Fragment>
            <Header />
            <Route exact path="/" component={newGalleries} />
            <Route exact path="/login" component={login} />
            <Route  path="/for_you" component={forYou} />
            <Route  path="/gallery_by_name/:gallery_name" component={galleryByName} />
            <Route  path="/all_pictures_by_gallery/:gallery_name" component={galleryByName} />
            <Route  path="/get_artist_by_gallery/:gallery_name" component={ArtistByGal} />
            <Route  path="/museum/:gallery" component={museum} />
            <Route  path="/museum_artists/:gallery" component={museumArtists} />
            <Route  path="/get_items_by_gallery/:gallery_name" component={getItems} />
            <Route  path="/news_by_genre" component={newsByGenre} />
            <Route  path="/article_by_na/:name/:author" component={ArticleByNA} />
            <Route  path="/profile" component={Profile} />
        </React.Fragment>
    );}

export default ReactRouter;
