import React from 'react'
import '../../components/style.css'

function MainImage() {
    return (
        <div className="pa3">
            <section
                className="_landingBlcok_ vh-100 dt w-100 "
                style={{
                    backgroundImage: `url("https://images.pexels.com/photos/1109354/pexels-photo-1109354.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="dtc v-mid tc white ph3 ph4-l">
                    <div className="white b f1-l f4-m f5 w-70-l w-70-m w-80 center-l center-m center mb3">
                        your local source of high quality photos and videos directly from their creators
                    </div>
                    <div className="bp3-input-group .modifier w-70-l w-70-m w-80 center">

                        <input
                            className="bp3-input w-10 center pa3"
                            type="search"
                            placeholder="Search Photos and Videos"
                            dir="auto"
                        />
                        <span className="bp3-icon bp3-icon-search"></span>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MainImage
