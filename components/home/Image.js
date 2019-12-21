export default ({ onClick, image, index }) => (
  <div className='project-wrapper' onClick={() => onClick(index)}>
    <div className='project'>
      <img src={image} />
    </div>
  </div>
)
