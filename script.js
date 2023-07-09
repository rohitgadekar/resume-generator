var radio = ''
function handleChange() {
  const radioButtons = document.querySelectorAll('input[name="gender"]');
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      radio = radioButton.value;
      break;
    }
  }
}

$(document).ready(() => {
  var education = $(".education_wrapper")
  var achievement = $(".achievement_wrapper")
  var experience = $(".expwrapper")
  var skill = $(".skillwrapper")
  var languages = $(".language_wrapper")
  var socials = $(".socials_wrapper")
  var certificate = $(".certificate_wrapper")

  var education_add = $(".education_add")
  var achievement_add = $(".achievement_add")
  var add = $(".add")
  var skilladd = $(".skilladd")
  var language_add = $(".language_add")
  var socials_add = $(".socials_add")
  var certificate_add = $(".certificate_add")
  var log = $(".log")

  var experienceTrack = 1
  var skillTrack = 1
  var educationTrack = 1
  var languageTrack = 1
  var achievementTrack = 1
  var socialsTrack = 1
  var certificateTrack = 1

  // education block -----------------------------------------------------------
  $(education_add).click(() => {
    if (educationTrack < 10) {
      $(education).append(`
    
    <div class="education">
                <div class="column">
                  <div class="input-box">
                    <label>Degree</label>
                    <input
                      name="degree"
                      type="text"
                      placeholder="Enter qualification"
                      required
                    />
                  </div>
                  <div class="input-box">
                    <label>University/College</label>
                    <input
                      name="university"
                      type="text"
                      placeholder="Enter University/College"
                      required
                    />
                  </div>
                </div>

                <div class="column">
                  <div class="input-box">
                    <label>start Date</label>
                    <input
                      name="education_start_date"
                      type="month"
                      placeholder="Enter birth date"
                      required
                    />
                  </div>
                  <div class="input-box">
                    <label>end Date</label>
                    <input
                      name="education_end_date"
                      type="month"
                      placeholder="Enter birth date"
                      required
                    />
                  </div>
                </div>
                <u class="remove_field">remove field</u>
              </div>
    `)
      ++educationTrack
    }
  })

  $(education).on("click", ".remove_field", function () {
    $(this).parent('div').remove();
    if (educationTrack != 1)
      --educationTrack
    console.log(educationTrack)
  })
  // education block -----------------------------------------------------------



  // achievement block ---------------------------------------------------------

  $(achievement_add).click(() => {
    if (achievementTrack < 10) {
      $(achievement).append(`
      <div class="input-box">
          <label>Details</label>
          <textarea name="achievement_desc" class="is" id="" cols="5" rows="20"></textarea>
          <u class="remove_field">remove field</u>
        </div>
    
    `)
      ++achievementTrack
    }
  })

  $(achievement).on("click", ".remove_field", function () {
    $(this).parent('div').remove();
    if (achievementTrack != 1)
      --achievementTrack
    console.log(achievementTrack)
  })
  // achievement block ---------------------------------------------------------



  // experience block ----------------------------------------------------------

  $(add).click(() => {
    if (experienceTrack < 10) {
      $(experience).append(`
            
           
        <div class="experience">
                <div class="column">
                  <div class="input-box">
                    <label>job title</label>
                    <input name="job" type="text" placeholder="Enter full name" required />
                  </div>
                  <div class="input-box">
                    <label>company</label>
                    <input name="company" type="text" placeholder="Enter email address" required />
                  </div>
                </div>

                <div class="column">
                  <div class="input-box">
                    <label>start Date</label>
                    <input name="exp_start_date" type="month" placeholder="Enter birth date" required />
                      </div>
                        <div class="input-box">
                          <label>end Date</label>
                          <input name="exp_end_date" type="month" placeholder="Enter birth date" required />
                        </div>
                      </div>

                      <div class="input-box">
                        <label>Details</label>
                        <textarea  name="exp_desc" class="is" id="" cols="5" rows="20"></textarea>
                      </div>
                  <u class="remove_field">remove field</u>
              </div>
        
            
            `)
      experienceTrack++
    }
  })

  $(experience).on("click", ".remove_field", function () {
    $(this).parent('div').remove();
    if (experienceTrack != 1)
      --experienceTrack
    console.log(experienceTrack)
  })
  // experience block ----------------------------------------------------------


  // skill block ---------------------------------------------------------------
  $(skilladd).click(() => {
    if (skillTrack < 10) {
      $(skill).append(`
            
          <div class="skill">
            <div class="column">
              <div class="input-box">
                <label>skill</label>
                <input name="skill" type="text" placeholder="Enter skill" required />
              </div>
            </div>
            <u class="remove_field">remove field</u>
          </div>
            `)
      skillTrack++
    }
  })

  $(skill).on("click", ".remove_field", function () {
    $(this).parent('div').remove();
    if (skillTrack != 1)
      --skillTrack
    console.log(skillTrack)
  })
  // skill block ---------------------------------------------------------------

  // language block ------------------------------------------------------------
  $(language_add).click(() => {
    if (languageTrack < 10) {
      $(languages).append(`
    
              <div class="skill">
                <div class="column">
                  <div class="input-box">
                    <label>language</label>
                    <input
                      name="language"
                      type="text"
                      placeholder="Enter language"
                      required
                    />
                  </div>
                </div>
                <u class="remove_field">remove field</u>
              </div>
    `)

      ++languageTrack
    }
  })

  $(languages).on("click", ".remove_field", function () {
    $(this).parent('div').remove();
    if (languageTrack != 1)
      --languageTrack
    console.log(languageTrack)
  })
  // language block ------------------------------------------------------------


  // socials block -------------------------------------------------------------
  $(socials_add).click(() => {
    if (socialsTrack < 10) {
      $(socials).append(`
    
          <div class="skill">
          <div class="column">
            <div class="input-box">
              <label>links</label>
              <input name="socials" type="text" placeholder="Enter links" required />
            </div>
          </div>
          <u class="remove_field">remove field</u>
        </div>
    `)
      ++socialsTrack
    }
  })

  $(socials).on("click", ".remove_field", function () {
    $(this).parent('div').remove();
    if (socialsTrack != 1)
      --socialsTrack
    console.log(socialsTrack)
  })

  // socials block -------------------------------------------------------------


  // certificate block ---------------------------------------------------------

  $(certificate_add).click(() => {
    if (certificateTrack < 10) {
      $(certificate).append(`
      <div class="skill">
          <div class="column">
            <div class="input-box">
              <label>certificates</label>
              <input name="certificate" type="text" placeholder="Enter certificates" required />
            </div>
          </div>
          <u class="remove_field">remove field</u>
        </div>
    `)
      ++certificateTrack
    }
  })

  $(certificate).on("click", ".remove_field", function () {
    $(this).parent('div').remove();
    if (certificateTrack != 1)
      --certificateTrack
    console.log(certificateTrack)
  })

  // certificate block ---------------------------------------------------------



  // validation block ----------------------------------------------------------

  function validation() {
    // personal block
    
    let name = $('.full-name').val()
    let email = $('.email').val()
    let phone = $('.phone').val()
    let dob = $('.dob').val()
    let address = $('#address').val()
    let stree_address = $('.street-address').val()
    let country = $('.country').val()
    let city = $('.city').val()
    let landmark = $('.landmark').val()
    let postal = $('.postal').val()
    let summary = $('.summary').val()
    let title = $('.title').val()
    let personal_error = 0
    if (radio == '')
      radio = 'male'

    if (name == '') {
      document.getElementById('name').style.borderColor = 'red'
      personal_error = 1;
    }
    else if (name != '')
      document.getElementById('name').style.borderColor = 'white'

    if (email == '') {
      document.getElementById('email').style.borderColor = 'red'
      personal_error = 1;
    }
    else if (email != '')
      document.getElementById('email').style.borderColor = 'white'

    if (phone == '') {
      document.getElementById('phone').style.borderColor = 'red'
      personal_error = 1;
    }
    else if (phone != '')
      document.getElementById('phone').style.borderColor = 'white'

    if (dob == '') {
      document.getElementById('dob').style.borderColor = 'red'
      personal_error = 1;
    }
    else if (dob != '')
      document.getElementById('dob').style.borderColor = 'white'

    if (summary == '') {
      document.getElementById('summary').style.borderColor = 'red'
      personal_error = 1;
    }
    else if (summary != '')
      document.getElementById('summary').style.borderColor = 'white'

    if (title == '') {
      document.getElementById('title').style.borderColor = 'red'
      personal_error = 1;
    }
    else if (title != '')
      document.getElementById('title').style.borderColor = 'white'

    if (address == '') {
      document.getElementById('address').style.borderColor = 'red'
      personal_error = 1;
    }
    else if (address != '')
      document.getElementById('address').style.borderColor = 'white'

    if (stree_address == '') {
      document.getElementById('street-address').style.borderColor = 'red'
      personal_error = 1;
    }
    else if (stree_address != '')
      document.getElementById('street-address').style.borderColor = 'white'

    if (country == '') {
      document.getElementById('country').style.borderColor = 'red'
      personal_error = 1;
    }
    else if (country != '')
      document.getElementById('country').style.borderColor = 'white'

    if (city == '') {
      document.getElementById('city').style.borderColor = 'red'
      personal_error = 1;
    }
    else if (city != '')
      document.getElementById('city').style.borderColor = 'white'

    if (landmark == '') {
      document.getElementById('landmark').style.borderColor = 'red'
      personal_error = 1;
    }
    else if (landmark != '')
      document.getElementById('landmark').style.borderColor = 'white'

    if (postal == '') {
      document.getElementById('postal').style.borderColor = 'red'
      personal_error = 1;
    }
    else if (postal != '')
      document.getElementById('postal').style.borderColor = 'white'

    console.log(personal_error)
    // personal block

    // education block
    let degree = []
    let university = []
    let edu_startdate = []
    let edu_enddate = []
    let education_error = 0
    for (let index = 0; index < educationTrack; index++) {

      // targetting values
      degree[index] = (Array.from(document.getElementsByName('degree'))[index].value)
      university[index] = (Array.from(document.getElementsByName('university'))[index].value)
      edu_startdate[index] = (Array.from(document.getElementsByName('education_start_date'))[index].value)
      edu_enddate[index] = (Array.from(document.getElementsByName('education_end_date'))[index].value)

      //checking if input is empty
      for (let j = 0; j < 4; j++) {
        if (degree[index] == '') {
          Array.from(document.getElementsByName('degree'))[index].style.borderColor = 'red'
          education_error = 1
        }
        else if (degree[index] != '')
          Array.from(document.getElementsByName('degree'))[index].style.borderColor = 'white'

        if (university[index] == '') {
          Array.from(document.getElementsByName('university'))[index].style.borderColor = 'red'
          education_error = 1
        }
        else if (university[index] != '')
          Array.from(document.getElementsByName('university'))[index].style.borderColor = 'white'

        if (edu_enddate[index] == '') {
          Array.from(document.getElementsByName('education_end_date'))[index].style.borderColor = 'red'
          education_error = 1
        }
        else if (edu_enddate[index] != '')
          Array.from(document.getElementsByName('education_end_date'))[index].style.borderColor = 'white'

        if (edu_startdate[index] == '') {
          Array.from(document.getElementsByName('education_start_date'))[index].style.borderColor = 'red'
          education_error = 1
        }
        else if (edu_startdate[index] != '')
          Array.from(document.getElementsByName('education_start_date'))[index].style.borderColor = 'white'
      }

    }
    console.log(education_error)

    // education block

    // achievement block
    let achievement = []
    let achievement_error = 0
    for (let index = 0; index < achievementTrack; index++) {
      achievement[index] = (Array.from(document.getElementsByName('achievement_desc'))[index].value)
      if (achievement[index] == '') {
        Array.from(document.getElementsByName('achievement_desc'))[index].style.borderColor = 'red'
        achievement_error = 1
      }
      else if (achievement[index] != '')
      Array.from(document.getElementsByName('achievement_desc'))[index].style.borderColor = 'white'
    }
    console.log(achievement_error)
    // achievement block

    // experience block
    let job = []
    let company = []
    let job_startdate = []
    let job_enddate = []
    let job_desc = []
    let experience_error = 0
    for (let index = 0; index < experienceTrack; index++) {
      job[index] = (Array.from(document.getElementsByName('job'))[index].value)
      company[index] = (Array.from(document.getElementsByName('company'))[index].value)
      job_startdate[index] = (Array.from(document.getElementsByName('exp_start_date'))[index].value)
      job_enddate[index] = (Array.from(document.getElementsByName('exp_end_date'))[index].value)
      job_desc[index] = (Array.from(document.getElementsByName('exp_desc'))[index].value)

      for (let j = 0; j < 5; j++) {
        if (job[index] == '') {
          Array.from(document.getElementsByName('job'))[index].style.borderColor = 'red'
          experience_error = 1
        }
        else if (job[index] != '')
          Array.from(document.getElementsByName('job'))[index].style.borderColor = 'white'

        if (company[index] == '') {
          Array.from(document.getElementsByName('company'))[index].style.borderColor = 'red'
          experience_error = 1
        }
        else if (company[index] != '')
          Array.from(document.getElementsByName('company'))[index].style.borderColor = 'white'

        if (job_startdate[index] == '') {
          Array.from(document.getElementsByName('exp_start_date'))[index].style.borderColor = 'red'
          experience_error = 1
        }
        else if (job_startdate[index] != '')
          Array.from(document.getElementsByName('exp_start_date'))[index].style.borderColor = 'white'

        if (job_enddate[index] == '') {
          Array.from(document.getElementsByName('exp_end_date'))[index].style.borderColor = 'red'
          experience_error = 1
        }
        else if (job_enddate[index] != '')
          Array.from(document.getElementsByName('exp_end_date'))[index].style.borderColor = 'white'

        if (job_desc[index] == '') {
          Array.from(document.getElementsByName('exp_desc'))[index].style.borderColor = 'red'
          experience_error = 1
        }
        else if (job_desc[index] != '')
          Array.from(document.getElementsByName('exp_desc'))[index].style.borderColor = 'white'
      }

    }
    console.log(experience_error)
    // experience block

    // expertise block
    let skills = []
    let skills_error = 0
    for (let index = 0; index < skillTrack; index++) {
      skills[index] = (Array.from(document.getElementsByName('skill'))[index].value)
      if (skills[index] == '') {
        Array.from(document.getElementsByName('skill'))[index].style.borderColor = 'red'
        skills_error = 1
      }
      else if (skills[index] != '')
        Array.from(document.getElementsByName('skill'))[index].style.borderColor = 'white'
    }
    console.log(skills_error)
    // expertise block

    // language block
    let language = []
    let language_error = 0
    for (let index = 0; index < languageTrack; index++) {
      language[index] = (Array.from(document.getElementsByName('language'))[index].value)
      if (language[index] == '') {
        Array.from(document.getElementsByName('language'))[index].style.borderColor = 'red'
        language_error = 1
      }
      else if (language[index] != '')
        Array.from(document.getElementsByName('language'))[index].style.borderColor = 'white'
    }
    console.log(language_error)
    // language block

    // socials block
    let socials = []
    let socials_error = 0
    for (let index = 0; index < socialsTrack; index++) {
      socials[index] = (Array.from(document.getElementsByName('socials'))[index].value)
      if (socials[index] == '') {
        Array.from(document.getElementsByName('socials'))[index].style.borderColor = 'red'
        socials_error = 1
      }
      else if (socials[index] != '')
        Array.from(document.getElementsByName('socials'))[index].style.borderColor = 'white'
    }
    console.log(socials_error)
    // socials block

    // certificate block
    let certificate = []
    let certificate_error = 0
    for (let index = 0; index < certificateTrack; index++) {
      certificate[index] = (Array.from(document.getElementsByName('certificate'))[index].value)
      if (certificate[index] == '') {
        Array.from(document.getElementsByName('certificate'))[index].style.borderColor = 'red'
        certificate_error = 1
      }
      else if (certificate[index] != '')
        Array.from(document.getElementsByName('certificate'))[index].style.borderColor = 'white'
    }
    console.log(certificate_error)
    // certificate block

    if (personal_error == 0 && education_error == 0 && achievement_error == 0 && experience_error == 0 && skills_error == 0 && language_error == 0 && socials_error == 0 && certificate_error == 0) {

      fetch("https://api.jsonbin.io/v3/b/64757de38e4aa6225ea66fdc", {
        method: "PUT",
        body: JSON.stringify({
          personal: [
            { name: name },
            { email: email },
            { phone: phone },
            { dob: dob },
            { title: title },
            { summary: summary },
            { gender: radio },
            { address: address },
            { streetaddress: stree_address },
            { country: country },
            { city: city },
            { landmark: landmark },
            { postal: postal }
          ],

          education: [
            { degree: degree },
            { university: university },
            { start: edu_startdate },
            { end: edu_enddate }

          ],
          achievement: achievement,
          experience: [
            { job: job },
            { company: company },
            { start: job_startdate },
            { end: job_enddate },
            { desc: job_desc }
          ],
          skills: skills,
          language: language,
          socials: socials,
          certificate: certificate
        }),
        headers: { "Content-Type": "application/json" },
        'X-Bin-Versioning': false
      })
        .then(response => response.json()
          .then(json => {
            const key = json.metadata.version;
            console.log(json.metadata.version)
            localStorage.setItem('key', key)
            location.replace('./mobile.html')
          }))


    }


  }

  // validation block ----------------------------------------------------------



  // submit block --------------------------------------------------------------

  $(log).click(() => {
    console.clear()
    validation()

  })

  // submit block --------------------------------------------------------------


  // print block --------------------------------------------------------------


  // print block --------------------------------------------------------------
})
