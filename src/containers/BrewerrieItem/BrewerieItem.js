import React from "react";
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import './BrewerieItem.scss'



const BrewerieItem = (props) => {
    return (
        <div className={'BreweriesItem'}>
            <div className={'BreweriesItem__map'}>
                {props.breweries.longitude && props.breweries.latitude
                    ? <YMaps>
                        <Map
                            defaultState={{
                                center: [props.breweries.latitude, props.breweries.longitude],
                                zoom: 9,
                            }}
                        >
                            <Placemark geometry={[props.breweries.latitude, props.breweries.longitude]} />
                        </Map>
                    </YMaps>
                    : <p>Geolocation Data not found </p>
                }
            </div>
            <div className={'BreweriesItem__content'}>
                <h3 className={'BreweriesItem__title'}>{props.breweries.name}</h3>
                <div className="BreweriesItem__contacts">
                    <p>{props.breweries.country}, {props.breweries.state}, {props.breweries.city}</p>
                    {props.breweries.phone
                        ? <p>phone {props.breweries.phone}</p>
                        : null
                    }
                    {props.breweries.website_url
                        ? <a href={props.breweries.website_url}>{props.breweries.website_url}</a>
                        : null
                    }
                </div>
            </div>
        </div>
    )
}
export default BrewerieItem