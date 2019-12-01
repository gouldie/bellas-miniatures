import './project.css'

export default ({ title, image }) => (
  <div className='project-wrapper'>
    <div className='project'>
      <img src='https://images.ctfassets.net/r920pumuvpph/3c7dJyNYYgorkFLkOgQ15j/cfe4ab8ff7c24b4e93f486abd2158a19/flowerhousetopview.jpeg' />
    </div>
    <div className='project-info'>
      <p>{title}</p>
      <div>
        <i class="fas fa-thumbs-up"></i>
        <span>26</span>
        <i class="fas fa-eye"></i>
        <span>982</span>
      </div>
    </div>
  </div>
)
