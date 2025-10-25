import React from 'react'
import StoreMap from './widget/StoreMap'

function StoreFinder() {
  const stores = [
  { 
    id: 1,
    name: "The Local Choice Pharmacy Quenets",
    address: "The Local Choice Pharmacy Quenets -72 High St, Worcester Central, Worcester, 6850",
    position: { lat: -33.644061, lng: 19.4419402 },
    logo : "https://scrillarewards.co.za/assets/images/TLC-quenet.png"
  },
  {
    id: 2,
    name: "The Local Choice Pharmacy Quenets Langerug",
    address: "The Local Choice Pharmacy Quenets Langerug- Shop 8, Drostdy Centre, Henry Gird St, Hospital Hill, Worcester, 6850",
    position: { lat: -33.6381557, lng: 19.4279878 },
    logo : "https://scrillarewards.co.za/assets/images/TLC-quenet-lan.png"
  }
];

  return (
    <div id="store-finder" className="section-area">
        <div className="container">
          <h2 className="title-pt">Participating Stores</h2>
          <p>Discover a Scrilla participating pharmacy near you and get Fetched!</p>
           <div className="map-container">
              <div className="row">
                <div className="col-md-3">
                    <div className="list-stores">
                        {
                          stores.length > 0 && (
                            <div className="list-stores--inner">
                              {
                                stores.map((store, index) => {
                                  return <div className="card-part" key={index}>
                                            <div className="card-image">
                                              <img src={store.logo} className="logo-sr" /> 
                                            </div> 
                                            <div className="card-body-part">
                                                
                                                <p>{store.address}</p>
                                            </div>      
                                             
                                          </div>
                                })
                              }
                            </div>
                          )
                        }
                    </div>
                </div>
                <div className="col-md-9">
                  <StoreMap stores={stores} />
                </div>
              </div>
           </div>
        </div>
    </div>
  )
}

export default StoreFinder