import Card from '../../components/Card/card'
import logement from '../../Assets/logement.json'

function Gallery() {
    return (
      <section className='home-gallery'>
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