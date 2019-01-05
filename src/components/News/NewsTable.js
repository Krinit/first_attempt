import React from 'react';
import NewsItem from './NewsItem'
import Grid from '@material-ui/core/Grid';



function NewsList() {
    const newsItems = [
        {
            imgSrc: 'https://e3.365dm.com/18/12/1600x1200/skynews-magnitogorsk-explosion_4534075.jpg?bypass-service-worker&20181231082554',
            title: 'Putin visits gas blast site amid race',
            description: 'Russian President Vladimir Putin has travelled to the site of a gas explosion in a apartment block that killed at least seven people and left dozens feared trapped.'
        },
        {
            imgSrc: 'https://e3.365dm.com/18/12/1600x1200/skynews-magnitogorsk-explosion_4534075.jpg?bypass-service-worker&20181231082554',
            title: 'Putin visits gas blast site amid race',
            description: 'Russian President Vladimir Putin has travelled to the site of a gas explosion in a apartment block that killed at least seven people and left dozens feared trapped.'
        },
        {
            imgSrc: 'https://e3.365dm.com/18/12/1600x1200/skynews-magnitogorsk-explosion_4534075.jpg?bypass-service-worker&20181231082554',
            title: 'Putin visits gas blast site amid race',
            description: 'Russian President Vladimir Putin has travelled to the site of a gas explosion in a apartment block that killed at least seven people and left dozens feared trapped.'
        },
        {
            imgSrc: 'https://e3.365dm.com/18/12/1600x1200/skynews-magnitogorsk-explosion_4534075.jpg?bypass-service-worker&20181231082554',
            title: 'Putin visits gas blast site amid race',
            description: 'Russian President Vladimir Putin has travelled to the site of a gas explosion in a apartment block that killed at least seven people and left dozens feared trapped.'
        },
        {
            imgSrc: 'https://e3.365dm.com/18/12/1600x1200/skynews-magnitogorsk-explosion_4534075.jpg?bypass-service-worker&20181231082554',
            title: 'Putin visits gas blast site amid race',
            description: 'Russian President Vladimir Putin has travelled to the site of a gas explosion in a apartment block that killed at least seven people and left dozens feared trapped.'
        },
        {
            imgSrc: 'https://e3.365dm.com/18/12/1600x1200/skynews-magnitogorsk-explosion_4534075.jpg?bypass-service-worker&20181231082554',
            title: 'Putin visits gas blast site amid race',
            description: 'Russian President Vladimir Putin has travelled to the site of a gas explosion in a apartment block that killed at least seven people and left dozens feared trapped.'
        }
    ];

    return (
        <div>
            <Grid  container
                   justify="space-around"
                   direction="row">
                {newsItems.map((item, index) => (
                    <Grid item  key={index} xs={3} style={{'marginTop': '1%', 'marginLeft': '10px'}}>
                        <NewsItem description={item.description} title={item.title} imgSrc={item.imgSrc}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}


export default NewsList;
