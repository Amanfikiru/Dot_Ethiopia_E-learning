import React from 'react'
import Title from '../../common/title/Title'
import "./homestart.css"

const Homestart = () => {
  return (
    <>
        <section className="homestart">
            <div className="container">
                <div className="row">
                    <Title subtitle="WELCOME TO DOT ETHIOPIA" title="BEST PLACE FOR TRANING"/>
                    <p>fjbsjfbjdshbfvhsfbvshdbfegshbdjfv</p>
                    <div className="button">
                        <button className="primary-button">
                            GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
                        </button>
                        <button>
                            LOGIN
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <div className="margin"></div>
    </>
  )
}

export default Homestart