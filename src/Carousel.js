import React, { Component } from 'react';

class Carousel extends Component {
    state = {
        photos: [],
        active: 0,
    }

    static getDerivedStateFromProps({ media }) {
        let photos = [];

        if (media && media.photos && media.photos.photo) {
            photos = media.photos.photo.filter(photo => photo["@size"] === 'pn')
        }

        return { photos: photos };
    }

    handleIndexClick = (e) => {
        this.setState({
            // + converts string into num
            active: +e.target.dataset.index
        })
    }

    render() {
        const { photos, active } = this.state;

        return (
            <div className="carousel">
                <img src={photos[active].value} alt="primary animal" />
                <div className="carousel-smaller">
                    {photos.map((photo, index) => (
                        <img
                            onClick={this.handleIndexClick}
                            key={photo.value}
                            src={photo.value}
                            className={index === active ? 'active' : ''}
                            alt="animal thumbnail"
                            data-index={index}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Carousel;