import { useState } from "react";
import { GoHomeFill } from "react-icons/go";

const Home = () => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    jobDescription: '',
    experienceLevel: '',
    candidateEmails: [''], // Initialize with one email input field
    endDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEmailChange = (index, value) => {
    const newEmails = [...formData.candidateEmails];
    newEmails[index] = value; // Update the specific email in the array
    setFormData({
      ...formData,
      candidateEmails: newEmails,
    });
  };

  const addCandidateEmail = () => {
    setFormData({
      ...formData,
      candidateEmails: [...formData.candidateEmails, ''], // Add a new empty email input
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  const [createInterview, setCreateInterview] = useState(false);

  const createInterviewFnc = () => {
    setCreateInterview(true);
  };

  return (
    <>
      <div className='homewrap'>
        <div className='homeleft'>
          <div className='homeicon'>
            <GoHomeFill size={30} color='303030'/>
          </div>
        </div>
        <div className='homeright'>
          {/* Create Interview */}
          {createInterview ? (
            <>
              <div className="jobform">
                <form onSubmit={handleSubmit}>
                  {/* Job Title */}
                  <div className="jobfields">
                    <div><label>Job Title</label></div>
                    <div className="inputwarper jobtitle">
                      <input
                        className='inputfield'
                        type="text"
                        name="jobTitle"
                        placeholder="Enter Job Title"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Job Description */}
                  <div className="jobfields">
                    <div><label>Job Description</label></div>
                    <div className="inputwarper desc">
                      <textarea
                        name="jobDescription"
                        className="inputdesc"
                        placeholder="Enter Job Description"
                        value={formData.jobDescription}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Experience Level */}
                  <div className="jobfields">
                    <div><label>Experience Level:</label></div>
                    <div className="inputwarper explevel">
                      <select
                        name="experienceLevel"
                        className="selection"
                        value={formData.experienceLevel}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Experience Level</option>
                        <option value="entry">Entry Level</option>
                        <option value="mid">Mid Level</option>
                        <option value="senior">Senior Level</option>
                      </select>
                    </div>
                  </div>

                  {/* Candidate Emails - Displayed in the Same Box */}
                  <div className="jobfields">
                    <div><label>Candidate Emails</label></div>
                    <div className="inputwarper cemail">
                      {formData.candidateEmails.map((email, index) => (
                        <input
                          key={index}
                          type="email"
                          name={`candidateEmail-${index}`}
                          className="candidateEmail"
                          placeholder="Enter candidate email"
                          value={email}
                          onChange={(e) => handleEmailChange(index, e.target.value)}
                          
                        />
                      ))}
                      <button type="button" onClick={addCandidateEmail} className="addemailbtn">
                        Add More Email
                      </button>
                    </div>
                  </div>

                  {/* End Date */}
                  <div className="jobfields">
                    <div><label>End Date</label></div>
                    <div className="inputwarper enddate">
                      <input
                        type="date"
                        name="endDate"
                        className="enddd"
                        value={formData.endDate}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <button type="submit" className="send">Send</button>
                </form>
              </div>
            </>
          ) : (
            <button className='interviewbtn' onClick={createInterviewFnc}>Create Interview</button>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
