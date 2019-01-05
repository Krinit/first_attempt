import React from 'react';
import {connect} from 'react-redux'
import NewsItem from './NewsItem'
import Grid from '@material-ui/core/Grid';



class NewsList extends React.Component {
    render() {
        return (
            <div>
                <Grid container
                      justify="space-around"
                      direction="row">
                    {this.props.newsItems.map((item, index) => (
                        <Grid item key={index} xs={3} style={{'marginTop': '1%', 'marginLeft': '10px'}}>
                            <NewsItem
                                description={item.description}
                                title={item.title}
                                imgSrc={item.imgSrc}
                                username={this.props.user.username}/>
                        </Grid>
                    ))}
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        newsItems: store.newsItems,
        user: store.user
    }
}



export default connect(mapStateToProps)(NewsList)
