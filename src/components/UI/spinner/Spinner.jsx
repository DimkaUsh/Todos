import './spinner.scss'

const Spinner = () => {
  return (
    <div className="spinner">
      <div className="loading">
        <div className="arc"></div>
        <div className="arc"></div>
        <div className="arc"></div>
      </div>
    </div>
  )
}

export default Spinner