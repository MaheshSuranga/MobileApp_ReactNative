import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './albumDetail';

class AlbumList extends Component {
    state = { albums: [] };
    componentWillMount() {
        axios.get('http://rallycoding.herokuapp.com/api/music_albums')
        .then(response => {
            this.setState({ albums: response.data });
        })
        .catch(err => {
            console.log(err);
        });
    }

    renderAlbum() {
        return this.state.albums.map(album => 
            <AlbumDetail key={album.title} album={album} />
        );
    }
    
    render() {
        return (
            <ScrollView>
                {this.renderAlbum()}
            </ScrollView>
        );
    }
}
export default AlbumList;
