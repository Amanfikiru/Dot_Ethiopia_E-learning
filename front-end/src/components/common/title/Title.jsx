import React from 'react'

const Title = ({ subtitle, title }) => {
  return (
    <div>
        <section id='heading'>
            <h3>{subtitle}</h3>
            <h1>{title}</h1>
        </section>
    </div>
  )
}

export default Title