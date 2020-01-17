export default ({ onClick, image, index }) => (
  <div className='gallery-image-wrapper' onClick={() => onClick(index)}>
    <div className='gallery-image'>
      <img data-testid='image' src={image} />
    </div>
  </div>
)
