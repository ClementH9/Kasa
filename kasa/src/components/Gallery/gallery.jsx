import Card from '../../components/Card/card'

function Gallery() {
    return (
      <section className='home__gallery'>
        {logement.map(data => {
          return (
            <Card
              key={data.id} 
              id={data.id} 
              title={data.title} 
              cover={data.cover} 
            />
          )
        })}
      </section>
    )
  }
  
  export default Gallery