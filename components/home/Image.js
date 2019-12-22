export default ({ onClick, image, index }) => (
  <div className='gallery-image-wrapper' onClick={() => onClick(index)}>
    <div className='gallery-image'>
      <img src={image} />
    </div>
  </div>
)
