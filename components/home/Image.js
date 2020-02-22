export default ({ onClick, image, title, alt, index }) => (
  <div className='gallery-image-wrapper' onClick={() => onClick(index)}>
    <div className='gallery-image'>
      <img src={image} title={title} alt={alt} />
    </div>
  </div>
)
