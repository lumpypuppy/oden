import React, {Component} from 'react';
import image00 from './assets/00.jpg';
import image01 from './assets/01.jpg';


class Viewer extends Component {
    
    componentDidMount() {
        var urlid = 'b36d9a6575a04cc3948405d33c962900';
        
        var client = new window.Sketchfab('1.0.0', this.iframe);
        client.init(urlid, {
            success: (api) => {
                api.start();
                api.addEventListener('viewerready', function() {
                    api.setCameraLookAt( [-170.9961548434, 153.1387563434, 38.6248553661], [-93.2623581468, 158.9503791641, 42.9691579195] );
                    console.log( 'Viewer is ready' );
                    api.getAnnotationList(function(err, annotations) {
                        console.log(annotations);
                    });
                    api.addEventListener('annotationFocus', function(index) {
                        console.log('Reached annotation ' + index);
                    });
                });
            },
            error: function onError() {
                console.log('Viewer error');
            }
        });
    }

    render() {
        return (
            <div className="sketchfab-viewer">
                <iframe ref={(iframe) => {
                    this.iframe = iframe;
                }} src="about:blank" allowFullScreen="true" title="Sketchfab Viewer" width="100%" height="1000px" sandbox="allow-scripts allow-same-origin allow-popups allow-forms" allow="autoplay; fullscreen; vr" allowvr allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                <div className="slides">
                    <div id="annotation-0" className="slide active">
                        <img alt='slide1' src={image00}></img>
                    </div>
                    <div id="annotation-1" className="slide">
                        <img alt='slide2' src={image01}></img>
                    </div>
                </div>
            </div>
        );
    }
}

export default Viewer;
