function App() {

  return (
    <>
      <div className="container mt-5">
        <h2 >Student Details Form</h2>

        <form onSubmit={(e) => {
          e.preventDefault()
          e.currentTarget.reset()
        }}>

          <div className="mb-3">
            <label htmlFor="FullName" className="form-label">Full Name</label>
            <input type="text" className="form-control" placeholder="Enter your full name" id="FullName"/>
          </div>
          
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input type="email" className="form-control" placeholder="Enter your email" id="email"/>
          </div>
          
          <div className="mb-3">
            <label htmlFor="age" className="form-label">Age</label>
            <input type="number" className="form-control" placeholder="Enter your age" id="age" min={0}/>
          </div>
          
          <div className="mb-3">
            <label htmlFor="grade" className="form-label">Grade</label>
            <select className="form-select" id="grade">
              <option value="9">9th Grade</option>
              <option value="10">10th Grade</option>
              <option value="11">11th Grade</option>
              <option value="12">12th Grade</option>
            </select>
          </div>
          
          <div className="mb-3">
            <label className="form-label">Gender</label>
            <div className="form-check">
              <input type="radio" className="form-check-input" id="male" name="gender"/>
              <label htmlFor="male" className="form-check-label">Male</label>
            </div>
            <div className="form-check">
              <input type="radio" className="form-check-input" id="female" name="gender"/>
              <label htmlFor="female" className="form-check-label">Female</label>
            </div>
            <div className="form-check">
              <input type="radio" className="form-check-input" id="others" name="gender"/>
              <label htmlFor="others" className="form-check-label">Others</label>
            </div>
          </div>
          
          <div>
            <input type="checkbox" className="form-check-input" id="termscheck"/>
            <label htmlFor="termscheck" className="form-check-label ms-2">I agree to terms and conditions</label>
          </div>
        
          <button type="submit" className="btn btn-primary mt-2">Submit</button>
        </form>
      </div>
    </>
  )
}

export default App
